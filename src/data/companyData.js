// ZETACODING - Corporate Master Data extracted from Zetacoding Profile 2026

export const companyInfo = {
  name: "ZETACODING",
  legalNames: {
    india: "ZETACODING INNOVATIVE SOLUTIONS",
    uae: "ZETACODING INFORMATION TECHNOLOGY L.L.C"
  },
  legalEntities: {
    indiaHQ: {
      name: "ZETACODING INNOVATIVE SOLUTIONS",
      type: "Indian Registered Partnership / MSME Enterprise",
      address: "1st Floor, Above Pai Vista, Opp. Rail Wheel Factory, Bengaluru, Karnataka, India - 560064",
      phone: "+91 8867845719",
      email: "infor@zetacoding.com",
      status: "Headquarters (India)"
    },
    mangaluruBranch: {
      name: "ZETACODING INNOVATIVE SOLUTIONS (Branch)",
      type: "Regional Development & Engineering Center",
      address: "Ground Floor, City Centre Mall / KS Rao Road, Mangaluru, Karnataka, India - 575001",
      phone: "+91 8242984028",
      email: "mangaluru@zetacoding.com",
      status: "Regional Hub"
    },
    uaeLLC: {
      name: "ZETACODING INFORMATION TECHNOLOGY L.L.C",
      type: "Limited Liability Company (LLC) registered in Dubai, UAE",
      address: "Office 204, Burj Al Nahar Complex, Al Muteena, Deira, Dubai, United Arab Emirates (P.O. Box 9234)",
      phone: "+971 563 140 1786",
      email: "dubai@zetacoding.com",
      status: "International Corporate Office"
    }
  },
  phones: {
    india: "+91 8867845719",
    mangaluru: "+91 8242984028",
    uae: "+971 563 140 1786"
  },
  whatsapp: {
    india: "918867845719",
    uae: "9715631401786"
  },
  emails: {
    primary: "infor@zetacoding.com",
    support: "infor@zetacoding.com",
    careers: "careers@zetacoding.com"
  },
  stats: [
    { value: "14+", label: "Software Platforms", sub: "Cloud, AI & ERP" },
    { value: "14,000+", label: "Active Clients", sub: "Global Deployment" },
    { value: "35+", label: "Countries Reached", sub: "Middle East, APAC, USA" },
    { value: "25+", label: "College MOUs", sub: "AICTE Accredited" },
    { value: "50,000+", label: "Students Mentored", sub: "STPs & IEEE" },
    { value: "99.9%", label: "Uptime & SLA", sub: "Enterprise Cloud" }
  ]
};

export const journeyTimeline = [
  {
    year: "2021",
    badge: "Founding",
    title: "Inception & Academic Innovation",
    desc: "Founded in Bengaluru as an engineering services and academic research incubator supporting final year IEEE engineering capstones and student training."
  },
  {
    year: "2022",
    badge: "Accreditation",
    title: "ISO 9001:2015 & MSME Certified",
    desc: "Achieved IAF-recognized ISO 9001:2015 Quality Management certification and official MSME registration under the Government of India."
  },
  {
    year: "2023",
    badge: "Platforms",
    title: "Enterprise ERP & SaaS Launch",
    desc: "Partnered with AlignBooks, SAP Business One, and TMBill. Deployed Cloud ERP to retail, manufacturing, and dining chains across South India."
  },
  {
    year: "2024",
    badge: "Global Expansion",
    title: "Dubai LLC Incorporation (UAE)",
    desc: "Incorporated ZETACODING INFORMATION TECHNOLOGY L.L.C in Dubai under the Department of Economy and Tourism (DET Licence No. 1485234)."
  },
  {
    year: "2026+",
    badge: "Next-Gen AI",
    title: "GEO & Autonomous AI Agents",
    desc: "Pioneered Generative Engine Optimization (GEO) and anvex.ai multimodal voice/vision agents to deliver 4.4x conversion multipliers in ChatGPT & Gemini."
  }
];

export const studentSuccessPath = [
  {
    step: "01",
    title: "Foundation & Assessment",
    desc: "Diagnostic skill profiling, core programming fundamentals, and project domain selection."
  },
  {
    step: "02",
    title: "Hands-on Architecture",
    desc: "Live system architecture design, database schema design, and modular code implementation."
  },
  {
    step: "03",
    title: "Industry Mentorship",
    desc: "1-on-1 code reviews with senior engineering architects from Bengaluru and Dubai."
  },
  {
    step: "04",
    title: "IEEE Publication & IP",
    desc: "Paper writing, plagiarism audit, patent drafting, and conference presentation prep."
  },
  {
    step: "05",
    title: "Career Readiness",
    desc: "Resume grooming, mock technical rounds, portfolio creation, and direct placement assistance."
  }
];

