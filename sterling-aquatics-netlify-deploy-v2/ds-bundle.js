/* @ds-bundle: {"format":4,"namespace":"SterlingAquaticsDesignSystem_6bb49f","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Icon","sourcePath":"components/actions/Icon.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"MediaFrame","sourcePath":"components/content/MediaFrame.jsx"},{"name":"Person","sourcePath":"components/content/Person.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"af9a2b380356","components/actions/Icon.jsx":"c40141dd96a1","components/actions/IconButton.jsx":"1d8fa54b9275","components/content/Badge.jsx":"c646e0ae846d","components/content/Card.jsx":"7762ef076917","components/content/MediaFrame.jsx":"0a9a2b2a6115","components/content/Person.jsx":"8d350543eb98","components/content/SectionHeading.jsx":"f25637e29bec","components/content/Stat.jsx":"86feb08d42ed","components/content/Tag.jsx":"7d323e98cf4a","components/feedback/Dialog.jsx":"7e76fc4bea3b","components/feedback/Toast.jsx":"86c77210e246","components/feedback/Tooltip.jsx":"fe7f18d559e9","components/forms/Checkbox.jsx":"594e9cdcede9","components/forms/Field.jsx":"a578ca59a6fa","components/forms/Input.jsx":"d436cf8c864c","components/forms/Radio.jsx":"57d3873beedc","components/forms/Select.jsx":"4d376a212649","components/forms/Switch.jsx":"b36f169ba87d","components/forms/Textarea.jsx":"9166e6507250","components/navigation/Accordion.jsx":"0b9da7d57ee9","components/navigation/Tabs.jsx":"25c0c338fa89","content/business.js":"7157d5beeb7f","ui_kits/website/About.jsx":"b182ba8f4171","ui_kits/website/FirstAid.jsx":"2d8696f5276c","ui_kits/website/Footer.jsx":"eac598c4bfad","ui_kits/website/Forms.jsx":"59329b22aa2c","ui_kits/website/Header.jsx":"62c8c9a9ee00","ui_kits/website/Home.jsx":"02aa40c8d222","ui_kits/website/Swim.jsx":"5a4362dcbaaf","ui_kits/website/_deferred/Resources.jsx":"a310c25fae86"},"inlinedExternals":[],"unexposedExports":[{"name":"fieldCss","sourcePath":"components/forms/Field.jsx"},{"name":"useFieldCss","sourcePath":"components/forms/Field.jsx"}]} */

(() => {

const __ds_ns = (window.SterlingAquaticsDesignSystem_6bb49f = window.SterlingAquaticsDesignSystem_6bb49f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-btn{--_h:var(--control-h-md);--_fs:var(--fs-body-sm);display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);height:var(--_h);min-height:var(--_h);padding:0 var(--control-pad-x);border:var(--border-w) solid transparent;border-radius:var(--radius-md);font-family:var(--font-body);font-size:var(--_fs);font-weight:var(--fw-semibold);letter-spacing:.005em;line-height:1;text-decoration:none;white-space:nowrap;cursor:pointer;transition:var(--transition-control)}
.sa-btn:focus-visible{outline:var(--focus-w) solid var(--border-focus);outline-offset:var(--focus-offset)}
.sa-btn:active:not(:disabled){transform:var(--press-scale)}
.sa-btn[disabled],.sa-btn[aria-disabled=true]{cursor:not-allowed;opacity:.45;transform:none}
.sa-btn--sm{--_h:var(--control-h-sm);--_fs:var(--fs-caption);padding:0 var(--space-3)}
.sa-btn--lg{--_h:var(--control-h-lg);--_fs:var(--fs-body);padding:0 var(--space-6)}
.sa-btn--block{width:100%}
.sa-btn--primary{background:var(--action-primary);color:var(--text-on-accent);box-shadow:var(--shadow-xs)}
.sa-btn--primary:hover:not(:disabled){background:var(--action-primary-hover);box-shadow:var(--shadow-sm)}
.sa-btn--primary:active:not(:disabled){background:var(--action-primary-active)}
.sa-btn--accent{background:var(--action-accent);color:var(--text-on-accent);box-shadow:var(--shadow-xs)}
.sa-btn--accent:hover:not(:disabled){background:var(--action-accent-hover);box-shadow:var(--shadow-sm)}
.sa-btn--secondary{background:var(--surface-card);color:var(--text-strong);border-color:var(--border-strong)}
.sa-btn--secondary:hover:not(:disabled){border-color:var(--navy-700);background:var(--surface-muted)}
.sa-btn--ghost{background:transparent;color:var(--text-strong)}
.sa-btn--ghost:hover:not(:disabled){background:var(--action-quiet-hover)}
.sa-btn--inverse{background:var(--warm-white);color:var(--navy-900)}
.sa-btn--inverse:hover:not(:disabled){background:#fff}
.sa-btn--outlineInverse{background:transparent;color:var(--text-on-dark);border-color:var(--border-inverse)}
.sa-btn--outlineInverse:hover:not(:disabled){border-color:var(--sterling-300);background:rgba(255,255,255,.07)}
.sa-btn--outlineInverse:focus-visible,.sa-btn--inverse:focus-visible{outline-color:var(--aqua-400)}
.sa-btn--link{height:auto;min-height:0;padding:0;background:none;color:var(--text-link);font-weight:var(--fw-semibold)}
.sa-btn--link:hover:not(:disabled){color:var(--text-link-hover);text-decoration:underline;text-underline-offset:3px}
.sa-btn__icon{display:inline-flex;flex:0 0 auto}
.sa-btn__icon svg{width:1.05em;height:1.05em;stroke-width:1.75}
/* Narrow screens: let a long label wrap to a second line and grow the control
   rather than overflow its container. Height floor keeps the tap target. */
@media (max-width:600px){
.sa-btn{white-space:normal;text-align:center;line-height:1.25;height:auto;min-height:var(--_h);padding-block:var(--space-2)}
.sa-btn--block{width:100%}
}
/* An inline text action still needs a touch-sized hit area on mobile. */
@media (max-width:900px){
.sa-btn--link{min-height:var(--tap-min);padding-block:var(--space-2)}
}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-btn-css")) return;
    const s = document.createElement("style");
    s.id = "sa-btn-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Primary action control. Renders a <button> unless `href` is given. */
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  type = "button",
  className = "",
  ...rest
}) {
  useCss();
  const cls = ["sa-btn", `sa-btn--${variant}`, size !== "md" ? `sa-btn--${size}` : "", block ? "sa-btn--block" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "sa-btn__icon"
  }, iconLeft) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "sa-btn__icon"
  }, iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Icon.jsx
try { (() => {
/**
 * Lucide glyph wrapper. Requires the Lucide UMD script on the page:
 * <script src="https://unpkg.com/lucide@0.474.0/dist/umd/lucide.min.js"></script>
 * Renders a placeholder <i> that Lucide replaces with an inline <svg>.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  className = "",
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const l = typeof window !== "undefined" ? window.lucide : null;
    if (!l || !ref.current) return;
    ref.current.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    ref.current.appendChild(i);
    l.createIcons({
      icons: l.icons,
      attrs: {
        width: size,
        height: size,
        "stroke-width": strokeWidth,
        stroke: color
      },
      nameAttr: "data-lucide",
      root: ref.current
    });
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      flex: "0 0 auto",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-iconbtn{--_s:2.75rem;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;width:var(--_s);height:var(--_s);padding:0;border:var(--border-w) solid transparent;border-radius:var(--radius-md);background:transparent;color:var(--text-body);cursor:pointer;transition:var(--transition-control)}
.sa-iconbtn:hover:not(:disabled){background:var(--action-quiet-hover);color:var(--text-strong)}
.sa-iconbtn:active:not(:disabled){transform:var(--press-scale)}
.sa-iconbtn:focus-visible{outline:var(--focus-w) solid var(--border-focus);outline-offset:var(--focus-offset)}
.sa-iconbtn[disabled]{opacity:.4;cursor:not-allowed}
.sa-iconbtn--sm{--_s:2.25rem;border-radius:var(--radius-sm)}
.sa-iconbtn--lg{--_s:3.25rem}
.sa-iconbtn--outline{border-color:var(--border-default);background:var(--surface-card)}
.sa-iconbtn--outline:hover:not(:disabled){border-color:var(--border-strong)}
.sa-iconbtn--solid{background:var(--action-primary);color:var(--text-on-accent)}
.sa-iconbtn--solid:hover:not(:disabled){background:var(--action-primary-hover);color:var(--text-on-accent)}
.sa-iconbtn--inverse{color:var(--text-on-dark)}
.sa-iconbtn--inverse:hover:not(:disabled){background:rgba(255,255,255,.09);color:#fff}
.sa-iconbtn--round{border-radius:var(--radius-circle)}
.sa-iconbtn svg{width:1.15rem;height:1.15rem;stroke-width:1.75}
.sa-iconbtn--lg svg{width:1.3rem;height:1.3rem}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-iconbtn-css")) return;
    const s = document.createElement("style");
    s.id = "sa-iconbtn-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Square icon-only control. `label` is required for accessibility. */
function IconButton({
  children,
  label,
  variant = "quiet",
  size = "md",
  round = false,
  href,
  disabled = false,
  className = "",
  ...rest
}) {
  useCss();
  const cls = ["sa-iconbtn", `sa-iconbtn--${variant}`, size !== "md" ? `sa-iconbtn--${size}` : "", round ? "sa-iconbtn--round" : "", className].filter(Boolean).join(" ");
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href,
      "aria-label": label,
      title: label
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-badge{display:inline-flex;align-items:center;gap:var(--space-2);height:1.5rem;padding:0 var(--space-3);border-radius:var(--radius-pill);font-family:var(--font-body);font-size:var(--fs-caption);font-weight:var(--fw-semibold);letter-spacing:.01em;white-space:nowrap}
.sa-badge--neutral{background:var(--surface-muted);color:var(--text-body)}
.sa-badge--navy{background:var(--navy-800);color:var(--warm-white)}
.sa-badge--accent{background:var(--status-info-bg);color:var(--status-info-fg)}
.sa-badge--success{background:var(--status-success-bg);color:var(--status-success-fg)}
.sa-badge--warning{background:var(--status-warning-bg);color:var(--status-warning-fg)}
.sa-badge--danger{background:var(--status-danger-bg);color:var(--status-danger-fg)}
.sa-badge--outline{background:transparent;border:var(--border-w) solid var(--border-default);color:var(--text-muted)}
.sa-badge__dot{width:.375rem;height:.375rem;border-radius:var(--radius-circle);background:currentColor}
.sa-badge svg{width:.85rem;height:.85rem}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-badge-css")) return;
    const s = document.createElement("style");
    s.id = "sa-badge-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Small status pill — availability, certification level, "New location". */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  icon,
  className = "",
  ...rest
}) {
  useCss();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `sa-badge sa-badge--${tone} ${className}`.trim()
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "sa-badge__dot"
  }) : null, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-card{display:flex;flex-direction:column;background:var(--surface-card);border:var(--border-w) solid var(--border-hairline);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);transition:var(--transition-surface);overflow:hidden}
.sa-card--flat{box-shadow:none}
.sa-card--sunken{background:var(--surface-sunken);border-color:var(--border-hairline);box-shadow:none}
.sa-card--inverse{background:var(--surface-inverse-2);border-color:var(--border-inverse);color:var(--text-on-dark-muted);box-shadow:none}
.sa-card--inverse .sa-card__title{color:var(--text-on-dark)}
.sa-card--accent{background:var(--surface-accent-soft);border-color:var(--aqua-200);box-shadow:none}
.sa-card--interactive{cursor:pointer;text-decoration:none}
.sa-card--interactive:hover{box-shadow:var(--shadow-md);transform:var(--lift-hover);border-color:var(--border-default)}
.sa-card--interactive:active{transform:none}
.sa-card--interactive:focus-visible{outline:var(--focus-w) solid var(--border-focus);outline-offset:var(--focus-offset)}
.sa-card__body{display:flex;flex-direction:column;gap:var(--space-3);padding:var(--space-6)}
.sa-card__body--md{padding:var(--space-6)}
.sa-card__body--lg{padding:var(--space-8)}
.sa-card__body--sm{padding:var(--space-4)}
.sa-card__eyebrow{font-size:var(--fs-eyebrow);font-weight:var(--fw-semibold);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--text-muted)}
.sa-card--inverse .sa-card__eyebrow{color:var(--aqua-200)}
.sa-card__title{font-family:var(--font-display);font-size:var(--fs-h4);font-weight:var(--fw-bold);letter-spacing:var(--tracking-heading);line-height:var(--lh-heading);color:var(--text-strong);margin:0}
.sa-card__text{font-size:var(--fs-body-sm);line-height:var(--lh-body);color:var(--text-muted);margin:0}
.sa-card--inverse .sa-card__text{color:var(--text-on-dark-muted)}
.sa-card__footer{margin-top:auto;padding-top:var(--space-2);display:flex;align-items:center;gap:var(--space-3)}
.sa-card__icon{display:inline-flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border-radius:var(--radius-md);background:var(--surface-accent-soft);color:var(--aqua-700);margin-bottom:var(--space-1)}
.sa-card--inverse .sa-card__icon{background:rgba(255,255,255,.08);color:var(--aqua-200)}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-card-css")) return;
    const s = document.createElement("style");
    s.id = "sa-card-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Surface container. With `title`/`text` it renders the standard programme-card body. */
function Card({
  children,
  variant = "default",
  padding = "md",
  href,
  interactive = false,
  media,
  icon,
  eyebrow,
  title,
  text,
  footer,
  className = "",
  ...rest
}) {
  useCss();
  const isLink = Boolean(href);
  const cls = ["sa-card", variant !== "default" ? `sa-card--${variant}` : "", interactive || isLink ? "sa-card--interactive" : "", className].filter(Boolean).join(" ");
  const hasBody = eyebrow || title || text || footer || icon || children;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, media, hasBody ? /*#__PURE__*/React.createElement("div", {
    className: `sa-card__body sa-card__body--${padding}`
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "sa-card__icon"
  }, icon) : null, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "sa-card__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title"
  }, title) : null, text ? /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, text) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    className: "sa-card__footer"
  }, footer) : null) : null);
  const Tag = isLink ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href
  }, rest), inner);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/MediaFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-media{position:relative;display:block;overflow:hidden;border-radius:var(--radius-lg);background:var(--wash-navy)}
.sa-media--square{aspect-ratio:1/1}
.sa-media--photo{aspect-ratio:4/3}
.sa-media--wide{aspect-ratio:16/9}
.sa-media--portrait{aspect-ratio:3/4}
.sa-media--hero{aspect-ratio:21/9}
.sa-media--flush{border-radius:0}
.sa-media--fill{height:100%;aspect-ratio:auto}
.sa-media__img{width:100%;height:100%;object-fit:cover;display:block}
.sa-media__scrim{position:absolute;inset:0;background:var(--scrim-photo);pointer-events:none}
.sa-media__slot{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;gap:var(--space-2);padding:var(--space-5);background:var(--wash-navy)}
.sa-media__slot::after{content:"";position:absolute;inset:0;background:var(--wash-sheen);pointer-events:none}
.sa-media__slotlabel{position:relative;font-family:var(--font-body);font-size:var(--fs-eyebrow);font-weight:var(--fw-semibold);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--aqua-200)}
.sa-media__slotnote{position:relative;font-size:var(--fs-caption);line-height:1.5;color:var(--sterling-300);max-width:34ch}
.sa-media__caption{position:absolute;left:0;right:0;bottom:0;padding:var(--space-5);color:var(--warm-white);font-size:var(--fs-body-sm);font-weight:var(--fw-medium)}
.sa-media__frame{position:absolute;inset:0;box-shadow:inset 0 0 0 1px rgba(7,21,35,.10);border-radius:inherit;pointer-events:none}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-media-css")) return;
    const s = document.createElement("style");
    s.id = "sa-media-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/**
 * Photography frame. With `src` it renders a cover-fitted image; without one it
 * renders the navy photo-brief placeholder used until real photography is licensed.
 */
