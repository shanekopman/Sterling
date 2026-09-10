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
const Badge = __need("Badge");
const SectionHeading = __need("SectionHeading");
const Accordion = __need("Accordion");
const Tabs = __need("Tabs");
const Icon = __need("Icon");
const Stat = __need("Stat");
const C = window.SterlingContent;

function Bullets({ items }) {
  return (
    <ul className="list">
      {items.map((t) => (
        <li key={t}><Icon name="check" size={15} /><span>{t}</span></li>
      ))}
    </ul>
  );
}

/** Shared closing block: every swim page can convert or continue the journey. */
function SwimInquiryCta({ onNavigate, title = "Ready to start?" }) {
  return (
    <section className="sec sec--wash sec--tight">
      <div className="wrap split">
        <div className="stack">
          <SectionHeading eyebrow="Swimming Lessons" title={title} size="sm" lead={`Tell us about the swimmer and we'll arrange a time. ${C.contact.responseTime}`} />
          <div className="row">
            <Button variant="accent" size="lg" onClick={() => onNavigate("swim-booking")}>Submit an inquiry</Button>
            <Button variant="secondary" size="lg" href={C.contact.phoneHref} iconLeft={<Icon name="phone" size={17} />}>{C.contact.phone}</Button>
          </div>
        </div>
        <MediaFrame ratio="wide" src={C.images.swim.src} alt={C.images.swim.alt} position={C.images.swim.position} />
      </div>
    </section>
  );
}

