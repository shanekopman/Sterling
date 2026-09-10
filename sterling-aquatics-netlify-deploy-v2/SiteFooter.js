const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", { className: "disclaimer" }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) { return NS[name] || __missing(name); }

const Button = __need("Button");
const Icon = __need("Icon");
const SectionHeading = __need("SectionHeading");
const C = window.SterlingContent;

function CtaBand({ onNavigate }) {
  return (
    <section className="band">
      <div className="wrap band__inner">
        <SectionHeading
          inverse
          size="sm"
          eyebrow="Get started"
          title="Tell us what you need"
          lead={`Lessons for one swimmer, or Standard First Aid + CPR-C for a group. ${C.contact.responseTime}`}
        />
        <div className="row">
          <Button size="lg" variant="inverse" onClick={() => onNavigate("swim-booking")}>Swimming inquiry</Button>
          <Button size="lg" variant="outlineInverse" onClick={() => onNavigate("firstaid-inquiry")}>First Aid inquiry</Button>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNavigate }) {
  const go = (route) => (e) => { e.preventDefault(); onNavigate(route); };
  const columns = C.nav.filter((n) => n.children);
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div className="stack">
            <Wordmark inverse size="lg" onClick={() => onNavigate("home")} />
            <p className="ftr__message">{C.brand.message}</p>
            <p className="note" style={{ color: "var(--sterling-400)", maxWidth: "32ch" }}>
              {C.brand.positioning}
            </p>
            <ul className="ftr__contact">
              <li><a href={C.contact.phoneHref}><Icon name="phone" size={15} /> {C.contact.phone}</a></li>
              <li><a href={C.contact.emailHref}><Icon name="mail" size={15} /> {C.contact.email}</a></li>
            </ul>
          </div>
          {columns.map((col) => (
            <div key={col.id}>
              <h5>{col.label}</h5>
              <ul>
                {col.children.map((child) => (
                  <li key={child.id}><a href="#" onClick={go(child.route)}>{child.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#" onClick={go("about")}>About</a></li>
              <li><a href="#" onClick={go("contact")}>Contact</a></li>
              {C.policies.map((p) => (
                <li key={p.id}><a href="#" onClick={go(p.route)}>{p.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ftr__base">
          <span>© {C.brand.copyright}</span>
          <span className="ftr__policies">
            {C.policies.map((p) => (
              <a key={p.id} href="#" onClick={go(p.route)}>{p.label}</a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer, CtaBand });