function MediaFrame({
  src,
  alt = "",
  position,
  ratio = "photo",
  scrim = false,
  caption,
  slotLabel = "Photography",
  slotNote,
  flush = false,
  className = "",
  children,
  ...rest
}) {
  useCss();
  const cls = ["sa-media", `sa-media--${ratio}`, flush ? "sa-media--flush" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    className: "sa-media__img",
    src: src,
    alt: alt,
    loading: "lazy",
    decoding: "async",
    style: position ? {
      objectPosition: position
    } : undefined
  }) : /*#__PURE__*/React.createElement("div", {
    className: "sa-media__slot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-media__slotlabel"
  }, slotLabel), slotNote ? /*#__PURE__*/React.createElement("span", {
    className: "sa-media__slotnote"
  }, slotNote) : null), scrim && src ? /*#__PURE__*/React.createElement("span", {
    className: "sa-media__scrim"
  }) : null, caption ? /*#__PURE__*/React.createElement("span", {
    className: "sa-media__caption"
  }, caption) : null, children, /*#__PURE__*/React.createElement("span", {
    className: "sa-media__frame"
  }));
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/Person.jsx
try { (() => {
const CSS = `
.sa-person{display:flex;flex-direction:column;gap:var(--space-5);background:var(--surface-card);border:var(--border-w) solid var(--border-hairline);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);overflow:hidden}
.sa-person--flat{box-shadow:none}
.sa-person--lead{flex-direction:row;align-items:stretch;gap:0}
.sa-person__media{flex:0 0 auto;width:100%}
.sa-person--lead .sa-person__media{width:38%;min-width:14rem}
.sa-person__body{display:flex;flex-direction:column;gap:var(--space-4);padding:var(--space-6)}
.sa-person--lead .sa-person__body{padding:var(--space-8);justify-content:center}
.sa-person__head{display:flex;flex-direction:column;gap:var(--space-1)}
.sa-person__name{font-family:var(--font-display);font-size:var(--fs-h4);font-weight:var(--fw-bold);letter-spacing:var(--tracking-heading);line-height:var(--lh-heading);color:var(--text-strong);margin:0}
.sa-person--lead .sa-person__name{font-size:var(--fs-display-md)}
.sa-person__role{font-size:var(--fs-body-sm);font-weight:var(--fw-medium);color:var(--aqua-700)}
.sa-person__pronouns{font-size:var(--fs-caption);color:var(--text-subtle);font-weight:var(--fw-regular)}
.sa-person__bio{display:flex;flex-direction:column;gap:var(--space-3);margin:0}
.sa-person__bio p{font-size:var(--fs-body-sm);line-height:var(--lh-body);color:var(--text-muted);margin:0}
.sa-person__teaches{display:flex;gap:var(--space-2);flex-wrap:wrap}
.sa-person__quals{display:flex;flex-direction:column;gap:var(--space-4);padding-top:var(--space-4);border-top:var(--rule-w) solid var(--border-hairline)}
.sa-person__qualgroup{display:flex;flex-direction:column;gap:var(--space-2)}
.sa-person__qualhead{display:flex;align-items:center;gap:var(--space-2);font-size:var(--fs-eyebrow);font-weight:var(--fw-semibold);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--text-muted)}
.sa-person__quallist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--space-2)}
.sa-person__quallist li{display:flex;gap:var(--space-3);align-items:flex-start;font-size:var(--fs-body-sm);line-height:1.5;color:var(--text-body)}
.sa-person__qualmark{flex:0 0 auto;width:.375rem;height:.375rem;border-radius:var(--radius-circle);background:var(--aqua-400);margin-top:.5rem}
.sa-person__pending{font-family:var(--font-mono);font-size:11px;line-height:1.5;color:var(--text-subtle);border-left:2px solid var(--sterling-200);padding-left:var(--space-3)}
.sa-person__foot{display:flex;align-items:center;gap:var(--space-4);flex-wrap:wrap;margin-top:auto;padding-top:var(--space-2)}
.sa-person__areas{font-size:var(--fs-caption);color:var(--text-muted);display:inline-flex;align-items:center;gap:var(--space-2)}
@media (max-width:760px){.sa-person--lead{flex-direction:column}.sa-person--lead .sa-person__media{width:100%}.sa-person--lead .sa-person__body{padding:var(--space-6)}}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-person-css")) return;
    const s = document.createElement("style");
    s.id = "sa-person-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}
function QualGroup({
  label,
  icon,
  items,
  pending,
  pendingNote
}) {
  if (!items || items.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sa-person__qualgroup"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-person__qualhead"
  }, icon, label), /*#__PURE__*/React.createElement("ul", {
    className: "sa-person__quallist"
  }, items.map((q, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-person__qualmark"
  }), /*#__PURE__*/React.createElement("span", null, q)))), pending && pendingNote ? /*#__PURE__*/React.createElement("p", {
    className: "sa-person__pending"
  }, pendingNote) : null);
}

/**
 * Instructor / person profile. Qualifications are passed as SEPARATE groups by
 * discipline (swimming instruction / First Aid) so they are never merged into one
 * generic credential list.
 */
function Person({
  name,
  role,
  pronouns,
  bio = [],
  media,
  teaches,
  swimQualifications,
  firstAidQualifications,
  firstAidPending = false,
  pendingNote,
  areas,
  footer,
  variant = "default",
  qualIcons = {},
  className = ""
}) {
  useCss();
  const bioLines = Array.isArray(bio) ? bio : [bio];
  const hasQuals = swimQualifications && swimQualifications.length || firstAidQualifications && firstAidQualifications.length;
  const cls = ["sa-person", variant !== "default" ? `sa-person--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("article", {
    className: cls
  }, media ? /*#__PURE__*/React.createElement("div", {
    className: "sa-person__media"
  }, media) : null, /*#__PURE__*/React.createElement("div", {
    className: "sa-person__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sa-person__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "sa-person__name"
  }, name), role ? /*#__PURE__*/React.createElement("span", {
    className: "sa-person__role"
  }, role, pronouns ? /*#__PURE__*/React.createElement("span", {
    className: "sa-person__pronouns"
  }, " \xB7 ", pronouns) : null) : null), teaches ? /*#__PURE__*/React.createElement("div", {
    className: "sa-person__teaches"
  }, teaches) : null, bioLines.length ? /*#__PURE__*/React.createElement("div", {
    className: "sa-person__bio"
  }, bioLines.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p))) : null, hasQuals ? /*#__PURE__*/React.createElement("div", {
    className: "sa-person__quals"
  }, /*#__PURE__*/React.createElement(QualGroup, {
    label: "Swimming instruction",
    icon: qualIcons.swim,
    items: swimQualifications
  }), /*#__PURE__*/React.createElement(QualGroup, {
    label: "First Aid training",
    icon: qualIcons.firstAid,
    items: firstAidQualifications,
    pending: firstAidPending,
    pendingNote: pendingNote
  })) : null, areas || footer ? /*#__PURE__*/React.createElement("div", {
    className: "sa-person__foot"
  }, areas ? /*#__PURE__*/React.createElement("span", {
    className: "sa-person__areas"
  }, areas) : null, footer) : null));
}
Object.assign(__ds_scope, { Person });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Person.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
const CSS = `
.sa-secthead{display:flex;flex-direction:column;gap:var(--space-4);max-width:var(--measure-wide)}
.sa-secthead--center{align-items:center;text-align:center;margin-inline:auto}
.sa-secthead__eyebrow{display:flex;align-items:center;gap:var(--space-3);font-size:var(--fs-eyebrow);font-weight:var(--fw-semibold);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--text-muted)}
.sa-secthead__eyebrow::before{content:"";width:1.75rem;height:var(--rule-w);background:var(--aqua-500)}
.sa-secthead--center .sa-secthead__eyebrow::before{display:none}
.sa-secthead__title{font-family:var(--font-display);font-size:var(--fs-display-lg);font-weight:var(--fw-bold);letter-spacing:var(--tracking-display);line-height:var(--lh-display);color:var(--text-strong);margin:0;text-wrap:balance}
.sa-secthead--sm .sa-secthead__title{font-size:var(--fs-display-md)}
.sa-secthead__lead{font-size:var(--fs-body-lg);line-height:var(--lh-relaxed);color:var(--text-muted);margin:0;max-width:var(--measure-body)}
.sa-secthead--inverse .sa-secthead__title{color:var(--warm-white)}
.sa-secthead--inverse .sa-secthead__lead{color:var(--text-on-dark-muted)}
.sa-secthead--inverse .sa-secthead__eyebrow{color:var(--aqua-200)}
.sa-secthead--inverse .sa-secthead__eyebrow::before{background:var(--aqua-400)}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-secthead-css")) return;
    const s = document.createElement("style");
    s.id = "sa-secthead-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Eyebrow + heading + lead group that opens every page section. */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "start",
  size = "lg",
  inverse = false,
  as = "h2",
  children,
  className = ""
}) {
  useCss();
  const Heading = as;
  const cls = ["sa-secthead", align === "center" ? "sa-secthead--center" : "", size === "sm" ? "sa-secthead--sm" : "", inverse ? "sa-secthead--inverse" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "sa-secthead__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement(Heading, {
    className: "sa-secthead__title"
  }, title) : null, lead ? /*#__PURE__*/React.createElement("p", {
    className: "sa-secthead__lead"
  }, lead) : null, children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
const CSS = `
.sa-stat{display:flex;flex-direction:column;gap:var(--space-2)}
.sa-stat__value{font-family:var(--font-display);font-size:var(--fs-display-md);font-weight:var(--fw-bold);letter-spacing:var(--tracking-display);line-height:1;color:var(--text-strong)}
.sa-stat__label{font-size:var(--fs-body-sm);color:var(--text-muted);max-width:26ch}
.sa-stat--inverse .sa-stat__value{color:var(--warm-white)}
.sa-stat--inverse .sa-stat__label{color:var(--text-on-dark-muted)}
.sa-stat--ruled{padding-left:var(--space-5);border-left:var(--rule-w) solid var(--border-default)}
.sa-stat--inverse.sa-stat--ruled{border-left-color:var(--border-inverse)}
.sa-stat__unit{font-size:.5em;font-weight:var(--fw-semibold);color:var(--aqua-600);margin-left:.15em;letter-spacing:0}
.sa-stat--inverse .sa-stat__unit{color:var(--aqua-200)}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-stat-css")) return;
    const s = document.createElement("style");
    s.id = "sa-stat-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Numeric proof point — pool locations, instructor ratio, years certified. */
function Stat({
  value,
  unit,
  label,
  inverse = false,
  ruled = false,
  className = ""
}) {
  useCss();
  const cls = ["sa-stat", inverse ? "sa-stat--inverse" : "", ruled ? "sa-stat--ruled" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-stat__value"
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    className: "sa-stat__unit"
  }, unit) : null), /*#__PURE__*/React.createElement("span", {
    className: "sa-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-tag{display:inline-flex;align-items:center;gap:var(--space-2);min-height:2rem;padding:0 var(--space-4);border:var(--border-w) solid var(--border-default);border-radius:var(--radius-pill);background:var(--surface-card);color:var(--text-body);font-family:var(--font-body);font-size:var(--fs-body-sm);font-weight:var(--fw-medium);white-space:nowrap;transition:var(--transition-control)}
.sa-tag--clickable{cursor:pointer;text-decoration:none}
.sa-tag--clickable:hover{border-color:var(--border-strong);background:var(--surface-muted);color:var(--text-strong)}
.sa-tag--selected{background:var(--navy-800);border-color:var(--navy-800);color:var(--warm-white)}
.sa-tag--selected:hover{background:var(--navy-700);border-color:var(--navy-700);color:#fff}
.sa-tag:focus-visible{outline:var(--focus-w) solid var(--border-focus);outline-offset:var(--focus-offset)}
.sa-tag__remove{display:inline-flex;margin-left:2px;margin-right:calc(var(--space-2) * -1);padding:var(--space-1);border:0;background:none;color:inherit;opacity:.6;cursor:pointer;border-radius:var(--radius-circle)}
.sa-tag__remove:hover{opacity:1}
.sa-tag svg{width:.9rem;height:.9rem}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-tag-css")) return;
    const s = document.createElement("style");
    s.id = "sa-tag-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Filter chip / metadata tag. Selectable for location and level filters. */
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  icon,
  href,
  className = "",
  ...rest
}) {
  useCss();
  const clickable = Boolean(onClick || href);
  const cls = ["sa-tag", clickable ? "sa-tag--clickable" : "", selected ? "sa-tag--selected" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    className: "sa-tag__remove",
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l6 6M9 3l-6 6"
  }))) : null);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner);
  if (onClick) return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    "aria-pressed": selected,
    onClick: onClick
  }, rest), inner);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const CSS = `
.sa-dialog__overlay{position:fixed;inset:0;z-index:var(--z-dialog);display:flex;align-items:center;justify-content:center;padding:var(--gutter);background:rgba(7,21,35,.42);backdrop-filter:blur(3px);animation:sa-fade var(--dur-base) var(--ease-out)}
.sa-dialog{position:relative;width:100%;max-width:32rem;max-height:calc(100vh - 4rem);overflow:auto;background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-xl);animation:sa-dialog-in var(--dur-base) var(--ease-entrance)}
.sa-dialog--wide{max-width:44rem}
.sa-dialog__head{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-6);padding:var(--space-8) var(--space-8) var(--space-4)}
.sa-dialog__titles{display:flex;flex-direction:column;gap:var(--space-2)}
.sa-dialog__title{font-family:var(--font-display);font-size:var(--fs-h3);font-weight:var(--fw-bold);letter-spacing:var(--tracking-heading);color:var(--text-strong);margin:0}
.sa-dialog__desc{font-size:var(--fs-body-sm);line-height:var(--lh-body);color:var(--text-muted);margin:0;max-width:48ch}
.sa-dialog__body{padding:0 var(--space-8) var(--space-6);font-size:var(--fs-body-sm);line-height:var(--lh-body);color:var(--text-body)}
.sa-dialog__foot{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:var(--space-3);padding:var(--space-5) var(--space-8);border-top:var(--rule-w) solid var(--border-hairline);background:var(--surface-sunken);border-radius:0 0 var(--radius-xl) var(--radius-xl)}
.sa-dialog__close{position:absolute;top:var(--space-5);right:var(--space-5)}
@keyframes sa-fade{from{opacity:0}to{opacity:1}}
@keyframes sa-dialog-in{from{opacity:0;transform:translateY(8px) scale(.99)}to{opacity:1;transform:none}}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-dialog-css")) return;
    const s = document.createElement("style");
    s.id = "sa-dialog-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Modal panel for booking confirmation, policy detail and short forms. */
function Dialog({
  open = false,
  title,
  description,
  children,
  footer,
  onClose,
  size = "md",
  className = ""
}) {
  useCss();
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sa-dialog__overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: `sa-dialog${size === "wide" ? " sa-dialog--wide" : ""} ${className}`.trim(),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "sa-dialog__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sa-dialog__titles"
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "sa-dialog__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "sa-dialog__desc"
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    "aria-hidden": "true",
    width: "18",
    height: "18"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8"
  }))) : null), children ? /*#__PURE__*/React.createElement("div", {
    className: "sa-dialog__body"
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    className: "sa-dialog__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const CSS = `
.sa-toast{display:flex;align-items:flex-start;gap:var(--space-3);width:100%;max-width:26rem;padding:var(--space-4) var(--space-5);background:var(--surface-inverse);color:var(--warm-white);border-radius:var(--radius-md);box-shadow:var(--shadow-lg);font-size:var(--fs-body-sm);line-height:1.5;animation:sa-toast-in var(--dur-base) var(--ease-entrance)}
.sa-toast--light{background:var(--surface-card);color:var(--text-body);border:var(--border-w) solid var(--border-hairline)}
.sa-toast__mark{flex:0 0 auto;display:grid;place-items:center;width:1.25rem;height:1.25rem;border-radius:var(--radius-circle);margin-top:1px}
.sa-toast--success .sa-toast__mark{background:var(--green-600);color:#fff}
.sa-toast--danger .sa-toast__mark{background:var(--red-600);color:#fff}
.sa-toast--info .sa-toast__mark{background:var(--aqua-500);color:#fff}
.sa-toast__body{display:flex;flex-direction:column;gap:2px}
.sa-toast__title{font-weight:var(--fw-semibold);color:inherit}
.sa-toast__text{opacity:.78}
.sa-toast__action{margin-left:auto;flex:0 0 auto;background:none;border:0;color:var(--aqua-200);font-family:var(--font-body);font-size:var(--fs-caption);font-weight:var(--fw-semibold);cursor:pointer;padding:0}
.sa-toast--light .sa-toast__action{color:var(--text-link)}
.sa-toast__action:hover{text-decoration:underline;text-underline-offset:3px}
.sa-toast__stack{position:fixed;right:var(--gutter);bottom:var(--gutter);z-index:var(--z-toast);display:flex;flex-direction:column;gap:var(--space-3);align-items:flex-end}
@keyframes sa-toast-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-toast-css")) return;
    const s = document.createElement("style");
    s.id = "sa-toast-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}
const MARKS = {
  success: "M2.5 6.2 5 8.7 9.5 3.6",
  danger: "M6 3.2v4.1M6 9.2v.1",
  info: "M6 5.6v3.2M6 3.4v.1"
};

/** Transient confirmation. Wrap several in a fixed stack via `ToastStack`. */
function Toast({
  title,
  children,
  tone = "success",
  action,
  actionLabel,
  light = false,
  className = ""
}) {
  useCss();
  const cls = ["sa-toast", `sa-toast--${tone}`, light ? "sa-toast--light" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-toast__mark"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    width: "12",
    height: "12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: MARKS[tone] || MARKS.info
  }))), /*#__PURE__*/React.createElement("span", {
    className: "sa-toast__body"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "sa-toast__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    className: "sa-toast__text"
  }, children) : null), actionLabel ? /*#__PURE__*/React.createElement("button", {
    className: "sa-toast__action",
    type: "button",
    onClick: action
  }, actionLabel) : null);
}