/* ---------------------------------------------------- Overview */
function SwimOverview({ onNavigate }) {
  return (
    <>
      <PageHead onNavigate={onNavigate} crumbs={["Swimming Lessons"]} eyebrow={C.swim.eyebrow} title={C.swim.title} lead={C.swim.lead} />
      <SectionNav journey={C.swimJourney} page="swim" onNavigate={onNavigate} label="Swimming Lessons" />

      <section className="sec sec--tight">
        <div className="wrap">
          <Tabs
            items={C.swim.formats.map((f) => ({
              id: f.id,
              label: f.label,
              content: (
                <div className="grid-2" style={{ alignItems: "start" }}>
                  <Bullets items={f.points} />
                  <Card variant="sunken" padding="lg">
                    <p className="sa-card__text">{f.blurb}</p>
                    {f.id === "semi" ? (
                      <p className="note" style={{ marginTop: "var(--space-3)" }}>{C.pricing.semiPrivateNote}</p>
                    ) : null}
                    <div className="row" style={{ marginTop: "var(--space-5)", gap: "var(--space-3)" }}>
                      <Button variant="secondary" onClick={() => onNavigate("swim-pricing")}>See pricing</Button>
                      <Button variant="accent" onClick={() => onNavigate("swim-booking")}>Submit an inquiry</Button>
                    </div>
                  </Card>
                </div>
              ),
            }))}
          />
        </div>
      </section>

      <section className="sec sec--sunken">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="What we work on" title="Focus areas, not fixed levels" lead="Every lesson plan is built from these, at a pace that reflects the swimmer's experience, comfort level and goals." size="sm" />
          </div>
          <div className="grid-3">
            {C.swim.focusAreas.map((f) => (
              <Card key={f.id} padding="lg" variant="flat" title={f.title} text={f.text}
                footer={<span className="note">{f.who}</span>} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <MediaFrame ratio="photo" src={C.images.swim.src} alt={C.images.swim.alt} position={C.images.swim.position} />
          <div className="stack">
            <SectionHeading eyebrow="What to expect" title="Your first lesson" size="sm" />
            <div className="stack" style={{ gap: "var(--space-5)" }}>
              {C.swim.experience.map((x) => (
                <div className="xstep" key={x.id}>
                  <span className="xstep__icon"><Icon name={x.icon} size={18} /></span>
                  <div className="stack" style={{ gap: "var(--space-1)" }}>
                    <h4 className="xstep__title">{x.title}</h4>
                    <p className="xstep__text">{x.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row" style={{ gap: "var(--space-8)", paddingTop: "var(--space-2)" }}>
              <Stat value="45–60" unit="min" label="Lesson length" ruled />
              <Stat value="24" unit="hr" label="Cancellation notice" ruled />
            </div>
            <div className="row" style={{ gap: "var(--space-3)" }}>
              <Button variant="secondary" href={C.locations[0].directionsUrl} target="_blank" rel="noopener noreferrer" iconLeft={<Icon name="map-pin" size={16} />}>{C.directionsLabel}</Button>
              <Button variant="link" onClick={() => onNavigate("swim-locations")}>Location details</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="Next" title="Continue through the section" size="sm" />
          </div>
          <div className="grid-3">
            {C.swimJourney.slice(1).map((step) => (
              <Card key={step.id} variant="flat" padding="lg" interactive onClick={() => onNavigate(step.id)} title={step.label}
                footer={<Button variant="link" iconRight={<Icon name="arrow-right" size={15} />}>Go</Button>} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap wrap--narrow">
          <div className="sec__head"><SectionHeading eyebrow="Questions" title="Swimming lesson FAQs" size="sm" /></div>
          <Accordion items={C.faqs.filter((f) => C.swim.faqIds.includes(f.id))} defaultOpen={["sw1"]} />
        </div>
      </section>

      <JourneyPager journey={C.swimJourney} page="swim" onNavigate={onNavigate} />
    </>
  );
}

/* ---------------------------------------------------- Locations */
function SwimLocations({ onNavigate }) {
  const l = C.locations[0];
  return (
    <>
      <PageHead onNavigate={onNavigate} crumbs={["Swimming Lessons", "Locations"]} eyebrow={C.locationsEyebrow} title={C.locationsTitle} lead={C.locationsIntro} />
      <SectionNav journey={C.swimJourney} page="swim-locations" onNavigate={onNavigate} label="Swimming Lessons" />

      <section className="sec">
        <div className="wrap">
          <Card padding="lg" media={<MediaFrame flush ratio="hero" src={C.images.pool.src} alt={C.images.pool.alt} position={C.images.pool.position} />}>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <h2 className="sa-card__title">{l.name}</h2>
              <Badge tone="outline">{l.lessonTypes}</Badge>
            </div>
            <address className="addr">
              <span className="addr__line">{l.addressLine}</span>
              <span className="addr__line">{l.addressLocality}</span>
            </address>
            <ul className="list" style={{ marginTop: "var(--space-2)" }}>
              <li><Icon name="calendar-check" size={15} /><span>{l.appointment}</span></li>
            </ul>
            <div className="row" style={{ marginTop: "var(--space-6)", gap: "var(--space-3)" }}>
              <Button variant="accent" onClick={() => onNavigate("swim-booking")}>Submit an inquiry</Button>
              <Button variant="secondary" href={l.directionsUrl} target="_blank" rel="noopener noreferrer" iconLeft={<Icon name="map-pin" size={16} />}>{C.directionsLabel}</Button>
              <Button variant="link" onClick={() => onNavigate("swim-pricing")}>See pricing</Button>
            </div>
          </Card>
        </div>
      </section>

      <SwimInquiryCta onNavigate={onNavigate} title="Book a lesson downtown" />
      <JourneyPager journey={C.swimJourney} page="swim-locations" onNavigate={onNavigate} />
    </>
  );
}

/* ---------------------------------------------------- Pricing */
function PriceRow({ item }) {
  return (
    <div className="pricelist__row">
      <div className="pricelist__label">
        <span className="pricelist__name">{item.label}</span>
        <span className="pricelist__detail">{item.detail}</span>
      </div>
      <div className="pricelist__value">
        <span className="pricelist__price">{item.price}</span>
        {item.saving ? <Badge tone="success">{item.saving}</Badge> : null}
      </div>
    </div>
  );
}

function SwimPricing({ onNavigate }) {
  return (
    <>
      <PageHead onNavigate={onNavigate} crumbs={["Swimming Lessons", "Pricing"]} eyebrow={C.pricing.eyebrow} title={C.pricing.title} lead={C.pricing.lead} />
      <SectionNav journey={C.swimJourney} page="swim-pricing" onNavigate={onNavigate} label="Swimming Lessons" />

      <section className="sec">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "start", gap: "var(--space-8)" }}>
            <Card padding="lg">
              <span className="pillar__eyebrow"><Icon name="waves" size={16} /> Individual lessons</span>
              <div className="pricelist">
                {C.pricing.individual.map((i) => <PriceRow key={i.id} item={i} />)}
              </div>
            </Card>
            <Card padding="lg" variant="sunken">
              <span className="pillar__eyebrow"><Icon name="calendar-check" size={16} /> Eight-lesson packages</span>
              <div className="pricelist">
                {C.pricing.packages.map((i) => <PriceRow key={i.id} item={i} />)}
              </div>
            </Card>
          </div>

          <div className="grid-2" style={{ marginTop: "var(--space-10)", alignItems: "start" }}>
            <Card variant="flat" padding="lg">
              <span className="pillar__eyebrow"><Icon name="users" size={16} /> Semi-private lessons</span>
              <p className="sa-card__text" style={{ marginTop: "var(--space-2)" }}>{C.pricing.semiPrivateNote}</p>
            </Card>
            <Card variant="flat" padding="lg">
              <span className="pillar__eyebrow"><Icon name="clock" size={16} /> {C.cancellation.heading}</span>
              <p className="sa-card__text" style={{ marginTop: "var(--space-2)" }}>{C.cancellation.policy}</p>
              <div className="row" style={{ marginTop: "var(--space-4)" }}>
                <Button variant="link" onClick={() => onNavigate("cancellation")} iconRight={<Icon name="arrow-right" size={15} />}>Read the full policy</Button>
              </div>
            </Card>
          </div>

          <Card variant="accent" padding="lg" style={{ marginTop: "var(--space-8)" }}>
            <div className="row" style={{ gap: "var(--space-4)", alignItems: "flex-start" }}>
              <Icon name="heart-pulse" size={20} />
              <div className="stack" style={{ gap: "var(--space-2)" }}>
                <h3 className="sa-card__title" style={{ fontSize: "var(--fs-h5)" }}>{C.firstAid.courseName}</h3>
                <p className="sa-card__text">{C.pricing.firstAidNote}</p>
                <div className="row" style={{ marginTop: "var(--space-2)" }}>
                  <Button variant="secondary" onClick={() => onNavigate("firstaid")}>Explore First Aid training</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <SwimInquiryCta onNavigate={onNavigate} title="Get started with a lesson" />
      <JourneyPager journey={C.swimJourney} page="swim-pricing" onNavigate={onNavigate} />
    </>
  );
}

/* ---------------------------------------------------- Booking (inquiry) */
function SwimBooking({ onNavigate }) {
  return (
    <>
      <PageHead
        onNavigate={onNavigate}
        crumbs={["Swimming Lessons", "Booking"]}
        eyebrow="Booking"
        title="Arrange a swimming lesson"
        lead={`Tell us about the swimmer and we'll arrange a time. ${C.contact.responseTime}`}
      />
      <SectionNav journey={C.swimJourney} page="swim-booking" onNavigate={onNavigate} label="Swimming Lessons" />

      <section className="sec">
        <div className="wrap split--form">
          <SwimInquiryForm />
          <aside className="summary">
            <Card variant="inverse" padding="lg">
              <SectionHeading inverse eyebrow="Prefer to talk" title={C.contact.phone} size="sm" as="h2" />
              <p className="sa-card__text" style={{ marginTop: "var(--space-3)" }}>
                We can talk through lesson length, semi-private pairing and timing before you commit.
              </p>
              <div className="row" style={{ marginTop: "var(--space-5)" }}>
                <Button variant="inverse" href={C.contact.phoneHref} iconLeft={<Icon name="phone" size={16} />}>Call</Button>
                <Button variant="outlineInverse" href={C.contact.emailHref} iconLeft={<Icon name="mail" size={16} />}>Email</Button>
              </div>
            </Card>
            <Card variant="flat" padding="lg" style={{ marginTop: "var(--space-6)" }}>
              <span className="pillar__eyebrow"><Icon name="map-pin" size={16} /> Location</span>
              <address className="addr" style={{ marginTop: "var(--space-2)" }}>
                <span className="addr__line">{C.locations[0].name}</span>
                <span className="addr__line">{C.locations[0].addressLine}</span>
                <span className="addr__line">{C.locations[0].addressLocality}</span>
              </address>
              <p className="note" style={{ marginTop: "var(--space-2)" }}>{C.locations[0].appointment}</p>
              <div className="row" style={{ marginTop: "var(--space-4)" }}>
                <Button variant="link" href={C.locations[0].directionsUrl} target="_blank" rel="noopener noreferrer" iconRight={<Icon name="arrow-right" size={15} />}>{C.directionsLabel}</Button>
              </div>
            </Card>
            <Card variant="flat" padding="lg" style={{ marginTop: "var(--space-6)" }}>
              <span className="pillar__eyebrow"><Icon name="clock" size={16} /> {C.cancellation.heading}</span>
              <p className="sa-card__text" style={{ marginTop: "var(--space-2)" }}>{C.cancellation.policy}</p>
              <div className="row" style={{ marginTop: "var(--space-4)" }}>
                <Button variant="link" onClick={() => onNavigate("cancellation")} iconRight={<Icon name="arrow-right" size={15} />}>Full policy</Button>
              </div>
            </Card>
            <Card variant="flat" padding="lg" style={{ marginTop: "var(--space-6)" }}>
              <span className="pillar__eyebrow"><Icon name="calendar-check" size={16} /> Online booking</span>
              <p className="sa-card__text" style={{ marginTop: "var(--space-2)" }}>{C.booking.calendlyNote}</p>
            </Card>
          </aside>
        </div>
      </section>

      <JourneyPager journey={C.swimJourney} page="swim-booking" onNavigate={onNavigate} />
    </>
  );
}

Object.assign(window, { SwimOverview, SwimLocations, SwimPricing, SwimBooking, Bullets, SwimInquiryCta });
