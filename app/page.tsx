import Image from "next/image";
import { Award, CalendarCheck, ShieldCheck } from "lucide-react";
import { BookingCTA } from "@/components/BookingCTA";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { withBasePath } from "@/lib/paths";
import { bookingUrl, business, socialLinks, trustPoints } from "@/lib/site-data";

export const revalidate = 86400;

const featuredServices = [
  {
    id: "eyebrows-microneedling",
    name: "Eyebrows Microneedling",
    category: "Eyebrows",
    description: "Soft brow detail work designed to refresh, define, and enhance your natural brows.",
    price: "CA$280.00",
    duration: "2 hr 30 min",
    imageSrc: "/images/eyebrows/soft-brow-detail.jpg",
    bookingUrl,
    sortOrder: 10
  },
  {
    id: "lip-blush-featured",
    name: "Lip Blush",
    category: "Lips",
    description: "A natural-looking tint that adds balanced color and definition to your lips.",
    price: "CA$250.00",
    duration: "2 hr 30 min",
    imageSrc: "/images/lip/lip-blush-result.jpg",
    bookingUrl,
    sortOrder: 20
  },
  {
    id: "eyeliner-featured",
    name: "Eyeliner",
    category: "Eyeline",
    description: "Soft lash-line shading for a polished look that stays effortlessly refined.",
    price: "CA$250.00",
    duration: "2 hr 30 min",
    imageSrc: "/images/eyeline/eyeliner-shading-result.jpg",
    bookingUrl,
    sortOrder: 30
  }
];

const instagramPosts = [
  {
    src: "/images/instagram/lips.PNG",
    alt: "Lip blush result from Sepid Beauty Studio",
    className: "instagram-post-lip"
  },
  {
    src: "/images/instagram/eyebrows.PNG",
    alt: "Soft brow detail result from Sepid Beauty Studio",
    className: "instagram-post-brow"
  },
  {
    src: "/images/instagram/lash.PNG",
    alt: "Lash result from Sepid Beauty Studio",
    className: "instagram-post-lash"
  }
];

export default async function HomePage() {
  const instagramUrl = socialLinks.find((link) => link.platform === "Instagram")?.href ?? "https://www.instagram.com/sepidehmz_phibrows";
  const trustIcons = [Award, ShieldCheck, CalendarCheck];

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>{business.tagline}</h1>
            <div className="gold-line" />
            <p>{business.description}</p>
            <div className="hero-actions">
              <Button href={bookingUrl}>Book Appointment</Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src={withBasePath("/images/home-hero.jpg")}
              alt="Sepid Beauty Studio hero beauty portrait"
              width={980}
              height={900}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="Our Signature Services" align="center" />
          <div className="service-grid featured-grid">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="center-action">
            <Button href="/services" variant="secondary">
              See All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="instagram-work-section">
        <div className="container instagram-work-grid">
          <div className="instagram-showcase" aria-label="Selected Instagram work">
            {instagramPosts.map((post, index) => (
              <article key={post.src} className={`instagram-post-card ${post.className}`}>
                <div className="instagram-post-image">
                  <Image
                    src={withBasePath(post.src)}
                    alt={post.alt}
                    width={1206}
                    height={1516}
                    sizes="(max-width: 760px) 100vw, 27vw"
                    priority={index === 0}
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="instagram-work-copy">
            <p className="eyebrow">Inspiration</p>
            <h2>Our Work</h2>
            <p>
              Explore the artistry of our skilled beauty artist on Instagram, from soft brows to lip blush and eyeliner
              shading.
            </p>
            <Button href={instagramUrl}>Our Instagram</Button>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container trust-grid">
          {trustPoints.map((point, index) => {
            const Icon = trustIcons[index] ?? Award;

            return (
              <article key={point.title} className="trust-card">
                <Icon size={28} aria-hidden="true" />
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <BookingCTA title="Ready to Book?" copy="Your perfect look is just a click away." buttonLabel="Book Appointment" />
    </>
  );
}
