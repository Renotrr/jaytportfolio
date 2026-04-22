export type StatItem = { value: number; suffix?: string; label: string };

export type ToolPill = { label: string };

export type WorkFeature = { text: string };

export type WorkProject = { id: string; layout: "image" | "text" | "wide"; tag: string; number?: string; title: string; description: string; image: string; imageAlt: string; features?: WorkFeature[]; liveLabel?: string };

export type GraphicProject = { title: string; category: string; image: string; imageAlt: string };

export type CaseStudySection = { label: string; title: string; paragraphs: string[]; bullets?: string[]; boxes?: { title: string; text: string }[] };

export type CaseStudy = { id: string; navLabel: string; heroIndex: string; title: string; subtitle: string; image: string; imageAlt: string; meta: { label: string; value: string }[]; sections: CaseStudySection[]; outcome: { title: string; text: string; liveUrl?: string | null; liveLabel?: string | null } };



export const heroVideo = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4" as const;

export const studioVideo = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8' as const;

export const heroPreviewFallback = "PASTE_YOUR_WORK_PREVIEW_IMAGE_URL_HERE" as const;

export const profileImage = "PASTE_YOUR_PROFILE_PHOTO_URL_HERE" as const;

export const heroContent = {
  "logo": "John Adewole",
  "annotation": "Design That Speaks, Stories That Connect",
  "intro": "Hi, I am",
  "nameLines": [
    "John",
    "Adewole"
  ],
  "mark": "✦",
  "role": "Creative Designer & No-Code Developer",
  "description": "I help brands and ideas come to life through thoughtful design, motion, and no-code development — using Framer, Figma, and Canva.",
  "email": "johnadewole23@gmail.com"
} as const;

export const aboutContent = {
  "eyebrow": "Creative Designer · No-Code Developer · Graphic Designer",
  "headingLines": [
    "A designer who works",
    "at the intersection",
    "of clarity and craft."
  ],
  "paragraphs": [
    "I'm a creative designer with over 3 years of experience crafting digital experiences that balance clarity, emotion, and functionality.",
    "My work sits at the intersection of design, motion, and no-code development. I use Framer, Figma, and Canva to bring ideas to life — whether it's a website, product interface, or visual identity.",
    "I approach every project with a focus on simplicity, structure, and user experience, ensuring that what I create is not just visually appealing, but meaningful and effective."
  ],
  "badge": "4+",
  "badgeLabel": "Years experience"
} as const;

export const aboutStats: StatItem[] = [
  {
    "value": 3,
    "suffix": "+",
    "label": "Years designing"
  },
  {
    "value": 5,
    "suffix": "",
    "label": "Live products"
  },
  {
    "value": 15,
    "suffix": "+",
    "label": "Brands crafted"
  },
  {
    "value": 6,
    "suffix": "",
    "label": "AI tools mastered"
  }
];

export const aboutTools: ToolPill[] = [
  {
    "label": "Figma"
  },
  {
    "label": "Framer"
  },
  {
    "label": "Canva"
  },
  {
    "label": "Lovable AI"
  },
  {
    "label": "Claude AI"
  },
  {
    "label": "Leonardo AI"
  }
];