export const products = [
  // 1) CYBER SECURITY PRODUCTS
  {
    id: "cybersecurity-products",
    name: "Cyber Security Products",
    number: "01",
    category: "Cybersecurity Products",
    badge: "Enterprise Security",
    tagline: "Autonomous Website Defense & Continuous Log Telemetry",
    desc: "Next-generation enterprise security suites providing autonomous website defense against OWASP threats and continuous SIEM log telemetry with audit-ready reporting.",
    color: "purple",
    icon: "Shield",
    types: [
      {
        id: "cipher",
        name: "CIPHER",
        subtype: "Website Defense & Protection",
        tagline: "Automated Website Security & Vulnerability Defense",
        desc: "Autonomous web application firewall protecting websites against SQL injection, XSS, DDoS attacks, and malicious bot traffic with sub-second mitigation.",
        badge: "WAF & Web Security",
        highlights: [
          "Zero-Day Web Exploit Shielding & Real-Time Traffic Scrubbing",
          "Layer 7 DDoS Attack Absorption & Perimeter Hardening",
          "SSL/TLS Security Policy Enforcement & Automated Vulnerability Scanning",
          "OWASP Top 10 Real-Time Anomaly Blocking"
        ],
        features: [
          "Real-time IP reputation filtering",
          "Deep packet inspection for HTTP/HTTPS requests",
          "Instant mitigation of OWASP Top 10 vulnerabilities",
          "Sub-millisecond latency overhead"
        ]
      },
      {
        id: "sachet-soc",
        name: "Sachet SOC",
        subtype: "Excel File Telemetry & Log Audits",
        tagline: "Continuous Log Streaming & Audit-Ready Incident Reporting",
        desc: "Lightweight, powerful Security Operations Center engine that ingests server and cloud logs, correlates anomalies, and automatically outputs audit-ready Excel reports.",
        badge: "Audit Telemetry",
        highlights: [
          "Automated Excel / CSV Spreadsheet Incident Reporting for CISO & IT Audits",
          "Plug-and-play SIEM & SOC Log Telemetry Monitoring",
          "MITRE ATT&CK Framework Threat Mapping & Real-Time Alerting",
          "ISO 27001, UAE NESA & GDPR Statutory Audit-Ready Log Streams"
        ],
        features: [
          "Automated correlation of server, cloud, and firewall logs",
          "Instant Excel & CSV log file generation for audits",
          "Anomaly detection with customizable threshold alerting",
          "Low-overhead continuous telemetry log streaming"
        ]
      }
    ]
  },

  // 2) ERP SOLUTIONS
  {
    id: "erp-solutions",
    name: "ERP Solutions",
    number: "02",
    category: "ERP Solutions",
    badge: "14,000+ Businesses",
    tagline: "Smart Cloud Accounting & Complete Business ERP Across 5 Editions",
    desc: "Unified enterprise resource planning and cloud accounting software tailored with dual UAE FTA VAT and Indian GST compliance, inventory control, and POS fast billing.",
    color: "blue",
    icon: "Database",
    types: [
      {
        id: "alignbooks",
        name: "AlignBooks (Accounting Software)",
        subtype: "Cloud Accounting Software & Enterprise ERP",
        tagline: "One Unified ERP Operating Across 5 Specialized Editions",
        desc: "Feature-rich cloud accounting software and comprehensive business ERP trusted by over 14,000 businesses across India and the UAE.",
        badge: "5 Editions Available",
        editions: [
          { name: "BASIC", desc: "Core invoicing, billing, accounts receivable/payable, tax calculations, and basic financial reporting." },
          { name: "Premium", desc: "Multi-currency support, vendor management, real-time inventory tracking, and purchase order cycles." },
          { name: "Ultima", desc: "Advanced manufacturing, bill of materials (BOM), batch & serial number tracking, and automated e-way billing." },
          { name: "All-in-One (ERP)", desc: "Comprehensive enterprise suite with POS fast billing, multi-branch synchronization, and departmental workflow automations." },
          { name: "Enterprise", desc: "Custom software extensions, dedicated private cloud hosting, enterprise SLA guarantees, and priority 24/7 engineering support." }
        ],
        highlights: [
          "5 Available Editions: BASIC, Premium, Ultima, All-in-One (ERP), Enterprise",
          "100% UAE FTA VAT & Indian GST Statutory Audit Ready",
          "Multi-Branch, Multi-Warehouse & Multi-Currency Architecture",
          "Integrated POS Fast Billing, Barcode Printing & WhatsApp Invoice Dispatch"
        ],
        modules: [
          "Sales, Quotations & Automated Billing",
          "Purchase Orders, Goods Receipts & Landed Costs",
          "Comprehensive Finance & Double-Entry Accounting",
          "Real-Time Inventory, Batch Tracking & Expiry Alerts",
          "POS Fast Billing with Offline Sync Mode",
          "Payroll, Staff Attendance & HR Operations"
        ]
      }
    ]
  },

  // 3) CRM SOLUTIONS
  {
    id: "crm-solutions",
    name: "CRM Solutions",
    number: "03",
    category: "CRM Solutions",
    badge: "High Conversion",
    tagline: "Intelligent Lead Handling, Conversational Sales & Frictionless CRM",
    desc: "Next-generation customer relationship management suites built to stop lead leakage, accelerate pipeline velocity, and follow up with prospects automatically.",
    color: "amber",
    icon: "Workflow",
    types: [
      {
        id: "prospect-ai",
        name: "Prospect AI",
        subtype: "Lead & Sales Engine",
        tagline: "Instant 60-Second Lead Response & Automated Multi-Channel Follow-Up",
        desc: "Fully managed conversational AI sales agent that connects with incoming prospects across WhatsApp, SMS, and email within 60 seconds and books appointments directly.",
        badge: "Conversational AI",
        highlights: [
          "Instant 60-Second Response Time to Stop Competitor Lead Leakage",
          "Automated Multi-Channel Follow-Up Sequences via WhatsApp, SMS & Email",
          "AI Meeting Scheduler with Google & Outlook Calendar Synchronization",
          "Automated Lead Qualification based on Budget, Timeline, and Intent"
        ],
        features: [
          "Smart Lead Qualification asking budget, timeline, and purchase intent",
          "AI Meeting Scheduler with automated reminder sequences to stop no-shows",
          "Live Team Handoff when high-value enterprise prospect requests a human",
          "Full Pipeline Velocity Tracking & ROI Attribution by Ad Campaign"
        ]
      },
      {
        id: "tech-free",
        name: "Tech Free",
        subtype: "Frictionless Smart Cloud CRM",
        tagline: "Simple, Agile & Free of Unnecessary Technical Complexities",
        desc: "Streamlined customer relationship management platform designed for fast-moving sales teams. Effortless lead capture, visual deals pipeline, and team performance insights.",
        badge: "Frictionless CRM",
        highlights: [
          "Kanban Drag-and-Drop Sales Pipeline with Deal Stage Milestones",
          "Omnichannel Lead Capture from Web, Social Media & Phone Logs",
          "Zero Complexity Intuitive Interface for Immediate Team Adoption",
          "Automated Task Assignments, Follow-Up Reminders & Performance Telemetry"
        ],
        features: [
          "Kanban-style drag-and-drop lead pipeline",
          "Activity tracking with automated call logs and reminders",
          "Custom tags, lead scoring, and automated task assignments",
          "Instant mobile and desktop web accessibility"
        ]
      }
    ]
  },

  // 4) CUSTOM SOFTWARE SOLUTIONS
  {
    id: "custom-software-solutions",
    name: "Custom Software Solutions",
    number: "04",
    category: "Custom Software Solutions",
    badge: "50K+ Businesses",
    tagline: "Specialized Industry Management Systems Tailored for Vertical Domains",
    desc: "Turnkey enterprise operating systems engineered for specialized vertical industries: automotive garages, restaurants, veterinary clinics, spas/salons, and corporate expense management.",
    color: "cyan",
    icon: "Cpu",
    types: [
      {
        id: "garage-management",
        name: "Garage Management System",
        subtype: "Sianty & AutoFox / AutoRox",
        tagline: "Complete Workshop Management OS Powering 36,000+ Auto Repair Centers",
        desc: "End-to-end auto workshop management system with digital job cards, technician task allocations, spare parts inventory control, and automated customer service alerts.",
        badge: "36K+ Garages",
        highlights: [
          "Digital Job Cards with Vehicle Inspection Photos & Mechanic Commission Tracking",
          "Spare Parts Inventory Management with Barcode Scanning & Vendor POs",
          "Automated WhatsApp & SMS Service Reminders & Repair Status Alerts",
          "Deployed in 36,000+ Auto Workshops Across 20+ Countries"
        ]
      },
      {
        id: "restaurant-management",
        name: "Restaurant Management System",
        subtype: "TMBill (Timbill)",
        tagline: "Unified Restaurant OS Powering 14,000+ Dining Outlets & Cloud Kitchens",
        desc: "Complete dining and cloud kitchen management system with offline-ready cloud POS, kitchen display system (KDS), table management, and direct food aggregator menu sync.",
        badge: "14K+ Restaurants",
        highlights: [
          "100% Offline POS Mode with Automatic Cloud Synchronization",
          "Direct Menu Sync with Zomato, Swiggy, Talabat, Deliveroo & Careem",
          "Kitchen Display System (KDS) & Waiter Mobile Ordering App",
          "Recipe Management, Raw Material Costing & Dynamic Stock Inventory"
        ]
      },
      {
        id: "animal-management",
        name: "Animal Management System",
        subtype: "DegiHerd (Degitterd)",
        tagline: "Veterinary Hospital, Kennel & Livestock Management Platform",
        desc: "Dedicated health and operations platform for pet hospitals, veterinary clinics, boarding kennels, and livestock facilities to manage electronic medical records and vaccinations.",
        badge: "Vet & Livestock OS",
        highlights: [
          "Electronic Medical Records (EMR) for Veterinary Diagnoses & Prescriptions",
          "Automated Periodic Vaccination & Health Checkup WhatsApp Alerts",
          "Boarding Kennel & Hospital Stalls Reservation Management",
          "Livestock Breeding Cycles, Milk Yield & Herd Health Telemetry"
        ]
      },
      {
        id: "saloon-management",
        name: "Saloon Management System",
        subtype: "Saloonist",
        tagline: "Stylist Scheduling & Client Experience OS for Salons & Spas",
        desc: "All-in-one management platform for hair salons, luxury spas, and wellness studios with 24/7 online booking, stylist chair allocation, and customer loyalty memberships.",
        badge: "Spa & Salon OS",
        highlights: [
          "24/7 Self-Service Client Booking Widget for Web, Instagram & Facebook",
          "Stylist Chair Allocation, Commission Calculations & Performance Analytics",
          "Automated SMS & WhatsApp Appointment Reminders to Eliminate No-Shows",
          "Integrated Retail Inventory Control & Gift Voucher Management"
        ]
      },
      {
        id: "expense-management",
        name: "Expense Management System",
        subtype: "Allan Card",
        tagline: "Smart Corporate Cards & Automated Expense Reconciliation",
        desc: "Corporate spend management solution paired with smart spending cards. Real-time digital receipt capture with OCR, multi-level approval hierarchies, and direct ERP auto-reconciliation.",
        badge: "FinTech & Spends",
        highlights: [
          "Instant Mobile Receipt Capture with Automated OCR Expense Extraction",
          "Custom Multi-Level Approval Hierarchies for Department Heads",
          "Real-Time Card Spend Limits & Department Budget Allocations",
          "Direct Auto-Reconciliation with AlignBooks, SAP & ERPNext"
        ]
      }
    ]
  },

  // 5) DIGITAL PRODUCTS
  {
    id: "digital-products",
    name: "Digital Products",
    number: "05",
    category: "Digital Products",
    badge: "Smart Contactless",
    tagline: "Smart NFC Profiles & Contactless Browser-Based Ordering",
    desc: "Modern digital and contactless networking hardware and browser-based ordering systems that eliminate printing costs and streamline transactions.",
    color: "teal",
    icon: "CreditCard",
    plans: [
      {
        name: "Basic Plan",
        price: "Affordable Entry",
        features: ["Essential contact info", "Basic profile customization", "QR code sharing", "WhatsApp Integration", "One-Time Payment"]
      },
      {
        name: "Advanced Plan",
        price: "Most Popular",
        features: ["Everything in Basic", "Custom Branding & Themes", "Gallery & Short Bio", "Social Media Integration", "Lead Capture Form"]
      },
      {
        name: "Fully Brand Enriched Plan",
        price: "Enterprise Custom",
        features: ["Everything in Advanced", "Custom Domain (yourbrand.com)", "Multiple Cards for Teams", "Video Introduction & Showcase", "Priority Concierge Support", "Full Analytics & CRM Sync"]
      }
    ],
    types: [
      {
        id: "digital-business-card",
        name: "Digital Business Card",
        subtype: "NFC Smart Tap Profile & Hardware Ecosystem",
        tagline: "Make Your Card Your Brand Ambassador — Tap to Share, Connect, Grow",
        desc: "Eco-friendly, tap-to-connect NFC smart business cards and dynamic digital profiles with automated lead capture, instant vCard saving, and team management dashboards.",
        badge: "Tap NFC",
        highlights: [
          "Contactless Tap to Share on all modern iPhone & Android Devices",
          "Custom Domain Integration (e.g. card.yourcompany.com) with Luxury Branding",
          "Real-Time Dynamic Profile Updates with Zero Reprinting Costs",
          "Instant CRM Lead Capture & WhatsApp Contact Sync"
        ],
        hardwareRange: [
          "Custom Metal Cards (Premium Luxury)",
          "Eco Wooden Cards",
          "Matte PVC Cards",
          "NFC Multi-Color Keychains",
          "NFC Smart Stickers (1 Dot / 3 Dot)",
          "QR Countertop Standees for Retailers"
        ]
      },
      {
        id: "smart-ordering",
        name: "Smart Ordering",
        subtype: "Contactless QR Dining & In-Store Ordering",
        tagline: "Zero-App Download Mobile Browser Catalog & Ordering System",
        desc: "Dynamic QR code smart ordering system enabling guests and shoppers to scan a QR code, browse interactive menus, place orders, and pay directly from their mobile browser.",
        badge: "Browser QR",
        highlights: [
          "Zero App Download Required — 100% Mobile Browser Based",
          "Instant Tabletop & Countertop QR Ordering with Real-Time Menu Updates",
          "Direct Integration with Kitchen Order Tickets (KOT) & TMBill POS",
          "Integrated Multi-Currency Gateways (Apple Pay, UPI, Credit Cards)"
        ]
      }
    ]
  }
];

