const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", { className: "disclaimer" }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) { return NS[name] || __missing(name); }

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
   Inquiry submission — Web3Forms
   ---------------------------------------------------------------------------
   Both forms POST to Web3Forms (https://web3forms.com), which emails each
   submission to the address the access key was registered with
   (sterling.aquatics.ltd@gmail.com). Free tier: 250 submissions/month.

   The access key lives in content/business.js › forms.accessKey. It is a
   PUBLIC key by design — it can only deliver to its registered address — so it
   is safe in client code. No password or private secret is in this codebase.

   Sent as multipart FormData (no custom Content-Type → no CORS preflight).
   Web3Forms uses the `email` field as the notification's Reply-to, and drops
   any submission whose `botcheck` honeypot is filled.
--------------------------------------------------------------------------- */

const INQUIRY_FORMS = {
  swim: {
    name: "swimming-lessons-inquiry",
    subject: "New Swimming Lessons Inquiry",
    honeypot: "botcheck",
  },
  firstAid: {
    name: "first-aid-training-inquiry",
    subject: "New First Aid Training Inquiry",
    honeypot: "botcheck",
  },
};

const SUCCESS_MESSAGE =
  "Thank you for contacting Sterling Aquatics. Your inquiry has been received, and we typically reply within 24 hours.";

/**
 * POST a form to Web3Forms. Resolves only when Web3Forms confirms success;
 * every other outcome throws so the caller shows the error state.
 */
async function submitInquiry(formName, fields, honeypot) {
  const body = new FormData();
  body.append("access_key", C.forms.accessKey);
  body.append("from_name", "Sterling Aquatics website");
  body.append("form", formName);
  Object.entries(fields).forEach(([k, val]) => {
    if (val === undefined || val === null) return;
    const s = Array.isArray(val) ? val.join(", ") : String(val);
    if (s.trim() === "") return; // omit empty optional fields
    body.append(k, s);
  });
  if (honeypot) body.append(honeypot, ""); // empty for real visitors
  const res = await fetch(C.forms.endpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
  });
  let data = null;
  try { data = await res.json(); } catch (_) { /* non-JSON error page */ }
  if (!res.ok || !data || data.success !== true) {
    const why = (data && data.message) || `${res.status} ${res.statusText || "submission failed"}`;
    throw new Error(why);
  }
  return true;
}

