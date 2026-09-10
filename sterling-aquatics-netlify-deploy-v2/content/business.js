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
    positioning:
      "Personalized swimming lessons and First Aid training for individuals, families and groups in Toronto.",
    region: "Toronto",
    copyright: "Sterling Aquatics · Toronto, Ontario",
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
    responseTime: "We typically reply within 24 hours.",
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
      swim: { name: "swimming-lessons-inquiry", subject: "New Swimming Lessons Inquiry" },
      firstAid: { name: "first-aid-training-inquiry", subject: "New First Aid Training Inquiry" },
    },
    honeypot: "bot-field",
    deliverTo: "sterling.aquatics.ltd@gmail.com",
    processor: "Netlify Forms",
    integrationNote:
      "Both forms submit to Netlify Forms as url-encoded data. Netlify stores the submissions and emails the address configured in the Netlify dashboard; no credential lives in this codebase. If a submission fails, the visitor is offered a prefilled email to sterling.aquatics.ltd@gmail.com as a fallback.",
    reassurance: "No payment today",
  },

  /* -------------------------------------------------------------- booking */
  booking: {
    calendlyUrl: null,
    calendlyNote:
      "Online booking is coming. For now, lessons and training are arranged through the inquiry form.",
    ctaSwimInquiry: "Submit an inquiry",
    ctaFirstAidInquiry: "Submit an inquiry",
    ctaFirstAidExplore: "Explore First Aid training",
    ctaIndividual: "Inquire about individual training",
    ctaGroup: "Request group training",
  },

  /* --------------------------------------------------------------- pillars */
  pillars: [
    {
      id: "swim",
      name: "Swimming Lessons",
      route: "swim",
      icon: "waves",
      title: "Private & semi-private swimming lessons",
      summary:
        "One-to-one and paired instruction covering water confidence, stroke development, technique and personal water safety — for children and adults.",
      audience: "For children, adults and families",
      cta: "Swimming lessons",
      ctaSecondary: "Submit an inquiry",
      photoKey: "swim",
    },
    {
      id: "firstaid",
      name: "First Aid Training",
      route: "firstaid",
      icon: "heart-pulse",
      title: "Standard First Aid + CPR-C",
      summary:
        "One training offering, arranged for individuals or for groups, workplaces and organisations across the Greater Toronto Area.",
      audience: "For individuals, workplaces and groups",
      cta: "Explore First Aid training",
      ctaSecondary: "Submit a First Aid inquiry",
      photoKey: "firstAid",
    },
  ],

  /* ------------------------------------------------------------ navigation */
  nav: [
    {
      id: "swim",
      label: "Swimming Lessons",
      route: "swim",
      children: [
        { id: "swim-overview", label: "Swimming Lessons / Overview", route: "swim" },
        { id: "swim-locations", label: "Locations", route: "swim-locations" },
        { id: "swim-pricing", label: "Pricing", route: "swim-pricing" },
        { id: "swim-booking", label: "Booking", route: "swim-booking" },
      ],
    },
    {
      id: "firstaid",
      label: "First Aid Training",
      route: "firstaid",
      children: [
        { id: "fa-about", label: "About the Course", route: "firstaid" },
        { id: "fa-individual", label: "Individual Training", route: "firstaid-individual" },
        { id: "fa-group", label: "Group & Workforce Training", route: "firstaid-group" },
      ],
    },
    { id: "about", label: "About", route: "about" },
    { id: "contact", label: "Contact", route: "contact" },
  ],

  /* Swimming Lessons journey — Our Instructors is intentionally absent. */
  swimJourney: [
    { id: "swim", label: "Overview" },
    { id: "swim-locations", label: "Locations" },
    { id: "swim-pricing", label: "Pricing" },
    { id: "swim-booking", label: "Booking" },
  ],

  firstAidJourney: [
    { id: "firstaid", label: "About the Course" },
    { id: "firstaid-individual", label: "Individual Training" },
    { id: "firstaid-group", label: "Group & Workforce Training" },
  ],

  /* ------------------------------------------------------- home messaging */
  home: {
    headline: "Skills for the water. Confidence for life.",
    lead:
      "Sterling Aquatics provides personalized swimming lessons and First Aid training for individuals, families and groups in Toronto.",
    pillarsEyebrow: "Two services, one standard",
    pillarsTitle: "Swimming instruction and First Aid training",
    pillarsLead:
      "One team for water skills and emergency response — so families, adult swimmers and employers work with the same instructors.",
    stepsTitle: "How it works",
    steps: [
      {
        id: "s1",
        n: "01",
        title: "Tell us what you need",
        text: "Lessons for one swimmer, or Standard First Aid + CPR-C for a group. Two minutes, no account required.",
      },
      {
        id: "s2",
        n: "02",
        title: "We reply within 24 hours",
        text: "We confirm availability and arrange a time that works, then send the details you need before your first session.",
      },
      {
        id: "s3",
        n: "03",
        title: "Train, review, progress",
        text: "After the initial lesson we develop a plan for ongoing lessons based on your current ability, goals and progress.",
      },
    ],
  },

  /* --------------------------------------------------- FIRST AID TRAINING */
  firstAid: {
    courseName: "Standard First Aid + CPR-C",
    eyebrow: "First Aid Training",
    title: "Standard First Aid + CPR-C",
    lead:
      "Sterling Aquatics offers Standard First Aid + CPR-C as one combined training offering. Arrange it for yourself or for a group.",
    combinedNote:
      "Standard First Aid and CPR-C are not separate offerings here. They are taught together as one course.",
    aboutIntro:
      "This page explains what the training is and who tends to take it. We confirm the specific arrangements with you directly before you commit.",
    whoFor: [
      {
        id: "w1",
        title: "Individuals",
        icon: "user",
        text: "People who need Standard First Aid + CPR-C for work, study, volunteering or their own preparedness.",
      },
      {
        id: "w2",
        title: "Workplaces & organisations",
        icon: "briefcase",
        text: "Employers arranging Standard First Aid + CPR-C for staff, with training delivered for the group together.",
      },
      {
        id: "w3",
        title: "Teams & community groups",
        icon: "users",
        text: "Clubs, teams, community organisations and other groups arranging the training for their members.",
      },
    ],

    individual: {
      eyebrow: "Individual Training",
      title: "Standard First Aid + CPR-C for individuals",
      lead:
        "The same Standard First Aid + CPR-C training, arranged for one person. Tell us what you need and we'll confirm the details with you.",
      sameCourseNote:
        "This is the same Standard First Aid + CPR-C training offered to groups — not a separate course.",
      schedulingNote:
        "There is no online course calendar. Submit an inquiry and we'll confirm available dates with you directly.",
    },

    group: {
      eyebrow: "Group & Workforce Training",
      title: "Standard First Aid + CPR-C for groups and workplaces",
      lead:
        "The same Standard First Aid + CPR-C training, arranged for multiple participants — for businesses, workplaces, organisations, teams and community groups.",
      sameCourseNote:
        "This is the same Standard First Aid + CPR-C training offered to individuals — not a separate course.",
      audiences: ["Businesses", "Workplaces", "Organisations", "Teams", "Community groups"],
      pricingNote:
        "Group arrangements are quoted after we understand the group size, location and timing.",
    },

    serviceArea:
      "Standard First Aid + CPR-C training is arranged across the Greater Toronto Area.",
    faqIds: ["fa1", "fa2", "fa3"],
  },

  /* ------------------------------------------------- SWIMMING LESSONS */
  swim: {
    eyebrow: "Swimming Lessons",
    title: "Private & semi-private swimming lessons",
    lead:
      "One-to-one and paired instruction for children, adults, beginners and experienced swimmers in downtown Toronto.",
    lessonLength: "45 to 60 minutes",
    formats: [
      {
        id: "private",
        label: "Private lessons",
        blurb: "One swimmer, one instructor for the full lesson.",
        points: [
          "One swimmer, one instructor for the full lesson",
          "A plan built around your goals — water confidence, stroke work or technique",
          "Lessons of 45 to 60 minutes",
          "Cancel or reschedule without penalty with at least 24 hours' notice",
        ],
      },
      {
        id: "semi",
        label: "Semi-private lessons",
        blurb: "Two swimmers who register together share one instructor.",
        points: [
          "Two swimmers who register together — you arrange both participants",
          "Same instructor and lesson plan for both swimmers",
          "Lower cost per swimmer than a private lesson",
          "60-minute lessons",
        ],
      },
      {
        id: "adult",
        label: "Adult lessons",
        blurb: "Private instruction for adults, including first-time swimmers.",
        points: [
          "First-time swimmers welcome — no prior experience assumed",
          "Breathing, floating and comfort in deep water",
          "Stroke correction for triathlon and open-water goals",
          "Ontario Fire Administration Inc. (OFAI) swim test training",
        ],
      },
    ],
    /* Plain-language focus areas — not levels, not an award structure. */
    focusAreas: [
      {
        id: "fa-comfort",
        title: "Water comfort",
        text: "Entries and exits, floating, breath control and confidence in shallow water.",
        who: "First-time swimmers of any age",
      },
      {
        id: "fa-independent",
        title: "Independent swimming",
        text: "Swimming unassisted over a short distance, treading water and deep-water confidence.",
        who: "Swimmers building independence",
      },
      {
        id: "fa-strokes",
        title: "Stroke development",
        text: "Front crawl, back crawl and breaststroke fundamentals, with kick and breathing timing.",
        who: "Swimmers ready for formal strokes",
      },
      {
        id: "fa-technique",
        title: "Technique & endurance",
        text: "Stroke refinement, turns, pacing and continuous swimming.",
        who: "Experienced swimmers and adult goal-setters",
      },
      {
        id: "fa-safety",
        title: "Personal water safety",
        text: "Self-rescue, judgement around water and safe habits at pools, cottages and beaches.",
        who: "Every swimmer, at every stage",
      },
    ],
    /* Lesson experience — approved copy. */
    experience: [
      {
        id: "x1",
        title: "Before your lesson",
        text: "Please arrive five minutes before your scheduled lesson at Sterling Aquatics, 1110 Bay Street, Toronto.",
        icon: "clock",
      },
      {
        id: "x2",
        title: "Initial assessment",
        text: "At the beginning of your first lesson, we assess your current swimming ability and discuss your goals and past experience in the water.",
        icon: "clipboard-check",
      },
      {
        id: "x3",
        title: "Lesson structure",
        text: "The full lesson is taught in the water using appropriate swimming aids when needed.",
        icon: "waves",
      },
      {
        id: "x4",
        title: "Ongoing lesson plan",
        text: "After the initial lesson, we develop a plan for ongoing lessons based on your current ability, goals and progress.",
        icon: "trending-up",
      },
    ],
    abilityOptions: [
      "First time in a pool",
      "Comfortable in shallow water",
      "Swims independently",
      "Refining stroke technique",
    ],
    availabilityOptions: [
      "Weekday mornings",
      "Weekday afternoons",
      "Weekday evenings",
      "Saturday",
      "Sunday",
    ],
    faqIds: ["sw1", "sw2", "sw3", "sw4", "sw5", "sw6", "sw7"],
  },

  /* -------------------------------------------------------------- pricing */
  pricing: {
    eyebrow: "Pricing",
    title: "Lesson pricing",
    lead:
      "Private and semi-private lessons are available individually or as an eight-lesson package. Semi-private prices are for two swimmers together.",
    individual: [
      { id: "p45", label: "45-minute private lesson", detail: "One swimmer with one instructor", price: "$65" },
      { id: "p60", label: "60-minute private lesson", detail: "One swimmer with one instructor", price: "$80" },
      { id: "s60", label: "60-minute semi-private lesson", detail: "Two swimmers with one instructor", price: "$100" },
    ],
    packages: [
      { id: "k45", label: "Eight 45-minute private lessons", detail: "One swimmer with one instructor", price: "$500", saving: "Saves $20" },
      { id: "k60", label: "Eight 60-minute private lessons", detail: "One swimmer with one instructor", price: "$600", saving: "Saves $40" },
      { id: "ks60", label: "Eight 60-minute semi-private lessons", detail: "Two swimmers with one instructor", price: "$760", saving: "Saves $40" },
    ],
    semiPrivateNote:
      "Semi-private lessons are for two swimmers who register together. Sterling Aquatics does not match swimmers — please arrange both participants before booking.",
    firstAidNote:
      "Standard First Aid + CPR-C is quoted per inquiry — for individuals and for groups alike — once we know the participants, location and timing.",
  },

  /* --------------------------------------------------- cancellation policy */
  cancellation: {
    heading: "Cancellation and Rescheduling Policy",
    short: "Cancel or reschedule without penalty with at least 24 hours' notice.",
    policy:
      "Lessons may be cancelled or rescheduled without penalty when at least 24 hours' notice is provided. Cancellations or rescheduling requests made less than 24 hours before the scheduled lesson are charged the full lesson fee.",
    howTo:
      "To cancel or reschedule, call 647-740-6885 or email sterling.aquatics.ltd@gmail.com as early as you can.",
  },

  /* ------------------------------------------------------------- about us */
  about: {
    eyebrow: "About",
    title: "Building Confidence and Safer Communities Through Education",
    lead:
      "Sterling Aquatics provides personalized swimming lessons and First Aid training for individuals, families and groups in Toronto. Our goal is to help people develop practical skills, greater confidence and a stronger foundation for safety.",
    storyEyebrow: "Our story",
    storyTitle: "Where Sterling Aquatics started",
    story: [
      "Sterling Aquatics began with a commitment to promoting water safety and empowering swimmers of all ages to feel confident in the water. Through personalized instruction, we help each swimmer develop practical skills at a pace that reflects their experience, comfort level and goals.",
      "Our work in swimming instruction highlighted the broader importance of safety education. That experience led Sterling Aquatics to expand into First Aid training, allowing us to support individuals, groups and the next generation of instructors with practical skills that can make a meaningful difference in their communities.",
    ],
  },

  /* --------------------------------------------------------------- privacy */
  privacy: {
    heading: "Privacy Policy",
    lead:
      "This policy explains what Sterling Aquatics collects through this website, why we collect it, and how to reach us about your information.",
    sections: [
      {
        id: "pv1",
        title: "What the inquiry forms collect",
        body: "Our inquiry forms ask for your name, email address and, optionally, your phone number, along with details about the lessons or training you're asking about — such as the participant, their swimming ability, your preferred times, or the size and location of a group.",
      },
      {
        id: "pv2",
        title: "Why we collect it",
        body: "We use this information to respond to your inquiry and to arrange lessons or training. Details about ability, goals and availability help us plan a suitable session before you commit.",
      },
      {
        id: "pv3",
        title: "How we use it",
        body: "We use your email address and phone number to reply to your inquiry and to communicate about your booking. We do not sell your personal information.",
      },
      {
        id: "pv4",
        title: "Who processes and stores form submissions",
        body: "This website is hosted on Netlify, and our inquiry forms use Netlify Forms. When you submit a form, Netlify processes and stores your submission on our behalf and forwards it to us by email. Netlify may also record technical details such as your IP address and the time of submission as part of its spam filtering. If we connect a booking or scheduling service in future, that provider may process the information you give it in order to arrange your session. We only use services needed to receive and respond to inquiries.",
      },
      {
        id: "pv5",
        title: "Access, correction and deletion",
        body: "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Email sterling.aquatics.ltd@gmail.com or call 647-740-6885 and we'll respond within a reasonable time.",
      },
      {
        id: "pv6",
        title: "Contact us about privacy",
        body: "For any question about this policy or your information, email sterling.aquatics.ltd@gmail.com or call 647-740-6885.",
      },
    ],
  },

  /* --------------------------------------------------------- accessibility */
  accessibility: {
    heading: "Accessibility",
    lead:
      "Sterling Aquatics is committed to providing clear information and a welcoming experience for customers and spectators.",
    statement:
      "The facility at 1110 Bay Street is accessible for parents, guardians and other spectators attending to watch a lesson; however, the swimming pool itself is not wheelchair accessible. If you have an accessibility requirement or would like to discuss a possible accommodation, please contact us before booking.",
    points: [
      {
        id: "ac1",
        title: "Spectator access",
        text: "The facility is accessible to spectators, including parents or guardians attending to watch a child swim.",
        icon: "users",
      },
      {
        id: "ac2",
        title: "Pool access",
        text: "The swimming pool itself is not wheelchair accessible.",
        icon: "info",
      },
      {
        id: "ac3",
        title: "Talk to us first",
        text: "Customers are encouraged to contact us before booking to discuss accessibility requirements or accommodations.",
        icon: "phone",
      },
      {
        id: "ac4",
        title: "Clear communication",
        text: "We will make reasonable efforts to provide clear communication and support an accessible customer experience where possible.",
        icon: "message-circle",
      },
    ],
  },

  /* ------------------------------------------------------------- location */
  /* One location, address published. No embedded map — a Get Directions link
     hands off to Google Maps instead. `mapProvider: null` keeps the
     architecture map-capable if an embedded map is wanted later. */
  locationsEyebrow: "Locations",
  locationsTitle: "Where lessons take place",
  locationsIntro:
    "Swimming lessons take place at Sterling Aquatics, 1110 Bay Street, Toronto. Lessons are by appointment only.",
  appointmentNote: "By appointment only",
  directionsLabel: "Get Directions",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=1110+Bay+Street%2C+Toronto%2C+ON+M5S+2Y1",
  mapProvider: null,
  locations: [
    {
      id: "bay-street",
      name: "Sterling Aquatics",
      addressLine: "1110 Bay Street",
      addressLocality: "Toronto, ON M5S 2Y1",
      addressFull: "1110 Bay Street, Toronto, ON M5S 2Y1",
      appointment: "By appointment only",
      lessonTypes: "Private · Semi-private",
      photoKey: "pool",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=1110+Bay+Street%2C+Toronto%2C+ON+M5S+2Y1",
    },
  ],

  /* ------------------------------------------------------------ policies */
  policies: [
    { id: "cancellation", label: "Cancellation Policy", route: "cancellation" },
    { id: "privacy", label: "Privacy Policy", route: "privacy" },
    { id: "accessibility", label: "Accessibility", route: "accessibility" },
  ],

  /* ------------------------------------------------------------------ FAQ */
  faqs: [
    { id: "sw1", section: "Swimming Lessons", question: "How long is a swimming lesson?", answer: "Lessons run 45 to 60 minutes. Private lessons are available in both lengths; semi-private lessons are 60 minutes." },
    { id: "sw2", section: "Swimming Lessons", question: "What is the difference between private and semi-private lessons?", answer: "Private lessons are one swimmer with one instructor. Semi-private lessons are two swimmers with one instructor, booked together and sharing the same lesson plan." },
    { id: "sw3", section: "Swimming Lessons", question: "Do you match swimmers for semi-private lessons?", answer: "No. Sterling Aquatics does not match swimmers. If you would like a semi-private lesson, please arrange both participants yourself before booking." },
    { id: "sw4", section: "Swimming Lessons", question: "Where do lessons take place?", answer: "Lessons take place at Sterling Aquatics, 1110 Bay Street, Toronto, ON M5S 2Y1." },
    { id: "sw5", section: "Swimming Lessons", question: "Do I need an appointment?", answer: "Yes. Sterling Aquatics operates by appointment only, so please arrange your lesson before visiting." },
    { id: "sw6", section: "Swimming Lessons", question: "How early should I arrive?", answer: "Please arrive five minutes before your scheduled lesson at Sterling Aquatics, 1110 Bay Street, Toronto." },
    { id: "sw7", section: "Swimming Lessons", question: "What is your cancellation and rescheduling policy?", answer: "Lessons may be cancelled or rescheduled without penalty when at least 24 hours' notice is provided. Cancellations or rescheduling requests made less than 24 hours before the scheduled lesson are charged the full lesson fee." },
    { id: "fa1", section: "First Aid Training", question: "Is Standard First Aid and CPR-C one course or two?", answer: "One. Sterling Aquatics offers Standard First Aid + CPR-C as a single combined training offering. There is no separate CPR-only or First Aid-only course." },
    { id: "fa2", section: "First Aid Training", question: "What is the difference between Individual and Group & Workforce training?", answer: "Only how it is arranged. Both are the same Standard First Aid + CPR-C training. Individual Training is for one person; Group & Workforce Training is for multiple participants from a business, workplace, organisation, team or community group." },
    { id: "fa3", section: "First Aid Training", question: "How do I arrange First Aid training?", answer: "Submit a First Aid inquiry telling us whether it is for an individual or a group, roughly how many participants, and your preferred location and timeframe. We typically reply within 24 hours." },
  ],

  /* ----------------------------------------------------------- photography */
  /* Real, locally bundled assets in assets/photography/. Alt text describes only
     what is visible — it makes no claim about the people, facility, business or
     any certification shown. */
  images: {
    pool: {
      src: "assets/photography/indoor-pool-lane-ladder.png",
      alt: "A calm indoor swimming pool with lane ropes and a stainless steel ladder at the pool edge.",
      position: "center 60%",
    },
    swim: {
      src: "assets/photography/adults-swimming-lesson-in-water.png",
      alt: "Three adults in a swimming pool during an in-water lesson, holding flotation aids.",
      position: "center 35%",
    },
    firstAid: {
      src: "assets/photography/cpr-practice-manikin-aed.png",
      alt: "Hands performing chest compressions on a CPR training manikin beside an AED training unit.",
      position: "center 50%",
    },
    firstAidGroup: {
      src: "assets/photography/group-first-aid-cpr-training.png",
      alt: "Group gathered around a CPR training manikin during a First Aid demonstration.",
      /* Subject sits low-centre; hold the frame there so the manikin and the
         kneeling participants stay in shot when the crop tightens. */
      position: "50% 62%",
    },
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
      seoClusters: [
        { id: "firstaid", intents: ["standard first aid + CPR-C Toronto", "workplace standard first aid + CPR-C training", "group first aid + CPR-C training", "corporate first aid training Toronto"] },
        { id: "swim", intents: ["private swimming lessons Toronto", "semi-private swimming lessons", "adult swimming lessons", "kids swimming lessons", "swimming lessons near me"] },
        { id: "areas", intents: ["neighbourhood-specific swimming lesson searches"], rule: "One page per area only where instructor, availability and lesson types genuinely differ. Never a template swap on a place name." },
      ],
      seoRules: [
        "One substantial page per intent cluster; no thin near-duplicate location pages.",
        "Never keyword-stuff — headlines stay plain and human.",
        "FAQ blocks answer real questions in full sentences.",
        "Resources articles carry the long-tail; service pages carry commercial intent.",
      ],
    },
    instructors: {
      status: "deferred",
      reason:
        "Instructor names, biographies, photographs and qualifications are not published. Re-add the Our Instructors journey step and page when that content is approved.",
    },
  },
};