/** Fixed bottom-right stack for Toasts. */
function ToastStack({
  children
}) {
  useCss();
  return /*#__PURE__*/React.createElement("div", {
    className: "sa-toast__stack"
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const CSS = `
.sa-tip{position:relative;display:inline-flex}
.sa-tip__bubble{position:absolute;z-index:var(--z-overlay);left:50%;transform:translateX(-50%) translateY(2px);bottom:calc(100% + 8px);min-width:max-content;max-width:16rem;padding:var(--space-2) var(--space-3);background:var(--navy-900);color:var(--warm-white);border-radius:var(--radius-sm);font-family:var(--font-body);font-size:var(--fs-caption);line-height:1.45;box-shadow:var(--shadow-md);opacity:0;pointer-events:none;transition:opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)}
.sa-tip__bubble--bottom{bottom:auto;top:calc(100% + 8px)}
.sa-tip--open .sa-tip__bubble{opacity:1;transform:translateX(-50%) translateY(0)}
.sa-tip__arrow{position:absolute;left:50%;bottom:-3px;width:6px;height:6px;background:var(--navy-900);transform:translateX(-50%) rotate(45deg)}
.sa-tip__bubble--bottom .sa-tip__arrow{bottom:auto;top:-3px}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-tip-css")) return;
    const s = document.createElement("style");
    s.id = "sa-tip-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Short clarifier on hover/focus. Never put essential information here alone. */
function Tooltip({
  label,
  side = "top",
  children,
  className = ""
}) {
  useCss();
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    className: `sa-tip${open ? " sa-tip--open" : ""} ${className}`.trim(),
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    className: `sa-tip__bubble${side === "bottom" ? " sa-tip__bubble--bottom" : ""}`,
    role: "tooltip"
  }, label, /*#__PURE__*/React.createElement("span", {
    className: "sa-tip__arrow"
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
const fieldCss = `
.sa-field{display:flex;flex-direction:column;gap:var(--space-2)}
.sa-field__label{font-family:var(--font-body);font-size:var(--fs-body-sm);font-weight:var(--fw-semibold);color:var(--text-strong);letter-spacing:.002em}
.sa-field__req{color:var(--aqua-600);margin-left:2px}
.sa-field__optional{font-weight:var(--fw-regular);color:var(--text-subtle);margin-left:var(--space-2)}
.sa-field__hint{font-size:var(--fs-caption);color:var(--text-muted);line-height:1.5}
.sa-field__error{display:flex;gap:var(--space-2);font-size:var(--fs-caption);color:var(--status-danger-fg);font-weight:var(--fw-medium)}
.sa-input{width:100%;height:var(--control-h-md);padding:0 var(--space-4);border:var(--border-w) solid var(--border-default);border-radius:var(--radius-md);background:var(--surface-card);color:var(--text-strong);font-family:var(--font-body);font-size:var(--fs-body-sm);line-height:1;transition:var(--transition-control);appearance:none}
.sa-input::placeholder{color:var(--text-subtle)}
.sa-input:hover:not(:disabled){border-color:var(--border-strong)}
.sa-input:focus{outline:none;border-color:var(--aqua-500);box-shadow:0 0 0 3px var(--aqua-100)}
.sa-input:disabled{background:var(--surface-muted);color:var(--text-subtle);cursor:not-allowed}
.sa-input--invalid{border-color:var(--status-danger-fg)}
.sa-input--invalid:focus{box-shadow:0 0 0 3px var(--status-danger-bg)}
.sa-input--textarea{height:auto;min-height:7rem;padding:var(--space-3) var(--space-4);line-height:var(--lh-body);resize:vertical}
.sa-input--select{padding-right:var(--space-10);cursor:pointer}
.sa-inputwrap{position:relative;display:flex;align-items:center}
.sa-inputwrap__lead,.sa-inputwrap__chevron{position:absolute;display:flex;align-items:center;color:var(--text-muted);pointer-events:none}
.sa-inputwrap__lead{left:var(--space-4)}
.sa-inputwrap__chevron{right:var(--space-4)}
.sa-inputwrap--lead .sa-input{padding-left:var(--space-10)}
.sa-choice{display:flex;gap:var(--space-3);align-items:flex-start;cursor:pointer;font-size:var(--fs-body-sm);color:var(--text-body);min-height:var(--tap-min);padding-block:var(--space-2)}
.sa-choice input{position:absolute;opacity:0;width:1px;height:1px}
.sa-choice__box{flex:0 0 auto;width:1.15rem;height:1.15rem;margin-top:.1rem;display:grid;place-items:center;border:var(--border-w-strong) solid var(--border-strong);background:var(--surface-card);transition:var(--transition-control)}
.sa-choice__box--check{border-radius:var(--radius-sm)}
.sa-choice__box--radio{border-radius:var(--radius-circle)}
.sa-choice:hover .sa-choice__box{border-color:var(--navy-600)}
.sa-choice input:checked + .sa-choice__box{background:var(--action-primary);border-color:var(--action-primary)}
.sa-choice input:focus-visible + .sa-choice__box{outline:var(--focus-w) solid var(--border-focus);outline-offset:var(--focus-offset)}
.sa-choice input:disabled ~ *{opacity:.45;cursor:not-allowed}
.sa-choice__glyph{width:.7rem;height:.7rem;color:#fff;opacity:0;transition:opacity var(--dur-fast) var(--ease-in-out)}
.sa-choice input:checked + .sa-choice__box .sa-choice__glyph{opacity:1}
.sa-choice__dot{width:.45rem;height:.45rem;border-radius:var(--radius-circle);background:#fff;transform:scale(0);transition:transform var(--dur-fast) var(--ease-out)}
.sa-choice input:checked + .sa-choice__box .sa-choice__dot{transform:scale(1)}
.sa-choice__body{display:flex;flex-direction:column;gap:2px}
.sa-choice__title{font-weight:var(--fw-medium);color:var(--text-strong)}
.sa-choice__desc{font-size:var(--fs-caption);color:var(--text-muted)}
`;
function useFieldCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-field-css")) return;
    const s = document.createElement("style");
    s.id = "sa-field-css";
    s.textContent = fieldCss;
    document.head.appendChild(s);
  }, []);
}

/** Label + hint + error wrapper shared by every form control. */
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  optional = false,
  children,
  className = ""
}) {
  useFieldCss();
  return /*#__PURE__*/React.createElement("div", {
    className: `sa-field ${className}`.trim()
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "sa-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "sa-field__req",
    "aria-hidden": "true"
  }, "*") : null, optional ? /*#__PURE__*/React.createElement("span", {
    className: "sa-field__optional"
  }, "Optional") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "sa-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "sa-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { fieldCss, useFieldCss, Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with optional description line. */
function Checkbox({
  label,
  description,
  id,
  className = "",
  ...rest
}) {
  __ds_scope.useFieldCss();
  const autoId = React.useId();
  const boxId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    className: `sa-choice ${className}`.trim(),
    htmlFor: boxId
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: boxId
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sa-choice__box sa-choice__box--check"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "sa-choice__glyph",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.2 4.6 8.8 10 3.4"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "sa-choice__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-choice__title"
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "sa-choice__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text input with optional leading icon. */
function Input({
  label,
  hint,
  error,
  required = false,
  optional = false,
  id,
  leadingIcon,
  className = "",
  ...rest
}) {
  __ds_scope.useFieldCss();
  const autoId = React.useId();
  const inputId = id || autoId;
  const control = /*#__PURE__*/React.createElement("div", {
    className: `sa-inputwrap${leadingIcon ? " sa-inputwrap--lead" : ""}`
  }, leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "sa-inputwrap__lead"
  }, leadingIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: `sa-input${error ? " sa-input--invalid" : ""} ${className}`.trim(),
    "aria-invalid": error ? true : undefined,
    required: required
  }, rest)));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: inputId,
    hint: hint,
    error: error,
    required: required,
    optional: optional
  }, control);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio option with optional description line. Group them with a shared `name`. */
function Radio({
  label,
  description,
  id,
  className = "",
  ...rest
}) {
  __ds_scope.useFieldCss();
  const autoId = React.useId();
  const radioId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    className: `sa-choice ${className}`.trim(),
    htmlFor: radioId
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: radioId
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sa-choice__box sa-choice__box--radio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-choice__dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "sa-choice__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-choice__title"
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    className: "sa-choice__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CHEVRON = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 16 16",
  width: "14",
  height: "14",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 6.5 8 10.5l4-4"
}));

/** Native select styled to match Input — used for locations, programmes and time slots. */
function Select({
  label,
  hint,
  error,
  required = false,
  optional = false,
  id,
  options = [],
  placeholder,
  children,
  className = "",
  ...rest
}) {
  __ds_scope.useFieldCss();
  const autoId = React.useId();
  const selectId = id || autoId;
  const control = /*#__PURE__*/React.createElement("div", {
    className: "sa-inputwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    className: `sa-input sa-input--select${error ? " sa-input--invalid" : ""} ${className}`.trim(),
    "aria-invalid": error ? true : undefined,
    required: required
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)), children), /*#__PURE__*/React.createElement("span", {
    className: "sa-inputwrap__chevron"
  }, CHEVRON));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: selectId,
    hint: hint,
    error: error,
    required: required,
    optional: optional
  }, control);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-switch{display:inline-flex;align-items:center;gap:var(--space-3);cursor:pointer;font-size:var(--fs-body-sm);color:var(--text-body);min-height:var(--tap-min)}
.sa-switch input{position:absolute;opacity:0;width:1px;height:1px}
.sa-switch__track{position:relative;flex:0 0 auto;width:2.75rem;height:1.5rem;border-radius:var(--radius-pill);background:var(--sterling-200);transition:background-color var(--dur-base) var(--ease-in-out)}
.sa-switch__thumb{position:absolute;top:.1875rem;left:.1875rem;width:1.125rem;height:1.125rem;border-radius:var(--radius-circle);background:var(--paper);box-shadow:var(--shadow-xs);transition:transform var(--dur-base) var(--ease-out)}
.sa-switch input:checked + .sa-switch__track{background:var(--action-accent)}
.sa-switch input:checked + .sa-switch__track .sa-switch__thumb{transform:translateX(1.25rem)}
.sa-switch input:focus-visible + .sa-switch__track{outline:var(--focus-w) solid var(--border-focus);outline-offset:var(--focus-offset)}
.sa-switch input:disabled ~ *{opacity:.45;cursor:not-allowed}
.sa-switch__label{font-weight:var(--fw-medium);color:var(--text-strong)}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-switch-css")) return;
    const s = document.createElement("style");
    s.id = "sa-switch-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Binary toggle for preferences (e.g. "Show semi-private times only"). */
function Switch({
  label,
  id,
  className = "",
  ...rest
}) {
  useCss();
  const autoId = React.useId();
  const switchId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    className: `sa-switch ${className}`.trim(),
    htmlFor: switchId
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    id: switchId
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sa-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", {
    className: "sa-switch__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input for enquiry messages and notes. */
function Textarea({
  label,
  hint,
  error,
  required = false,
  optional = false,
  id,
  rows = 4,
  className = "",
  ...rest
}) {
  __ds_scope.useFieldCss();
  const autoId = React.useId();
  const areaId = id || autoId;
  const control = /*#__PURE__*/React.createElement("textarea", _extends({
    id: areaId,
    rows: rows,
    className: `sa-input sa-input--textarea${error ? " sa-input--invalid" : ""} ${className}`.trim(),
    "aria-invalid": error ? true : undefined,
    required: required
  }, rest));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: areaId,
    hint: hint,
    error: error,
    required: required,
    optional: optional
  }, control);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
const CSS = `
.sa-acc{border-top:var(--rule-w) solid var(--border-hairline)}
.sa-acc__item{border-bottom:var(--rule-w) solid var(--border-hairline)}
.sa-acc__trigger{display:flex;align-items:center;justify-content:space-between;gap:var(--space-6);width:100%;padding:var(--space-5) 0;border:0;background:none;text-align:left;cursor:pointer;font-family:var(--font-display);font-size:var(--fs-h5);font-weight:var(--fw-semibold);letter-spacing:var(--tracking-heading);color:var(--text-strong);transition:color var(--dur-fast) var(--ease-in-out)}
.sa-acc__trigger:hover{color:var(--aqua-700)}
.sa-acc__trigger:focus-visible{outline:var(--focus-w) solid var(--border-focus);outline-offset:var(--focus-offset)}
.sa-acc__sign{position:relative;flex:0 0 auto;width:1.125rem;height:1.125rem;color:var(--aqua-600)}
.sa-acc__sign::before,.sa-acc__sign::after{content:"";position:absolute;background:currentColor;border-radius:1px}
.sa-acc__sign::before{top:50%;left:0;right:0;height:1.5px;transform:translateY(-50%)}
.sa-acc__sign::after{left:50%;top:0;bottom:0;width:1.5px;transform:translateX(-50%) scaleY(1);transition:transform var(--dur-base) var(--ease-out)}
.sa-acc__item--open .sa-acc__sign::after{transform:translateX(-50%) scaleY(0)}
.sa-acc__panel{overflow:hidden;display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--dur-base) var(--ease-out)}
.sa-acc__item--open .sa-acc__panel{grid-template-rows:1fr}
.sa-acc__inner{min-height:0;overflow:hidden}
.sa-acc__body{padding-bottom:var(--space-6);padding-right:var(--space-10);font-size:var(--fs-body-sm);line-height:var(--lh-relaxed);color:var(--text-muted);max-width:var(--measure-body)}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-acc-css")) return;
    const s = document.createElement("style");
    s.id = "sa-acc-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** FAQ / programme-detail disclosure list. One item open at a time unless `multiple`. */
function Accordion({
  items = [],
  defaultOpen = [],
  multiple = false,
  className = ""
}) {
  useCss();
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = id => {
    setOpen(prev => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `sa-acc ${className}`.trim()
  }, items.map(item => {
    const isOpen = open.has(item.id);
    return /*#__PURE__*/React.createElement("div", {
      className: `sa-acc__item${isOpen ? " sa-acc__item--open" : ""}`,
      key: item.id
    }, /*#__PURE__*/React.createElement("button", {
      className: "sa-acc__trigger",
      type: "button",
      "aria-expanded": isOpen,
      onClick: () => toggle(item.id)
    }, /*#__PURE__*/React.createElement("span", null, item.question), /*#__PURE__*/React.createElement("span", {
      className: "sa-acc__sign",
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      className: "sa-acc__panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sa-acc__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sa-acc__body"
    }, item.answer))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const CSS = `
.sa-tabs{display:flex;flex-direction:column;gap:var(--space-6)}
.sa-tabs__list{display:flex;gap:var(--space-6);border-bottom:var(--rule-w) solid var(--border-hairline);overflow-x:auto;scrollbar-width:none}
.sa-tabs__list::-webkit-scrollbar{display:none}
.sa-tabs__tab{position:relative;flex:0 0 auto;padding:var(--space-3) 0 var(--space-4);border:0;background:none;color:var(--text-muted);font-family:var(--font-body);font-size:var(--fs-body-sm);font-weight:var(--fw-semibold);letter-spacing:.005em;cursor:pointer;transition:color var(--dur-fast) var(--ease-in-out)}
.sa-tabs__tab::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--aqua-600);transform:scaleX(0);transform-origin:left;transition:transform var(--dur-base) var(--ease-out)}
.sa-tabs__tab:hover{color:var(--text-strong)}
.sa-tabs__tab[aria-selected=true]{color:var(--text-strong)}
.sa-tabs__tab[aria-selected=true]::after{transform:scaleX(1)}
.sa-tabs__tab:focus-visible{outline:var(--focus-w) solid var(--border-focus);outline-offset:var(--focus-offset)}
.sa-tabs__count{margin-left:var(--space-2);font-weight:var(--fw-regular);color:var(--text-subtle)}
.sa-tabs--pill .sa-tabs__list{gap:var(--space-2);border-bottom:0;background:var(--surface-muted);padding:var(--space-1);border-radius:var(--radius-md);width:fit-content;max-width:100%}
.sa-tabs--pill .sa-tabs__tab{padding:var(--space-2) var(--space-4);border-radius:var(--radius-sm)}
.sa-tabs--pill .sa-tabs__tab::after{display:none}
.sa-tabs--pill .sa-tabs__tab[aria-selected=true]{background:var(--surface-card);box-shadow:var(--shadow-xs)}
.sa-tabs--inverse .sa-tabs__list{border-bottom-color:var(--border-inverse)}
.sa-tabs--inverse .sa-tabs__tab{color:var(--text-on-dark-muted)}
.sa-tabs--inverse .sa-tabs__tab[aria-selected=true]{color:var(--warm-white)}
.sa-tabs--inverse .sa-tabs__tab::after{background:var(--aqua-400)}
.sa-tabs__panel{animation:sa-tab-in var(--dur-base) var(--ease-out)}
@keyframes sa-tab-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
`;
function useCss() {
  React.useEffect(() => {
    if (document.getElementById("sa-tabs-css")) return;
    const s = document.createElement("style");
    s.id = "sa-tabs-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Underlined (default) or pill tab set. Controlled via `value`/`onChange`, or self-managed. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  inverse = false,
  className = ""
}) {
  useCss();
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange?.(id);
  };
  const current = items.find(i => i.id === active);
  const cls = ["sa-tabs", variant === "pill" ? "sa-tabs--pill" : "", inverse ? "sa-tabs--inverse" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "sa-tabs__list",
    role: "tablist"
  }, items.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    className: "sa-tabs__tab",
    type: "button",
    role: "tab",
    "aria-selected": item.id === active,
    onClick: () => select(item.id)
  }, item.label, item.count !== undefined ? /*#__PURE__*/React.createElement("span", {
    className: "sa-tabs__count"
  }, item.count) : null))), current?.content ? /*#__PURE__*/React.createElement("div", {
    className: "sa-tabs__panel",
    role: "tabpanel",
    key: current.id
  }, current.content) : null);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// content/business.js
try { (() => {
/* ============================================================================
   Sterling Aquatics — centralized business content
   ----------------------------------------------------------------------------
   SINGLE SOURCE OF TRUTH for every value that changes as the business changes.
   Screens, components and templates read from here.

   POSITIONING
   A Toronto swimming and First Aid training company with TWO service areas of
   equal standing. Public-facing names are always the full names:
     1. Swimming Lessons
     2. First Aid Training
   Swimming Lessons comes first wherever an order decision is required.

   ONE FIRST AID OFFERING
   Standard First Aid + CPR-C is a SINGLE training offering. "About the Course",
   "Individual Training" and "Group & Workforce Training" are three PATHWAYS into
   that one offering — never three separate courses.

   PUBLISHED CONTENT ONLY — NO PLACEHOLDERS
   Everything in this file is approved for public display. There are no bracketed
   placeholders, no "to be confirmed", no "pending approval", and no internal
   editorial notes rendered anywhere on the site. When a fact is not approved,
   the content and its UI are REMOVED rather than shown as a placeholder.

   DELIBERATELY NOT PUBLISHED (do not add without written approval)
     · Instructor names, biographies, photographs and qualifications
     · Course duration, curriculum, certification issuer or validity
     · Provider status, instructor authorization, certification numbers
     · Any third-party affiliation, endorsement, logo or badge
       (including Lifesaving Society, Canadian Red Cross and OFAI)
     · Insurance, screening or vulnerable-sector-check statements
     · Statistics, testimonials, office hours
     · An interactive map (a Get Directions link is used instead)

   Loaded as a plain script; exposes window.SterlingContent.
   ========================================================================= */

window.SterlingContent = {
  /* ---------------------------------------------------------------- brand */
  brand: {
    name: "Sterling Aquatics",
    /* Shared brand message. Used where a unifying statement is called for.
       NOT part of the wordmark — the wordmark is the name alone. */
    message: "Skills for the water. Confidence for life.",
    positioning: "Personalized swimming lessons and First Aid training for individuals, families and groups in Toronto.",
    region: "Toronto",
    copyright: "Sterling Aquatics · Toronto, Ontario"
  },
  /* -------------------------------------------------------------- contact */
  contact: {
    address: "1110 Bay Street, Toronto, ON M5S 2Y1",
    addressLine: "1110 Bay Street",
    addressLocality: "Toronto, ON M5S 2Y1",
    phone: "647-740-6885",
    phoneHref: "tel:+16477406885",
    email: "sterling.aquatics.ltd@gmail.com",
    emailHref: "mailto:sterling.aquatics.ltd@gmail.com",
    responseTime: "We typically reply within 24 hours."
  },
  /* ---------------------------------------------------------------- forms */
  /* Both inquiry forms submit to NETLIFY FORMS. Each is a separately named
     Netlify form, registered by a matching static definition in
     ui_kits/website/index.html (Netlify's deploy scanner cannot read JSX).
      Submissions are POSTed to `action` as application/x-www-form-urlencoded —
     Netlify Forms does not accept JSON. Notification delivery is configured in
     the Netlify dashboard, so NO credential, API key or password appears in
     this codebase. The customer's email field is named "email" so Netlify sets
     the notification Reply-to correctly.
      The prefilled-email draft is now a FAILURE fallback only; a successful
     submission shows the confirmation message. */
  forms: {
    action: "/",
    netlifyForms: {
      swim: {
        name: "swimming-lessons-inquiry",
        subject: "New Swimming Lessons Inquiry"
      },
      firstAid: {
        name: "first-aid-training-inquiry",
        subject: "New First Aid Training Inquiry"
      }
    },
    honeypot: "bot-field",
    deliverTo: "sterling.aquatics.ltd@gmail.com",
    processor: "Netlify Forms",
    integrationNote: "Both forms submit to Netlify Forms as url-encoded data. Netlify stores the submissions and emails the address configured in the Netlify dashboard; no credential lives in this codebase. If a submission fails, the visitor is offered a prefilled email to sterling.aquatics.ltd@gmail.com as a fallback.",
    reassurance: "No payment today"
  },
  /* -------------------------------------------------------------- booking */
  booking: {
    calendlyUrl: null,
    calendlyNote: "Online booking is coming. For now, lessons and training are arranged through the inquiry form.",
    ctaSwimInquiry: "Submit an inquiry",
    ctaFirstAidInquiry: "Submit an inquiry",
    ctaFirstAidExplore: "Explore First Aid training",
    ctaIndividual: "Inquire about individual training",
    ctaGroup: "Request group training"
  },
  /* --------------------------------------------------------------- pillars */
  pillars: [{
    id: "swim",
    name: "Swimming Lessons",
    route: "swim",
    icon: "waves",
    title: "Private & semi-private swimming lessons",
    summary: "One-to-one and paired instruction covering water confidence, stroke development, technique and personal water safety — for children and adults.",
    audience: "For children, adults and families",
    cta: "Swimming lessons",
    ctaSecondary: "Submit an inquiry",
    photoKey: "swim"
  }, {
    id: "firstaid",
    name: "First Aid Training",
    route: "firstaid",
    icon: "heart-pulse",
    title: "Standard First Aid + CPR-C",
    summary: "One training offering, arranged for individuals or for groups, workplaces and organisations across the Greater Toronto Area.",
    audience: "For individuals, workplaces and groups",
    cta: "Explore First Aid training",
    ctaSecondary: "Submit a First Aid inquiry",
    photoKey: "firstAid"
  }],
  /* ------------------------------------------------------------ navigation */
  nav: [{
    id: "swim",
    label: "Swimming Lessons",
    route: "swim",
    children: [{
      id: "swim-overview",
      label: "Swimming Lessons / Overview",
      route: "swim"
    }, {
      id: "swim-locations",
      label: "Locations",
      route: "swim-locations"
    }, {
      id: "swim-pricing",
      label: "Pricing",
      route: "swim-pricing"
    }, {
      id: "swim-booking",
      label: "Booking",
      route: "swim-booking"
    }]
  }, {
    id: "firstaid",
    label: "First Aid Training",
    route: "firstaid",
    children: [{
      id: "fa-about",
      label: "About the Course",
      route: "firstaid"
    }, {
      id: "fa-individual",
      label: "Individual Training",
      route: "firstaid-individual"
    }, {
      id: "fa-group",
      label: "Group & Workforce Training",
      route: "firstaid-group"
    }]
  }, {
    id: "about",
    label: "About",
    route: "about"
  }, {
    id: "contact",
    label: "Contact",
    route: "contact"
  }],
  /* Swimming Lessons journey — Our Instructors is intentionally absent. */
  swimJourney: [{
    id: "swim",
    label: "Overview"
  }, {
    id: "swim-locations",
    label: "Locations"
  }, {
    id: "swim-pricing",
    label: "Pricing"
  }, {
    id: "swim-booking",
    label: "Booking"
  }],
  firstAidJourney: [{
    id: "firstaid",
    label: "About the Course"
  }, {
    id: "firstaid-individual",
    label: "Individual Training"
  }, {
    id: "firstaid-group",
    label: "Group & Workforce Training"
  }],
  /* ------------------------------------------------------- home messaging */
  home: {
    headline: "Skills for the water. Confidence for life.",
    lead: "Sterling Aquatics provides personalized swimming lessons and First Aid training for individuals, families and groups in Toronto.",
    pillarsEyebrow: "Two services, one standard",
    pillarsTitle: "Swimming instruction and First Aid training",
    pillarsLead: "One team for water skills and emergency response — so families, adult swimmers and employers work with the same instructors.",
    stepsTitle: "How it works",
    steps: [{
      id: "s1",
      n: "01",
      title: "Tell us what you need",
      text: "Lessons for one swimmer, or Standard First Aid + CPR-C for a group. Two minutes, no account required."
    }, {
      id: "s2",
      n: "02",
      title: "We reply within 24 hours",
      text: "We confirm availability and arrange a time that works, then send the details you need before your first session."
    }, {
      id: "s3",
      n: "03",
      title: "Train, review, progress",
      text: "After the initial lesson we develop a plan for ongoing lessons based on your current ability, goals and progress."
    }]
  },
  /* --------------------------------------------------- FIRST AID TRAINING */
  firstAid: {
    courseName: "Standard First Aid + CPR-C",
    eyebrow: "First Aid Training",
    title: "Standard First Aid + CPR-C",
    lead: "Sterling Aquatics offers Standard First Aid + CPR-C as one combined training offering. Arrange it for yourself or for a group.",
    combinedNote: "Standard First Aid and CPR-C are not separate offerings here. They are taught together as one course.",
    aboutIntro: "This page explains what the training is and who tends to take it. We confirm the specific arrangements with you directly before you commit.",
    whoFor: [{
      id: "w1",
      title: "Individuals",
      icon: "user",
      text: "People who need Standard First Aid + CPR-C for work, study, volunteering or their own preparedness."
    }, {
      id: "w2",
      title: "Workplaces & organisations",
      icon: "briefcase",
      text: "Employers arranging Standard First Aid + CPR-C for staff, with training delivered for the group together."
    }, {
      id: "w3",
      title: "Teams & community groups",
      icon: "users",
      text: "Clubs, teams, community organisations and other groups arranging the training for their members."
    }],
    individual: {
      eyebrow: "Individual Training",
      title: "Standard First Aid + CPR-C for individuals",
      lead: "The same Standard First Aid + CPR-C training, arranged for one person. Tell us what you need and we'll confirm the details with you.",
      sameCourseNote: "This is the same Standard First Aid + CPR-C training offered to groups — not a separate course.",
      schedulingNote: "There is no online course calendar. Submit an inquiry and we'll confirm available dates with you directly."
    },
    group: {
      eyebrow: "Group & Workforce Training",
      title: "Standard First Aid + CPR-C for groups and workplaces",
      lead: "The same Standard First Aid + CPR-C training, arranged for multiple participants — for businesses, workplaces, organisations, teams and community groups.",
      sameCourseNote: "This is the same Standard First Aid + CPR-C training offered to individuals — not a separate course.",
      audiences: ["Businesses", "Workplaces", "Organisations", "Teams", "Community groups"],
      pricingNote: "Group arrangements are quoted after we understand the group size, location and timing."
    },
    serviceArea: "Standard First Aid + CPR-C training is arranged across the Greater Toronto Area.",
    faqIds: ["fa1", "fa2", "fa3"]
  },
  /* ------------------------------------------------- SWIMMING LESSONS */
  swim: {
    eyebrow: "Swimming Lessons",
    title: "Private & semi-private swimming lessons",
    lead: "One-to-one and paired instruction for children, adults, beginners and experienced swimmers in downtown Toronto.",
    lessonLength: "45 to 60 minutes",
    formats: [{
      id: "private",
      label: "Private lessons",
      blurb: "One swimmer, one instructor for the full lesson.",
      points: ["One swimmer, one instructor for the full lesson", "A plan built around your goals — water confidence, stroke work or technique", "Lessons of 45 to 60 minutes", "Cancel or reschedule without penalty with at least 24 hours' notice"]
    }, {
      id: "semi",
      label: "Semi-private lessons",
      blurb: "Two swimmers who register together share one instructor.",
      points: ["Two swimmers who register together — you arrange both participants", "Same instructor and lesson plan for both swimmers", "Lower cost per swimmer than a private lesson", "60-minute lessons"]
    }, {
      id: "adult",
      label: "Adult lessons",
      blurb: "Private instruction for adults, including first-time swimmers.",
      points: ["First-time swimmers welcome — no prior experience assumed", "Breathing, floating and comfort in deep water", "Stroke correction for triathlon and open-water goals", "Ontario Fire Administration Inc. (OFAI) swim test training"]
    }],
    /* Plain-language focus areas — not levels, not an award structure. */
    focusAreas: [{
      id: "fa-comfort",
      title: "Water comfort",
      text: "Entries and exits, floating, breath control and confidence in shallow water.",
      who: "First-time swimmers of any age"
    }, {
      id: "fa-independent",
      title: "Independent swimming",
      text: "Swimming unassisted over a short distance, treading water and deep-water confidence.",
      who: "Swimmers building independence"
    }, {
      id: "fa-strokes",
      title: "Stroke development",
      text: "Front crawl, back crawl and breaststroke fundamentals, with kick and breathing timing.",
      who: "Swimmers ready for formal strokes"
    }, {
      id: "fa-technique",
      title: "Technique & endurance",
      text: "Stroke refinement, turns, pacing and continuous swimming.",
      who: "Experienced swimmers and adult goal-setters"
    }, {
      id: "fa-safety",
      title: "Personal water safety",
      text: "Self-rescue, judgement around water and safe habits at pools, cottages and beaches.",
      who: "Every swimmer, at every stage"
    }],
    /* Lesson experience — approved copy. */
    experience: [{
      id: "x1",
      title: "Before your lesson",
      text: "Please arrive five minutes before your scheduled lesson at Sterling Aquatics, 1110 Bay Street, Toronto.",
      icon: "clock"
    }, {
      id: "x2",
      title: "Initial assessment",
      text: "At the beginning of your first lesson, we assess your current swimming ability and discuss your goals and past experience in the water.",
      icon: "clipboard-check"
    }, {
      id: "x3",
      title: "Lesson structure",
      text: "The full lesson is taught in the water using appropriate swimming aids when needed.",
      icon: "waves"
    }, {
      id: "x4",
      title: "Ongoing lesson plan",
      text: "After the initial lesson, we develop a plan for ongoing lessons based on your current ability, goals and progress.",
      icon: "trending-up"
    }],
    abilityOptions: ["First time in a pool", "Comfortable in shallow water", "Swims independently", "Refining stroke technique"],
    availabilityOptions: ["Weekday mornings", "Weekday afternoons", "Weekday evenings", "Saturday", "Sunday"],
    faqIds: ["sw1", "sw2", "sw3", "sw4", "sw5", "sw6", "sw7"]
  },
  /* -------------------------------------------------------------- pricing */
  pricing: {
    eyebrow: "Pricing",
    title: "Lesson pricing",
    lead: "Private and semi-private lessons are available individually or as an eight-lesson package. Semi-private prices are for two swimmers together.",
    individual: [{
      id: "p45",
      label: "45-minute private lesson",
      detail: "One swimmer with one instructor",
      price: "$65"
    }, {
      id: "p60",
      label: "60-minute private lesson",
      detail: "One swimmer with one instructor",
      price: "$80"
    }, {
      id: "s60",
      label: "60-minute semi-private lesson",
      detail: "Two swimmers with one instructor",
      price: "$100"
    }],
    packages: [{
      id: "k45",
      label: "Eight 45-minute private lessons",
      detail: "One swimmer with one instructor",
      price: "$500",
      saving: "Saves $20"
    }, {
      id: "k60",
      label: "Eight 60-minute private lessons",
      detail: "One swimmer with one instructor",
      price: "$600",
      saving: "Saves $40"
    }, {
      id: "ks60",
      label: "Eight 60-minute semi-private lessons",
      detail: "Two swimmers with one instructor",
      price: "$760",
      saving: "Saves $40"
    }],
    semiPrivateNote: "Semi-private lessons are for two swimmers who register together. Sterling Aquatics does not match swimmers — please arrange both participants before booking.",
    firstAidNote: "Standard First Aid + CPR-C is quoted per inquiry — for individuals and for groups alike — once we know the participants, location and timing."
  },
  /* --------------------------------------------------- cancellation policy */
  cancellation: {
    heading: "Cancellation and Rescheduling Policy",
    short: "Cancel or reschedule without penalty with at least 24 hours' notice.",
    policy: "Lessons may be cancelled or rescheduled without penalty when at least 24 hours' notice is provided. Cancellations or rescheduling requests made less than 24 hours before the scheduled lesson are charged the full lesson fee.",
    howTo: "To cancel or reschedule, call 647-740-6885 or email sterling.aquatics.ltd@gmail.com as early as you can."
  },
  /* ------------------------------------------------------------- about us */
  about: {
    eyebrow: "About",
    title: "Building Confidence and Safer Communities Through Education",
    lead: "Sterling Aquatics provides personalized swimming lessons and First Aid training for individuals, families and groups in Toronto. Our goal is to help people develop practical skills, greater confidence and a stronger foundation for safety.",
    storyEyebrow: "Our story",
    storyTitle: "Where Sterling Aquatics started",
    story: ["Sterling Aquatics began with a commitment to promoting water safety and empowering swimmers of all ages to feel confident in the water. Through personalized instruction, we help each swimmer develop practical skills at a pace that reflects their experience, comfort level and goals.", "Our work in swimming instruction highlighted the broader importance of safety education. That experience led Sterling Aquatics to expand into First Aid training, allowing us to support individuals, groups and the next generation of instructors with practical skills that can make a meaningful difference in their communities."]
  },
  /* --------------------------------------------------------------- privacy */
  privacy: {
    heading: "Privacy Policy",
    lead: "This policy explains what Sterling Aquatics collects through this website, why we collect it, and how to reach us about your information.",
    sections: [{
      id: "pv1",
      title: "What the inquiry forms collect",
      body: "Our inquiry forms ask for your name, email address and, optionally, your phone number, along with details about the lessons or training you're asking about — such as the participant, their swimming ability, your preferred times, or the size and location of a group."
    }, {
      id: "pv2",
      title: "Why we collect it",
      body: "We use this information to respond to your inquiry and to arrange lessons or training. Details about ability, goals and availability help us plan a suitable session before you commit."
    }, {
      id: "pv3",
      title: "How we use it",
      body: "We use your email address and phone number to reply to your inquiry and to communicate about your booking. We do not sell your personal information."
    }, {
      id: "pv4",
      title: "Who processes and stores form submissions",
      body: "This website is hosted on Netlify, and our inquiry forms use Netlify Forms. When you submit a form, Netlify processes and stores your submission on our behalf and forwards it to us by email. Netlify may also record technical details such as your IP address and the time of submission as part of its spam filtering. If we connect a booking or scheduling service in future, that provider may process the information you give it in order to arrange your session. We only use services needed to receive and respond to inquiries."
    }, {
      id: "pv5",
      title: "Access, correction and deletion",
      body: "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Email sterling.aquatics.ltd@gmail.com or call 647-740-6885 and we'll respond within a reasonable time."
    }, {
      id: "pv6",
      title: "Contact us about privacy",
      body: "For any question about this policy or your information, email sterling.aquatics.ltd@gmail.com or call 647-740-6885."
    }]
  },
  /* --------------------------------------------------------- accessibility */
  accessibility: {
    heading: "Accessibility",
    lead: "Sterling Aquatics is committed to providing clear information and a welcoming experience for customers and spectators.",
    statement: "The facility at 1110 Bay Street is accessible for parents, guardians and other spectators attending to watch a lesson; however, the swimming pool itself is not wheelchair accessible. If you have an accessibility requirement or would like to discuss a possible accommodation, please contact us before booking.",
    points: [{
      id: "ac1",
      title: "Spectator access",
      text: "The facility is accessible to spectators, including parents or guardians attending to watch a child swim.",
      icon: "users"
    }, {
      id: "ac2",
      title: "Pool access",
      text: "The swimming pool itself is not wheelchair accessible.",
      icon: "info"
    }, {
      id: "ac3",
      title: "Talk to us first",
      text: "Customers are encouraged to contact us before booking to discuss accessibility requirements or accommodations.",
      icon: "phone"
    }, {
      id: "ac4",
      title: "Clear communication",
      text: "We will make reasonable efforts to provide clear communication and support an accessible customer experience where possible.",
      icon: "message-circle"
    }]
  },
  /* ------------------------------------------------------------- location */
  /* One location, address published. No embedded map — a Get Directions link
     hands off to Google Maps instead. `mapProvider: null` keeps the
     architecture map-capable if an embedded map is wanted later. */
  locationsEyebrow: "Locations",
  locationsTitle: "Where lessons take place",
  locationsIntro: "Swimming lessons take place at Sterling Aquatics, 1110 Bay Street, Toronto. Lessons are by appointment only.",
  appointmentNote: "By appointment only",
  directionsLabel: "Get Directions",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=1110+Bay+Street%2C+Toronto%2C+ON+M5S+2Y1",
  mapProvider: null,
  locations: [{
    id: "bay-street",
    name: "Sterling Aquatics",
    addressLine: "1110 Bay Street",
    addressLocality: "Toronto, ON M5S 2Y1",
    addressFull: "1110 Bay Street, Toronto, ON M5S 2Y1",
    appointment: "By appointment only",
    lessonTypes: "Private · Semi-private",
    photoKey: "pool",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=1110+Bay+Street%2C+Toronto%2C+ON+M5S+2Y1"
  }],
  /* ------------------------------------------------------------ policies */
  policies: [{
    id: "cancellation",
    label: "Cancellation Policy",
    route: "cancellation"
  }, {
    id: "privacy",
    label: "Privacy Policy",
    route: "privacy"
  }, {
    id: "accessibility",
    label: "Accessibility",
    route: "accessibility"
  }],
  /* ------------------------------------------------------------------ FAQ */
  faqs: [{
    id: "sw1",
    section: "Swimming Lessons",
    question: "How long is a swimming lesson?",
    answer: "Lessons run 45 to 60 minutes. Private lessons are available in both lengths; semi-private lessons are 60 minutes."
  }, {
    id: "sw2",
    section: "Swimming Lessons",
    question: "What is the difference between private and semi-private lessons?",
    answer: "Private lessons are one swimmer with one instructor. Semi-private lessons are two swimmers with one instructor, booked together and sharing the same lesson plan."
  }, {
    id: "sw3",
    section: "Swimming Lessons",
    question: "Do you match swimmers for semi-private lessons?",
    answer: "No. Sterling Aquatics does not match swimmers. If you would like a semi-private lesson, please arrange both participants yourself before booking."
  }, {
    id: "sw4",
    section: "Swimming Lessons",
    question: "Where do lessons take place?",
    answer: "Lessons take place at Sterling Aquatics, 1110 Bay Street, Toronto, ON M5S 2Y1."
  }, {
    id: "sw5",
    section: "Swimming Lessons",
    question: "Do I need an appointment?",
    answer: "Yes. Sterling Aquatics operates by appointment only, so please arrange your lesson before visiting."
  }, {
    id: "sw6",
    section: "Swimming Lessons",
    question: "How early should I arrive?",
    answer: "Please arrive five minutes before your scheduled lesson at Sterling Aquatics, 1110 Bay Street, Toronto."
  }, {
    id: "sw7",
    section: "Swimming Lessons",
    question: "What is your cancellation and rescheduling policy?",
    answer: "Lessons may be cancelled or rescheduled without penalty when at least 24 hours' notice is provided. Cancellations or rescheduling requests made less than 24 hours before the scheduled lesson are charged the full lesson fee."
  }, {
    id: "fa1",
    section: "First Aid Training",
    question: "Is Standard First Aid and CPR-C one course or two?",
    answer: "One. Sterling Aquatics offers Standard First Aid + CPR-C as a single combined training offering. There is no separate CPR-only or First Aid-only course."
  }, {
    id: "fa2",
    section: "First Aid Training",
    question: "What is the difference between Individual and Group & Workforce training?",
    answer: "Only how it is arranged. Both are the same Standard First Aid + CPR-C training. Individual Training is for one person; Group & Workforce Training is for multiple participants from a business, workplace, organisation, team or community group."
  }, {
    id: "fa3",
    section: "First Aid Training",
    question: "How do I arrange First Aid training?",
    answer: "Submit a First Aid inquiry telling us whether it is for an individual or a group, roughly how many participants, and your preferred location and timeframe. We typically reply within 24 hours."
  }],
  /* ----------------------------------------------------------- photography */
  /* Real, locally bundled assets in assets/photography/. Alt text describes only
     what is visible — it makes no claim about the people, facility, business or
     any certification shown. */
  images: {
    pool: {
      src: "assets/photography/indoor-pool-lane-ladder.png",
      alt: "A calm indoor swimming pool with lane ropes and a stainless steel ladder at the pool edge.",
      position: "center 60%"
    },
    swim: {
      src: "assets/photography/adults-swimming-lesson-in-water.png",
      alt: "Three adults in a swimming pool during an in-water lesson, holding flotation aids.",
      position: "center 35%"
    },
    firstAid: {
      src: "assets/photography/cpr-practice-manikin-aed.png",
      alt: "Hands performing chest compressions on a CPR training manikin beside an AED training unit.",
      position: "center 50%"
    },
    firstAidGroup: {
      src: "assets/photography/group-first-aid-cpr-training.png",
      alt: "Group gathered around a CPR training manikin during a First Aid demonstration.",
      /* Subject sits low-centre; hold the frame there so the manikin and the
         kneeling participants stay in shot when the crop tightens. */
      position: "50% 62%"
    }
  },
  /* ==================================================================== */
  /* DEFERRED — not on the live site                                       */
  /* ==================================================================== */
  /* Resources is intentionally NOT in `nav` and renders nowhere. The content
     architecture is retained here so it can be reinstated without rebuilding.
      ── REMINDER ────────────────────────────────────────────────────────────
     Reconsider adding a Resources / educational content section back to the
     Sterling Aquatics website later — particularly for SEO, First Aid
     information, swimming education, FAQs and helpful customer content.
     To reinstate: add { id: "resources", label: "Resources", route: "resources" }
     to `nav` before the About entry, and re-register the Resources screen in
     ui_kits/website/index.html. The screen component is retained at
     ui_kits/website/_deferred/Resources.jsx.
     ──────────────────────────────────────────────────────────────────────
      Also deferred: "Our Instructors" (Swimming Lessons journey step and page).
     Removed from nav, swimJourney and the route table pending approved
     instructor names, biographies, photographs and qualifications. Re-add a
     { id: "swim-instructors", label: "Our Instructors" } entry to swimJourney
     and nav.children when that content is confirmed.
  */
  deferred: {
    resources: {
      status: "deferred",
      eyebrow: "Resources",
      title: "Water safety and first aid, explained",
      lead: "Practical guidance on swimming progression, water safety and first aid.",
      articles: [],
      seoClusters: [{
        id: "firstaid",
        intents: ["standard first aid + CPR-C Toronto", "workplace standard first aid + CPR-C training", "group first aid + CPR-C training", "corporate first aid training Toronto"]
      }, {
        id: "swim",
        intents: ["private swimming lessons Toronto", "semi-private swimming lessons", "adult swimming lessons", "kids swimming lessons", "swimming lessons near me"]
      }, {
        id: "areas",
        intents: ["neighbourhood-specific swimming lesson searches"],
        rule: "One page per area only where instructor, availability and lesson types genuinely differ. Never a template swap on a place name."
      }],
      seoRules: ["One substantial page per intent cluster; no thin near-duplicate location pages.", "Never keyword-stuff — headlines stay plain and human.", "FAQ blocks answer real questions in full sentences.", "Resources articles carry the long-tail; service pages carry commercial intent."]
    },
    instructors: {
      status: "deferred",
      reason: "Instructor names, biographies, photographs and qualifications are not published. Re-add the Our Instructors journey step and page when that content is approved."
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "content/business.js", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", {
      className: "disclaimer"
    }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) {
  return NS[name] || __missing(name);
}
const Button = __need("Button");
const Card = __need("Card");
const MediaFrame = __need("MediaFrame");
const SectionHeading = __need("SectionHeading");
const Icon = __need("Icon");
const C = window.SterlingContent;

/* Instructor names, biographies, photographs and qualifications are NOT
   published. This page carries the story and the two services only — no
   statistics, no team section, no credential or compliance statements. */
function About({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["About"],
    eyebrow: C.about.eyebrow,
    title: C.about.title,
    lead: C.about.lead
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: C.about.storyEyebrow,
    title: C.about.storyTitle,
    size: "sm"
  }), C.about.story.map((p, i) => /*#__PURE__*/React.createElement("p", {
    className: "sa-lead",
    key: i
  }, p)), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-3)",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("swim")
  }, "Swimming lessons"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("firstaid")
  }, "First Aid training"))), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "photo",
    src: C.images.pool.src,
    alt: C.images.pool.alt,
    position: C.images.pool.position
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--sunken sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we do",
    title: "Swimming instruction and First Aid training",
    lead: C.home.pillarsLead,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, C.pillars.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    variant: "flat",
    padding: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 20
    }),
    eyebrow: p.name,
    title: p.title,
    text: p.summary,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => onNavigate(p.route),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, p.cta)
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "photo",
    src: C.images.swim.src,
    alt: C.images.swim.alt,
    position: C.images.swim.position
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Get in touch",
    title: "Talk to us before you book",
    size: "sm",
    lead: "We're happy to talk through lesson length, semi-private pairing, group training or accessibility before you commit."
  }), /*#__PURE__*/React.createElement("ul", {
    className: "list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: C.contact.phoneHref
  }, C.contact.phone))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: C.contact.emailHref
  }, C.contact.email))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, C.contact.address)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, C.contact.responseTime))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("contact")
  }, "Contact us"))))));
}

