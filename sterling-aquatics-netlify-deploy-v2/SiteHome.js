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
const Accordion = __need("Accordion");
const Icon = __need("Icon");
const C = window.SterlingContent;

/** Two services, equal weight. Swimming Lessons first. */
function PillarCard({ pillar, onNavigate }) {
  const inquiryRoute = pillar.id === "swim" ? "swim-booking" : "firstaid-inquiry";
  const img = C.images[pillar.photoKey];
  return (
    <div className="pillarcard">
      <MediaFrame flush ratio="wide" src={img.src} alt={img.alt} position={img.position} />
      <div className="pillarcard__body">
        <span className="pillar__eyebrow">
          <Icon name={pillar.icon} size={16} />
          {pillar.name}
        </span>
        <h3 className="sa-card__title">{pillar.title}</h3>
        <p className="sa-card__text">{pillar.summary}</p>
        {pillar.id === "firstaid" ? (
          <p className="note" style={{ marginTop: "var(--space-1)" }}>{C.firstAid.combinedNote}</p>
        ) : null}
        <div className="pillarcard__foot">
          <span className="pillar__audience">{pillar.audience}</span>
          <div className="row" style={{ gap: "var(--space-3)" }}>
            <Button variant="accent" onClick={() => onNavigate(pillar.route)} iconRight={<Icon name="arrow-right" size={15} />}>
              {pillar.cta}
            </Button>
            <Button variant="link" onClick={() => onNavigate(inquiryRoute)}>{pillar.ctaSecondary}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home({ onNavigate }) {
  return (
    <>
      {/* Full-bleed hero photograph with the brand's navy scrim behind the copy. */}
      <section className="hero hero--photo">
        {/* The hero crop is framed in site.css via --hero-obj so a media query
            can re-frame it per breakpoint; an inline object-position could not
            be overridden. Other placements use C.images.pool.position. */}
        <img className="hero__img" src={C.images.pool.src} alt={C.images.pool.alt} decoding="async" />
        <span className="hero__scrim" aria-hidden="true" />
        <div className="wrap hero__inner">
          <div className="hero__copy">
            <span className="hero__eyebrow"><Icon name="map-pin" size={14} /> {C.brand.region}</span>
            <h1>{C.home.headline}</h1>
            <p className="hero__lead">{C.home.lead}</p>
            <div className="hero__cta">
              <Button size="lg" variant="accent" onClick={() => onNavigate("swim")} iconRight={<Icon name="arrow-right" size={17} />}>
                Swimming lessons
              </Button>
              <Button size="lg" variant="inverse" onClick={() => onNavigate("firstaid")} iconRight={<Icon name="arrow-right" size={17} />}>
                Explore First Aid training
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow={C.home.pillarsEyebrow} title={C.home.pillarsTitle} lead={C.home.pillarsLead} />
          </div>
          <div className="grid-2">
            {C.pillars.map((p) => (
              <PillarCard key={p.id} pillar={p} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

      {/* Swimming Lessons */}
      <section className="sec sec--sunken">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="Swimming Lessons" title="Private and semi-private instruction" lead={C.swim.lead} size="sm" />
          </div>
          <div className="grid-3">
            {C.swim.formats.map((f) => (
              <Card key={f.id} variant="flat" padding="lg" title={f.label} text={f.blurb}
                footer={<Button variant="link" onClick={() => onNavigate("swim")} iconRight={<Icon name="arrow-right" size={15} />}>Details</Button>} />
            ))}
          </div>
          <div className="row" style={{ marginTop: "var(--space-8)", gap: "var(--space-3)" }}>
            <Button variant="accent" onClick={() => onNavigate("swim")}>Swimming lessons overview</Button>
            <Button variant="secondary" onClick={() => onNavigate("swim-locations")}>Location</Button>
            <Button variant="secondary" onClick={() => onNavigate("swim-pricing")}>Pricing</Button>
            <Button variant="link" onClick={() => onNavigate("swim-booking")}>Submit an inquiry</Button>
          </div>
        </div>
      </section>

      {/* First Aid Training */}
      <section className="sec">
        <div className="wrap split">
          <div className="stack">
            <SectionHeading eyebrow="First Aid Training" title={C.firstAid.courseName} lead={C.firstAid.lead} size="sm" />
            <div className="grid-2">
              <Card variant="flat" padding="md" icon={<Icon name="user" size={18} />} title="Individual Training" text="Arrange the training for one person." />
              <Card variant="flat" padding="md" icon={<Icon name="briefcase" size={18} />} title="Group & Workforce Training" text="Arrange it for a workplace, team or group." />
            </div>
            <p className="note">Both pathways lead to the same {C.firstAid.courseName} training.</p>
            <div className="row" style={{ gap: "var(--space-3)" }}>
              <Button variant="accent" onClick={() => onNavigate("firstaid")}>{C.booking.ctaFirstAidExplore}</Button>
              <Button variant="link" onClick={() => onNavigate("firstaid-inquiry")}>Submit a First Aid inquiry</Button>
            </div>
          </div>
          <MediaFrame ratio="photo" src={C.images.firstAidGroup.src} alt={C.images.firstAidGroup.alt} position={C.images.firstAidGroup.position} />
        </div>
      </section>

      <section className="sec sec--sunken sec--tight">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="How it works" title={C.home.stepsTitle} size="sm" />
          </div>
          <div className="steps">
            {C.home.steps.map((s) => (
              <div className="step" key={s.id}>
                <span className="step__n">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="Locations" title="Where lessons take place" lead={C.locationsIntro} size="sm" />
          </div>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Card variant="flat" padding="lg">
              <span className="pillar__eyebrow"><Icon name="waves" size={16} /> Swimming Lessons</span>
              <h3 className="sa-card__title">{C.locations[0].name}</h3>
              <address className="addr" style={{ marginTop: "var(--space-2)" }}>
                <span className="addr__line">{C.locations[0].addressLine}</span>
                <span className="addr__line">{C.locations[0].addressLocality}</span>
              </address>
              <p className="note" style={{ marginTop: "var(--space-2)" }}>{C.locations[0].appointment}</p>
              <div className="row" style={{ marginTop: "var(--space-5)", gap: "var(--space-3)" }}>
                <Button variant="secondary" onClick={() => onNavigate("swim-locations")} iconRight={<Icon name="arrow-right" size={15} />}>Location details</Button>
                <Button variant="link" href={C.locations[0].directionsUrl} target="_blank" rel="noopener noreferrer">{C.directionsLabel}</Button>
              </div>
            </Card>
            <Card variant="accent" padding="lg">
              <span className="pillar__eyebrow"><Icon name="heart-pulse" size={16} /> First Aid Training</span>
              <h3 className="sa-card__title">Across the Greater Toronto Area</h3>
              <p className="sa-card__text" style={{ marginTop: "var(--space-2)" }}>{C.firstAid.serviceArea}</p>
              <div className="row" style={{ marginTop: "var(--space-5)" }}>
                <Button variant="secondary" onClick={() => onNavigate("firstaid-group")} iconRight={<Icon name="arrow-right" size={15} />}>Group training</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap wrap--narrow">
          <div className="sec__head">
            <SectionHeading eyebrow="Questions" title="Common questions" size="sm" />
          </div>
          <Accordion items={C.faqs.filter((f) => ["sw2", "sw4", "sw7", "fa1"].includes(f.id))} defaultOpen={["sw2"]} />
        </div>
      </section>
    </>
  );
}

Object.assign(window, { Home, PillarCard });
