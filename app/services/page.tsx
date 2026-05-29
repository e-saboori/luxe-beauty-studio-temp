import type { Metadata } from "next";
import Image from "next/image";
import { BookingHelperText } from "@/components/BookingHelperText";
import { Button } from "@/components/Button";
import { FAQSection } from "@/components/FAQSection";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { withBasePath } from "@/lib/paths";
import { bookingUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Browse Sepid Beauty Studio services and book your appointment through Square."
};

const serviceSections = [
  {
    title: "Lash Extensions and Lifts",
    description:
      "Soft, customized lash extensions designed to add natural-looking length, fullness, and everyday polish.",
    image: "/images/lash/classic-lash-result.jpg",
    alt: "Classic lash extension result"
  },
  {
    title: "Lip Blush",
    description:
      "Lip blush services create a subtle, balanced tint that enhances your natural lip color and shape.",
    image: "/images/lip/lip-blush-result.jpg",
    alt: "Lip blush result"
  },
  {
    title: "Eyebrows & Microblading",
    description:
      "Brow shaping and microblading help frame your face with clean, balanced, and natural-looking definition.",
    image: "/images/eyebrows/brow-shaping-result.jpg",
    alt: "Eyebrow shaping result"
  },
  {
    title: "Eyeliner",
    description:
      "Eyeliner shading adds soft definition along the lash line for a polished look that feels effortless.",
    image: "/images/eyeline/eyeliner-shading-result.jpg",
    alt: "Eyeliner shading result"
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="services-intro">
        <div className="container narrow">
          <h1>Our Signature Services</h1>
          <p>
            Expert beauty services designed to enhance your natural features and help you feel confident, beautiful, and
            effortlessly you.
          </p>
        </div>
      </section>

      <div className="services-showcase-list">
        {serviceSections.map((service, index) => (
          <FadeInOnScroll
            key={service.title}
            className={`service-showcase-section ${index % 2 === 1 ? "service-showcase-reverse" : ""}`}
          >
            <div className="container service-showcase">
              <div className="service-showcase-copy">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="service-booking-action service-showcase-action">
                  <Button href={bookingUrl}>Book Appointment</Button>
                  <BookingHelperText />
                </div>
              </div>
              <div className="service-showcase-image">
                <Image
                  src={withBasePath(service.image)}
                  alt={service.alt}
                  width={680}
                  height={760}
                  sizes="(max-width: 760px) 100vw, 45vw"
                />
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>

      <FAQSection />
    </>
  );
}