/** Prefilled mail draft — the fallback offered only when a submission fails. */
function mailtoDraft(subject, fields) {
  const body = Object.entries(fields)
    .filter(([, v]) => v !== "" && v != null && !(Array.isArray(v) && v.length === 0))
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .join("\n");
  return `mailto:${C.forms.deliverTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const emailValid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

/** Hidden context fields plus the honeypot. */
function HiddenFields({ config, extra }) {
  return (
    <>
      <input type="hidden" name="subject" value={config.subject} readOnly />
      {Object.entries(extra || {}).map(([k, val]) => (
        <input key={k} type="hidden" name={k} value={val} readOnly />
      ))}
      {/* Honeypot: removed from layout, from the accessibility tree and from the
          tab order, so no legitimate visitor or screen reader ever meets it. */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={`${config.name}-${config.honeypot}`}>Do not fill this in</label>
        <input
          id={`${config.name}-${config.honeypot}`}
          type="text"
          name={config.honeypot}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
    </>
  );
}

/** Result panel shared by both forms. */
function ResultPanel({ result, subject, fields, onReset }) {
  if (result.state === "error") {
    return (
      <Card variant="flat" padding="lg" className="result result--error">
        <span className="pillar__eyebrow result__mark--error"><Icon name="alert-circle" size={16} /> Not sent</span>
        <h3 className="sa-card__title">We couldn't send your inquiry</h3>
        <p className="sa-card__text">{result.message}</p>
        <div className="row" style={{ marginTop: "var(--space-5)", gap: "var(--space-3)" }}>
          <Button variant="accent" onClick={onReset}>Try again</Button>
          <Button variant="secondary" href={mailtoDraft(subject, fields)} iconLeft={<Icon name="mail" size={16} />}>
            Email it instead
          </Button>
          <Button variant="link" href={C.contact.phoneHref} iconLeft={<Icon name="phone" size={15} />}>{C.contact.phone}</Button>
        </div>
      </Card>
    );
  }
  return (
    <Card variant="accent" padding="lg" className="result">
      <span className="pillar__eyebrow"><Icon name="check" size={16} /> Inquiry received</span>
      <h3 className="sa-card__title">Thank you</h3>
      <p className="sa-card__text">{SUCCESS_MESSAGE}</p>
      <div className="row" style={{ marginTop: "var(--space-5)" }}>
        <Button variant="secondary" onClick={onReset}>Submit another inquiry</Button>
      </div>
    </Card>
  );
}

function ErrorSummary({ errors }) {
  const keys = Object.keys(errors);
  if (keys.length === 0) return null;
  return (
    <div className="formerrors" role="alert">
      <span className="pillar__eyebrow result__mark--error"><Icon name="alert-circle" size={16} /> Check {keys.length} {keys.length === 1 ? "field" : "fields"}</span>
      <ul className="list">
        {keys.map((k) => (
          <li key={k}><Icon name="chevron-right" size={14} /><span>{errors[k]}</span></li>
        ))}
      </ul>
    </div>
  );
}

/* ========================================================================
   SWIMMING LESSONS INQUIRY  →  "swimming-lessons-inquiry" (Web3Forms)
   ===================================================================== */
function SwimInquiryForm() {
  const cfg = INQUIRY_FORMS.swim;
  const [v, setV] = React.useState({
    name: "", email: "", phone: "", participant: "", age: "",
    ability: "", goals: "", notes: "",
  });
  const [format, setFormat] = React.useState("private");
  const [days, setDays] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle"); // idle | loading | done
  const [result, setResult] = React.useState(null);
  const inFlight = React.useRef(false);

  const set = (k) => (e) => setV((p) => ({ ...p, [k]: e.target.value }));
  const toggleDay = (d) => setDays((p) => (p.includes(d) ? p.filter((x) => x !== d) : [...p, d]));

  /* Field names as they appear in the notification email. */
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
    notes: v.notes,
  };

  const validate = () => {
    const e = {};
    if (!v.name.trim()) e.name = "Enter your name.";
    if (!emailValid(v.email)) e.email = "Enter a valid email address so we can reply.";
    if (v.phone && v.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a 10-digit phone number, or leave it blank.";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (inFlight.current) return; // duplicate-submission guard
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    inFlight.current = true;
    setStatus("loading");
    try {
      await submitInquiry(cfg.name, { ...fields, subject: cfg.subject }, cfg.honeypot);
      setResult({ state: "ok" });
    } catch (err) {
      setResult({
        state: "error",
        message: `Your inquiry didn't reach us (${err.message}). Try again, send it as an email, or call ${C.contact.phone}.`,
      });
    }
    inFlight.current = false;
    setStatus("done");
  };

  const reset = () => { setStatus("idle"); setResult(null); };

  if (status === "done" && result) {
    return <ResultPanel result={result} subject={cfg.subject} fields={fields} onReset={reset} />;
  }

  return (
    <form
      className="stack stack--lg"
      name={cfg.name}
      method="POST"
      action={C.forms.endpoint}
      onSubmit={submit}
      noValidate
    >
      <HiddenFields
        config={cfg}
        extra={{
          "lesson-format": fields["lesson-format"],
          "preferred-days": days.join(", "),
          "preferred-location": fields["preferred-location"],
        }}
      />

      <ErrorSummary errors={errors} />

      <div className="stack">
        <SectionHeading eyebrow="Lesson format" title="Private or semi-private?" size="sm" as="h2" />
        <div className="grid-2">
          <Card variant={format === "private" ? "accent" : "flat"} padding="md" interactive onClick={() => setFormat("private")}>
            <Radio name="lesson-format-choice" label="Private" description={C.swim.formats[0].blurb} checked={format === "private"} onChange={() => setFormat("private")} />
          </Card>
          <Card variant={format === "semi" ? "accent" : "flat"} padding="md" interactive onClick={() => setFormat("semi")}>
            <Radio name="lesson-format-choice" label="Semi-private" description={C.swim.formats[1].blurb} checked={format === "semi"} onChange={() => setFormat("semi")} />
          </Card>
        </div>
      </div>

      <div className="stack">
        <SectionHeading eyebrow="The swimmer" title="Who is swimming?" size="sm" as="h2" />
        <div className="grid-2">
          <Input label="Participant name" name="participant-name" value={v.participant} onChange={set("participant")} placeholder="If different from your name" optional />
          <Input label="Participant age" name="participant-age" value={v.age} onChange={set("age")} placeholder="Age in years" inputMode="numeric" optional />
          <Select label="Current swimming ability" name="swimming-ability" value={v.ability} onChange={set("ability")} placeholder="Select ability" options={C.swim.abilityOptions} optional />
          <Input label="Goals" name="goals" value={v.goals} onChange={set("goals")} placeholder="What you'd like to work on" optional />
        </div>
      </div>

      <div className="stack">
        <SectionHeading eyebrow="When" title="Availability" size="sm" as="h2" />
        <div className="field">
          <span className="field__label">Preferred days and times</span>
          <div className="row">
            {C.swim.availabilityOptions.map((d) => (
              <Tag key={d} selected={days.includes(d)} onClick={() => toggleDay(d)}>{d}</Tag>
            ))}
          </div>
          <span className="note">Lessons take place at {C.locations[0].name}, {C.locations[0].addressFull}. {C.locations[0].appointment}.</span>
        </div>
      </div>

      <div className="stack">
        <SectionHeading eyebrow="Contact" title="How should we reach you?" size="sm" as="h2" />
        <div className="grid-2">
          <Input label="Your name" name="name" value={v.name} onChange={set("name")} placeholder="First and last name" required error={errors.name} />
          <Input label="Email" name="email" type="email" value={v.email} onChange={set("email")} placeholder="Email address" leadingIcon={<Icon name="mail" size={16} />} required error={errors.email} />
          <Input label="Phone" name="phone" type="tel" value={v.phone} onChange={set("phone")} placeholder="Phone number" optional error={errors.phone} />
        </div>
        <Textarea label="Additional notes" name="notes" value={v.notes} onChange={set("notes")} optional rows={3} placeholder="Anything else we should know — past lessons, comfort in water, accessibility needs…" />
      </div>

      <div className="row">
        <Button size="lg" variant="accent" type="submit" disabled={status === "loading"} iconLeft={status === "loading" ? <span className="spinner" /> : undefined}>
          {status === "loading" ? "Sending…" : "Submit an inquiry"}
        </Button>
        <span className="note">{C.forms.reassurance}</span>
      </div>
    </form>
  );
}

