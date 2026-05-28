import type { Metadata } from "next";
import { Heart, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { AboutPhotoRotator } from "@/components/AboutPhotoRotator";
import { BookingCTA } from "@/components/BookingCTA";
import { aboutPhotos, artist, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the artist behind Sepid Beauty Studio and learn about the luxury beauty experience."
};

export default function AboutPage() {
  const icons = [Heart, ShieldCheck, Sparkles, UserRound];

  return (
    <>
      <section className="about-page">
        <div className="container">
          <div className="about-title">
            <h1>Meet Your Artist</h1>
          </div>

          <div className="about-feature">
            <AboutPhotoRotator photos={aboutPhotos} />

            <div className="about-copy">
            <p>{artist.intro}</p>
            <p>{artist.story}</p>
            {artist.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
              <p className="signature">Your Artist ♡</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-title values-title">
            <p className="eyebrow">Our Values</p>
            <h2>Beauty. Confidence. You.</h2>
          </div>

          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = icons[index] ?? Heart;

              return (
                <article key={value.title} className="value-card">
                  <Icon size={52} strokeWidth={1.45} aria-hidden="true" />
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA
        title="Ready to Book?"
        copy="Your perfect look is just a click away."
        buttonLabel="Book Appointment"
      />
    </>
  );
}
