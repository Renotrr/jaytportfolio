import qtHeroClub from "@/assets/qt-hero-club.webp";
import qtProblemDjBooth from "@/assets/qt-problem-djbooth.webp";
import qtDjLive from "@/assets/qt-mobile-04-dj-live.webp";
import qtDiscover from "@/assets/qt-mobile-02-discover.webp";

export type StatItem = { value: number; suffix?: string; label: string };

export type ToolPill = { label: string };

export type WorkFeature = { text: string };

export type WorkProject = { id: string; layout: "image" | "text" | "wide"; tag: string; number?: string; title: string; description: string; image: string; imageAlt: string; features?: WorkFeature[]; liveLabel?: string };

export type GraphicProject = { title: string; category: string; image: string; imageAlt: string };

export type CaseStudyImageSlot = { label: string; hint?: string; src?: string; alt?: string; full?: boolean };

export type CaseStudyFlowNode = {
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  sub?: string;
  start?: boolean;
};

export type CaseStudyFlowArrow = { x1: number; y1: number; x2: number; y2: number };

export type CaseStudyFlow = {
  viewBox: string;
  minWidth?: number;
  rx?: number;
  nodes: CaseStudyFlowNode[];
  arrows: CaseStudyFlowArrow[];
};

export type CaseStudyProcessStep = { title: string; text: string };

export type CaseStudyMindmap = {
  center: string;
  branches: { tag: string; items: string[] }[];
};

export type CaseStudyPromptCard = { title: string; code: string };

export type CaseStudyStat = { value: string; label: string };

export type CaseStudyNote = { label: string; text: string };

export type CaseStudySection = {
  label: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  boxes?: { title: string; text: string }[];
  note?: CaseStudyNote;
  flow?: CaseStudyFlow;
  processTitle?: string;
  process?: CaseStudyProcessStep[];
  mindmap?: CaseStudyMindmap;
  imageSlots?: CaseStudyImageSlot[];
  promptCards?: CaseStudyPromptCard[];
  stats?: CaseStudyStat[];
};

export type CaseStudyTheme = "queuetop" | "growthbot" | "atelier";

