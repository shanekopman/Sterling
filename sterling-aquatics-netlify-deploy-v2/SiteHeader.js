const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", { className: "disclaimer" }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) { return NS[name] || __missing(name); }

const Button = __need("Button");
const IconButton = __need("IconButton");
const Icon = __need("Icon");
const SectionHeading = __need("SectionHeading");
const C = window.SterlingContent;

/**
 * Interim wordmark — the brand name in live type. Name only, everywhere.
 * There is no tagline lockup: "Swim. Rescue. Respond." was retired because
 * Rescue is no longer a Sterling Aquatics service. Where a unifying statement
 * is needed, use the brand message from content/business.js › brand.message.
 * See guidelines/wordmark-usage.md.
 */
function Wordmark({ inverse = false, size = "md", onClick }) {
  return (
    <a
      className={`wordmark wordmark--${size}${inverse ? " wordmark--inverse" : ""}`}
      href="#"
      aria-label={C.brand.name}
      onClick={(e) => { e.preventDefault(); onClick?.(); }}
    >
      <span className="wordmark__name">{C.brand.name}</span>
    </a>
  );
}

/**
 * Nav item with an optional dropdown.
 *
 * Dropdown robustness: the menu is a CHILD of the same .hdr__group element that
 * holds the trigger, and the group carries padding-bottom equal to the menu's
 * offset — so the cursor never leaves the group while travelling from trigger
 * to menu. There is no hover gap to cross. A short close delay additionally
 * covers diagonal exits. Keyboard: the trigger toggles on Enter/Space, arrow-down
 * opens and focuses the first item, Escape closes and returns focus, and the
 * group closes on focus leaving it entirely.
 */