/* ========================================================================
   FIRST AID INQUIRY  →  "first-aid-training-inquiry" (Web3Forms)
   One training offering, so the form never asks which course.
   ===================================================================== */
function FirstAidInquiryForm({ defaultType = "individual" }) {
  const cfg = INQUIRY_FORMS.firstAid;
  const [v, setV] = React.useState({
    name: "", email: "", phone: "", org: "", participants: "",
    location: "", dates: "", notes: "",
  });
  const [type, setType] = React.useState(defaultType);
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle");
  const [result, setResult] = React.useState(null);
  const inFlight = React.useRef(false);

  const set = (k) => (e) => setV((p) => ({ ...p, [k]: e.target.value }));
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
    notes: v.notes,
  };

  const validate = () => {
    const e = {};
    if (!v.name.trim()) e.name = "Enter your name.";
    if (!emailValid(v.email)) e.email = "Enter a valid email address so we can reply.";
    if (v.phone && v.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a 10-digit phone number, or leave it blank.";
    if (isGroup && !v.participants.trim()) e.participants = "Tell us roughly how many participants, so we can plan the session.";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (inFlight.current) return; // duplicate-submission guard
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    inFlight.current = true;
    setStatus("loading");
    try {
      await submitInquiry(cfg.name, { ...fields, subject: cfg.subject }, cfg.honeypot);
      setResult({ state: "ok" });
    } catch (err) {
      setResult({
        state: "error",
        message: `Your inquiry didn't reach us (${err.message}). Try again, send it as an email, or call ${C.contact.phone}.`,
      });
    }
    inFlight.current = false;
    setStatus("done");
  };

  const reset = () => { setStatus("idle"); setResult(null); };

  if (status === "done" && result) {
    return <ResultPanel result={result} subject={cfg.subject} fields={fields} onReset={reset} />;
  }

  return (
    <form
      className="stack stack--lg"
      name={cfg.name}
      method="POST"
      action={C.forms.endpoint}
      onSubmit={submit}
      noValidate
    >
      <HiddenFields
        config={cfg}
        extra={{ course: C.firstAid.courseName, "inquiry-type": fields["inquiry-type"] }}
      />

      <Card variant="sunken" padding="md">
        <p className="sa-card__text">
          <strong>{C.firstAid.courseName}</strong> — {C.firstAid.combinedNote}
        </p>
      </Card>

      <ErrorSummary errors={errors} />

      <div className="stack">
        <SectionHeading eyebrow="Inquiry type" title="Who is the training for?" size="sm" as="h2" />
        <div className="grid-2">
          <Card variant={!isGroup ? "accent" : "flat"} padding="md" interactive onClick={() => setType("individual")}>
            <Radio name="inquiry-type-choice" label="Individual" description="Just me, or one person." checked={!isGroup} onChange={() => setType("individual")} />
          </Card>
          <Card variant={isGroup ? "accent" : "flat"} padding="md" interactive onClick={() => setType("group")}>
            <Radio name="inquiry-type-choice" label="Group & Workforce" description="A business, workplace, organisation, team or community group." checked={isGroup} onChange={() => setType("group")} />
          </Card>
        </div>
      </div>

      {isGroup ? (
        <div className="stack">
          <SectionHeading eyebrow="Your group" title="Tell us about the group" size="sm" as="h2" />
          <div className="grid-2">
            <Input label="Organisation name" name="organisation" value={v.org} onChange={set("org")} placeholder="Company, team or group name" optional />
            <Input label="Approximate number of participants" name="participants" value={v.participants} onChange={set("participants")} placeholder="How many people" inputMode="numeric" required error={errors.participants} />
          </div>
        </div>
      ) : null}

      <div className="stack">
        <SectionHeading eyebrow="Where & when" title="Location and timing" size="sm" as="h2" />
        <div className="grid-2">
          <Input label="Preferred training location" name="preferred-location" value={v.location} onChange={set("location")} placeholder="City, neighbourhood or your own site" optional />
          <Input label="Preferred dates or timeframe" name="preferred-dates" value={v.dates} onChange={set("dates")} placeholder="A date, a range, or 'flexible'" optional />
        </div>
        <p className="note">{C.firstAid.individual.schedulingNote}</p>
      </div>

      <div className="stack">
        <SectionHeading eyebrow="Contact" title="How should we reach you?" size="sm" as="h2" />
        <div className="grid-2">
          <Input label="Name" name="name" value={v.name} onChange={set("name")} placeholder="First and last name" required error={errors.name} />
          <Input label="Email" name="email" type="email" value={v.email} onChange={set("email")} placeholder="Email address" leadingIcon={<Icon name="mail" size={16} />} required error={errors.email} />
          <Input label="Phone" name="phone" type="tel" value={v.phone} onChange={set("phone")} placeholder="Phone number" optional error={errors.phone} />
        </div>
        <Textarea label="Additional notes" name="notes" value={v.notes} onChange={set("notes")} optional rows={3} placeholder="Anything else that would help us plan the training…" />
      </div>

      <div className="row">
        <Button size="lg" variant="accent" type="submit" disabled={status === "loading"} iconLeft={status === "loading" ? <span className="spinner" /> : undefined}>
          {status === "loading" ? "Sending…" : isGroup ? C.booking.ctaGroup : "Submit an inquiry"}
        </Button>
        <span className="note">{C.forms.reassurance}</span>
      </div>
    </form>
  );
}

Object.assign(window, {
  SwimInquiryForm, FirstAidInquiryForm, ResultPanel,
  submitInquiry, mailtoDraft, INQUIRY_FORMS, SUCCESS_MESSAGE,
});