// Helper to look up any product or type by ID
export const findProductOrType = (id) => {
  if (!id) return products[0];
  const direct = products.find(p => p.id === id);
  if (direct) return direct;
  for (const p of products) {
    const matchedType = p.types?.find(t => t.id === id);
    if (matchedType) {
      return {
        ...matchedType,
        parentProduct: p,
        category: p.name,
        color: p.color
      };
    }
  }
  return products[0];
};

export const services = [
  // 1) CYBER SECURITY SERVICE
  {
    id: "cyber-security",
    title: "Cyber Security Service",
    tagline: "Follow Security Services Blueprint — Blue PPT",
    desc: "Comprehensive enterprise cyber defense, continuous vulnerability assessments, and 24/7 SOC incident containment aligned with international standards.",
    items: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "24/7 Security Operations Center (SOC) & Cloud Security Defense",
      "Endpoint Detection & Incident Response (Blue Team Operations)",
      "Zero Trust Architecture & Network Security Hardening",
      "Regulatory Compliance & Security Audit Governance (ISO 27001, UAE NESA, GDPR)"
    ],
    icon: "Shield"
  },

  // 2) AI DIGITAL TRANSFORMATION
  {
    id: "digital-transformation",
    title: "AI Digital Transformation",
    tagline: "SEO & GEO Services (Pixis.AI) & Omnichannel Automation",
    desc: "Accelerating brand authority and revenue through cutting-edge Generative Engine Optimization (GEO), AI citation engineering, and multi-platform automation.",
    items: [
      "SEO & GEO Services (Pixis.AI - Generative Engine Optimization)",
      "Multi-Model Citation Engineering (ChatGPT, Gemini, Perplexity, Copilot)",
      "Omni-Channel Social Media & GMB Review Automation",
      "Intelligent Marketing Funnels & Conversational Chatflows",
      "Enterprise Digital Transformation & Process Modernization"
    ],
    icon: "Sparkles"
  },

  // 3) WEB APPLICATION DEVELOPMENT (AI POWERED - IMPORTANT HIGHLIGHT)
  {
    id: "web-app-dev",
    title: "Web Application Development",
    tagline: "AI-Powered Full-Cycle Engineering — Important Highlight",
    desc: "State-of-the-art web and mobile engineering supercharged with AI integrations. We build responsive, scalable, and ultra-secure software for modern enterprises.",
    items: [
      "Static Website Development (Blazing-Fast High-Converting Web Portals)",
      "Dynamic Website Development (Complex Data-Driven Cloud Platforms)",
      "E-Commerce Web Application Development (Custom Cart, Gateways & Inventory)",
      "Mobile Apps Development (Native iOS, Android & Flutter Cross-Platform)",
      "AI-Powered Feature Engineering & Copilot Integrations"
    ],
    icon: "Code2"
  },

  // 4) AI AGENTS & AI CHAT BOTS (NEED MORE RESEARCH)
  {
    id: "ai-agents-chatbots",
    title: "AI Agents & AI Chatbots",
    tagline: "Autonomous Multi-Agent Systems & Digital AI Workforce (Need More Research)",
    desc: "Designing, training, and deploying purpose-built autonomous AI agents that reason, analyze data, take action, and operate 24/7 across critical business domains.",
    items: [
      "Building Intelligent Custom Agent (Domain-Specific Fine-Tuned LLMs)",
      "Business Analyst Agent (Market Intelligence, Competitor Analysis & KPI Reports)",
      "Build Stock / Crypto / Forex Agent (Algorithmic Sentiment & Technical Telemetry)",
      "Build Voice Calling Agent (Ultra-Low Latency Telephony Conversational AI)",
      "Build Digital AI Employees (BigDot - 24/7 Autonomous Enterprise Workers)"
    ],
    icon: "Bot"
  }
];