function NavItem({ item, page, onNavigate }) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef(null);
  const groupRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  // Set when ArrowDown opens the menu, so focus moves in only AFTER `open`
  // renders — focusing in a rAF is a no-op while the menu is visibility:hidden.
  const wantFocus = React.useRef(false);

  React.useEffect(() => {
    if (open && wantFocus.current) {
      wantFocus.current = false;
      focusFirstItem();
    }
  }, [open]);

  const active = page === item.route || item.children?.some((c) => c.route === page);

  const cancelClose = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };
  const openNow = () => { cancelClose(); setOpen(true); };
  const focusFirstItem = () => {
    groupRef.current?.querySelector(".hdr__menuitem")?.focus();
  };
  const closeSoon = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 220);
  };
  React.useEffect(() => cancelClose, []);

  if (!item.children) {
    return (
      <button className={`hdr__link${active ? " hdr__link--on" : ""}`} onClick={() => onNavigate(item.route)}>
        {item.label}
      </button>
    );
  }

  const go = (route) => { cancelClose(); setOpen(false); onNavigate(route); };

  const onTriggerKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      // If the menu is already open, `setOpen(true)` is a no-op and the effect
      // never re-runs — so focus directly in that case.
      if (open) focusFirstItem();
      else { wantFocus.current = true; openNow(); }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Index is passed explicitly rather than derived from document.activeElement,
  // which is unreliable mid-transition.
  const onItemKeyDown = (e, i) => {
    const items = Array.from(groupRef.current?.querySelectorAll(".hdr__menuitem") || []);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[Math.min(i + 1, items.length - 1)]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (i <= 0) {
        setOpen(false);
        triggerRef.current?.focus();
      } else {
        items[i - 1]?.focus();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1]?.focus();
    }
  };

  return (
    <div
      className={`hdr__group${open ? " hdr__group--open" : ""}`}
      ref={groupRef}
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onFocus={(e) => {
        // Open only when focus lands inside the menu (e.g. shift-tabbing back
        // into it). The trigger receiving focus must NOT auto-open, or Escape
        // and ArrowUp would immediately reopen what they just closed.
        if (e.target.classList.contains("hdr__menuitem")) openNow();
        else cancelClose();
      }}
      onBlur={(e) => {
        if (!groupRef.current?.contains(e.relatedTarget)) closeSoon();
      }}
    >
      <button
        className={`hdr__link${active ? " hdr__link--on" : ""}`}
        ref={triggerRef}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => onNavigate(item.route)}
        onKeyDown={onTriggerKeyDown}
      >
        {item.label}
        <Icon name="chevron-down" size={14} />
      </button>
      {/* Rendered always, visibility toggled — keeps the hover target stable. */}
      <div className="hdr__menu" role="menu" aria-hidden={!open}>
        {item.children.map((child, i) => (
          <button
            key={child.id}
            className={`hdr__menuitem${page === child.route ? " hdr__menuitem--on" : ""}`}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            onKeyDown={(e) => onItemKeyDown(e, i)}
            onClick={() => go(child.route)}
          >
            {child.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Header({ page, onNavigate }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const goMobile = (route) => { setMobileOpen(false); onNavigate(route); };
  return (
    <header className="hdr">
      <div className="wrap hdr__bar">
        <Wordmark onClick={() => onNavigate("home")} />
        {/* Order: Swimming Lessons → First Aid Training → About → Contact → phone */}
        <nav className="hdr__nav" aria-label="Main">
          {C.nav.map((item) => (
            <NavItem key={item.id} item={item} page={page} onNavigate={onNavigate} />
          ))}
          <a className="hdr__phone" href={C.contact.phoneHref}>
            <Icon name="phone" size={16} />
            {C.contact.phone}
          </a>
        </nav>
        <div className="hdr__actions">
          <a className="hdr__phone hdr__phone--compact" href={C.contact.phoneHref}>
            <Icon name="phone" size={16} />
            {C.contact.phone}
          </a>
          <IconButton
            label={mobileOpen ? "Close menu" : "Menu"}
            className="hdr__burger"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? "x" : "menu"} size={20} />
          </IconButton>
        </div>
      </div>
      {mobileOpen ? (
        <div className="hdr__mobile">
          <div className="wrap">
            {C.nav.map((item) => (
              <div className="hdr__mobilegroup" key={item.id}>
                <button className="hdr__mobilelink" onClick={() => goMobile(item.route)}>{item.label}</button>
                {item.children ? (
                  <div className="hdr__mobilechildren">
                    {item.children.map((child) => (
                      <button key={child.id} className="hdr__mobilechild" onClick={() => goMobile(child.route)}>
                        {child.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <a className="hdr__mobilephone" href={C.contact.phoneHref}>
              <Icon name="phone" size={16} /> {C.contact.phone}
            </a>
            <a className="hdr__mobilephone" href={C.contact.emailHref}>
              <Icon name="mail" size={16} /> {C.contact.email}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

/** Section sub-nav — keeps a visitor inside the Swimming or First Aid journey. */
function SectionNav({ journey, page, onNavigate, label }) {
  return (
    <nav className="subnav" aria-label={label}>
      <div className="wrap subnav__inner">
        {journey.map((step) => (
          <button
            key={step.id}
            className={`subnav__link${page === step.id ? " subnav__link--on" : ""}`}
            aria-current={page === step.id ? "page" : undefined}
            onClick={() => onNavigate(step.id)}
          >
            {step.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

/** Previous / next pathway through a journey. */
function JourneyPager({ journey, page, onNavigate }) {
  const i = journey.findIndex((s) => s.id === page);
  if (i === -1) return null;
  const prev = journey[i - 1];
  const next = journey[i + 1];
  if (!prev && !next) return null;
  return (
    <nav className="pager" aria-label="Section pages">
      <div className="wrap pager__inner">
        {prev ? (
          <button className="pager__link pager__link--prev" onClick={() => onNavigate(prev.id)}>
            <Icon name="arrow-left" size={16} />
            <span className="pager__meta">Previous<strong>{prev.label}</strong></span>
          </button>
        ) : <span />}
        {next ? (
          <button className="pager__link pager__link--next" onClick={() => onNavigate(next.id)}>
            <span className="pager__meta pager__meta--end">Next<strong>{next.label}</strong></span>
            <Icon name="arrow-right" size={16} />
          </button>
        ) : <span />}
      </div>
    </nav>
  );
}

function PageHead({ eyebrow, title, lead, crumbs = [], onNavigate, children }) {
  return (
    <div className="phead">
      <div className="wrap">
        <div className="phead__crumbs">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>Home</a>
          {crumbs.map((c) => (
            <React.Fragment key={c}>
              <Icon name="chevron-right" size={13} />
              <span>{c}</span>
            </React.Fragment>
          ))}
        </div>
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} lead={lead} inverse />
        {children}
      </div>
    </div>
  );
}

Object.assign(window, { Header, Wordmark, PageHead, SectionNav, JourneyPager });