export type CaseStudy = {
  id: string;
  theme?: CaseStudyTheme;
  eyebrow?: string;
  navLabel: string;
  heroIndex: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  badges?: { label: string; accent?: boolean }[];
  image: string;
  imageAlt: string;
  heroSlot?: CaseStudyImageSlot;
  heroImage?: string;
  meta: { label: string; value: string }[];
  timeline?: { label: string; active?: boolean }[];
  sections: CaseStudySection[];
  outcome: { title: string; text: string; liveUrl?: string | null; liveLabel?: string | null };
};



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
    "id": "cs-queuetop",
    "layout": "image",
    "tag": "Product Design · Mobile PWA · 2026",
    "title": "QueueTop",
    "description": "A live event music request platform connecting listeners, DJs, and artists — designed end-to-end for a real, paid client engagement.",
    "image": "PASTE_YOUR_QUEUETOP_MOCKUP_URL_HERE",
    "imageAlt": "QueueTop",
    "liveLabel": "Read case study"
  },
  {
    "id": "cs-growthbot",
    "layout": "text",
    "tag": "SaaS · Discord Bot · Self-Built · 2026",
    "title": "GrowthBot",
    "description": "A Discord monitoring SaaS bot, built and shipped solo — from zero Discord API experience to a live, deployed product.",
    "image": "PASTE_YOUR_GROWTHBOT_MOCKUP_URL_HERE",
    "imageAlt": "GrowthBot",
    "liveLabel": "Read case study"
  },
  {
    "id": "cs-atelier",
    "layout": "wide",
    "tag": "Concept Project · Lovable AI · 2025",
    "title": "Atelier",
    "description": "A luxury boutique storefront concept, designed as considered and minimal as the clothes it imagines selling.",
    "image": "PASTE_YOUR_ATELIER_MOCKUP_URL_HERE",
    "imageAlt": "Atelier",
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
    "id": "cs-queuetop",
    "theme": "queuetop",
    "eyebrow": "Product Design · Mobile PWA · 2026",
    "navLabel": "Case Study — 01 / QueueTop",
    "heroIndex": "Case Study — 01",
    "title": "Queue",
    "titleAccent": "Top",
    "subtitle": "A live event music request platform connecting listeners, DJs, and artists — designed end-to-end for a real, paid client engagement.",
    "badges": [
      { "label": "Paid client work", "accent": true },
      { "label": "Listener · DJ/Creator · Artist flows" }
    ],
    "image": "PASTE_YOUR_QUEUETOP_MOCKUP_URL_HERE",
    "imageAlt": "QueueTop",
    "heroSlot": {
      "label": "Hero product shot goes here",
      "hint": "Drop in your cleanest QueueTop screen here — the laptop/phone hero shot you already have (qt-laptop-hero-listener-live or similar). Full-bleed, no extra framing needed."
    },
    "meta": [
      { "label": "Client", "value": "QueueTop" },
      { "label": "Year", "value": "2026" },
      { "label": "Tools", "value": "Figma → Lovable" },
      { "label": "Role", "value": "Product Designer" },
      { "label": "Flows", "value": "3 — Listener, DJ, Artist" }
    ],
    "timeline": [
      { "label": "Discover" },
      { "label": "Define" },
      { "label": "Design" },
      { "label": "Build" },
      { "label": "Ship", "active": true }
    ],
    "sections": [
      {
        "label": "Overview & Problem",
        "title": "Song requests at live events have no structure.",
        "paragraphs": [
          "DJs at live events had no reliable way to manage audience song requests — slips get lost, DMs get buried, and there's no visibility into what the crowd actually wants in real time.",
          "QueueTop's brief was to design a connected experience across three distinct audiences — listeners requesting songs, DJs running the set, and artists tracking their reach — without making any one of them feel like an afterthought."
        ],
        "imageSlots": [
          {
            "label": "Problem / context screenshot",
            "hint": "A screen showing the \"before\" chaos this solves, or your role-select screen (qt-mobile-01-role-select) works well here."
          }
        ]
      },
      {
        "label": "The Approach",
        "title": "Design for the room, not the desk.",
        "paragraphs": [
          "Most apps assume a bright screen and an unhurried user. QueueTop has to work in a dark venue, over loud music, on a phone held at arm's length. The onboarding flow below maps how a first-time listener actually moves through the product, end to end."
        ],
        "flow": {
          "viewBox": "0 0 900 220",
          "minWidth": 640,
          "rx": 10,
          "arrows": [
            { "x1": 125, "y1": 60, "x2": 225, "y2": 60 },
            { "x1": 345, "y1": 60, "x2": 445, "y2": 60 },
            { "x1": 565, "y1": 60, "x2": 665, "y2": 60 },
            { "x1": 780, "y1": 90, "x2": 780, "y2": 150 },
            { "x1": 665, "y1": 180, "x2": 240, "y2": 180 }
          ],
          "nodes": [
            { "x": 15, "y": 30, "w": 110, "label": "Scan QR", "sub": "at the venue", "start": true },
            { "x": 225, "y": 30, "w": 120, "label": "Browse songs", "sub": "no app download" },
            { "x": 445, "y": 30, "w": 120, "label": "Send request", "sub": "+ optional tip" },
            { "x": 665, "y": 30, "w": 120, "label": "Lands in DJ queue", "sub": "sorted live" },
            { "x": 665, "y": 150, "w": 120, "label": "DJ plays it", "sub": "one tap" },
            { "x": 120, "y": 150, "w": 120, "label": "Listener notified", "sub": "song's playing now" }
          ]
        },
        "processTitle": "How I worked through it",
        "process": [
          { "title": "User research — mapped the real moment", "text": "Watched how song requests actually happen at events today: shouted requests, lost paper slips, buried DJ DMs. The friction was the brief, not a feature list." },
          { "title": "Competitive research", "text": "Looked at existing DJ software and found every one of them designed for the DJ's library, not the crowd's experience — a real gap, not a crowded space." },
          { "title": "Mapped three roles separately", "text": "A listener has seconds to act. A DJ needs the queue glanceable mid-set. An artist checks in after the fact. Three urgency levels, designed as one connected system rather than three apps bolted together." },
          { "title": "Designed for the room, not the desk", "text": "Every screen tested against dark-venue, loud-music, arm's-length conditions — large touch targets, high contrast, one action per screen." },
          { "title": "Shipped and iterated with the client", "text": "Built in Figma, reviewed against real client feedback, refined the queue-sorting logic and DJ dashboard based on what actually felt usable mid-set." }
        ],
        "mindmap": {
          "center": "QueueTop",
          "branches": [
            { "tag": "Listener", "items": ["QR scan entry", "No app download", "30-second request flow"] },
            { "tag": "DJ / Creator", "items": ["Live queue dashboard", "One-tap actions", "Tipping & priority"] },
            { "tag": "Artist", "items": ["Post-set engagement", "Reach tracking", "Follow system"] }
          ]
        }
      },
      {
        "label": "The Solution",
        "title": "Three roles, one connected system.",
        "paragraphs": [],
        "bullets": [
          "No-app-download listener flow via QR code — request a song from any phone browser in under 30 seconds",
          "DJ live dashboard with one-tap queue actions, sortable by time and popularity",
          "Artist-facing view for tracking requests and engagement after the set",
          "Consistent purple-to-teal visual system carried across all three flows so the product feels like one platform, not three apps"
        ],
        "imageSlots": [
          { "label": "DJ dashboard screenshot", "hint": "qt-mobile-04-dj-live works well here — show the live queue in action." },
          { "label": "Listener discovery / request flow screenshot", "hint": "qt-mobile-02-discover or qt-mobile-03-listener-live." }
        ]
      },
      {
        "label": "Design Highlights",
        "title": "Key design decisions",
        "paragraphs": [],
        "boxes": [
          { "title": "High-contrast dark UI", "text": "Built for club lighting conditions, where most light-mode apps become unreadable." },
          { "title": "One primary action per screen", "text": "Reduces decision time to near-zero in an environment where users are distracted and time-pressured." },
          { "title": "Shared system, role-specific dashboards", "text": "Listener, DJ, and Artist views share components and tokens, but each is laid out around what that role actually needs to glance at first." }
        ],
        "stats": [
          { "value": "3", "label": "User flows designed" },
          { "value": "20+", "label": "Screens shipped" },
          { "value": "1", "label": "Live paid client" }
        ]
      }
    ],
    "outcome": {
      "title": "A real client brief, shipped end to end.",
      "text": "QueueTop is a real, paid client engagement — designed across listener, DJ, and artist flows from research through shipped screens. It's the project on this portfolio that best represents working to a client brief under real constraints, not a self-directed concept.",
      "liveUrl": null,
      "liveLabel": null
    }
  },
  {
    "id": "cs-growthbot",
    "theme": "growthbot",
    "eyebrow": "SaaS · Discord Bot · Self-Built · 2026",
    "navLabel": "Case Study — 02 / GrowthBot",
    "heroIndex": "Case Study — 02",
    "title": "GrowthBot",
    "subtitle": "A Discord monitoring SaaS bot, built and shipped solo — from zero Discord API experience to a live, deployed product.",
    "badges": [
      { "label": "Self-built product", "accent": true },
      { "label": "Deployed on Railway" }
    ],
    "image": "PASTE_YOUR_GROWTHBOT_MOCKUP_URL_HERE",
    "imageAlt": "GrowthBot",
    "heroSlot": {
      "label": "Robot hero illustration goes here",
      "hint": "Generate this with an AI image tool. Prompt: A friendly, minimal 3D-rendered robot character, dark charcoal and Discord blurple (#5865F2), holding up a glowing smartphone toward the viewer like it's showing a notification, soft rim lighting, dark gradient background, premium tech-brand illustration style. No text, no logos. Save as 1600×900 or wider, drop it in here."
    },
    "meta": [
      { "label": "Type", "value": "Self-built SaaS" },
      { "label": "Year", "value": "2026" },
      { "label": "Stack", "value": "Discord API · Node · Railway" },
      { "label": "Role", "value": "Solo builder" }
    ],
    "timeline": [
      { "label": "Learn Discord API" },
      { "label": "Build bot logic" },
      { "label": "Add notifications" },
      { "label": "Deploy on Railway", "active": true }
    ],
    "sections": [
      {
        "label": "Overview & Problem",
        "title": "You can't watch a Discord server 24 hours a day.",
        "paragraphs": [
          "Community managers and server owners often need to know the moment a specific person joins a server — a flagged user, a returning member, a VIP — but Discord gives no built-in way to monitor for that without staring at the member list.",
          "I'd never built a Discord bot, written backend code that needed to stay alive in production, or deployed anything to a real server before this. I treated that as the actual brief: ship something that works, end to end, even without a traditional engineering background."
        ],
        "note": {
          "label": "Note on visuals:",
          "text": "GrowthBot lives inside Discord — there's no standalone app screen to photograph. The screenshots below show the actual setup commands and notification output, which is the real, honest interface this product has."
        }
      },
      {
        "label": "The Approach",
        "title": "Learn the system by building inside it.",
        "paragraphs": [
          "The flow below shows exactly what happens from the moment a server owner sets a watch, to the moment GrowthBot catches the join and fires the notification."
        ],
        "flow": {
          "viewBox": "0 0 900 140",
          "minWidth": 640,
          "rx": 10,
          "arrows": [
            { "x1": 135, "y1": 65, "x2": 225, "y2": 65 },
            { "x1": 365, "y1": 65, "x2": 455, "y2": 65 },
            { "x1": 595, "y1": 65, "x2": 685, "y2": 65 }
          ],
          "nodes": [
            { "x": 15, "y": 35, "w": 120, "label": "/watch add", "sub": "owner sets target", "start": true },
            { "x": 225, "y": 35, "w": 140, "label": "Bot listens", "sub": "Discord join event" },
            { "x": 455, "y": 35, "w": 140, "label": "Match found", "sub": "checked vs. watch-list" },
            { "x": 685, "y": 35, "w": 200, "label": "DM sent instantly", "sub": "owner notified, no delay" }
          ]
        },
        "processTitle": "How I worked through it",
        "process": [
          { "title": "Found the real gap", "text": "Talked to server owners and noticed the same complaint: no way to know when a specific person joins without manually watching the member list all day." },
          { "title": "Learned the Discord API from zero", "text": "Had never touched the Discord API before this. Worked through event listeners, permission scopes, and bot architecture from the documentation up, using AI-assisted development to translate the idea into working logic." },
          { "title": "Solved for uptime first", "text": "A monitoring bot that goes offline is worthless. Getting reliable always-on hosting on Railway, with restart handling, was treated as core to the product, not an afterthought." },
          { "title": "Designed for zero learning curve", "text": "Server owners configure everything through Discord commands they already know — no separate dashboard, no new login, no new interface to learn." },
          { "title": "Shipped solo, end to end", "text": "Took it from idea to a live, deployed product running on Railway — bot logic, notification system, and hosting, without a team." }
        ],
        "imageSlots": [
          { "label": "Screenshot: bot setup command in Discord", "hint": "A real screenshot of you adding a username to the watch-list via a Discord slash command." }
        ]
      },
      {
        "label": "The Solution",
        "title": "A simple watch-list, a reliable notification.",
        "paragraphs": [],
        "bullets": [
          "Per-server watch-list system — add a username, get notified the moment they join",
          "Real-time join detection via Discord's event system, no polling delay",
          "Multi-server support so one bot instance serves many communities independently",
          "Deployed on Railway with persistent uptime — not a local script that dies when the laptop closes"
        ],
        "imageSlots": [
          { "label": "Screenshot: the actual join notification", "hint": "Show the real Discord message GrowthBot sends when a watched user joins." },
          { "label": "Screenshot: Railway deployment dashboard", "hint": "Shows it's actually live and running, not just code on a laptop — this is a strong trust signal for a non-traditional-engineering build." }
        ]
      },
      {
        "label": "Design Highlights",
        "title": "Key decisions",
        "paragraphs": [],
        "boxes": [
          { "title": "Simple setup, no dashboard required", "text": "Server owners configure everything through Discord commands they already know — no separate login, no new interface to learn." },
          { "title": "Notification clarity over volume", "text": "One clear message per match, not a noisy feed — the entire point is reducing the cognitive load of constant manual watching." }
        ],
        "stats": [
          { "value": "0 → 1", "label": "No coding background to shipped product" },
          { "value": "Multi", "label": "Server monitoring support" },
          { "value": "Live", "label": "Deployed on Railway" }
        ]
      }
    ],
    "outcome": {
      "title": "Shipped, deployed, and running.",
      "text": "GrowthBot is live — a working SaaS product built from a standing start with Discord's API, bot architecture, and production hosting. It's the project that best shows I can take an idea from zero technical context to a shipped, real product using AI-assisted development and my own product thinking.",
      "liveUrl": null,
      "liveLabel": null
    }
  },
  {
    "id": "cs-atelier",
    "theme": "atelier",
    "eyebrow": "Concept Project · Lovable AI · 2025",
    "navLabel": "Case Study — 03 / Atelier",
    "heroIndex": "Case Study — 03",
    "title": "Atelier",
    "subtitle": "A luxury boutique storefront concept, designed as considered and minimal as the clothes it imagines selling.",
    "badges": [
      { "label": "Self-initiated concept", "accent": true },
      { "label": "No real client" }
    ],
    "image": "PASTE_YOUR_ATELIER_MOCKUP_URL_HERE",
    "imageAlt": "Atelier",
    "heroSlot": {
      "label": "Hero campaign image",
      "hint": "Generate with an AI image tool. Try this prompt: Minimal editorial fashion campaign photo, neutral beige and cream tones, soft natural light, single model in tailored neutral clothing, calm and understated luxury aesthetic, shot like a high-end fashion lookbook — no text, no logos, photographic not illustrated."
    },
    "meta": [
      { "label": "Type", "value": "Self-initiated concept" },
      { "label": "Year", "value": "2025" },
      { "label": "Tool", "value": "Lovable AI" },
      { "label": "Role", "value": "Product Designer (concept)" },
      { "label": "Timeline", "value": "2 weeks" }
    ],
    "sections": [
      {
        "label": "Overview & Problem",
        "title": "What would a premium storefront look like if I built one on spec?",
        "paragraphs": [
          "Atelier is a concept brand I invented to explore a question: most fashion e-commerce templates look generic regardless of how premium the brand claims to be. I wanted to design — and actually build, not just mock up — a storefront that earns a \"luxury\" label through restraint rather than decoration."
        ],
        "note": {
          "label": "Note:",
          "text": "This is not client work. There is no real Atelier brand. It's a self-directed exercise to prove I can design and ship a full e-commerce experience end to end using Lovable AI."
        }
      },
      {
        "label": "The Approach",
        "title": "Luxury is restraint, not decoration.",
        "paragraphs": [
          "The flow below shows how a visitor moves through the storefront — from first landing to checkout — and how little stands in their way at each step."
        ],
        "flow": {
          "viewBox": "0 0 900 140",
          "minWidth": 640,
          "rx": 4,
          "arrows": [
            { "x1": 140, "y1": 65, "x2": 225, "y2": 65 },
            { "x1": 365, "y1": 65, "x2": 450, "y2": 65 },
            { "x1": 590, "y1": 65, "x2": 675, "y2": 65 }
          ],
          "nodes": [
            { "x": 15, "y": 35, "w": 125, "label": "Editorial hero", "sub": "campaign, no popup", "start": true },
            { "x": 225, "y": 35, "w": 140, "label": "Product grid", "sub": "name only, no clutter" },
            { "x": 450, "y": 35, "w": 140, "label": "Product detail", "sub": "no urgency triggers" },
            { "x": 675, "y": 35, "w": 200, "label": "Calm checkout", "sub": "no scarcity badges" }
          ]
        },
        "processTitle": "How I worked through it",
        "process": [
          { "title": "UX research — understood the space", "text": "Started by asking what \"premium\" actually means in digital retail, rather than assuming. Used real shopping behaviour as the baseline, not personal taste." },
          { "title": "Deep competitive research", "text": "Studied COS, Toteme, Lemaire, Net-a-Porter, Matches Fashion, and Ssense. The pattern across all of them wasn't a feature — it was how much space they gave the product to breathe." },
          { "title": "Defined the imagined customer", "text": "Designed around a considered shopper who researches before buying, rather than an impulse buyer — this decision shaped every later choice to remove pressure tactics." },
          { "title": "Built restraint into the system", "text": "Deliberately excluded countdown timers and scarcity badges. Typography carries the brand's positioning instead of promotional copy doing it." },
          { "title": "Built it for real in Lovable AI", "text": "Took the concept from a design question through to an actual working, polished build — not just a static mockup." }
        ]
      },
      {
        "label": "The Solution",
        "title": "Calm, minimal, uncluttered.",
        "paragraphs": [],
        "bullets": [
          "Full-bleed editorial hero — campaign-style photography as the primary visual, minimal type overlay",
          "Neutral beige and warm cream palette that recedes and lets the product speak",
          "Clean product grid with hover-zoom, product names only — no promotional copy on listing pages",
          "Brand philosophy section written to sound like a point of view, not marketing copy"
        ],
        "imageSlots": [
          { "label": "Product grid screenshot", "hint": "Use your real atelier-9-shop-category.webp or similar from the live Lovable build." }
        ],
        "promptCards": [
          { "title": "Mockup prompt: product detail page", "code": "Minimal e-commerce product detail page mockup on a laptop screen, neutral beige background, single garment product photography, clean typography, generous whitespace, luxury fashion brand aesthetic, soft studio lighting, realistic browser/device frame." },
          { "title": "Mockup prompt: mobile storefront", "code": "Minimal fashion e-commerce mobile app screen mockup, cream and beige tones, editorial product photography grid, clean sans-serif typography, shown on a realistic phone frame, soft lighting, luxury retail aesthetic." }
        ]
      },
      {
        "label": "Design Highlights",
        "title": "Key design decisions",
        "paragraphs": [],
        "boxes": [
          { "title": "No urgency triggers", "text": "Deliberately excluded countdown timers and scarcity badges — the design trusts the product rather than pressuring the visitor." },
          { "title": "Typography as positioning", "text": "An editorial serif paired with a geometric sans signals intentionality without becoming decorative." }
        ]
      }
    ],
    "outcome": {
      "title": "A self-initiated build, designed end to end.",
      "text": "A self-initiated luxury fashion concept, fully designed and built with Lovable AI. It demonstrates restraint as a design decision and shows I can take a product from a design question to a working, polished build without a client brief driving it.",
      "liveUrl": null,
      "liveLabel": null
    }
  }
];
