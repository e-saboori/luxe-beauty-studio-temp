import { Calendar, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export const bookingUrl =
  process.env.SQUARE_BOOKING_URL ??
  "https://book.squareup.com/appointments/s0cbov869arv2h/location/LEZAB4BPYWKQY/services";

export const business = {
  name: "Sepid Beauty Studio",
  tagline: "Effortless Beauty, Expertly Enhanced",
  description:
    "Luxury lash extensions, brows, lip blush, and semi-permanent beauty services designed to highlight your natural features.",
  phone: "(647) 685-5659",
  email: "hello@sepidbeauty.com",
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
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const socialLinks = [
  { platform: "Instagram", href: "https://www.instagram.com/sepidehmz_phibrows/", icon: Instagram },
  { platform: "Facebook", href: "https://www.facebook.com/sepideh.phibrows/", icon: Facebook }
];

export const contactLinks = [
  { label: business.phone, href: `tel:${business.phone.replace(/[^\d+]/g, "")}`, icon: Phone },
  { label: business.email, href: `mailto:${business.email}`, icon: Mail },
  { label: business.address, href: "/contact", icon: MapPin },
  { label: "Book Appointment", href: bookingUrl, icon: Calendar }
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
  ],
  credentials: [
    "Over 10 years of beauty industry experience",
    "Lash extensions, brow shaping, and microblading",
    "Lip blush, eyeliner shading, and permanent makeup",
    "High-quality products, hygiene, and natural lash and skin health"
  ]
};

export const homeAboutCopy =
  "With over 10 years of experience, Sepid helps clients feel confident through lash extensions, brow shaping, semi-permanent makeup, and beauty care designed to enhance natural features.";

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

export const aboutPhotos = [
  {
    src: "/images/about/artist-portrait.jpg",
    alt: "Beauty artist portrait"
  },
  {
    src: "/images/about/studio-detail.jpg",
    alt: "Beauty studio detail"
  },
  {
    src: "/images/about/contact-hero-decor.jpg",
    alt: "Beauty appointment detail"
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

export const galleryGroups = [
  {
    id: "lashes",
    label: "Lashes",
    photos: [
      {
        src: "/images/lash/classic-lash-result.jpg",
        alt: "Soft glam lash extension detail",
        label: "Classic Lash Extensions"
      },
      {
        src: "/images/lash/lash-application.jpg",
        alt: "Beauty artist applying lash service",
        label: "Lash Application"
      },
      {
        src: "/images/lash/volume-lash-result.jpg",
        alt: "Full lash extension result",
        label: "Volume Lashes"
      }
    ]
  },
  {
    id: "eyebrows",
    label: "Eyebrows",
    photos: [
      {
        src: "/images/eyebrows/brow-shaping-result.jpg",
        alt: "Clean beauty tools for brow shaping",
        label: "Brow Shaping"
      },
      {
        src: "/images/eyebrows/microblading-result.jpg",
        alt: "Detailed eyebrow beauty result",
        label: "Microblading"
      },
      {
        src: "/images/eyebrows/soft-brow-detail.jpg",
        alt: "Soft brow enhancement result",
        label: "Brow Detail"
      }
    ]
  },
  {
    id: "lips",
    label: "Lips",
    photos: [
      {
        src: "/images/lip/lip-blush-result.jpg",
        alt: "Glossy lip blush cosmetic result",
        label: "Lip Blush"
      }
    ]
  },
  {
    id: "eyeliner",
    label: "Eyeliner",
    photos: [
      {
        src: "/images/eyeline/eyeliner-shading-result.jpg",
        alt: "Elegant eyeliner makeup detail",
        label: "Eyeliner Shading"
      }
    ]
  }
];

export const gallery = galleryGroups.flatMap((group) =>
  group.photos.map((photo) => ({
    ...photo,
    category: group.label
  }))
);