export const workProjects: WorkProject[] = [
  {
    "id": "cs-chema",
    "layout": "image",
    "tag": "Framer · 2024",
    "number": null,
    "title": "Chema Chemical Solutions",
    "description": "B2B website designed to build trust and drive enterprise inquiries across 11 industries.",
    "image": "PASTE_YOUR_CHEMA_MOCKUP_URL_HERE",
    "imageAlt": "Chema Chemical Solutions",
    "features": null,
    "liveLabel": null
  },
  {
    "id": "cs-everbuilt",
    "layout": "text",
    "tag": "",
    "number": "01",
    "title": "EverBuilt Construction",
    "description": "A premium construction company site built to showcase project quality and convert high-value clients.",
    "image": "PASTE_YOUR_EVERBUILT_MOCKUP_URL_HERE",
    "imageAlt": "EverBuilt",
    "features": [
      {
        "text": "100+ project portfolio with category filters"
      },
      {
        "text": "Trust signals and quote request flow"
      },
      {
        "text": "Built in Framer — no code, full control"
      }
    ],
    "liveLabel": "Read case study"
  },
  {
    "id": "cs-looma",
    "layout": "text",
    "tag": "",
    "number": "02",
    "title": "Looma Photography Agency",
    "description": "An editorial fashion portfolio designed to feel as intentional as the photography it presents.",
    "image": "PASTE_YOUR_LOOMA_MOCKUP_URL_HERE",
    "imageAlt": "Looma",
    "features": [
      {
        "text": "Cinematic scroll gallery for brand clients"
      },
      {
        "text": "Editorial aesthetic — minimal, breathable"
      },
      {
        "text": "Six-step client process, clearly communicated"
      }
    ],
    "liveLabel": "Read case study"
  },
  {
    "id": "cs-requestify",
    "layout": "text",
    "tag": "",
    "number": "03",
    "title": "Requestify — DJ Request App",
    "description": "A live song-request platform connecting audiences to DJs in real time — built for dark venues and fast interactions.",
    "image": "PASTE_YOUR_REQUESTIFY_MOCKUP_URL_HERE",
    "imageAlt": "Requestify",
    "features": [
      {
        "text": "No-app-download audience flow via QR code"
      },
      {
        "text": "DJ live dashboard with tipping & priority queue"
      }
    ],
    "liveLabel": "Read case study"
  },
  {
    "id": "cs-atelier",
    "layout": "wide",
    "tag": "Lovable AI · 2025",
    "number": null,
    "title": "Neutral Grace — Fashion E-commerce",
    "description": "A luxury boutique storefront as considered and minimal as the clothes it sells.",
    "image": "PASTE_YOUR_BOUTIQUE_MOCKUP_URL_HERE",
    "imageAlt": "Neutral Grace Boutique",
    "features": null,
    "liveLabel": "Read case study"
  }
];

export const graphicProjects: GraphicProject[] = [
  {
    "title": "Anora Grill & Sip",
    "category": "Brand Identity · Logo Design",
    "image": "PASTE_YOUR_ANORA_LOGO_URL_HERE",
    "imageAlt": "Anora Grill & Sip"
  },
  {
    "title": "Creating Imperfections",
    "category": "Editorial Poster · Gallery Art",
    "image": "PASTE_YOUR_CREATING_MOCKUP_URL_HERE",
    "imageAlt": "Creating Imperfections"
  },
  {
    "title": "Insurgent",
    "category": "Music Cover Artwork · Sonaya",
    "image": "PASTE_YOUR_INSURGENT_COVER_URL_HERE",
    "imageAlt": "Insurgent"
  },
  {
    "title": "Jazzy Burger",
    "category": "Campaign · Billboard Mockup",
    "image": "PASTE_YOUR_JAZZY_BILLBOARD_URL_HERE",
    "imageAlt": "Jazzy Burger"
  },
  {
    "title": "Midnight Pulse",
    "category": "Event Identity · DJ Night Poster",
    "image": "PASTE_YOUR_MIDNIGHT_PULSE_URL_HERE",
    "imageAlt": "Midnight Pulse"
  },
  {
    "title": "Anora Packaging",
    "category": "Brand Packaging · Product Design",
    "image": "PASTE_YOUR_ANORA_PACKAGING_URL_HERE",
    "imageAlt": "Anora Packaging"
  },
  {
    "title": "Creating",
    "category": "Experimental Art Direction",
    "image": "PASTE_YOUR_CREATING_POSTER_URL_HERE",
    "imageAlt": "Creating"
  },
  {
    "title": "Rising Sun",
    "category": "Movie Poster · Film Art",
    "image": "PASTE_YOUR_RISING_SUN_URL_HERE",
    "imageAlt": "Rising Sun"
  },
  {
    "title": "Balenciaga",
    "category": "Fashion Campaign · New Collection",
    "image": "PASTE_YOUR_BALENCIAGA_URL_HERE",
    "imageAlt": "Balenciaga"
  },
  {
    "title": "The Corporate Rave",
    "category": "Event Branding · Flag & Identity",
    "image": "PASTE_YOUR_CORPORATE_RAVE_URL_HERE",
    "imageAlt": "The Corporate Rave"
  },
  {
    "title": "Jazzy Burger",
    "category": "Social Media Poster · Food Brand",
    "image": "PASTE_YOUR_JAZZY_BURGER_URL_HERE",
    "imageAlt": "Jazzy Burger Poster"
  },
  {
    "title": "Anora Tropical Zest",
    "category": "Product Label · Juice Brand",
    "image": "PASTE_YOUR_ANORA_JUICE_URL_HERE",
    "imageAlt": "Anora Tropical Zest"
  }
];

