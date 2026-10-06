export interface SeoPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  serviceType: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export function getHighQualityImageUrl(imageUrl: string, width = 1800) {
  return imageUrl.replace(
    '/image/upload/',
    `/image/upload/f_auto,q_90,w_${width},c_limit/`
  );
}

export const homeSeo = {
  title: 'LED Wall & LED Screen on Rent in Gurgaon | Tisha LED Walls',
  description:
    'Rent LED walls and LED screens in Gurgaon and Gurugram for weddings, corporate events and live shows, with installation and on-site technical support. Enquire today.',
  h1: 'LED Wall & LED Screen Rental in Gurgaon',
};

export const seoPages: SeoPage[] = [
  {
    slug: 'led-wall-rental-gurgaon',
    title: 'LED Wall Rental in Gurgaon | Tisha LED Walls',
    description:
      'Arrange an LED wall rental in Gurgaon for weddings, concerts, conferences and corporate events. Ask about screen setup, installation and event support.',
    h1: 'LED Wall Rental for Events in Gurgaon',
    intro:
      'Looking for an LED wall on rent in Gurgaon? Tisha LED Walls provides modular display rentals for events in Gurugram and the Delhi NCR areas already served by our team. Share your venue, event date and display requirements to discuss a suitable setup.',
    serviceType: 'LED wall rental',
    imageUrl: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763473380/IMG_4648_ic3pjf.jpg',
    imageAlt: 'LED wall lighting up a live event stage',
    sections: [
      {
        heading: 'Choose a screen for the venue and event',
        paragraphs: [
          'Indoor and outdoor venues have different viewing and setup requirements. The venue, audience distance, available space and event content help determine the screen configuration to discuss for your booking.',
          'LED walls can support wedding stages and receptions, corporate presentations, conferences, concerts and product launches. A modular display can be planned around the stage and sightlines rather than choosing a size without venue details.',
        ],
      },
      {
        heading: 'Installation and event support',
        paragraphs: [
          'The rental service includes professional installation and setup, on-site technical support during the event, and dismantling. Share the access and timing details for your venue when requesting a quote so setup requirements can be reviewed.',
        ],
      },
      {
        heading: 'What affects an LED wall rental quote?',
        paragraphs: [
          'A quote depends on the display dimensions and configuration, indoor or outdoor use, event duration, venue access, transportation and the technical support required. Contact the team with your event date and venue for a quote; no fixed price is assumed here.',
        ],
      },
      {
        heading: 'Plan a joined-up event setup',
        paragraphs: [
          'If your event also needs a stage, explore our stage setup service. For a standalone display enquiry, compare our LED screen rental options. The event-services hub links the LED wall service with the other event support available from Tisha LED Walls.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I rent an LED wall for a wedding in Gurgaon?',
        answer:
          'Yes. LED wall rentals are available for wedding events. Share the venue, event date and display requirements so the team can discuss a suitable setup.',
      },
      {
        question: 'Do you provide LED wall installation and technical support?',
        answer:
          'Professional setup, on-site technical support and dismantling are included in the rental service.',
      },
      {
        question: 'What LED wall size do I need for my event?',
        answer:
          'The venue dimensions, audience size, viewing distance and content all matter. Share those details so the team can discuss a suitable display configuration.',
      },
      {
        question: 'Can I rent an outdoor LED wall?',
        answer:
          'Indoor and outdoor display requirements can be discussed. Tell us about the venue and event conditions when you enquire.',
      },
      {
        question: 'What determines the cost of an LED wall rental?',
        answer:
          'The display configuration, indoor or outdoor venue, event duration, transportation, access and technical support requirements all affect a quote.',
      },
      {
        question: 'How early should I book an LED wall?',
        answer:
          'Contact the team as soon as your event date and venue are known. Availability and setup requirements can then be discussed for your specific event.',
      },
    ],
  },
  {
    slug: 'led-screen-rental-gurgaon',
    title: 'LED Screen on Rent in Gurgaon | Tisha LED Walls',
    description:
      'Need an LED screen on rent in Gurgaon? Tell Tisha LED Walls about your event, venue and display needs to discuss a screen rental with setup support.',
    h1: 'LED Screen Rental for Events in Gurgaon',
    intro:
      'Looking for an LED screen or LED display on rent in Gurgaon? Tisha LED Walls offers event screen rentals for presentations and live viewing, with installation and on-site technical support.',
    serviceType: 'LED screen rental',
    imageUrl: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763474549/IMG_4815_ypgfxe.jpg',
    imageAlt: 'Live sports broadcast on an LED screen',
    sections: [
      {
        heading: 'A screen rental for your event format',
        paragraphs: [
          'An LED screen can suit presentations, conference content, product launches and live event viewing. Tell us what you plan to display, where the audience will be seated and how the screen will be used so we can discuss the right rental option.',
          'For a larger stage display made from modular panels, see our dedicated LED wall rental page. The two services are related, but the right choice depends on your venue and event brief.',
        ],
      },
      {
        heading: 'Setup, operation and support',
        paragraphs: [
          'Professional installation, on-site technical assistance and dismantling are available with the rental. The team can review your venue access, event schedule and content requirements before confirming the setup.',
        ],
      },
      {
        heading: 'Request a screen rental quote',
        paragraphs: [
          'Screen configuration, event duration, venue conditions, transportation and support needs affect the quote. Send your date, location and a short description of the event to receive an enquiry-specific response.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I rent an LED screen for a corporate event?',
        answer:
          'LED screen rentals are used for corporate events, conferences, presentations and product launches. Share the venue and event brief to discuss the setup.',
      },
      {
        question: 'What is the difference between an LED screen and an LED wall?',
        answer:
          'The terms are often used for event displays. A modular LED wall is assembled from panels for a larger stage or backdrop, while a screen enquiry may be for a particular display use. The venue and viewing requirements help determine the suitable option.',
      },
      {
        question: 'Does the rental include installation?',
        answer:
          'Professional installation, on-site technical support and dismantling are included in the rental service.',
      },
    ],
  },
  {
    slug: 'led-tv-standee-rental-gurgaon',
    title: 'LED TV & Standee on Rent in Gurgaon | Tisha LED Walls',
    description:
      'Enquire about LED TV or standee rentals in Gurgaon for presentations, event information and promotional displays. Share your venue and date to check availability.',
    h1: 'LED TV & Standee on Rent in Gurgaon',
    intro:
      'Need an LED TV or standee for an event in Gurgaon? Tisha LED Walls offers rental enquiries for standalone displays. Tell us your event date, venue, intended use and display requirements so the team can confirm availability and setup details.',
    serviceType: 'LED TV and standee rental',
    imageUrl:
      'https://res.cloudinary.com/dcfouzaii/image/upload/v1776422241/PLASMA_TV_uregnc.jpg',
    imageAlt: 'LED TV available for event rental',
    sections: [
      {
        heading: 'A standalone display for your event',
        paragraphs: [
          'An LED TV can be a practical display option for presentations, video playback and smaller event viewing areas. Share the content, room layout and audience viewing distance when you enquire.',
          'If you are looking for a standee display for event information or promotional visuals, include the format and placement in your enquiry so availability can be checked.',
        ],
      },
      {
        heading: 'Discuss the setup for your venue',
        paragraphs: [
          'Requirements depend on the event date, venue, display use and setup access. Contact the team with these details to confirm the rental options and any setup support available for your event.',
        ],
      },
      {
        heading: 'Choose the display that fits the brief',
        paragraphs: [
          'For a standalone TV or standee, use this page to start your enquiry. For a larger stage backdrop or audience-facing event display, explore LED screen rental or LED wall rental in Gurgaon. LED wall rental remains Tisha LED Walls’ primary service.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I enquire about an LED TV on rent in Gurgaon?',
        answer:
          'Yes. Share your event date, venue, intended use and display requirements so the team can confirm availability.',
      },
      {
        question: 'Can I enquire about a standee on rent?',
        answer:
          'Send the event date, venue and the standee format or display use you need. The team can confirm what is available for your event.',
      },
      {
        question: 'Should I rent an LED TV or an LED wall?',
        answer:
          'The choice depends on the viewing area, audience size and event setup. For a larger stage display, see the LED wall rental page; for a standalone TV enquiry, contact the team with your venue details.',
      },
    ],
  },
  {
    slug: 'stage-setup-gurgaon',
    title: 'Stage Setup in Gurgaon | Tisha LED Walls',
    description:
      'Plan stage setup or stage rental in Gurgaon for weddings, corporate events and concerts, with LED wall integration and coordinated event equipment.',
    h1: 'Stage Setup for Events in Gurgaon',
    intro:
      'Tisha LED Walls offers stage rental and event setup in Gurgaon. Share your programme, venue and stage requirements to plan a setup that works with the event space.',
    serviceType: 'event stage setup and rental',
    imageUrl: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763473380/IMG_5370_eyb8qp.jpg',
    imageAlt: 'LED screen and stage at a corporate awards event',
    imagePosition: 'center 70%',
    sections: [
      {
        heading: 'Stage setups for different event formats',
        paragraphs: [
          'Stage requirements vary between a wedding, corporate presentation and live performance. Venue dimensions, audience layout, access and the planned programme help shape the stage arrangement.',
          'Mention any stage backdrop or lighting coordination needs in your brief. The team can discuss what is available for the venue and event schedule.',
          'If the event needs a backdrop display, explore LED wall rental in Gurgaon. Stage and LED wall requirements can be discussed together so the screen is considered as part of the overall stage layout.',
        ],
      },
      {
        heading: 'Coordinate the event equipment',
        paragraphs: [
          'Tisha LED Walls also lists sound, PA and AV equipment rentals. Tell the team which parts of the setup you need so availability and coordination can be discussed for your event.',
        ],
      },
      {
        heading: 'Discuss the venue and setup schedule',
        paragraphs: [
          'Include the venue, event date, expected programme and access or setup timings in your enquiry. These details help the team understand the stage requirements before preparing a quote.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide stage rental in Gurgaon?',
        answer:
          'Stage rental is listed among Tisha LED Walls’ event rentals. Contact the team with your venue and event details to discuss availability and setup.',
      },
      {
        question: 'Can an LED wall be included with a stage setup?',
        answer:
          'Yes. LED wall rental can be discussed alongside the stage arrangement so the display and stage are planned together.',
      },
      {
        question: 'What details should I include in a stage enquiry?',
        answer:
          'Share your event date, venue, programme, stage requirements and setup timings. Add any LED screen or sound requirements to the enquiry.',
      },
    ],
  },
  {
    slug: 'dj-services-gurgaon',
    title: 'DJ Services in Gurgaon | Tisha LED Walls',
    description:
      'Enquire about DJ services in Gurgaon for weddings, parties and corporate events. Discuss the event format, sound, lighting and any LED wall needs.',
    h1: 'DJ Services for Events in Gurgaon',
    intro:
      'Planning music for a wedding, party or corporate event in Gurgaon? Contact Tisha LED Walls to discuss DJ services and the equipment your event needs.',
    serviceType: 'event DJ services',
    imageUrl: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763472330/IMG_4809_rc8kcm.jpg',
    imageAlt: 'LED wall at a corporate event',
    sections: [
      {
        heading: 'Plan the music around your event',
        paragraphs: [
          'The event type, programme, venue and audience help determine the DJ setup. Share your schedule and music requirements when enquiring so the service can be discussed for your event.',
          'Sound system and PA rentals are also listed by Tisha LED Walls. If you need event visuals, explore LED wall rental and discuss the display alongside the music setup.',
        ],
      },
      {
        heading: 'Discuss sound and lighting requirements',
        paragraphs: [
          'Venue size, event timings and the planned programme affect the equipment and setup conversation. Confirm the requirements with the team rather than assuming a standard package.',
        ],
      },
      {
        heading: 'Request an event quote',
        paragraphs: [
          'Send the date, venue, event format and any sound, lighting or screen requirements. The team can follow up about availability and the next steps.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I enquire about a DJ for a wedding or party?',
        answer:
          'Yes. Share the date, venue and event format to discuss DJ service availability for a wedding, party or other event.',
      },
      {
        question: 'Can sound equipment be discussed with DJ services?',
        answer:
          'Sound and PA equipment rentals are listed among the business services. Include your venue and sound requirements in the enquiry.',
      },
      {
        question: 'Can a DJ event include an LED wall?',
        answer:
          'LED wall rental can be discussed as part of the event setup. Share how you plan to use the display and where it will be installed.',
      },
    ],
  },
  {
    slug: 'live-band-gurgaon',
    title: 'Live Band for Events in Gurgaon | Tisha LED Walls',
    description:
      'Enquire about a live band for events in Gurgaon, including weddings and corporate occasions. Discuss the stage, sound and LED display requirements.',
    h1: 'Live Band for Events in Gurgaon',
    intro:
      'If live music is part of your event in Gurgaon, contact Tisha LED Walls to discuss live band availability and the setup your venue requires.',
    serviceType: 'live band for events',
    imageUrl: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763472679/IMG_4812_umt7jh.jpg',
    imageAlt: 'Live concert stage setup',
    sections: [
      {
        heading: 'Live music for your event programme',
        paragraphs: [
          'A wedding, corporate event or private celebration each has a different programme and venue setup. Share the event format, date and music requirements so the team can discuss a suitable live-band arrangement.',
        ],
      },
      {
        heading: 'Connect the performance with the stage setup',
        paragraphs: [
          'A live performance may need stage space and sound equipment. Tisha LED Walls lists stage and sound rentals; include these needs in your enquiry so the setup can be considered together.',
          'For event visuals behind a performance, explore LED wall rental in Gurgaon and discuss how the display will fit the stage.',
        ],
      },
      {
        heading: 'Enquire about availability',
        paragraphs: [
          'Share the event date, venue, programme and any stage, sound or display requirements. Availability and details can be confirmed with the team.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I enquire about live music for a wedding?',
        answer:
          'Yes. Send the event date, venue and programme details to discuss live-band availability for your wedding.',
      },
      {
        question: 'Can the stage and sound setup be planned with a live band?',
        answer:
          'Stage and sound rentals are listed among Tisha LED Walls’ services. Include performance and venue details in your enquiry to discuss the setup.',
      },
      {
        question: 'Can an LED wall be used during a live performance?',
        answer:
          'LED wall rental can be discussed for event visuals. The stage layout and content requirements help determine how it can be incorporated.',
      },
    ],
  },
  {
    slug: 'event-decoration-gurgaon',
    title: 'Event Decoration in Gurgaon | Tisha LED Walls',
    description:
      'Discuss event decoration in Gurgaon for weddings, corporate events and parties, including stage backdrops and coordination with LED wall setups.',
    h1: 'Event Decoration in Gurgaon',
    intro:
      'Tell Tisha LED Walls about the look and layout you have in mind for your Gurgaon event. Decoration requirements can be discussed alongside stage and LED display planning.',
    serviceType: 'event decoration',
    imageUrl: 'https://ovocqgccvlthoqbzhvlm.supabase.co/storage/v1/object/public/gallery-media/corporate/1789308204133-0.JPG',
    //'https://res.cloudinary.com/dcfouzaii/image/upload/v1763361199/IMG_4794_ipv4ds.jpg'
    imageAlt: 'Corporate event backdrop',
    sections: [
      {
        heading: 'Decoration for the event setting',
        paragraphs: [
          'Wedding, corporate, birthday and party settings each call for a different approach to the stage, backdrop and event space. Share the venue, event style and areas you want to decorate when you enquire.',
        ],
      },
      {
        heading: 'Coordinate decoration with stage and screens',
        paragraphs: [
          'A stage backdrop, lighting and an LED wall all share the same visual space. Discuss event decoration with stage setup and LED wall rental early so the layout can be considered together.',
        ],
      },
      {
        heading: 'Share your brief for a quote',
        paragraphs: [
          'Include the event date, venue, occasion and any reference images or setup details in your enquiry. The team can discuss the requirements and confirm what is available.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I enquire about wedding or party decoration?',
        answer:
          'Yes. Share the occasion, venue and the areas you want decorated so the team can discuss your requirements.',
      },
      {
        question: 'Can stage decoration work with an LED wall?',
        answer:
          'Yes. The backdrop and LED display can be discussed as part of the same stage layout so the elements are planned together.',
      },
      {
        question: 'What information helps with an event decoration enquiry?',
        answer:
          'The event date, venue, occasion, style and any reference images or stage requirements help the team understand your brief.',
      },
    ],
  },
  {
    slug: 'event-services-gurgaon',
    title: 'Event Services in Gurgaon | LED Walls, Stage, DJ & More',
    description:
      'Plan event production in Gurgaon with LED wall and screen rentals at the centre, supported by stage setup, DJ services, live music and event decoration.',
    h1: 'Event Services in Gurgaon, Starting with LED Wall Rental',
    intro:
      'Tisha LED Walls helps bring event equipment and services together in Gurgaon and the Delhi NCR areas already listed by the business. LED wall rental is the primary service; stage, sound and other event needs can be discussed alongside it.',
    serviceType: 'event production services',
    imageUrl: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763360996/IMG_4793_gxxuqc.jpg',
    imageAlt: 'Wedding LED display setup',
    sections: [
      {
        heading: 'LED wall rental is the starting point',
        paragraphs: [
          'For weddings, corporate events, conferences, concerts and launches, begin with the venue, audience and display requirements. Explore LED wall rental in Gurgaon or LED screen rental to discuss the right event display.',
        ],
      },
      {
        heading: 'Supporting services for the event',
        paragraphs: [
          'Tisha LED Walls also lists LED TV rentals, with standee rental enquiries available on the LED TV and standee page, as well as stage, sound and AV equipment. DJ services, live band arrangements and event decoration can be discussed for your event brief.',
          'The services needed depend on the programme and venue. Contact the team to confirm availability rather than assuming every service is part of a standard package.',
        ],
      },
      {
        heading: 'One enquiry for the event brief',
        paragraphs: [
          'Share your event date, location, programme and the equipment or services you are considering. The team can discuss the requirements and explain the next steps for a quote.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What event services can I ask Tisha LED Walls about?',
        answer:
          'The site lists LED screen and wall rentals, sound, PA, AV, projector, LED TV and stage rentals. You can also enquire about standee rentals, DJ services, live music and event decoration; confirm availability for your date.',
      },
      {
        question: 'Can I combine stage setup and LED wall rental?',
        answer:
          'Yes. Share the venue and event brief so stage and LED display requirements can be discussed together.',
      },
      {
        question: 'How do I request a quote for multiple services?',
        answer:
          'Send one enquiry with the event date, location, programme and the services or equipment you need. The team can review the combined requirements.',
      },
    ],
  },
];