export const techPartners = [
  {
    name: "TMBill",
    type: "Restaurant Operating System",
    logo: "/assets/partners/tmbill.png",
    desc: "Leading restaurant POS, cloud kitchen management, and aggregator integration platform deployed in 14,000+ restaurants."
  },
  {
    name: "HAEGL Technologies",
    type: "Enterprise Solutions",
    logo: "/assets/partners/haegl.png",
    desc: "Strategic partner in advanced software engineering, robotics, and industrial technology implementations."
  },
  {
    name: "AlignBooks",
    type: "Cloud ERP Partner",
    logo: "/assets/partners/alignbooks.png",
    desc: "Gold partner delivering UAE VAT & Indian GST compliant cloud ERP software to 14,000+ businesses."
  },
  {
    name: "anvex.ai",
    type: "Autonomous AI Agents",
    logo: "/assets/partners/anvex.png",
    desc: "Next-generation multimodal AI voice, vision, and chatbot platform powering intelligent business automation."
  },
  {
    name: "Sianty Mobility",
    type: "Empowering Mobility",
    logo: "/assets/partners/sianty.png",
    desc: "Innovative smart mobility, fleet automation, and telematics solutions ecosystem."
  },
  {
    name: "SAP Business One",
    type: "Enterprise ERP Solutions",
    logo: "/assets/partners/sap.png",
    desc: "Authorized implementation and customization partner for scaling medium and large enterprises."
  },
  {
    name: "Quantum IT Solution",
    type: "IT Systems & Infrastructure",
    logo: "/assets/partners/quantum.png",
    desc: "Enterprise IT consulting, infrastructure deployment, and software maintenance services."
  },
  {
    name: "Autorox",
    type: "Smart Garage OS",
    logo: "/assets/partners/autorox.png",
    desc: "Garage management platform powering 36,000+ multi-brand auto repair centers worldwide."
  },
  {
    name: "NEX-G Automation",
    type: "Industrial Automation",
    logo: "/assets/partners/nex_g.png",
    desc: "Robotic process automation, IoT sensor integration, and smart manufacturing systems."
  },
  {
    name: "Prospect AI",
    type: "AI-Powered Sales Engine",
    logo: "/assets/partners/prospect_ai.png",
    desc: "AI lead capture, 2-way qualification, and calendar appointment engine for scaling revenue."
  },
  {
    name: "Qobrix",
    type: "PropTech CRM & Portal",
    logo: "/assets/partners/qobrix.png",
    desc: "Enterprise real estate CRM and property portal syndication software for developers and real estate brokers."
  },
  {
    name: "7 Technologies",
    type: "Cloud & Dev Services",
    logo: "/assets/partners/7crore.png",
    desc: "Cloud architecture, DevOps pipelines, and enterprise application modernization."
  },
  {
    name: "MBG Card",
    type: "Smart Business Cards",
    logo: "/assets/partners/mbg.png",
    desc: "NFC smart digital business card infrastructure and contactless networking hardware."
  },
  {
    name: "Xapa SMART Solutions",
    type: "Experiential Loyalty",
    logo: "/assets/partners/xapa.png",
    desc: "AI-driven customer loyalty, digital gift card integrations, and corporate milestone rewards."
  },
  {
    name: "AcenAAr Technologies",
    type: "Light for People Tech",
    logo: "/assets/partners/cennar.png",
    desc: "Engineering research, electronic components programming, and digital systems."
  },
  {
    name: "US English Academy",
    type: "Corporate Communication",
    logo: "/assets/partners/us_english.png",
    desc: "Epitome of English elegance - faculty and student language and corporate soft skills upskilling."
  }
];