/** Contact — both inquiry routes plus direct phone and email. No office hours. */
function Contact({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["Contact"],
    eyebrow: "Contact",
    title: "Get in touch",
    lead: "Call, email, or send an inquiry about swimming lessons or Standard First Aid + CPR-C training."
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), " Phone"), /*#__PURE__*/React.createElement("h2", {
    className: "sa-card__title"
  }, /*#__PURE__*/React.createElement("a", {
    href: C.contact.phoneHref
  }, C.contact.phone)), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, C.contact.responseTime), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    href: C.contact.phoneHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    })
  }, "Call now"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16
  }), " Email"), /*#__PURE__*/React.createElement("h2", {
    className: "sa-card__title",
    style: {
      fontSize: "var(--fs-h5)",
      wordBreak: "break-word"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: C.contact.emailHref
  }, C.contact.email)), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, C.contact.responseTime), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: C.contact.emailHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    })
  }, "Send an email"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  }), " Where we are"), /*#__PURE__*/React.createElement("h2", {
    className: "sa-card__title",
    style: {
      fontSize: "var(--fs-h5)"
    }
  }, C.locations[0].name), /*#__PURE__*/React.createElement("address", {
    className: "addr",
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "addr__line"
  }, C.locations[0].addressLine), /*#__PURE__*/React.createElement("span", {
    className: "addr__line"
  }, C.locations[0].addressLocality)), /*#__PURE__*/React.createElement("p", {
    className: "note",
    style: {
      marginTop: "var(--space-2)"
    }
  }, C.locations[0].appointment), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-5)",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: C.locations[0].directionsUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    })
  }, C.directionsLabel), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => onNavigate("swim-locations"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Location details")))))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--sunken"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Inquiries",
    title: "Which are you asking about?",
    lead: "Each service has its own short form so we only ask what's relevant.",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "waves",
    size: 16
  }), " Swimming Lessons"), /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title"
  }, "Private & semi-private lessons"), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, "Tell us about the swimmer, the lesson length you'd like and your availability."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("swim-booking")
  }, "Swimming inquiry"))), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart-pulse",
    size: 16
  }), " First Aid Training"), /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title"
  }, C.firstAid.courseName), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, "One training offering, for individuals or for groups and workplaces."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("firstaid-inquiry")
  }, "First Aid inquiry")))), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg",
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-4)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title",
    style: {
      fontSize: "var(--fs-h5)"
    }
  }, "Accessibility"), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, "If you have an accessibility requirement or would like to discuss a possible accommodation, please contact us before booking."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => onNavigate("accessibility"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Accessibility information"))))))));
}

