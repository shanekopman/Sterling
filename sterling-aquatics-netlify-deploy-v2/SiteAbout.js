const NS = window.SterlingAquaticsDesignSystem_6bb49f;
function __missing(name) {
  return function () {
    return React.createElement("p", { className: "disclaimer" }, name + " is not available in the loaded design-system bundle.");
  };
}
function __need(name) { return NS[name] || __missing(name); }

const Button = __need("Button");
const Card = __need("Card");
const MediaFrame = __need("MediaFrame");
const SectionHeading = __need("SectionHeading");
const Icon = __need("Icon");
const C = window.SterlingContent;

/* Instructor names, biographies, photographs and qualifications are NOT
   published. This page carries the story and the two services only — no
   statistics, no team section, no credential or compliance statements. */
function About({ onNavigate }) {
  return (
    <>
      <PageHead onNavigate={onNavigate} crumbs={["About"]} eyebrow={C.about.eyebrow} title={C.about.title} lead={C.about.lead} />

      <section className="sec">
        <div className="wrap split">
          <div className="stack">
            <SectionHeading eyebrow={C.about.storyEyebrow} title={C.about.storyTitle} size="sm" />
            {C.about.story.map((p, i) => (
              <p className="sa-lead" key={i}>{p}</p>
            ))}
            <div className="row" style={{ gap: "var(--space-3)", paddingTop: "var(--space-2)" }}>
              <Button variant="accent" onClick={() => onNavigate("swim")}>Swimming lessons</Button>
              <Button variant="secondary" onClick={() => onNavigate("firstaid")}>First Aid training</Button>
            </div>
          </div>
          <MediaFrame ratio="photo" src={C.images.pool.src} alt={C.images.pool.alt} position={C.images.pool.position} />
        </div>
      </section>

      <section className="sec sec--sunken sec--tight">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="What we do" title="Swimming instruction and First Aid training" lead={C.home.pillarsLead} size="sm" />
          </div>
          <div className="grid-2">
            {C.pillars.map((p) => (
              <Card key={p.id} variant="flat" padding="lg" icon={<Icon name={p.icon} size={20} />} eyebrow={p.name} title={p.title} text={p.summary}
                footer={<Button variant="link" onClick={() => onNavigate(p.route)} iconRight={<Icon name="arrow-right" size={15} />}>{p.cta}</Button>} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap split">
          <MediaFrame ratio="photo" src={C.images.swim.src} alt={C.images.swim.alt} position={C.images.swim.position} />
          <div className="stack">
            <SectionHeading eyebrow="Get in touch" title="Talk to us before you book" size="sm" lead="We're happy to talk through lesson length, semi-private pairing, group training or accessibility before you commit." />
            <ul className="list">
              <li><Icon name="phone" size={15} /><span><a href={C.contact.phoneHref}>{C.contact.phone}</a></span></li>
              <li><Icon name="mail" size={15} /><span><a href={C.contact.emailHref}>{C.contact.email}</a></span></li>
              <li><Icon name="map-pin" size={15} /><span>{C.contact.address}</span></li>
              <li><Icon name="clock" size={15} /><span>{C.contact.responseTime}</span></li>
            </ul>
            <div className="row" style={{ gap: "var(--space-3)" }}>
              <Button variant="accent" onClick={() => onNavigate("contact")}>Contact us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/** Contact — both inquiry routes plus direct phone and email. No office hours. */
function Contact({ onNavigate }) {
  return (
    <>
      <PageHead
        onNavigate={onNavigate}
        crumbs={["Contact"]}
        eyebrow="Contact"
        title="Get in touch"
        lead="Call, email, or send an inquiry about swimming lessons or Standard First Aid + CPR-C training."
      />

      <section className="sec">
        <div className="wrap">
          <div className="grid-3">
            <Card padding="lg">
              <span className="pillar__eyebrow"><Icon name="phone" size={16} /> Phone</span>
              <h2 className="sa-card__title"><a href={C.contact.phoneHref}>{C.contact.phone}</a></h2>
              <p className="sa-card__text">{C.contact.responseTime}</p>
              <div className="row" style={{ marginTop: "auto", paddingTop: "var(--space-5)" }}>
                <Button variant="accent" href={C.contact.phoneHref} iconLeft={<Icon name="phone" size={16} />}>Call now</Button>
              </div>
            </Card>
            <Card padding="lg">
              <span className="pillar__eyebrow"><Icon name="mail" size={16} /> Email</span>
              <h2 className="sa-card__title" style={{ fontSize: "var(--fs-h5)", wordBreak: "break-word" }}>
                <a href={C.contact.emailHref}>{C.contact.email}</a>
              </h2>
              <p className="sa-card__text">{C.contact.responseTime}</p>
              <div className="row" style={{ marginTop: "auto", paddingTop: "var(--space-5)" }}>
                <Button variant="secondary" href={C.contact.emailHref} iconLeft={<Icon name="mail" size={16} />}>Send an email</Button>
              </div>
            </Card>
            <Card padding="lg">
              <span className="pillar__eyebrow"><Icon name="map-pin" size={16} /> Where we are</span>
              <h2 className="sa-card__title" style={{ fontSize: "var(--fs-h5)" }}>{C.locations[0].name}</h2>
              <address className="addr" style={{ marginTop: "var(--space-2)" }}>
                <span className="addr__line">{C.locations[0].addressLine}</span>
                <span className="addr__line">{C.locations[0].addressLocality}</span>
              </address>
              <p className="note" style={{ marginTop: "var(--space-2)" }}>{C.locations[0].appointment}</p>
              <div className="row" style={{ marginTop: "auto", paddingTop: "var(--space-5)", gap: "var(--space-3)" }}>
                <Button variant="secondary" href={C.locations[0].directionsUrl} target="_blank" rel="noopener noreferrer" iconLeft={<Icon name="map-pin" size={16} />}>{C.directionsLabel}</Button>
                <Button variant="link" onClick={() => onNavigate("swim-locations")} iconRight={<Icon name="arrow-right" size={15} />}>Location details</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="sec sec--sunken">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="Inquiries" title="Which are you asking about?" lead="Each service has its own short form so we only ask what's relevant." size="sm" />
          </div>
          <div className="grid-2">
            <Card variant="flat" padding="lg">
              <span className="pillar__eyebrow"><Icon name="waves" size={16} /> Swimming Lessons</span>
              <h3 className="sa-card__title">Private &amp; semi-private lessons</h3>
              <p className="sa-card__text">Tell us about the swimmer, the lesson length you'd like and your availability.</p>
              <div className="row" style={{ marginTop: "auto", paddingTop: "var(--space-5)" }}>
                <Button variant="accent" onClick={() => onNavigate("swim-booking")}>Swimming inquiry</Button>
              </div>
            </Card>
            <Card variant="flat" padding="lg">
              <span className="pillar__eyebrow"><Icon name="heart-pulse" size={16} /> First Aid Training</span>
              <h3 className="sa-card__title">{C.firstAid.courseName}</h3>
              <p className="sa-card__text">One training offering, for individuals or for groups and workplaces.</p>
              <div className="row" style={{ marginTop: "auto", paddingTop: "var(--space-5)" }}>
                <Button variant="accent" onClick={() => onNavigate("firstaid-inquiry")}>First Aid inquiry</Button>
              </div>
            </Card>
          </div>
          <Card variant="flat" padding="lg" style={{ marginTop: "var(--space-8)" }}>
            <div className="row" style={{ gap: "var(--space-4)", alignItems: "flex-start" }}>
              <Icon name="info" size={20} />
              <div className="stack" style={{ gap: "var(--space-2)" }}>
                <h3 className="sa-card__title" style={{ fontSize: "var(--fs-h5)" }}>Accessibility</h3>
                <p className="sa-card__text">
                  If you have an accessibility requirement or would like to discuss a possible accommodation,
                  please contact us before booking.
                </p>
                <div className="row" style={{ marginTop: "var(--space-2)" }}>
                  <Button variant="link" onClick={() => onNavigate("accessibility")} iconRight={<Icon name="arrow-right" size={15} />}>Accessibility information</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------ Cancellation Policy */
function CancellationPolicy({ onNavigate }) {
  return (
    <>
      <PageHead
        onNavigate={onNavigate}
        crumbs={["Cancellation Policy"]}
        eyebrow="Policy"
        title={C.cancellation.heading}
        lead={C.cancellation.short}
      />
      <section className="sec">
        <div className="wrap wrap--narrow stack stack--lg">
          <Card variant="accent" padding="lg">
            <p className="sa-lead" style={{ color: "var(--text-body)" }}>{C.cancellation.policy}</p>
          </Card>
          <div className="stack">
            <SectionHeading eyebrow="How to cancel" title="Let us know as early as you can" size="sm" as="h2" />
            <p className="sa-lead">{C.cancellation.howTo}</p>
            <ul className="list">
              <li><Icon name="phone" size={15} /><span><a href={C.contact.phoneHref}>{C.contact.phone}</a></span></li>
              <li><Icon name="mail" size={15} /><span><a href={C.contact.emailHref}>{C.contact.email}</a></span></li>
            </ul>
          </div>
          <div className="row" style={{ gap: "var(--space-3)" }}>
            <Button variant="accent" onClick={() => onNavigate("swim-booking")}>Arrange a lesson</Button>
            <Button variant="secondary" onClick={() => onNavigate("swim-pricing")}>See pricing</Button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ----------------------------------------------------- Privacy Policy */
function PrivacyPolicy({ onNavigate }) {
  return (
    <>
      <PageHead onNavigate={onNavigate} crumbs={["Privacy Policy"]} eyebrow="Policy" title={C.privacy.heading} lead={C.privacy.lead} />
      <section className="sec">
        <div className="wrap wrap--narrow stack stack--lg">
          {C.privacy.sections.map((s) => (
            <div className="stack" key={s.id} style={{ gap: "var(--space-3)" }}>
              <h2 className="policy__title">{s.title}</h2>
              <p className="sa-lead">{s.body}</p>
            </div>
          ))}
          <Card variant="sunken" padding="lg">
            <span className="pillar__eyebrow"><Icon name="mail" size={16} /> Privacy contact</span>
            <ul className="list" style={{ marginTop: "var(--space-3)" }}>
              <li><Icon name="phone" size={15} /><span><a href={C.contact.phoneHref}>{C.contact.phone}</a></span></li>
              <li><Icon name="mail" size={15} /><span><a href={C.contact.emailHref}>{C.contact.email}</a></span></li>
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------- Accessibility */
function Accessibility({ onNavigate }) {
  return (
    <>
      <PageHead onNavigate={onNavigate} crumbs={["Accessibility"]} eyebrow="Accessibility" title={C.accessibility.heading} lead={C.accessibility.lead} />
      <section className="sec">
        <div className="wrap wrap--narrow stack stack--lg">
          <Card variant="accent" padding="lg">
            <p className="sa-lead" style={{ color: "var(--text-body)" }}>{C.accessibility.statement}</p>
          </Card>
          <div className="grid-2">
            {C.accessibility.points.map((p) => (
              <Card key={p.id} variant="flat" padding="lg" icon={<Icon name={p.icon} size={20} />} title={p.title} text={p.text} />
            ))}
          </div>
          <div className="stack">
            <SectionHeading eyebrow="Contact us" title="Talk to us before booking" size="sm" as="h2" />
            <ul className="list">
              <li><Icon name="phone" size={15} /><span><a href={C.contact.phoneHref}>{C.contact.phone}</a></span></li>
              <li><Icon name="mail" size={15} /><span><a href={C.contact.emailHref}>{C.contact.email}</a></span></li>
              <li><Icon name="map-pin" size={15} /><span>{C.contact.address}</span></li>
              <li><Icon name="clock" size={15} /><span>{C.contact.responseTime}</span></li>
            </ul>
            <div className="row">
              <Button variant="accent" onClick={() => onNavigate("contact")}>Contact us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { About, Contact, CancellationPolicy, PrivacyPolicy, Accessibility });