export const studioTools: ToolPill[] = [
  {
    "label": "Figma"
  },
  {
    "label": "Framer"
  },
  {
    "label": "Canva"
  },
  {
    "label": "Lovable AI"
  },
  {
    "label": "Claude AI"
  },
  {
    "label": "Leonardo AI"
  }
];

export const studioContent = {
  "eyebrow": "Studio-grade design · No-code development",
  "titleLines": [
    "Have an idea you",
    "want to bring",
    "to life?"
  ],
  "subtitle": "Let's work together."
} as const;

export const contactContent = {
  "eyebrow": "Available for work",
  "titleLines": [
    "Let's build",
    "something",
    "unforgettable."
  ],
  "subtitle": "Open to freelance, collaborations & full-time roles.",
  "email": "johnadewole23@gmail.com",
  "footerLeft": "Designing since 2022",
  "footerRight": "© All rights reserved"
} as const;

export const contactLinks = [
  {
    "label": "Instagram",
    "href": "#"
  },
  {
    "label": "WhatsApp",
    "href": "#"
  },
  {
    "label": "Email",
    "href": "mailto:johnadewole23@gmail.com"
  },
  {
    "label": "Behance",
    "href": "#"
  },
  {
    "label": "LinkedIn",
    "href": "#"
  }
] as const;

export const thumbnailImages = [
  "PASTE_YOUR_WORK_PREVIEW_IMAGE_URL_HERE",
  "PASTE_YOUR_BOUTIQUE_MOCKUP_URL_HERE",
  "PASTE_YOUR_MIDNIGHT_PULSE_URL_HERE",
  "PASTE_YOUR_INSURGENT_COVER_URL_HERE",
  "PASTE_YOUR_JAZZY_BILLBOARD_URL_HERE",
  "PASTE_YOUR_RISING_SUN_URL_HERE"
] as const;