/* ------------------------------------------------ Cancellation Policy */
function CancellationPolicy({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["Cancellation Policy"],
    eyebrow: "Policy",
    title: C.cancellation.heading,
    lead: C.cancellation.short
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--narrow stack stack--lg"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sa-lead",
    style: {
      color: "var(--text-body)"
    }
  }, C.cancellation.policy)), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How to cancel",
    title: "Let us know as early as you can",
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "sa-lead"
  }, C.cancellation.howTo), /*#__PURE__*/React.createElement("ul", {
    className: "list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: C.contact.phoneHref
  }, C.contact.phone))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: C.contact.emailHref
  }, C.contact.email))))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("swim-booking")
  }, "Arrange a lesson"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("swim-pricing")
  }, "See pricing")))));
}

/* ----------------------------------------------------- Privacy Policy */
function PrivacyPolicy({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["Privacy Policy"],
    eyebrow: "Policy",
    title: C.privacy.heading,
    lead: C.privacy.lead
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--narrow stack stack--lg"
  }, C.privacy.sections.map(s => /*#__PURE__*/React.createElement("div", {
    className: "stack",
    key: s.id,
    style: {
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "policy__title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "sa-lead"
  }, s.body))), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16
  }), " Privacy contact"), /*#__PURE__*/React.createElement("ul", {
    className: "list",
    style: {
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: C.contact.phoneHref
  }, C.contact.phone))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: C.contact.emailHref
  }, C.contact.email))))))));
}

/* ------------------------------------------------------- Accessibility */
function Accessibility({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["Accessibility"],
    eyebrow: "Accessibility",
    title: C.accessibility.heading,
    lead: C.accessibility.lead
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--narrow stack stack--lg"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sa-lead",
    style: {
      color: "var(--text-body)"
    }
  }, C.accessibility.statement)), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, C.accessibility.points.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    variant: "flat",
    padding: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 20
    }),
    title: p.title,
    text: p.text
  }))), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact us",
    title: "Talk to us before booking",
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: C.contact.phoneHref
  }, C.contact.phone))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: C.contact.emailHref
  }, C.contact.email))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, C.contact.address)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, C.contact.responseTime))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("contact")
  }, "Contact us"))))));
}
Object.assign(window, {
  About,
  Contact,
  CancellationPolicy,
  PrivacyPolicy,
  Accessibility
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FirstAid.jsx
try { (() => {
const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", {
      className: "disclaimer"
    }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) {
  return NS[name] || __missing(name);
}
const Button = __need("Button");
const Card = __need("Card");
const MediaFrame = __need("MediaFrame");
const Badge = __need("Badge");
const SectionHeading = __need("SectionHeading");
const Accordion = __need("Accordion");
const Icon = __need("Icon");
const C = window.SterlingContent;

/** The one-offering statement. Repeated on all three pages so nobody can mistake
    Individual and Group for separate courses. */
function CombinedCourseBanner() {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "combined"
  }, /*#__PURE__*/React.createElement("span", {
    className: "combined__mark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart-pulse",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sa-card__title"
  }, C.firstAid.courseName), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, C.firstAid.combinedNote))));
}

/** Closing block on every First Aid page — all roads lead to the same inquiry. */
function FirstAidCta({
  onNavigate,
  title,
  lead,
  primary = "Submit an inquiry"
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec--wash sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "First Aid Training",
    title: title,
    size: "sm",
    lead: lead
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNavigate("firstaid-inquiry")
  }, primary), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    href: C.contact.phoneHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17
    })
  }, C.contact.phone)), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, "Or email ", /*#__PURE__*/React.createElement("a", {
    href: C.contact.emailHref
  }, C.contact.email))), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "wide",
    src: C.images.firstAid.src,
    alt: C.images.firstAid.alt,
    position: C.images.firstAid.position
  })));
}

