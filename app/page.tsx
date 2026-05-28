import Image from "next/image";
import { Award, CalendarCheck, ShieldCheck } from "lucide-react";
import { BookingCTA } from "@/components/BookingCTA";
import { Button } from "@/components/Button";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { SocialLinks } from "@/components/SocialLinks";
import { withBasePath } from "@/lib/paths";
import { bookingUrl, business, socialLinks, trustPoints } from "@/lib/site-data";
import { getServices } from "@/lib/services";

export const revalidate = 86400;

export default async function HomePage() {
  const { services } = await getServices();
  const featured = services.slice(0, 3);
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
            {featured.map((service) => (
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

      <section className="section">
        <div className="container">
          <SectionHeading
            title="A Glimpse of Our Work"
            align="center"
          />
          <GalleryGrid limit={4} />
          <p className="portfolio-note">Follow us on Instagram to see more recent work.</p>
          <div className="center-action">
            <Button href={instagramUrl}>View Instagram</Button>
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