export const academicMOUs = [
  {
    id: "svit",
    name: "Sai Vidya Institute of Technology (SVIT)",
    location: "Rajanukunte, Bengaluru, Karnataka",
    type: "AICTE Accredited Engineering College",
    tagline: "Learn to Lead",
    logo: "/assets/mous/svit.png",
    established: "2008",
    desc: "Long-standing institutional MOU focusing on Cloud Computing Labs, Artificial Intelligence & ML student training programs, and placement acceleration bootcamps."
  },
  {
    id: "bmsit",
    name: "BMS Institute of Technology & Management (BMSIT & M)",
    location: "Yelahanka, Bengaluru, Karnataka",
    type: "Autonomous Institution Under VTU",
    tagline: "Premier Autonomous Institution",
    logo: "/assets/mous/bmsit.png",
    established: "2002",
    desc: "Collaborative research laboratory, joint AI & Data Science seminars, IEEE final-year capstone project incubation, and enterprise software sprint internships."
  },
  {
    id: "knsit",
    name: "KNS Institute of Technology (KNSIT)",
    location: "Hegde Nagar, Yelahanka, Bengaluru",
    type: "KNS Memorial Charitable Trust / VTU Affiliated",
    tagline: "Excellence in Technical Education",
    logo: "/assets/mous/knsit.png",
    established: "1999",
    desc: "Industrial project mentoring, full-stack web and mobile engineering bootcamps, and direct campus recruitment assistance for Computer Science and Info Science graduates."
  },
  {
    id: "aitm",
    name: "Anjuman Institute of Technology & Management (AITM)",
    location: "Bhatkal, Uttara Kannada, Karnataka",
    type: "AICTE Approved Engineering College",
    tagline: "Achievement • Excellence • Creativity",
    logo: "/assets/mous/aitam.png",
    established: "1980",
    desc: "Decades of engineering heritage partner for IoT, Cybersecurity, and Cloud ERP training, empowering students with industry-grade software architectures."
  },
  {
    id: "ewgi",
    name: "East West Group of Institutions (EWGI)",
    location: "Bengaluru, Karnataka",
    type: "Premier Multi-Disciplinary Campus",
    tagline: "Estd 1968 - 50+ Years of Academic Eminence",
    logo: "/assets/mous/ewgoi.png",
    established: "1968",
    desc: "Comprehensive collaboration across B.E, B.Tech, MCA, and Polytechnic branches for industry-integrated Student Training Programs (STPs) and Faculty Development Programs (FDPs)."
  },
  {
    id: "mit-kundapura",
    name: "Moodlakatte Institute of Technology (MIT Kundapura)",
    location: "Kundapura, Udupi District, Karnataka",
    type: "Coastal Karnataka Tech Hub",
    tagline: "Technical Innovation & Rural Engineering",
    logo: "/assets/mous/mit.png",
    established: "2004",
    desc: "Hands-on product development sprints, IEEE project mentorship, hackathons, and regional talent incubation connecting coastal students with global tech opportunities."
  },
  {
    id: "bet",
    name: "Bhatkal Education Trust (BET)",
    location: "Bhatkal, Karnataka",
    type: "Pioneering Educational Foundation",
    tagline: "Knowledge • Fraternity • Discipline",
    logo: "/assets/mous/bet.jpg",
    established: "Trust Network",
    desc: "Foundation-level technology incubation, computer science seminars, digital literacy drives, and early career software engineering workshops."
  },
  {
    id: "mes-sirsi",
    name: "M.E.S. Arts and Science College (MES Sirsi)",
    location: "Sirsi, Uttara Kannada, Karnataka",
    type: "Collegiate Degree & Science Institution",
    tagline: "Estd 1962 - 60+ Years of Science Education",
    logo: "/assets/mous/mes.jpg",
    established: "1962",
    desc: "B.Sc, BCA, and computer applications curriculum enrichment, scientific computing labs, data analytics projects, and career readiness certifications."
  },
  {
    id: "jmj",
    name: "Jesus Mary Joseph (JMJ) Educational Institutions",
    location: "Karnataka & Regional Network",
    type: "Higher Educational Trust",
    tagline: "Love • Joy • Service",
    logo: "/assets/mous/jmj.png",
    established: "Institutional Network",
    desc: "Collaborative vocational training, software skills empowerment, practical coding labs, and student personality development programs."
  },
  {
    id: "milagres",
    name: "Milagres College Mangaluru",
    location: "Hampankatta, Mangaluru, Karnataka",
    type: "Heritage College (Estd 1848)",
    tagline: "Passion for Perfection - AD 1848",
    logo: "/assets/mous/milagres.jpg",
    established: "1848",
    desc: "Historic 175+ year institution collaborating on BCA / B.Sc computer science projects, IT industry seminars, and student technology internships."
  }
];