export const caseStudies: CaseStudy[] = [
  {
    "id": "cs-chema",
    "navLabel": "UI/UX · Framer · 2024",
    "heroIndex": "Case Study — 01",
    "title": "Chema Chemical Solutions",
    "subtitle": "A B2B website designed to build trust and drive enterprise inquiries.",
    "image": "PASTE_YOUR_CHEMA_MOCKUP_URL_HERE",
    "imageAlt": "Chema Chemical Solutions",
    "meta": [
      {
        "label": "Client",
        "value": "Chema"
      },
      {
        "label": "Year",
        "value": "2024"
      },
      {
        "label": "Tool",
        "value": "Framer"
      },
      {
        "label": "Role",
        "value": "UI/UX Designer"
      },
      {
        "label": "Timeline",
        "value": "3 weeks"
      }
    ],
    "sections": [
      {
        "label": "Overview & Problem",
        "title": "Expertise without visibility.",
        "paragraphs": [
          "Chema had deep expertise serving 11 industries — textiles, rubber, leather, paper, cosmetics, and more — but their digital presence didn't reflect this. An outdated site was costing them credibility with enterprise buyers who evaluate vendors online before making contact.",
          "The core challenge: design a site that feels authoritative and precise while remaining accessible to non-technical decision-makers. Credibility and clarity had to co-exist."
        ],
        "bullets": [],
        "boxes": []
      },
      {
        "label": "The Approach",
        "title": "Start with trust, then clarity.",
        "paragraphs": [
          "I mapped the enterprise procurement journey: buyers arrive skeptical, scan for proof, then look for an easy next step. The design had to answer three questions immediately — Who are you? What do you do? Why should I trust you?"
        ],
        "bullets": [],
        "boxes": [
          {
            "title": "Competitor Research",
            "text": "Studied BASF, Eastman Chemical, and Clariant — trust in this sector comes from technical specificity, not design flair. Product detail and industry coverage matter more than aesthetics."
          },
          {
            "title": "User Insight",
            "text": "Enterprise procurement managers prioritise: product clarity, industry-specific proof points, and a frictionless path to contact. Generic copy kills credibility instantly."
          }
        ]
      },
      {
        "label": "The Solution",
        "title": "A structured, confident digital presence.",
        "paragraphs": [],
        "bullets": [
          "Clear product catalog with three core product lines and per-industry application context",
          "Industry navigation serving 11 sectors without overwhelming a single visitor",
          "R&D section establishing scientific credibility and innovation credentials",
          "FAQ addressing top enterprise buyer concerns before they need to ask",
          "Streamlined contact and inquiry flow as the primary conversion path"
        ],
        "boxes": []
      },
      {
        "label": "Design Highlights",
        "title": "Key Design Decisions",
        "paragraphs": [],
        "bullets": [],
        "boxes": [
          {
            "title": "Dark hero with factory imagery",
            "text": "Established physical scale and industrial credibility above the fold — before the user reads a word."
          },
          {
            "title": "Product cards with industry tags",
            "text": "Each product shows exactly which industries it serves — eliminating ambiguity for buyers with specific needs."
          },
          {
            "title": "Statistics as trust anchors",
            "text": "Operational metrics surfaced early to signal scale and reliability."
          },
          {
            "title": "Minimal nav, focused CTA",
            "text": "Every page path leads toward 'get in touch' — removing distractions from the primary conversion goal."
          }
        ]
      }
    ],
    "outcome": {
      "title": "The Outcome",
      "text": "A professional, structured digital presence that positions Chema as the authoritative partner for chemical solutions across 11 industries. Clean architecture, industry-specific clarity, and a credible visual identity — built entirely in Framer.",
      "liveUrl": "https://imaginative-spinosaurus-296926.framer.app",
      "liveLabel": "View live site"
    }
  },
  {
    "id": "cs-everbuilt",
    "navLabel": "UI/UX · Framer · 2024",
    "heroIndex": "Case Study — 02",
    "title": "EverBuilt Construction",
    "subtitle": "A premium construction website built to convert high-value clients.",
    "image": "PASTE_YOUR_EVERBUILT_MOCKUP_URL_HERE",
    "imageAlt": "EverBuilt Construction",
    "meta": [
      {
        "label": "Client",
        "value": "EverBuilt"
      },
      {
        "label": "Year",
        "value": "2024"
      },
      {
        "label": "Tool",
        "value": "Framer"
      },
      {
        "label": "Role",
        "value": "UI/UX Designer"
      },
      {
        "label": "Timeline",
        "value": "3 weeks"
      }
    ],
    "sections": [
      {
        "label": "Overview & Problem",
        "title": "15 years of work. No digital presence to match it.",
        "paragraphs": [
          "EverBuilt had delivered 100+ projects across the UK — commercial, industrial, residential — with $20M+ in completed value. But their online presence didn't communicate any of this. They were losing premium contracts to competitors with stronger first impressions.",
          "The design needed to do two things: demonstrate the quality of their work through a compelling portfolio, and make the path from interest to inquiry completely frictionless."
        ],
        "bullets": [],
        "boxes": []
      },
      {
        "label": "The Approach",
        "title": "Portfolio-first, then conversion.",
        "paragraphs": [
          "Premium clients in construction buy on evidence. The strategy: lead with the work, support it with trust signals, and remove every obstacle between interest and inquiry. Statistics, safety record, and project imagery all serve one goal — reducing the friction of saying yes."
        ],
        "bullets": [],
        "boxes": [
          {
            "title": "Competitive Audit",
            "text": "Reviewed Turner Construction, Skanska, and 20 UK firms. Premium companies consistently lead with project scale, location, and year — not marketing language. Specificity beats superlatives."
          },
          {
            "title": "Journey Design",
            "text": "Buyers follow a clear path: hero → stats → portfolio → services → quote. Every section is a stepping stone, not a distraction. I designed to that sequence deliberately."
          }
        ]
      },
      {
        "label": "The Solution",
        "title": "Bold, structured, trustworthy.",
        "paragraphs": [],
        "bullets": [
          "Dark architectural hero with clear headline — scale and confidence established immediately",
          "Statistics row (100+ projects, $20M+ delivered) above the fold as immediate credibility",
          "Project portfolio filterable by Commercial, Industrial, Residential",
          "Four core services each with supporting photography and descriptions",
          "Quote request CTA repeated at logical decision points — never forced, always available"
        ],
        "boxes": []
      },
      {
        "label": "Design Highlights",
        "title": "Key Design Decisions",
        "paragraphs": [],
        "bullets": [],
        "boxes": [
          {
            "title": "Number-led social proof",
            "text": "Specific numbers placed high in the page hierarchy earn trust before the user reads the copy."
          },
          {
            "title": "Project cards with metadata",
            "text": "Location, category, and year on every card lets buyers self-qualify instantly."
          },
          {
            "title": "Safety-first messaging",
            "text": "Woven throughout the site — a trust requirement for premium construction clients."
          },
          {
            "title": "Blog for thought leadership",
            "text": "Positions EverBuilt as expert practitioners and builds organic credibility."
          }
        ]
      }
    ],
    "outcome": {
      "title": "The Outcome",
      "text": "A conversion-focused construction website that matches EverBuilt's 15-year reputation. The portfolio-first structure lets the work speak first. Streamlined contact flows turn site visits into quote requests.",
      "liveUrl": "https://modern-screen-348866.framer.app",
      "liveLabel": "View live site"
    }
  },
  {
    "id": "cs-looma",
    "navLabel": "UI/UX · Framer · 2024",
    "heroIndex": "Case Study — 03",
    "title": "Looma Photography Agency",
    "subtitle": "An editorial fashion portfolio designed to communicate quality before a word is read.",
    "image": "PASTE_YOUR_LOOMA_MOCKUP_URL_HERE",
    "imageAlt": "Looma Photography Agency",
    "meta": [
      {
        "label": "Client",
        "value": "Looma Agency"
      },
      {
        "label": "Year",
        "value": "2024"
      },
      {
        "label": "Tool",
        "value": "Framer"
      },
      {
        "label": "Role",
        "value": "UI/UX Designer"
      },
      {
        "label": "Timeline",
        "value": "2 weeks"
      }
    ],
    "sections": [
      {
        "label": "Overview & Problem",
        "title": "Ten years of craft, communicated like a template.",
        "paragraphs": [
          "Looma had a decade of high-end fashion photography experience. But their site was a generic template that made their work feel ordinary. Fashion directors and art buyers were not staying long enough to feel the quality.",
          "The brief: design a digital experience that feels as editorial and intentional as the photography itself. The site needed to be the first impression, not just a container for images."
        ],
        "bullets": [],
        "boxes": []
      },
      {
        "label": "The Approach",
        "title": "Restraint as a design decision.",
        "paragraphs": [
          "Nothing should compete with the photography. Every design decision — typography, spacing, layout, colour — needed to serve the image. In premium fashion, the UI exists to get out of the way."
        ],
        "bullets": [],
        "boxes": [
          {
            "title": "Reference Research",
            "text": "Studied SHOWstudio, Harley Weir, i-D, and Document Journal. Premium fashion photography sites share one quality: the image dominates. Everything else is architecture."
          },
          {
            "title": "Client Journey",
            "text": "Fashion art directors need: visual impact → proof of range → understanding of process → frictionless contact. The site was structured to follow that exact sequence."
          }
        ]
      },
      {
        "label": "The Solution",
        "title": "Minimal, breathable, editorial.",
        "paragraphs": [],
        "bullets": [
          "'Lens on Style' headline — bold and directional, sets the brand voice in four words",
          "Full-bleed vertical photography in the format most familiar to the fashion industry",
          "Warm off-white tones giving the feel of a physical lookbook, not a website",
          "Six-step process section designed as a narrative, not a service list",
          "Portfolio gallery with editorial framing — each image is given space to breathe"
        ],
        "boxes": []
      },
      {
        "label": "Design Highlights",
        "title": "Key Design Decisions",
        "paragraphs": [],
        "bullets": [],
        "boxes": [
          {
            "title": "Typography as hierarchy",
            "text": "Refined serif and clean sans-serif pairing signals editorial authority without competing with imagery."
          },
          {
            "title": "Process as reassurance",
            "text": "Six-step journey builds confidence for new clients uncertain about what working together looks like."
          },
          {
            "title": "Negative space as luxury",
            "text": "Generous whitespace signals care and intention — it mirrors the quality of the photography."
          },
          {
            "title": "'Why Choose Us' as proof",
            "text": "Four specific value propositions replace generic claims with a clear and honest case."
          }
        ]
      }
    ],
    "outcome": {
      "title": "The Outcome",
      "text": "An editorial portfolio that earns its place alongside the world's best fashion photography websites. Fashion directors encounter a site that respects their eye. The photography is the product. The design serves it.",
      "liveUrl": "https://comfortable-united-733420.framer.app",
      "liveLabel": "View live site"
    }
  },
  {
    "id": "cs-requestify",
    "navLabel": "Product Design · Lovable AI · 2025",
    "heroIndex": "Case Study — 04",
    "title": "Requestify — Live DJ Request App",
    "subtitle": "A real-time song request platform connecting audiences to DJs with zero friction.",
    "image": "PASTE_YOUR_REQUESTIFY_MOCKUP_URL_HERE",
    "imageAlt": "Requestify — Live DJ Request App",
    "meta": [
      {
        "label": "Client",
        "value": "Requestify"
      },
      {
        "label": "Year",
        "value": "2025"
      },
      {
        "label": "Tool",
        "value": "Lovable AI"
      },
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Timeline",
        "value": "2 weeks"
      }
    ],
    "sections": [
      {
        "label": "Overview & Problem",
        "title": "Song requests had no structure. I designed one.",
        "paragraphs": [
          "DJs at live events had no reliable way to manage audience song requests. Physical slips got lost. Social DMs were buried. No priority system, no tipping mechanism, and no real-time queue visibility.",
          "The result: overwhelmed DJs, frustrated audiences, and missed opportunities for engagement. Requestify was designed to solve all three problems in one focused product."
        ],
        "bullets": [],
        "boxes": []
      },
      {
        "label": "The Approach",
        "title": "Design for the environment, not the ideal.",
        "paragraphs": [
          "Most apps are designed for bright rooms and unhurried users. Requestify needed to work in dark venues, with loud music, on a phone at arm's length. Every decision was tested against that context — large targets, high contrast, one action per screen."
        ],
        "bullets": [],
        "boxes": [
          {
            "title": "Workflow Research",
            "text": "Mapped the DJ's live set workflow from preparation to crowd management. The product needed to fit into an existing professional workflow, not disrupt it."
          },
          {
            "title": "Competitive Gap",
            "text": "Existing tools focus on the DJ's library, not the crowd's experience. None offer real-time audience request flows with tipping and priority queuing in a mobile-first format."
          }
        ]
      },
      {
        "label": "The Solution",
        "title": "Fast, clear, built for dark rooms.",
        "paragraphs": [],
        "bullets": [
          "Three-step audience request flow completable in under 30 seconds from any phone browser",
          "DJ live dashboard with request sorting by time, tips, and popularity — one-tap actions",
          "QR code event creation — DJs share one code, no app download required",
          "Audience discovery and follow system — DJs build their crowd between events",
          "Minimal cognitive load — each screen has one clear primary action"
        ],
        "boxes": []
      },
      {
        "label": "Design Highlights",
        "title": "Key Design Decisions",
        "paragraphs": [],
        "bullets": [],
        "boxes": [
          {
            "title": "High-contrast dark UI",
            "text": "Club-appropriate palette ensures readability in low-light conditions where most apps fail."
          },
          {
            "title": "Tip-to-prioritise mechanic",
            "text": "Tipping generates DJ revenue and gives audiences a way to boost their request — a clear value exchange."
          },
          {
            "title": "One-hand DJ dashboard",
            "text": "Large touch targets and swipe actions reduce cognitive burden during a live set."
          },
          {
            "title": "No app download for audiences",
            "text": "Removing the download barrier was the single most important conversion decision."
          }
        ]
      }
    ],
    "outcome": {
      "title": "The Outcome",
      "text": "A fully functional live music request web application — designed, prototyped, and shipped using Lovable AI with zero traditional code. Requestify brings structure and connection to one of live music's most chaotic touchpoints.",
      "liveUrl": "https://pulse-stage-sync.lovable.app/",
      "liveLabel": "View live site"
    }
  },
  {
    "id": "cs-atelier",
    "navLabel": "Product Design · Lovable AI · 2025",
    "heroIndex": "Case Study — 05",
    "title": "Neutral Grace — Fashion E-commerce",
    "subtitle": "A luxury boutique storefront as considered and minimal as the clothes it sells.",
    "image": "PASTE_YOUR_BOUTIQUE_MOCKUP_URL_HERE",
    "imageAlt": "Neutral Grace — Fashion E-commerce",
    "meta": [
      {
        "label": "Client",
        "value": "Neutral Grace"
      },
      {
        "label": "Year",
        "value": "2025"
      },
      {
        "label": "Tool",
        "value": "Lovable AI"
      },
      {
        "label": "Role",
        "value": "Product Designer"
      },
      {
        "label": "Timeline",
        "value": "2 weeks"
      }
    ],
    "sections": [
      {
        "label": "Overview & Problem",
        "title": "The brand was premium. The storefront was generic.",
        "paragraphs": [
          "Neutral Grace positioned themselves as a curated, minimal luxury fashion label. But their digital storefront was identical to thousands of others — undermining the premium identity they had carefully built.",
          "The challenge: design a fashion e-commerce experience as intentional and unhurried as the clothes themselves. Every screen needed to slow down, breathe, and communicate: this is not fast fashion."
        ],
        "bullets": [],
        "boxes": []
      },
      {
        "label": "The Approach",
        "title": "Luxury is restraint, not decoration.",
        "paragraphs": [
          "The research was consistent: premium fashion e-commerce brands don't compete on feature density — they compete on feel. COS, Toteme, Lemaire. Their sites share one quality: the space around the product is as considered as the product itself."
        ],
        "bullets": [],
        "boxes": [
          {
            "title": "Design Language Research",
            "text": "Studied Net-a-Porter, Matches Fashion, Ssense, Aeron, and Baserange. Premium digital retail is defined by restraint, negative space, editorial photography, and copy that informs rather than sells."
          },
          {
            "title": "Customer Profile",
            "text": "Neutral Grace buyers are considered shoppers — they research before purchasing, value quality over novelty, and want to feel that the brand shares their aesthetic sensibility."
          }
        ]
      },
      {
        "label": "The Solution",
        "title": "Calm, minimal, uncluttered.",
        "paragraphs": [],
        "bullets": [
          "Full-bleed editorial hero — campaign photography as primary visual, minimal brand type overlay",
          "Neutral beige and warm cream palette — colours that recede and let the clothing speak",
          "Clean product grid with hover-zoom — product names only, no promotional language on listing pages",
          "Material and care information given editorial weight on product detail pages",
          "Brand philosophy section articulating the label's values clearly, without jargon"
        ],
        "boxes": []
      },
      {
        "label": "Design Highlights",
        "title": "Key Design Decisions",
        "paragraphs": [],
        "bullets": [],
        "boxes": [
          {
            "title": "No urgency triggers",
            "text": "Countdown timers and scarcity badges excluded. The design trusts the product to close the sale."
          },
          {
            "title": "Typography as positioning",
            "text": "Editorial serif/geometric sans pairing signals intentionality without being decorative."
          },
          {
            "title": "Product names, not copy",
            "text": "Listing pages show names only. No marketing descriptors — mirrors the editorial retail environment."
          },
          {
            "title": "Brand story as differentiator",
            "text": "Philosophy section positions Neutral Grace as an antidote to fast fashion."
          }
        ]
      }
    ],
    "outcome": {
      "title": "The Outcome",
      "text": "A luxury fashion digital experience built without code using Lovable AI. The storefront mirrors the brand's promise: calm, considered, and unmistakably premium. The design earns trust before the customer sees a single price tag.",
      "liveUrl": "https://neutral-grace-boutique.lovable.app/",
      "liveLabel": "View live site"
    }
  }
];