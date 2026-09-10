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
const Icon = __need("Icon");
const C = window.SterlingContent;

/** The one-offering statement. Repeated on all three pages so nobody can mistake
    Individual and Group for separate courses. */
function CombinedCourseBanner() {
  return (
    <Card variant="accent" padding="lg">
      <div className="combined">
        <span className="combined__mark"><Icon name="heart-pulse" size={22} /></span>
        <div className="stack" style={{ gap: "var(--space-2)" }}>
          <h2 className="sa-card__title">{C.firstAid.courseName}</h2>
          <p className="sa-card__text">{C.firstAid.combinedNote}</p>
        </div>
      </div>
    </Card>
  );
}

/** Closing block on every First Aid page — all roads lead to the same inquiry. */
function FirstAidCta({ onNavigate, title, lead, primary = "Submit an inquiry" }) {
  return (
    <section className="sec sec--wash sec--tight">
      <div className="wrap split">
        <div className="stack">
          <SectionHeading eyebrow="First Aid Training" title={title} size="sm" lead={lead} />
          <div className="row">
            <Button variant="accent" size="lg" onClick={() => onNavigate("firstaid-inquiry")}>{primary}</Button>
            <Button variant="secondary" size="lg" href={C.contact.phoneHref} iconLeft={<Icon name="phone" size={17} />}>{C.contact.phone}</Button>
          </div>
          <p className="note">
            Or email <a href={C.contact.emailHref}>{C.contact.email}</a>
          </p>
        </div>
        <MediaFrame ratio="wide" src={C.images.firstAid.src} alt={C.images.firstAid.alt} position={C.images.firstAid.position} />
      </div>
    </section>
  );
}