/** Two pathways into the same training. Shown on all three pages. */
function PathwayCards({
  onNavigate,
  current
}) {
  const items = [{
    id: "firstaid-individual",
    eyebrow: "Individual Training",
    icon: "user",
    title: "For one person",
    text: "Arrange the training for yourself — for work, study, volunteering or your own preparedness.",
    cta: C.booking.ctaIndividual
  }, {
    id: "firstaid-group",
    eyebrow: "Group & Workforce Training",
    icon: "briefcase",
    title: "For a group",
    text: "Arrange it for a business, workplace, organisation, team or community group.",
    cta: C.booking.ctaGroup
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.id,
    variant: current === it.id ? "accent" : "flat",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16
  }), " ", it.eyebrow), /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, it.text), /*#__PURE__*/React.createElement("p", {
    className: "note",
    style: {
      marginTop: "var(--space-2)"
    }
  }, "Same ", C.firstAid.courseName, " training."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-5)",
      gap: "var(--space-3)"
    }
  }, current === it.id ? /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("firstaid-inquiry")
  }, it.cta) : /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate(it.id),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Read more")))));
}

/* ------------------------------------- About the Course */
function FirstAidAbout({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["First Aid Training"],
    eyebrow: C.firstAid.eyebrow,
    title: C.firstAid.title,
    lead: C.firstAid.lead
  }, /*#__PURE__*/React.createElement("div", {
    className: "phead__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    onClick: () => onNavigate("firstaid-inquiry")
  }, "Submit an inquiry"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outlineInverse",
    href: C.contact.phoneHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17
    })
  }, C.contact.phone))), /*#__PURE__*/React.createElement(SectionNav, {
    journey: C.firstAidJourney,
    page: "firstaid",
    onNavigate: onNavigate,
    label: "First Aid Training"
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(CombinedCourseBanner, null))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About the course",
    title: "What the training is",
    size: "sm",
    lead: C.firstAid.aboutIntro
  }), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("firstaid-inquiry")
  }, "Submit an inquiry"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: C.contact.emailHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    })
  }, "Email us")), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, C.contact.responseTime)), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "photo",
    src: C.images.firstAid.src,
    alt: C.images.firstAid.alt,
    position: C.images.firstAid.position
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--sunken"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who it's for",
    title: "Who tends to take this training",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, C.firstAid.whoFor.map(w => /*#__PURE__*/React.createElement(Card, {
    key: w.id,
    variant: "flat",
    padding: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: w.icon,
      size: 20
    }),
    title: w.title,
    text: w.text
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Two ways to arrange it",
    title: "One offering, two pathways",
    lead: "Individual and Group & Workforce training are the same Standard First Aid + CPR-C training \u2014 they differ only in how the session is arranged.",
    size: "sm"
  })), /*#__PURE__*/React.createElement(PathwayCards, {
    onNavigate: onNavigate,
    current: "firstaid"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Questions",
    title: "First Aid training FAQs",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Accordion, {
    items: C.faqs.filter(f => C.firstAid.faqIds.includes(f.id)),
    defaultOpen: ["fa1"]
  }))), /*#__PURE__*/React.createElement(FirstAidCta, {
    onNavigate: onNavigate,
    title: "Arrange Standard First Aid + CPR-C",
    lead: `Submit an inquiry and we'll confirm the arrangements with you directly. ${C.contact.responseTime}`
  }), /*#__PURE__*/React.createElement(JourneyPager, {
    journey: C.firstAidJourney,
    page: "firstaid",
    onNavigate: onNavigate
  }));
}

/* ------------------------------------------------- Individual Training */
function FirstAidIndividual({
  onNavigate
}) {
  const d = C.firstAid.individual;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["First Aid Training", "Individual Training"],
    eyebrow: d.eyebrow,
    title: d.title,
    lead: d.lead
  }, /*#__PURE__*/React.createElement("div", {
    className: "phead__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    onClick: () => onNavigate("firstaid-inquiry")
  }, C.booking.ctaIndividual))), /*#__PURE__*/React.createElement(SectionNav, {
    journey: C.firstAidJourney,
    page: "firstaid-individual",
    onNavigate: onNavigate,
    label: "First Aid Training"
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(CombinedCourseBanner, null))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Individual Training",
    title: "Taking the training on your own",
    size: "sm",
    lead: d.sameCourseNote
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18
  }), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, d.schedulingNote))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("firstaid-inquiry")
  }, C.booking.ctaIndividual), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: C.contact.phoneHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    })
  }, C.contact.phone))), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "photo",
    src: C.images.firstAid.src,
    alt: C.images.firstAid.alt,
    position: C.images.firstAid.position
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--sunken sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Also available",
    title: "Arranging it for a group instead?",
    size: "sm"
  })), /*#__PURE__*/React.createElement(PathwayCards, {
    onNavigate: onNavigate,
    current: "firstaid-individual"
  }))), /*#__PURE__*/React.createElement(FirstAidCta, {
    onNavigate: onNavigate,
    title: "Inquire about individual training",
    lead: `Tell us your preferred location and timeframe and we'll confirm available dates with you directly. ${C.contact.responseTime}`,
    primary: C.booking.ctaIndividual
  }), /*#__PURE__*/React.createElement(JourneyPager, {
    journey: C.firstAidJourney,
    page: "firstaid-individual",
    onNavigate: onNavigate
  }));
}

/* -------------------------------------- Group & Workforce Training */
function FirstAidGroup({
  onNavigate
}) {
  const d = C.firstAid.group;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["First Aid Training", "Group & Workforce Training"],
    eyebrow: d.eyebrow,
    title: d.title,
    lead: d.lead
  }, /*#__PURE__*/React.createElement("div", {
    className: "phead__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    onClick: () => onNavigate("firstaid-inquiry")
  }, C.booking.ctaGroup), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outlineInverse",
    href: C.contact.phoneHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17
    })
  }, C.contact.phone))), /*#__PURE__*/React.createElement(SectionNav, {
    journey: C.firstAidJourney,
    page: "firstaid-group",
    onNavigate: onNavigate,
    label: "First Aid Training"
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(CombinedCourseBanner, null))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Group & Workforce Training",
    title: "Training several people together",
    size: "sm",
    lead: d.sameCourseNote
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18
  }), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, d.pricingNote))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("firstaid-inquiry")
  }, C.booking.ctaGroup), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: C.contact.emailHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    })
  }, "Email us"))), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "photo",
    src: C.images.firstAidGroup.src,
    alt: C.images.firstAidGroup.alt,
    position: C.images.firstAidGroup.position
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--sunken sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who we train",
    title: "Groups we work with",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, d.audiences.map(a => /*#__PURE__*/React.createElement(Badge, {
    key: a,
    tone: "outline"
  }, a))), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg",
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-4)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title",
    style: {
      fontSize: "var(--fs-h5)"
    }
  }, "Across the GTA"), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, C.firstAid.serviceArea)))))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Also available",
    title: "Just need it for yourself?",
    size: "sm"
  })), /*#__PURE__*/React.createElement(PathwayCards, {
    onNavigate: onNavigate,
    current: "firstaid-group"
  }))), /*#__PURE__*/React.createElement(FirstAidCta, {
    onNavigate: onNavigate,
    title: "Request group training",
    lead: `Tell us roughly how many participants, your preferred location and your timeframe, and we'll come back with the details. ${C.contact.responseTime}`,
    primary: C.booking.ctaGroup
  }), /*#__PURE__*/React.createElement(JourneyPager, {
    journey: C.firstAidJourney,
    page: "firstaid-group",
    onNavigate: onNavigate
  }));
}

/* ---------------------------- The single First Aid inquiry form page */
function FirstAidInquiry({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["First Aid Training", "Inquiry"],
    eyebrow: "First Aid Training",
    title: "Standard First Aid + CPR-C inquiry",
    lead: "One form for both individual and group inquiries \u2014 there is only one training offering, so there is nothing to choose between."
  }), /*#__PURE__*/React.createElement(SectionNav, {
    journey: C.firstAidJourney,
    page: "firstaid-inquiry",
    onNavigate: onNavigate,
    label: "First Aid Training"
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split--form"
  }, /*#__PURE__*/React.createElement(FirstAidInquiryForm, null), /*#__PURE__*/React.createElement("aside", {
    className: "summary"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    inverse: true,
    eyebrow: "Prefer to talk",
    title: C.contact.phone,
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text",
    style: {
      marginTop: "var(--space-3)"
    }
  }, "We can talk through group size, location and timing before you commit."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    href: C.contact.phoneHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    })
  }, "Call"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlineInverse",
    href: C.contact.emailHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    })
  }, "Email"))), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg",
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart-pulse",
    size: 16
  }), " One offering"), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text",
    style: {
      marginTop: "var(--space-2)"
    }
  }, C.firstAid.combinedNote)), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg",
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  }), " Service area"), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text",
    style: {
      marginTop: "var(--space-2)"
    }
  }, C.firstAid.serviceArea))))));
}
Object.assign(window, {
  FirstAidAbout,
  FirstAidIndividual,
  FirstAidGroup,
  FirstAidInquiry,
  CombinedCourseBanner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FirstAid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", {
      className: "disclaimer"
    }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) {
  return NS[name] || __missing(name);
}
const Button = __need("Button");
const Icon = __need("Icon");
const SectionHeading = __need("SectionHeading");
const C = window.SterlingContent;
function CtaBand({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap band__inner"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    inverse: true,
    size: "sm",
    eyebrow: "Get started",
    title: "Tell us what you need",
    lead: `Lessons for one swimmer, or Standard First Aid + CPR-C for a group. ${C.contact.responseTime}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => onNavigate("swim-booking")
  }, "Swimming inquiry"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outlineInverse",
    onClick: () => onNavigate("firstaid-inquiry")
  }, "First Aid inquiry"))));
}
function Footer({
  onNavigate
}) {
  const go = route => e => {
    e.preventDefault();
    onNavigate(route);
  };
  const columns = C.nav.filter(n => n.children);
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    inverse: true,
    size: "lg",
    onClick: () => onNavigate("home")
  }), /*#__PURE__*/React.createElement("p", {
    className: "ftr__message"
  }, C.brand.message), /*#__PURE__*/React.createElement("p", {
    className: "note",
    style: {
      color: "var(--sterling-400)",
      maxWidth: "32ch"
    }
  }, C.brand.positioning), /*#__PURE__*/React.createElement("ul", {
    className: "ftr__contact"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: C.contact.phoneHref
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), " ", C.contact.phone)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: C.contact.emailHref
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }), " ", C.contact.email)))), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.id
  }, /*#__PURE__*/React.createElement("h5", null, col.label), /*#__PURE__*/React.createElement("ul", null, col.children.map(child => /*#__PURE__*/React.createElement("li", {
    key: child.id
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go(child.route)
  }, child.label)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Company"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go("about")
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go("contact")
  }, "Contact")), C.policies.map(p => /*#__PURE__*/React.createElement("li", {
    key: p.id
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go(p.route)
  }, p.label)))))), /*#__PURE__*/React.createElement("div", {
    className: "ftr__base"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", C.brand.copyright), /*#__PURE__*/React.createElement("span", {
    className: "ftr__policies"
  }, C.policies.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: "#",
    onClick: go(p.route)
  }, p.label))))));
}
Object.assign(window, {
  Footer,
  CtaBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Forms.jsx
try { (() => {
const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", {
      className: "disclaimer"
    }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) {
  return NS[name] || __missing(name);
}
const Button = __need("Button");
const Card = __need("Card");
const Input = __need("Input");
const Select = __need("Select");
const Textarea = __need("Textarea");
const Radio = __need("Radio");
const SectionHeading = __need("SectionHeading");
const Icon = __need("Icon");
const Tag = __need("Tag");
const C = window.SterlingContent;

/* ---------------------------------------------------------------------------
   Netlify Forms submission
   ---------------------------------------------------------------------------
   Netlify's build-time scanner cannot see JSX, so each form has a matching
   STATIC definition in index.html (same `name`, same field names). Those static
   copies are what register the forms in the Netlify dashboard; these React
   forms are what the visitor actually uses.

   Netlify Forms does NOT accept JSON. Submissions are POSTed to "/" as
   application/x-www-form-urlencoded, and the body must include `form-name`
   plus the honeypot field.

   No secret, key or password lives in this code — Netlify routes the
   notification to the site's configured address.
--------------------------------------------------------------------------- */

const NETLIFY_FORMS = {
  swim: {
    name: "swimming-lessons-inquiry",
    subject: "New Swimming Lessons Inquiry",
    honeypot: "bot-field"
  },
  firstAid: {
    name: "first-aid-training-inquiry",
    subject: "New First Aid Training Inquiry",
    honeypot: "bot-field"
  }
};
const SUCCESS_MESSAGE = "Thank you for contacting Sterling Aquatics. Your inquiry has been received, and we typically reply within 24 hours.";

/**
 * POST a form to Netlify as url-encoded data. Resolves only on a successful
 * response; every other outcome throws so the caller shows the error state.
 */
async function postToNetlify(formName, fields, honeypot) {
  const body = new URLSearchParams();
  body.append("form-name", formName);
  Object.entries(fields).forEach(([k, val]) => {
    if (val === undefined || val === null) return;
    const s = Array.isArray(val) ? val.join(", ") : String(val);
    if (s.trim() === "") return; // omit empty optional fields
    body.append(k, s);
  });
  // The honeypot is always sent, empty, so Netlify sees the field it expects.
  if (honeypot) body.append(honeypot, "");
  const res = await fetch(C.forms.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: body.toString()
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText || "submission failed"}`);
  return true;
}

/** Prefilled mail draft — the fallback offered only when a submission fails. */
function mailtoDraft(subject, fields) {
  const body = Object.entries(fields).filter(([, v]) => v !== "" && v != null && !(Array.isArray(v) && v.length === 0)).map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`).join("\n");
  return `mailto:${C.forms.deliverTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
const emailValid = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

/** Hidden inputs every Netlify-wired form needs, plus the honeypot. */
function NetlifyFields({
  config,
  extra
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: config.name,
    readOnly: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "subject",
    value: config.subject,
    readOnly: true
  }), Object.entries(extra || {}).map(([k, val]) => /*#__PURE__*/React.createElement("input", {
    key: k,
    type: "hidden",
    name: k,
    value: val,
    readOnly: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "honeypot",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: `${config.name}-${config.honeypot}`
  }, "Do not fill this in"), /*#__PURE__*/React.createElement("input", {
    id: `${config.name}-${config.honeypot}`,
    type: "text",
    name: config.honeypot,
    tabIndex: -1,
    autoComplete: "off"
  })));
}

/** Result panel shared by both forms. */
function ResultPanel({
  result,
  subject,
  fields,
  onReset
}) {
  if (result.state === "error") {
    return /*#__PURE__*/React.createElement(Card, {
      variant: "flat",
      padding: "lg",
      className: "result result--error"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pillar__eyebrow result__mark--error"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert-circle",
      size: 16
    }), " Not sent"), /*#__PURE__*/React.createElement("h3", {
      className: "sa-card__title"
    }, "We couldn't send your inquiry"), /*#__PURE__*/React.createElement("p", {
      className: "sa-card__text"
    }, result.message), /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        marginTop: "var(--space-5)",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: onReset
    }, "Try again"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      href: mailtoDraft(subject, fields),
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 16
      })
    }, "Email it instead"), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      href: C.contact.phoneHref,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 15
      })
    }, C.contact.phone)));
  }
  return /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "lg",
    className: "result"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }), " Inquiry received"), /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title"
  }, "Thank you"), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, SUCCESS_MESSAGE), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onReset
  }, "Submit another inquiry")));
}
function ErrorSummary({
  errors
}) {
  const keys = Object.keys(errors);
  if (keys.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "formerrors",
    role: "alert"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow result__mark--error"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 16
  }), " Check ", keys.length, " ", keys.length === 1 ? "field" : "fields"), /*#__PURE__*/React.createElement("ul", {
    className: "list"
  }, keys.map(k => /*#__PURE__*/React.createElement("li", {
    key: k
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, errors[k])))));
}

/* ========================================================================
   SWIMMING LESSONS INQUIRY  →  Netlify form "swimming-lessons-inquiry"
   ===================================================================== */