export const officeLocations = [
  {
    city: "Bengaluru (Headquarters)",
    country: "India",
    flag: "🇮🇳",
    badge: "HQ",
    type: "Engineering Headquarters & Innovation Lab",
    address: "1st Floor, Above Pai Vista, Opp. Rail Wheel Factory, Bengaluru, Karnataka, India - 560064",
    phone: "+91 8867845719",
    email: "infor@zetacoding.com",
    whatsapp: "918867845719"
  },
  {
    city: "Mangaluru Branch",
    country: "India",
    flag: "🇮🇳",
    badge: "Regional Hub",
    type: "Software Development & Regional Training Center",
    address: "Ground Floor, City Centre Mall / KS Rao Road, Mangaluru, Karnataka, India - 575001",
    phone: "+91 8242984028",
    email: "mangaluru@zetacoding.com",
    whatsapp: "918867845719"
  },
  {
    city: "Dubai LLC Office",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    badge: "International Corporate Hub",
    type: "ZETACODING INFORMATION TECHNOLOGY L.L.C",
    address: "Office 204, Burj Al Nahar Complex, Al Muteena, Deira, Dubai, United Arab Emirates (P.O. Box 9234)",
    phone: "+971 563 140 1786",
    email: "dubai@zetacoding.com",
    whatsapp: "9715631401786"
  }
];

