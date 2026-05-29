import { Facebook, Instagram } from "lucide-react";

export const bookingUrl =
  process.env.SQUARE_BOOKING_URL ??
  "https://book.squareup.com/appointments/s0cbov869arv2h/location/LEZAB4BPYWKQY/services";

export const business = {
  name: "Sepid Beauty Studio",
  tagline: "Natural Lash, Brows & Permanent Makeup Services in North York",
  description:
    "Soft, elegant beauty enhancements including lash extensions, brows, lip blush, eyeliner, and permanent makeup - designed to enhance your natural features.",
  phone: "(647) 685-5659",
  address: "5883 Leslie St, North York, ON M2H 1J8",
  hours: [
    ["Monday", "08:30 - 20:00"],
    ["Tuesday", "08:30 - 20:00"],
    ["Wednesday", "08:30 - 20:00"],
    ["Thursday", "08:30 - 20:00"],
    ["Friday", "08:00 - 17:00"],
    ["Saturday", "09:00 - 17:00"],
    ["Sunday", "Closed"]
  ],
  timeZoneNote: "Times shown in business time zone (GMT-4)"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export const socialLinks = [
  { platform: "Instagram", href: "https://www.instagram.com/sepidehmz_phibrows/", icon: Instagram },
  { platform: "Facebook", href: "https://www.facebook.com/sepideh.phibrows/", icon: Facebook }
];

export const artist = {
  name: "Lead Beauty Artist",
  intro:
    "With over 10 years of experience in the beauty industry, I specialize in lash extensions, brow shaping and microblading, lip blush, eyeliner shading, and permanent makeup services.",
  story:
    "My passion has always been to enhance beauty in a soft, natural, and elegant way that complements each individual's unique features.",
  paragraphs: [
    "For me, beauty is more than a service. It is a combination of artistry, precision, and attention to detail. That is why I strive to create not only beautiful results, but also a sense of confidence, comfort, and satisfaction for every client.",
    "Using high-quality products, maintaining proper hygiene standards, and prioritizing the health of natural lashes and skin are essential parts of my work philosophy.",
    "I believe true beauty comes from balance, subtlety, and enhancing what is naturally beautiful. My goal is for every client to leave feeling more confident, refreshed, and effortlessly beautiful."
  ]
};

export const trustPoints = [
  {
    title: "Certified Artist",
    copy: "Experienced beauty care with a detail-focused approach."
  },
  {
    title: "Clean & Safe Studio",
    copy: "Hygiene, comfort, and natural lash and skin health come first."
  },
  {
    title: "Easy Online Booking",
    copy: "Reserve your appointment quickly through Square."
  }
];

export const faqItems = [
  {
    question: "How do I know which service to book?",
    answer: "Choose the closest service on Square, or contact us if you are unsure. We can help guide you before booking."
  },
  {
    question: "Does the treatment hurt?",
    answer: "Comfort varies by person and service. Most clients describe the experience as manageable and gentle."
  },
  {
    question: "How long does healing take?",
    answer: "Healing depends on your skin, service, and aftercare. We will explain what to expect for your appointment."
  },
  {
    question: "Do I need a touch-up?",
    answer: "Some services may benefit from a touch-up. It depends on your skin, goals, and how the result settles."
  },
  {
    question: "What should I do before my appointment?",
    answer: "Arrive with clean skin and avoid heavy makeup around the treatment area when possible."
  },
  {
    question: "What aftercare should I follow?",
    answer: "Aftercare depends on the service. You will receive simple instructions to help support your results."
  },
  {
    question: "Can I wear makeup after my appointment?",
    answer: "It depends on the service and treatment area. We will let you know when makeup is appropriate again."
  }
];

export const aboutPhotos = [
  {
    src: "/images/about/studio-detail.jpg",
    alt: "Beauty studio detail"
  },
  {
    src: "/images/about/artist-portrait.jpg",
    alt: "Beauty artist portrait"
  },
  {
    src: "/images/about/studio-interior.jpg",
    alt: "Luxury beauty studio interior"
  }
];

export const values = [
  {
    title: "Personalized Care",
    copy: "Every client is unique. Each service is tailored to your individual needs and goals."
  },
  {
    title: "Quality & Safety",
    copy: "High-quality products, proper hygiene, and natural lash and skin health guide every appointment."
  },
  {
    title: "Enhance Naturally",
    copy: "The goal is soft, elegant enhancement that keeps your natural beauty at the center."
  },
  {
    title: "Client Confidence",
    copy: "You should leave feeling comfortable, refreshed, and effortlessly beautiful."
  }
];