/** Two pathways into the same training. Shown on all three pages. */
function PathwayCards({ onNavigate, current }) {
  const items = [
    { id: "firstaid-individual", eyebrow: "Individual Training", icon: "user", title: "For one person", text: "Arrange the training for yourself — for work, study, volunteering or your own preparedness.", cta: C.booking.ctaIndividual },
    { id: "firstaid-group", eyebrow: "Group & Workforce Training", icon: "briefcase", title: "For a group", text: "Arrange it for a business, workplace, organisation, team or community group.", cta: C.booking.ctaGroup },
  ];
  return (
    <div className="grid-2">
      {items.map((it) => (
        <Card key={it.id} variant={current === it.id ? "accent" : "flat"} padding="lg">
          <span className="pillar__eyebrow"><Icon name={it.icon} size={16} /> {it.eyebrow}</span>
          <h3 className="sa-card__title">{it.title}</h3>
          <p className="sa-card__text">{it.text}</p>
          <p className="note" style={{ marginTop: "var(--space-2)" }}>Same {C.firstAid.courseName} training.</p>
          <div className="row" style={{ marginTop: "auto", paddingTop: "var(--space-5)", gap: "var(--space-3)" }}>
            {current === it.id ? (
              <Button variant="accent" onClick={() => onNavigate("firstaid-inquiry")}>{it.cta}</Button>
            ) : (
              <Button variant="secondary" onClick={() => onNavigate(it.id)} iconRight={<Icon name="arrow-right" size={15} />}>Read more</Button>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ------------------------------------- About the Course */
function FirstAidAbout({ onNavigate }) {
  return (
    <>
      <PageHead onNavigate={onNavigate} crumbs={["First Aid Training"]} eyebrow={C.firstAid.eyebrow} title={C.firstAid.title} lead={C.firstAid.lead}>
        <div className="phead__cta">
          <Button size="lg" variant="accent" onClick={() => onNavigate("firstaid-inquiry")}>Submit an inquiry</Button>
          <Button size="lg" variant="outlineInverse" href={C.contact.phoneHref} iconLeft={<Icon name="phone" size={17} />}>{C.contact.phone}</Button>
        </div>
      </PageHead>
      <SectionNav journey={C.firstAidJourney} page="firstaid" onNavigate={onNavigate} label="First Aid Training" />

      <section className="sec sec--tight">
        <div className="wrap"><CombinedCourseBanner /></div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap split">
          <div className="stack">
            <SectionHeading eyebrow="About the course" title="What the training is" size="sm" lead={C.firstAid.aboutIntro} />
            <div className="row" style={{ gap: "var(--space-3)" }}>
              <Button variant="accent" onClick={() => onNavigate("firstaid-inquiry")}>Submit an inquiry</Button>
              <Button variant="secondary" href={C.contact.emailHref} iconLeft={<Icon name="mail" size={16} />}>Email us</Button>
            </div>
            <p className="note">{C.contact.responseTime}</p>
          </div>
          <MediaFrame ratio="photo" src={C.images.firstAid.src} alt={C.images.firstAid.alt} position={C.images.firstAid.position} />
        </div>
      </section>

      <section className="sec sec--sunken">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="Who it's for" title="Who tends to take this training" size="sm" />
          </div>
          <div className="grid-3">
            {C.firstAid.whoFor.map((w) => (
              <Card key={w.id} variant="flat" padding="lg" icon={<Icon name={w.icon} size={20} />} title={w.title} text={w.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="Two ways to arrange it" title="One offering, two pathways" lead="Individual and Group & Workforce training are the same Standard First Aid + CPR-C training — they differ only in how the session is arranged." size="sm" />
          </div>
          <PathwayCards onNavigate={onNavigate} current="firstaid" />
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap wrap--narrow">
          <div className="sec__head"><SectionHeading eyebrow="Questions" title="First Aid training FAQs" size="sm" /></div>
          <Accordion items={C.faqs.filter((f) => C.firstAid.faqIds.includes(f.id))} defaultOpen={["fa1"]} />
        </div>
      </section>

      <FirstAidCta
        onNavigate={onNavigate}
        title="Arrange Standard First Aid + CPR-C"
        lead={`Submit an inquiry and we'll confirm the arrangements with you directly. ${C.contact.responseTime}`}
      />
      <JourneyPager journey={C.firstAidJourney} page="firstaid" onNavigate={onNavigate} />
    </>
  );
}

/* ------------------------------------------------- Individual Training */
function FirstAidIndividual({ onNavigate }) {
  const d = C.firstAid.individual;
  return (
    <>
      <PageHead onNavigate={onNavigate} crumbs={["First Aid Training", "Individual Training"]} eyebrow={d.eyebrow} title={d.title} lead={d.lead}>
        <div className="phead__cta">
          <Button size="lg" variant="accent" onClick={() => onNavigate("firstaid-inquiry")}>{C.booking.ctaIndividual}</Button>
        </div>
      </PageHead>
      <SectionNav journey={C.firstAidJourney} page="firstaid-individual" onNavigate={onNavigate} label="First Aid Training" />

      <section className="sec sec--tight">
        <div className="wrap"><CombinedCourseBanner /></div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap split">
          <div className="stack">
            <SectionHeading eyebrow="Individual Training" title="Taking the training on your own" size="sm" lead={d.sameCourseNote} />
            <Card variant="flat" padding="md">
              <div className="row" style={{ gap: "var(--space-3)", alignItems: "flex-start" }}>
                <Icon name="info" size={18} />
                <p className="sa-card__text">{d.schedulingNote}</p>
              </div>
            </Card>
            <div className="row" style={{ gap: "var(--space-3)" }}>
              <Button variant="accent" onClick={() => onNavigate("firstaid-inquiry")}>{C.booking.ctaIndividual}</Button>
              <Button variant="secondary" href={C.contact.phoneHref} iconLeft={<Icon name="phone" size={16} />}>{C.contact.phone}</Button>
            </div>
          </div>
          <MediaFrame ratio="photo" src={C.images.firstAid.src} alt={C.images.firstAid.alt} position={C.images.firstAid.position} />
        </div>
      </section>

      <section className="sec sec--sunken sec--tight">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="Also available" title="Arranging it for a group instead?" size="sm" />
          </div>
          <PathwayCards onNavigate={onNavigate} current="firstaid-individual" />
        </div>
      </section>

      <FirstAidCta
        onNavigate={onNavigate}
        title="Inquire about individual training"
        lead={`Tell us your preferred location and timeframe and we'll confirm available dates with you directly. ${C.contact.responseTime}`}
        primary={C.booking.ctaIndividual}
      />
      <JourneyPager journey={C.firstAidJourney} page="firstaid-individual" onNavigate={onNavigate} />
    </>
  );
}

/* -------------------------------------- Group & Workforce Training */
function FirstAidGroup({ onNavigate }) {
  const d = C.firstAid.group;
  return (
    <>
      <PageHead onNavigate={onNavigate} crumbs={["First Aid Training", "Group & Workforce Training"]} eyebrow={d.eyebrow} title={d.title} lead={d.lead}>
        <div className="phead__cta">
          <Button size="lg" variant="accent" onClick={() => onNavigate("firstaid-inquiry")}>{C.booking.ctaGroup}</Button>
          <Button size="lg" variant="outlineInverse" href={C.contact.phoneHref} iconLeft={<Icon name="phone" size={17} />}>{C.contact.phone}</Button>
        </div>
      </PageHead>
      <SectionNav journey={C.firstAidJourney} page="firstaid-group" onNavigate={onNavigate} label="First Aid Training" />

      <section className="sec sec--tight">
        <div className="wrap"><CombinedCourseBanner /></div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap split">
          <div className="stack">
            <SectionHeading eyebrow="Group & Workforce Training" title="Training several people together" size="sm" lead={d.sameCourseNote} />
            <Card variant="flat" padding="md">
              <div className="row" style={{ gap: "var(--space-3)", alignItems: "flex-start" }}>
                <Icon name="info" size={18} />
                <p className="sa-card__text">{d.pricingNote}</p>
              </div>
            </Card>
            <div className="row" style={{ gap: "var(--space-3)" }}>
              <Button variant="accent" onClick={() => onNavigate("firstaid-inquiry")}>{C.booking.ctaGroup}</Button>
              <Button variant="secondary" href={C.contact.emailHref} iconLeft={<Icon name="mail" size={16} />}>Email us</Button>
            </div>
          </div>
          <MediaFrame ratio="photo" src={C.images.firstAidGroup.src} alt={C.images.firstAidGroup.alt} position={C.images.firstAidGroup.position} />
        </div>
      </section>

      <section className="sec sec--sunken sec--tight">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="Who we train" title="Groups we work with" size="sm" />
          </div>
          <div className="row">
            {d.audiences.map((a) => (
              <Badge key={a} tone="outline">{a}</Badge>
            ))}
          </div>
          <Card variant="flat" padding="lg" style={{ marginTop: "var(--space-8)" }}>
            <div className="row" style={{ gap: "var(--space-4)", alignItems: "flex-start" }}>
              <Icon name="map-pin" size={20} />
              <div className="stack" style={{ gap: "var(--space-2)" }}>
                <h3 className="sa-card__title" style={{ fontSize: "var(--fs-h5)" }}>Across the GTA</h3>
                <p className="sa-card__text">{C.firstAid.serviceArea}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap">
          <div className="sec__head">
            <SectionHeading eyebrow="Also available" title="Just need it for yourself?" size="sm" />
          </div>
          <PathwayCards onNavigate={onNavigate} current="firstaid-group" />
        </div>
      </section>

      <FirstAidCta
        onNavigate={onNavigate}
        title="Request group training"
        lead={`Tell us roughly how many participants, your preferred location and your timeframe, and we'll come back with the details. ${C.contact.responseTime}`}
        primary={C.booking.ctaGroup}
      />
      <JourneyPager journey={C.firstAidJourney} page="firstaid-group" onNavigate={onNavigate} />
    </>
  );
}

/* ---------------------------- The single First Aid inquiry form page */
function FirstAidInquiry({ onNavigate }) {
  return (
    <>
      <PageHead
        onNavigate={onNavigate}
        crumbs={["First Aid Training", "Inquiry"]}
        eyebrow="First Aid Training"
        title="Standard First Aid + CPR-C inquiry"
        lead="One form for both individual and group inquiries — there is only one training offering, so there is nothing to choose between."
      />
      <SectionNav journey={C.firstAidJourney} page="firstaid-inquiry" onNavigate={onNavigate} label="First Aid Training" />

      <section className="sec">
        <div className="wrap split--form">
          <FirstAidInquiryForm />
          <aside className="summary">
            <Card variant="inverse" padding="lg">
              <SectionHeading inverse eyebrow="Prefer to talk" title={C.contact.phone} size="sm" as="h2" />
              <p className="sa-card__text" style={{ marginTop: "var(--space-3)" }}>
                We can talk through group size, location and timing before you commit.
              </p>
              <div className="row" style={{ marginTop: "var(--space-5)" }}>
                <Button variant="inverse" href={C.contact.phoneHref} iconLeft={<Icon name="phone" size={16} />}>Call</Button>
                <Button variant="outlineInverse" href={C.contact.emailHref} iconLeft={<Icon name="mail" size={16} />}>Email</Button>
              </div>
            </Card>
            <Card variant="flat" padding="lg" style={{ marginTop: "var(--space-6)" }}>
              <span className="pillar__eyebrow"><Icon name="heart-pulse" size={16} /> One offering</span>
              <p className="sa-card__text" style={{ marginTop: "var(--space-2)" }}>{C.firstAid.combinedNote}</p>
            </Card>
            <Card variant="flat" padding="lg" style={{ marginTop: "var(--space-6)" }}>
              <span className="pillar__eyebrow"><Icon name="map-pin" size={16} /> Service area</span>
              <p className="sa-card__text" style={{ marginTop: "var(--space-2)" }}>{C.firstAid.serviceArea}</p>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { FirstAidAbout, FirstAidIndividual, FirstAidGroup, FirstAidInquiry, CombinedCourseBanner });