function SwimInquiryForm() {
  const cfg = NETLIFY_FORMS.swim;
  const [v, setV] = React.useState({
    name: "",
    email: "",
    phone: "",
    participant: "",
    age: "",
    ability: "",
    goals: "",
    notes: ""
  });
  const [format, setFormat] = React.useState("private");
  const [days, setDays] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle"); // idle | loading | done
  const [result, setResult] = React.useState(null);
  const inFlight = React.useRef(false);
  const set = k => e => setV(p => ({
    ...p,
    [k]: e.target.value
  }));
  const toggleDay = d => setDays(p => p.includes(d) ? p.filter(x => x !== d) : [...p, d]);

  /* Netlify field names — these must match the static definition in index.html. */
  const fields = {
    name: v.name,
    email: v.email,
    phone: v.phone,
    "participant-name": v.participant,
    "participant-age": v.age,
    "swimming-ability": v.ability,
    goals: v.goals,
    "lesson-format": format === "private" ? "Private" : "Semi-private",
    "preferred-days": days,
    "preferred-location": `${C.locations[0].name}, ${C.locations[0].addressFull}`,
    notes: v.notes
  };
  const validate = () => {
    const e = {};
    if (!v.name.trim()) e.name = "Enter your name.";
    if (!emailValid(v.email)) e.email = "Enter a valid email address so we can reply.";
    if (v.phone && v.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a 10-digit phone number, or leave it blank.";
    return e;
  };
  const submit = async ev => {
    ev.preventDefault();
    if (inFlight.current) return; // duplicate-submission guard
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    inFlight.current = true;
    setStatus("loading");
    try {
      await postToNetlify(cfg.name, {
        ...fields,
        subject: cfg.subject
      }, cfg.honeypot);
      setResult({
        state: "ok"
      });
    } catch (err) {
      setResult({
        state: "error",
        message: `Your inquiry didn't reach us (${err.message}). Try again, send it as an email, or call ${C.contact.phone}.`
      });
    }
    inFlight.current = false;
    setStatus("done");
  };
  const reset = () => {
    setStatus("idle");
    setResult(null);
  };
  if (status === "done" && result) {
    return /*#__PURE__*/React.createElement(ResultPanel, {
      result: result,
      subject: cfg.subject,
      fields: fields,
      onReset: reset
    });
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "stack stack--lg",
    name: cfg.name,
    method: "POST",
    action: C.forms.action,
    "data-netlify": "true",
    "netlify-honeypot": cfg.honeypot,
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement(NetlifyFields, {
    config: cfg,
    extra: {
      "lesson-format": fields["lesson-format"],
      "preferred-days": days.join(", "),
      "preferred-location": fields["preferred-location"]
    }
  }), /*#__PURE__*/React.createElement(ErrorSummary, {
    errors: errors
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Lesson format",
    title: "Private or semi-private?",
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: format === "private" ? "accent" : "flat",
    padding: "md",
    interactive: true,
    onClick: () => setFormat("private")
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "lesson-format-choice",
    label: "Private",
    description: C.swim.formats[0].blurb,
    checked: format === "private",
    onChange: () => setFormat("private")
  })), /*#__PURE__*/React.createElement(Card, {
    variant: format === "semi" ? "accent" : "flat",
    padding: "md",
    interactive: true,
    onClick: () => setFormat("semi")
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "lesson-format-choice",
    label: "Semi-private",
    description: C.swim.formats[1].blurb,
    checked: format === "semi",
    onChange: () => setFormat("semi")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The swimmer",
    title: "Who is swimming?",
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Participant name",
    name: "participant-name",
    value: v.participant,
    onChange: set("participant"),
    placeholder: "If different from your name",
    optional: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Participant age",
    name: "participant-age",
    value: v.age,
    onChange: set("age"),
    placeholder: "Age in years",
    inputMode: "numeric",
    optional: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Current swimming ability",
    name: "swimming-ability",
    value: v.ability,
    onChange: set("ability"),
    placeholder: "Select ability",
    options: C.swim.abilityOptions,
    optional: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Goals",
    name: "goals",
    value: v.goals,
    onChange: set("goals"),
    placeholder: "What you'd like to work on",
    optional: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "When",
    title: "Availability",
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "field__label"
  }, "Preferred days and times"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, C.swim.availabilityOptions.map(d => /*#__PURE__*/React.createElement(Tag, {
    key: d,
    selected: days.includes(d),
    onClick: () => toggleDay(d)
  }, d))), /*#__PURE__*/React.createElement("span", {
    className: "note"
  }, "Lessons take place at ", C.locations[0].name, ", ", C.locations[0].addressFull, ". ", C.locations[0].appointment, "."))), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "How should we reach you?",
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    name: "name",
    value: v.name,
    onChange: set("name"),
    placeholder: "First and last name",
    required: true,
    error: errors.name
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    name: "email",
    type: "email",
    value: v.email,
    onChange: set("email"),
    placeholder: "Email address",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    }),
    required: true,
    error: errors.email
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    name: "phone",
    type: "tel",
    value: v.phone,
    onChange: set("phone"),
    placeholder: "Phone number",
    optional: true,
    error: errors.phone
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Additional notes",
    name: "notes",
    value: v.notes,
    onChange: set("notes"),
    optional: true,
    rows: 3,
    placeholder: "Anything else we should know \u2014 past lessons, comfort in water, accessibility needs\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    type: "submit",
    disabled: status === "loading",
    iconLeft: status === "loading" ? /*#__PURE__*/React.createElement("span", {
      className: "spinner"
    }) : undefined
  }, status === "loading" ? "Sending…" : "Submit an inquiry"), /*#__PURE__*/React.createElement("span", {
    className: "note"
  }, C.forms.reassurance)));
}

/* ========================================================================
   FIRST AID INQUIRY  →  Netlify form "first-aid-training-inquiry"
   One training offering, so the form never asks which course.
   ===================================================================== */
function FirstAidInquiryForm({
  defaultType = "individual"
}) {
  const cfg = NETLIFY_FORMS.firstAid;
  const [v, setV] = React.useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    participants: "",
    location: "",
    dates: "",
    notes: ""
  });
  const [type, setType] = React.useState(defaultType);
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle");
  const [result, setResult] = React.useState(null);
  const inFlight = React.useRef(false);
  const set = k => e => setV(p => ({
    ...p,
    [k]: e.target.value
  }));
  const isGroup = type === "group";
  const fields = {
    name: v.name,
    email: v.email,
    phone: v.phone,
    course: C.firstAid.courseName,
    "inquiry-type": isGroup ? "Group & Workforce" : "Individual",
    organisation: isGroup ? v.org : "",
    participants: isGroup ? v.participants : "",
    "preferred-location": v.location,
    "preferred-dates": v.dates,
    notes: v.notes
  };
  const validate = () => {
    const e = {};
    if (!v.name.trim()) e.name = "Enter your name.";
    if (!emailValid(v.email)) e.email = "Enter a valid email address so we can reply.";
    if (v.phone && v.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a 10-digit phone number, or leave it blank.";
    if (isGroup && !v.participants.trim()) e.participants = "Tell us roughly how many participants, so we can plan the session.";
    return e;
  };
  const submit = async ev => {
    ev.preventDefault();
    if (inFlight.current) return; // duplicate-submission guard
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    inFlight.current = true;
    setStatus("loading");
    try {
      await postToNetlify(cfg.name, {
        ...fields,
        subject: cfg.subject
      }, cfg.honeypot);
      setResult({
        state: "ok"
      });
    } catch (err) {
      setResult({
        state: "error",
        message: `Your inquiry didn't reach us (${err.message}). Try again, send it as an email, or call ${C.contact.phone}.`
      });
    }
    inFlight.current = false;
    setStatus("done");
  };
  const reset = () => {
    setStatus("idle");
    setResult(null);
  };
  if (status === "done" && result) {
    return /*#__PURE__*/React.createElement(ResultPanel, {
      result: result,
      subject: cfg.subject,
      fields: fields,
      onReset: reset
    });
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "stack stack--lg",
    name: cfg.name,
    method: "POST",
    action: C.forms.action,
    "data-netlify": "true",
    "netlify-honeypot": cfg.honeypot,
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement(NetlifyFields, {
    config: cfg,
    extra: {
      course: C.firstAid.courseName,
      "inquiry-type": fields["inquiry-type"]
    }
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    padding: "md"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, /*#__PURE__*/React.createElement("strong", null, C.firstAid.courseName), " \u2014 ", C.firstAid.combinedNote)), /*#__PURE__*/React.createElement(ErrorSummary, {
    errors: errors
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Inquiry type",
    title: "Who is the training for?",
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: !isGroup ? "accent" : "flat",
    padding: "md",
    interactive: true,
    onClick: () => setType("individual")
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "inquiry-type-choice",
    label: "Individual",
    description: "Just me, or one person.",
    checked: !isGroup,
    onChange: () => setType("individual")
  })), /*#__PURE__*/React.createElement(Card, {
    variant: isGroup ? "accent" : "flat",
    padding: "md",
    interactive: true,
    onClick: () => setType("group")
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "inquiry-type-choice",
    label: "Group & Workforce",
    description: "A business, workplace, organisation, team or community group.",
    checked: isGroup,
    onChange: () => setType("group")
  })))), isGroup ? /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Your group",
    title: "Tell us about the group",
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Organisation name",
    name: "organisation",
    value: v.org,
    onChange: set("org"),
    placeholder: "Company, team or group name",
    optional: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Approximate number of participants",
    name: "participants",
    value: v.participants,
    onChange: set("participants"),
    placeholder: "How many people",
    inputMode: "numeric",
    required: true,
    error: errors.participants
  }))) : null, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Where & when",
    title: "Location and timing",
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Preferred training location",
    name: "preferred-location",
    value: v.location,
    onChange: set("location"),
    placeholder: "City, neighbourhood or your own site",
    optional: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Preferred dates or timeframe",
    name: "preferred-dates",
    value: v.dates,
    onChange: set("dates"),
    placeholder: "A date, a range, or 'flexible'",
    optional: true
  })), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, C.firstAid.individual.schedulingNote)), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "How should we reach you?",
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    name: "name",
    value: v.name,
    onChange: set("name"),
    placeholder: "First and last name",
    required: true,
    error: errors.name
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    name: "email",
    type: "email",
    value: v.email,
    onChange: set("email"),
    placeholder: "Email address",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    }),
    required: true,
    error: errors.email
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    name: "phone",
    type: "tel",
    value: v.phone,
    onChange: set("phone"),
    placeholder: "Phone number",
    optional: true,
    error: errors.phone
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Additional notes",
    name: "notes",
    value: v.notes,
    onChange: set("notes"),
    optional: true,
    rows: 3,
    placeholder: "Anything else that would help us plan the training\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    type: "submit",
    disabled: status === "loading",
    iconLeft: status === "loading" ? /*#__PURE__*/React.createElement("span", {
      className: "spinner"
    }) : undefined
  }, status === "loading" ? "Sending…" : isGroup ? C.booking.ctaGroup : "Submit an inquiry"), /*#__PURE__*/React.createElement("span", {
    className: "note"
  }, C.forms.reassurance)));
}
Object.assign(window, {
  SwimInquiryForm,
  FirstAidInquiryForm,
  ResultPanel,
  postToNetlify,
  mailtoDraft,
  NETLIFY_FORMS,
  SUCCESS_MESSAGE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Forms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", {
      className: "disclaimer"
    }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) {
  return NS[name] || __missing(name);
}
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
function Wordmark({
  inverse = false,
  size = "md",
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: `wordmark wordmark--${size}${inverse ? " wordmark--inverse" : ""}`,
    href: "#",
    "aria-label": C.brand.name,
    onClick: e => {
      e.preventDefault();
      onClick?.();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wordmark__name"
  }, C.brand.name));
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
function NavItem({
  item,
  page,
  onNavigate
}) {
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
  const active = page === item.route || item.children?.some(c => c.route === page);
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openNow = () => {
    cancelClose();
    setOpen(true);
  };
  const focusFirstItem = () => {
    groupRef.current?.querySelector(".hdr__menuitem")?.focus();
  };
  const closeSoon = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 220);
  };
  React.useEffect(() => cancelClose, []);
  if (!item.children) {
    return /*#__PURE__*/React.createElement("button", {
      className: `hdr__link${active ? " hdr__link--on" : ""}`,
      onClick: () => onNavigate(item.route)
    }, item.label);
  }
  const go = route => {
    cancelClose();
    setOpen(false);
    onNavigate(route);
  };
  const onTriggerKeyDown = e => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      // If the menu is already open, `setOpen(true)` is a no-op and the effect
      // never re-runs — so focus directly in that case.
      if (open) focusFirstItem();else {
        wantFocus.current = true;
        openNow();
      }
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
  return /*#__PURE__*/React.createElement("div", {
    className: `hdr__group${open ? " hdr__group--open" : ""}`,
    ref: groupRef,
    onMouseEnter: openNow,
    onMouseLeave: closeSoon,
    onFocus: e => {
      // Open only when focus lands inside the menu (e.g. shift-tabbing back
      // into it). The trigger receiving focus must NOT auto-open, or Escape
      // and ArrowUp would immediately reopen what they just closed.
      if (e.target.classList.contains("hdr__menuitem")) openNow();else cancelClose();
    },
    onBlur: e => {
      if (!groupRef.current?.contains(e.relatedTarget)) closeSoon();
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: `hdr__link${active ? " hdr__link--on" : ""}`,
    ref: triggerRef,
    "aria-expanded": open,
    "aria-haspopup": "true",
    onClick: () => onNavigate(item.route),
    onKeyDown: onTriggerKeyDown
  }, item.label, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    className: "hdr__menu",
    role: "menu",
    "aria-hidden": !open
  }, item.children.map((child, i) => /*#__PURE__*/React.createElement("button", {
    key: child.id,
    className: `hdr__menuitem${page === child.route ? " hdr__menuitem--on" : ""}`,
    role: "menuitem",
    tabIndex: open ? 0 : -1,
    onKeyDown: e => onItemKeyDown(e, i),
    onClick: () => go(child.route)
  }, child.label))));
}
function Header({
  page,
  onNavigate
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const goMobile = route => {
    setMobileOpen(false);
    onNavigate(route);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hdr__bar"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onClick: () => onNavigate("home")
  }), /*#__PURE__*/React.createElement("nav", {
    className: "hdr__nav",
    "aria-label": "Main"
  }, C.nav.map(item => /*#__PURE__*/React.createElement(NavItem, {
    key: item.id,
    item: item,
    page: page,
    onNavigate: onNavigate
  })), /*#__PURE__*/React.createElement("a", {
    className: "hdr__phone",
    href: C.contact.phoneHref
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), C.contact.phone)), /*#__PURE__*/React.createElement("div", {
    className: "hdr__actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "hdr__phone hdr__phone--compact",
    href: C.contact.phoneHref
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), C.contact.phone), /*#__PURE__*/React.createElement(IconButton, {
    label: mobileOpen ? "Close menu" : "Menu",
    className: "hdr__burger",
    "aria-expanded": mobileOpen,
    onClick: () => setMobileOpen(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mobileOpen ? "x" : "menu",
    size: 20
  })))), mobileOpen ? /*#__PURE__*/React.createElement("div", {
    className: "hdr__mobile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, C.nav.map(item => /*#__PURE__*/React.createElement("div", {
    className: "hdr__mobilegroup",
    key: item.id
  }, /*#__PURE__*/React.createElement("button", {
    className: "hdr__mobilelink",
    onClick: () => goMobile(item.route)
  }, item.label), item.children ? /*#__PURE__*/React.createElement("div", {
    className: "hdr__mobilechildren"
  }, item.children.map(child => /*#__PURE__*/React.createElement("button", {
    key: child.id,
    className: "hdr__mobilechild",
    onClick: () => goMobile(child.route)
  }, child.label))) : null)), /*#__PURE__*/React.createElement("a", {
    className: "hdr__mobilephone",
    href: C.contact.phoneHref
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), " ", C.contact.phone), /*#__PURE__*/React.createElement("a", {
    className: "hdr__mobilephone",
    href: C.contact.emailHref
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16
  }), " ", C.contact.email))) : null);
}

/** Section sub-nav — keeps a visitor inside the Swimming or First Aid journey. */
function SectionNav({
  journey,
  page,
  onNavigate,
  label
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "subnav",
    "aria-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap subnav__inner"
  }, journey.map(step => /*#__PURE__*/React.createElement("button", {
    key: step.id,
    className: `subnav__link${page === step.id ? " subnav__link--on" : ""}`,
    "aria-current": page === step.id ? "page" : undefined,
    onClick: () => onNavigate(step.id)
  }, step.label))));
}

/** Previous / next pathway through a journey. */
function JourneyPager({
  journey,
  page,
  onNavigate
}) {
  const i = journey.findIndex(s => s.id === page);
  if (i === -1) return null;
  const prev = journey[i - 1];
  const next = journey[i + 1];
  if (!prev && !next) return null;
  return /*#__PURE__*/React.createElement("nav", {
    className: "pager",
    "aria-label": "Section pages"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap pager__inner"
  }, prev ? /*#__PURE__*/React.createElement("button", {
    className: "pager__link pager__link--prev",
    onClick: () => onNavigate(prev.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "pager__meta"
  }, "Previous", /*#__PURE__*/React.createElement("strong", null, prev.label))) : /*#__PURE__*/React.createElement("span", null), next ? /*#__PURE__*/React.createElement("button", {
    className: "pager__link pager__link--next",
    onClick: () => onNavigate(next.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "pager__meta pager__meta--end"
  }, "Next", /*#__PURE__*/React.createElement("strong", null, next.label)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })) : /*#__PURE__*/React.createElement("span", null)));
}
function PageHead({
  eyebrow,
  title,
  lead,
  crumbs = [],
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "phead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phead__crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    }
  }, "Home"), crumbs.map(c => /*#__PURE__*/React.createElement(React.Fragment, {
    key: c
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 13
  }), /*#__PURE__*/React.createElement("span", null, c)))), /*#__PURE__*/React.createElement(SectionHeading, {
    as: "h1",
    eyebrow: eyebrow,
    title: title,
    lead: lead,
    inverse: true
  }), children));
}
Object.assign(window, {
  Header,
  Wordmark,
  PageHead,
  SectionNav,
  JourneyPager
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", {
      className: "disclaimer"
    }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) {
  return NS[name] || __missing(name);
}
const Button = __need("Button");
const Card = __need("Card");
const MediaFrame = __need("MediaFrame");
const SectionHeading = __need("SectionHeading");
const Accordion = __need("Accordion");
const Icon = __need("Icon");
const C = window.SterlingContent;