export const legalDetails = {
  dubaiLicense: {
    companyName: "ZETACODING INFORMATION TECHNOLOGY L.L.C",
    licenseNo: "1485234",
    registerNo: "2466035",
    legalType: "Limited Liability Company (LLC)",
    issueDate: "27/01/2026",
    expiryDate: "26/01/2027",
    issuingAuthority: "Government of Dubai - Department of Economy and Tourism (DET)",
    address: "Office No. 204, Burj Al Nahar Complex, Al Muteena, Deira, Dubai, UAE",
    activities: [
      "Computer Systems & Communication Equipment Software Design",
      "Information Technology Network Services",
      "Internet Content Provider",
      "Portal Operations & Cloud Computing",
      "Electronic Chips Programming",
      "Marketing Management & AI Automation",
      "Social Media Applications Development & Management",
      "Cybersecurity Advisory & Infrastructure Defense",
      "Enterprise Software Solutions Consultation",
      "Digital Platform Engineering"
    ]
  },
  isoCert: {
    standard: "ISO 9001:2015",
    certNo: "305023022510Q",
    companyName: "ZETACODING INNOVATIVE SOLUTIONS",
    scope: "Providing IT Services, Web & Mobile App Development, Academic Project Support (IEEE), Student Training Programs (STP), Ph.D Assistance, Marketing Automation, and Enterprise ERP Solutions.",
    accreditationBody: "Quality Research Organization (QRO) & IAF (International Accreditation Forum)",
    initialDate: "25/02/2023",
    reissueDate: "25/02/2024",
    expiryDate: "24/02/2026"
  },
  msmeCert: {
    regNo: "UDYAM-KR-03-0174928",
    name: "ZETACODING INNOVATIVE SOLUTIONS",
    ministry: "Ministry of Micro, Small and Medium Enterprises, Government of India",
    classification: "Micro Services Enterprise",
    nicCodes: [
      "NIC 6209 - Other information technology and computer service activities",
      "NIC 8549 - Other education and technical training n.e.c."
    ]
  },
  taxRegistrations: {
    corporateTax: {
      authority: "Federal Tax Authority (FTA), United Arab Emirates",
      trn: "105008544900003",
      category: "Corporate Tax Registration"
    },
    vatRegistration: {
      authority: "Federal Tax Authority (FTA), United Arab Emirates",
      trn: "100582914400003",
      category: "Value Added Tax (VAT) Compliance"
    }
  }
};