/** Two services, equal weight. Swimming Lessons first. */
function PillarCard({
  pillar,
  onNavigate
}) {
  const inquiryRoute = pillar.id === "swim" ? "swim-booking" : "firstaid-inquiry";
  const img = C.images[pillar.photoKey];
  return /*#__PURE__*/React.createElement("div", {
    className: "pillarcard"
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    flush: true,
    ratio: "wide",
    src: img.src,
    alt: img.alt,
    position: img.position
  }), /*#__PURE__*/React.createElement("div", {
    className: "pillarcard__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: pillar.icon,
    size: 16
  }), pillar.name), /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title"
  }, pillar.title), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, pillar.summary), pillar.id === "firstaid" ? /*#__PURE__*/React.createElement("p", {
    className: "note",
    style: {
      marginTop: "var(--space-1)"
    }
  }, C.firstAid.combinedNote) : null, /*#__PURE__*/React.createElement("div", {
    className: "pillarcard__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__audience"
  }, pillar.audience), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate(pillar.route),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, pillar.cta), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => onNavigate(inquiryRoute)
  }, pillar.ctaSecondary)))));
}
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--photo"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero__img",
    src: C.images.pool.src,
    alt: C.images.pool.alt,
    decoding: "async"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero__scrim",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), " ", C.brand.region), /*#__PURE__*/React.createElement("h1", null, C.home.headline), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, C.home.lead), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    onClick: () => onNavigate("swim"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "Swimming lessons"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => onNavigate("firstaid"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "Explore First Aid training"))))), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: C.home.pillarsEyebrow,
    title: C.home.pillarsTitle,
    lead: C.home.pillarsLead
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, C.pillars.map(p => /*#__PURE__*/React.createElement(PillarCard, {
    key: p.id,
    pillar: p,
    onNavigate: onNavigate
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--sunken"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Swimming Lessons",
    title: "Private and semi-private instruction",
    lead: C.swim.lead,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, C.swim.formats.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.id,
    variant: "flat",
    padding: "lg",
    title: f.label,
    text: f.blurb,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => onNavigate("swim"),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, "Details")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-8)",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("swim")
  }, "Swimming lessons overview"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("swim-locations")
  }, "Location"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("swim-pricing")
  }, "Pricing"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => onNavigate("swim-booking")
  }, "Submit an inquiry")))), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "First Aid Training",
    title: C.firstAid.courseName,
    lead: C.firstAid.lead,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "md",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 18
    }),
    title: "Individual Training",
    text: "Arrange the training for one person."
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "md",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "briefcase",
      size: 18
    }),
    title: "Group & Workforce Training",
    text: "Arrange it for a workplace, team or group."
  })), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, "Both pathways lead to the same ", C.firstAid.courseName, " training."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("firstaid")
  }, C.booking.ctaFirstAidExplore), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => onNavigate("firstaid-inquiry")
  }, "Submit a First Aid inquiry"))), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "photo",
    src: C.images.firstAidGroup.src,
    alt: C.images.firstAidGroup.alt,
    position: C.images.firstAidGroup.position
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--sunken sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How it works",
    title: C.home.stepsTitle,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, C.home.steps.map(s => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: s.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "step__n"
  }, s.n), /*#__PURE__*/React.createElement("h4", null, s.title), /*#__PURE__*/React.createElement("p", null, s.text)))))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Locations",
    title: "Where lessons take place",
    lead: C.locationsIntro,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "waves",
    size: 16
  }), " Swimming Lessons"), /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title"
  }, C.locations[0].name), /*#__PURE__*/React.createElement("address", {
    className: "addr",
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "addr__line"
  }, C.locations[0].addressLine), /*#__PURE__*/React.createElement("span", {
    className: "addr__line"
  }, C.locations[0].addressLocality)), /*#__PURE__*/React.createElement("p", {
    className: "note",
    style: {
      marginTop: "var(--space-2)"
    }
  }, C.locations[0].appointment), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-5)",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("swim-locations"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Location details"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    href: C.locations[0].directionsUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, C.directionsLabel))), /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart-pulse",
    size: 16
  }), " First Aid Training"), /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title"
  }, "Across the Greater Toronto Area"), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text",
    style: {
      marginTop: "var(--space-2)"
    }
  }, C.firstAid.serviceArea), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("firstaid-group"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Group training")))))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Questions",
    title: "Common questions",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Accordion, {
    items: C.faqs.filter(f => ["sw2", "sw4", "sw7", "fa1"].includes(f.id)),
    defaultOpen: ["sw2"]
  }))));
}
Object.assign(window, {
  Home,
  PillarCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Swim.jsx
try { (() => {
const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", {
      className: "disclaimer"
    }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) {
  return NS[name] || __missing(name);
}
const Button = __need("Button");
const Card = __need("Card");
const MediaFrame = __need("MediaFrame");
const Badge = __need("Badge");
const SectionHeading = __need("SectionHeading");
const Accordion = __need("Accordion");
const Tabs = __need("Tabs");
const Icon = __need("Icon");
const Stat = __need("Stat");
const C = window.SterlingContent;
function Bullets({
  items
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: "list"
  }, items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, t))));
}

/** Shared closing block: every swim page can convert or continue the journey. */
function SwimInquiryCta({
  onNavigate,
  title = "Ready to start?"
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec--wash sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Swimming Lessons",
    title: title,
    size: "sm",
    lead: `Tell us about the swimmer and we'll arrange a time. ${C.contact.responseTime}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNavigate("swim-booking")
  }, "Submit an inquiry"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    href: C.contact.phoneHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17
    })
  }, C.contact.phone))), /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "wide",
    src: C.images.swim.src,
    alt: C.images.swim.alt,
    position: C.images.swim.position
  })));
}

/* ---------------------------------------------------- Overview */
function SwimOverview({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["Swimming Lessons"],
    eyebrow: C.swim.eyebrow,
    title: C.swim.title,
    lead: C.swim.lead
  }), /*#__PURE__*/React.createElement(SectionNav, {
    journey: C.swimJourney,
    page: "swim",
    onNavigate: onNavigate,
    label: "Swimming Lessons"
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: C.swim.formats.map(f => ({
      id: f.id,
      label: f.label,
      content: /*#__PURE__*/React.createElement("div", {
        className: "grid-2",
        style: {
          alignItems: "start"
        }
      }, /*#__PURE__*/React.createElement(Bullets, {
        items: f.points
      }), /*#__PURE__*/React.createElement(Card, {
        variant: "sunken",
        padding: "lg"
      }, /*#__PURE__*/React.createElement("p", {
        className: "sa-card__text"
      }, f.blurb), f.id === "semi" ? /*#__PURE__*/React.createElement("p", {
        className: "note",
        style: {
          marginTop: "var(--space-3)"
        }
      }, C.pricing.semiPrivateNote) : null, /*#__PURE__*/React.createElement("div", {
        className: "row",
        style: {
          marginTop: "var(--space-5)",
          gap: "var(--space-3)"
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => onNavigate("swim-pricing")
      }, "See pricing"), /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        onClick: () => onNavigate("swim-booking")
      }, "Submit an inquiry"))))
    }))
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--sunken"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we work on",
    title: "Focus areas, not fixed levels",
    lead: "Every lesson plan is built from these, at a pace that reflects the swimmer's experience, comfort level and goals.",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, C.swim.focusAreas.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.id,
    padding: "lg",
    variant: "flat",
    title: f.title,
    text: f.text,
    footer: /*#__PURE__*/React.createElement("span", {
      className: "note"
    }, f.who)
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "photo",
    src: C.images.swim.src,
    alt: C.images.swim.alt,
    position: C.images.swim.position
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What to expect",
    title: "Your first lesson",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: "var(--space-5)"
    }
  }, C.swim.experience.map(x => /*#__PURE__*/React.createElement("div", {
    className: "xstep",
    key: x.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "xstep__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: x.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: "var(--space-1)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    className: "xstep__title"
  }, x.title), /*#__PURE__*/React.createElement("p", {
    className: "xstep__text"
  }, x.text))))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-8)",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "45\u201360",
    unit: "min",
    label: "Lesson length",
    ruled: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "24",
    unit: "hr",
    label: "Cancellation notice",
    ruled: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: C.locations[0].directionsUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    })
  }, C.directionsLabel), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => onNavigate("swim-locations")
  }, "Location details"))))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Next",
    title: "Continue through the section",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, C.swimJourney.slice(1).map(step => /*#__PURE__*/React.createElement(Card, {
    key: step.id,
    variant: "flat",
    padding: "lg",
    interactive: true,
    onClick: () => onNavigate(step.id),
    title: step.label,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, "Go")
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap wrap--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Questions",
    title: "Swimming lesson FAQs",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Accordion, {
    items: C.faqs.filter(f => C.swim.faqIds.includes(f.id)),
    defaultOpen: ["sw1"]
  }))), /*#__PURE__*/React.createElement(JourneyPager, {
    journey: C.swimJourney,
    page: "swim",
    onNavigate: onNavigate
  }));
}

/* ---------------------------------------------------- Locations */
function SwimLocations({
  onNavigate
}) {
  const l = C.locations[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["Swimming Lessons", "Locations"],
    eyebrow: C.locationsEyebrow,
    title: C.locationsTitle,
    lead: C.locationsIntro
  }), /*#__PURE__*/React.createElement(SectionNav, {
    journey: C.swimJourney,
    page: "swim-locations",
    onNavigate: onNavigate,
    label: "Swimming Lessons"
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    media: /*#__PURE__*/React.createElement(MediaFrame, {
      flush: true,
      ratio: "hero",
      src: C.images.pool.src,
      alt: C.images.pool.alt,
      position: C.images.pool.position
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sa-card__title"
  }, l.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, l.lessonTypes)), /*#__PURE__*/React.createElement("address", {
    className: "addr"
  }, /*#__PURE__*/React.createElement("span", {
    className: "addr__line"
  }, l.addressLine), /*#__PURE__*/React.createElement("span", {
    className: "addr__line"
  }, l.addressLocality)), /*#__PURE__*/React.createElement("ul", {
    className: "list",
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, l.appointment))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-6)",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate("swim-booking")
  }, "Submit an inquiry"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: l.directionsUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    })
  }, C.directionsLabel), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => onNavigate("swim-pricing")
  }, "See pricing"))))), /*#__PURE__*/React.createElement(SwimInquiryCta, {
    onNavigate: onNavigate,
    title: "Book a lesson downtown"
  }), /*#__PURE__*/React.createElement(JourneyPager, {
    journey: C.swimJourney,
    page: "swim-locations",
    onNavigate: onNavigate
  }));
}

/* ---------------------------------------------------- Pricing */
function PriceRow({
  item
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pricelist__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pricelist__label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pricelist__name"
  }, item.label), /*#__PURE__*/React.createElement("span", {
    className: "pricelist__detail"
  }, item.detail)), /*#__PURE__*/React.createElement("div", {
    className: "pricelist__value"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pricelist__price"
  }, item.price), item.saving ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, item.saving) : null));
}
function SwimPricing({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["Swimming Lessons", "Pricing"],
    eyebrow: C.pricing.eyebrow,
    title: C.pricing.title,
    lead: C.pricing.lead
  }), /*#__PURE__*/React.createElement(SectionNav, {
    journey: C.swimJourney,
    page: "swim-pricing",
    onNavigate: onNavigate,
    label: "Swimming Lessons"
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      alignItems: "start",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "waves",
    size: 16
  }), " Individual lessons"), /*#__PURE__*/React.createElement("div", {
    className: "pricelist"
  }, C.pricing.individual.map(i => /*#__PURE__*/React.createElement(PriceRow, {
    key: i.id,
    item: i
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    variant: "sunken"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 16
  }), " Eight-lesson packages"), /*#__PURE__*/React.createElement("div", {
    className: "pricelist"
  }, C.pricing.packages.map(i => /*#__PURE__*/React.createElement(PriceRow, {
    key: i.id,
    item: i
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      marginTop: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 16
  }), " Semi-private lessons"), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text",
    style: {
      marginTop: "var(--space-2)"
    }
  }, C.pricing.semiPrivateNote)), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16
  }), " ", C.cancellation.heading), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text",
    style: {
      marginTop: "var(--space-2)"
    }
  }, C.cancellation.policy), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => onNavigate("cancellation"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Read the full policy")))), /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "lg",
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "var(--space-4)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart-pulse",
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title",
    style: {
      fontSize: "var(--fs-h5)"
    }
  }, C.firstAid.courseName), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, C.pricing.firstAidNote), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("firstaid")
  }, "Explore First Aid training"))))))), /*#__PURE__*/React.createElement(SwimInquiryCta, {
    onNavigate: onNavigate,
    title: "Get started with a lesson"
  }), /*#__PURE__*/React.createElement(JourneyPager, {
    journey: C.swimJourney,
    page: "swim-pricing",
    onNavigate: onNavigate
  }));
}

/* ---------------------------------------------------- Booking (inquiry) */
function SwimBooking({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["Swimming Lessons", "Booking"],
    eyebrow: "Booking",
    title: "Arrange a swimming lesson",
    lead: `Tell us about the swimmer and we'll arrange a time. ${C.contact.responseTime}`
  }), /*#__PURE__*/React.createElement(SectionNav, {
    journey: C.swimJourney,
    page: "swim-booking",
    onNavigate: onNavigate,
    label: "Swimming Lessons"
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split--form"
  }, /*#__PURE__*/React.createElement(SwimInquiryForm, null), /*#__PURE__*/React.createElement("aside", {
    className: "summary"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    inverse: true,
    eyebrow: "Prefer to talk",
    title: C.contact.phone,
    size: "sm",
    as: "h2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text",
    style: {
      marginTop: "var(--space-3)"
    }
  }, "We can talk through lesson length, semi-private pairing and timing before you commit."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    href: C.contact.phoneHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    })
  }, "Call"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlineInverse",
    href: C.contact.emailHref,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    })
  }, "Email"))), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg",
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  }), " Location"), /*#__PURE__*/React.createElement("address", {
    className: "addr",
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "addr__line"
  }, C.locations[0].name), /*#__PURE__*/React.createElement("span", {
    className: "addr__line"
  }, C.locations[0].addressLine), /*#__PURE__*/React.createElement("span", {
    className: "addr__line"
  }, C.locations[0].addressLocality)), /*#__PURE__*/React.createElement("p", {
    className: "note",
    style: {
      marginTop: "var(--space-2)"
    }
  }, C.locations[0].appointment), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    href: C.locations[0].directionsUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, C.directionsLabel))), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg",
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16
  }), " ", C.cancellation.heading), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text",
    style: {
      marginTop: "var(--space-2)"
    }
  }, C.cancellation.policy), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => onNavigate("cancellation"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Full policy"))), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "lg",
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 16
  }), " Online booking"), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text",
    style: {
      marginTop: "var(--space-2)"
    }
  }, C.booking.calendlyNote))))), /*#__PURE__*/React.createElement(JourneyPager, {
    journey: C.swimJourney,
    page: "swim-booking",
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  SwimOverview,
  SwimLocations,
  SwimPricing,
  SwimBooking,
  Bullets,
  SwimInquiryCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Swim.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/_deferred/Resources.jsx
try { (() => {
/* DEFERRED — not registered in ui_kits/website/index.html and not in the nav.
   Retained so the Resources section can be reinstated without rebuilding it.

   REMINDER: reconsider adding a Resources / educational content section back to
   the Sterling Aquatics website later — particularly for SEO, First Aid
   information, swimming education, FAQs and helpful customer content.

   To reinstate:
   1. Add { id: "resources", label: "Resources", route: "resources" } to
      content/business.js › nav (before the About entry).
   2. Copy this file back to ui_kits/website/Resources.jsx.
   3. Add <script type="text/babel" src="Resources.jsx"></script> and
      resources: () => window.Resources to the ROUTES table in index.html.
   Content lives at content/business.js › deferred.resources (articles, SEO
   clusters and rules are all preserved there).
*/
const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", {
      className: "disclaimer"
    }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) {
  return NS[name] || __missing(name);
}
const Button = __need("Button");
const Card = __need("Card");
const Badge = __need("Badge");
const Icon = __need("Icon");
const C = window.SterlingContent;
function Resources({
  onNavigate
}) {
  const R = C.deferred.resources;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onNavigate: onNavigate,
    crumbs: ["Resources"],
    eyebrow: R.eyebrow,
    title: R.title,
    lead: R.lead
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, R.articles.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.id,
    padding: "lg",
    interactive: true,
    onClick: () => onNavigate("resources")
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, a.section), /*#__PURE__*/React.createElement("span", {
    className: "note"
  }, a.readTime)), /*#__PURE__*/React.createElement("h3", {
    className: "sa-card__title",
    style: {
      marginTop: "var(--space-3)"
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    className: "sa-card__text"
  }, a.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Read"))))), /*#__PURE__*/React.createElement("p", {
    className: "disclaimer",
    style: {
      marginTop: "var(--space-10)"
    }
  }, "Article titles are directional placeholders. Keyword strategy lives in", /*#__PURE__*/React.createElement("code", null, " content/business.js \u203A deferred.resources.seoClusters"), "."))));
}
Object.assign(window, {
  Resources
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/_deferred/Resources.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.Person = __ds_scope.Person;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
