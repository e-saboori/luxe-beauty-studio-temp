import type { Metadata } from "next";
import Image from "next/image";
import { LockKeyhole, Mail, MapPin, Pencil, Phone, Send, User, Clock, Instagram, Facebook } from "lucide-react";
import { BookingCTA } from "@/components/BookingCTA";
import { withBasePath } from "@/lib/paths";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sepid Beauty Studio, view hours, and book your appointment through Square."
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="container contact-hero-grid">
          <div className="contact-hero-copy">
            <h1>
              We’d Love to Hear From You <span aria-hidden="true">♡</span>
            </h1>
            <div className="gold-line" />
            <p>
              Have a question or ready to book your appointment? Fill out the form or reach out using our contact
              information. We’re here to help!
            </p>
          </div>
          <div className="contact-hero-image">
            <Image
              src={withBasePath("/images/about/contact-hero-decor.jpg")}
              alt="Warm beauty studio decor with pampas grass and candle"
              width={980}
              height={650}
              priority
            />
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-main-grid">
          <form className="message-card">
            <h2>Send Us a Message</h2>
            <div className="mini-gold-line card-ornament" aria-hidden="true">
              <span />
              <span>✦</span>
            </div>
            <div className="field-row">
              <label className="field">
                <User size={20} aria-hidden="true" />
                <span className="sr-only">Your Name</span>
                <input type="text" name="name" placeholder="Your Name" />
              </label>
              <label className="field">
                <Mail size={20} aria-hidden="true" />
                <span className="sr-only">Email Address</span>
                <input type="email" name="email" placeholder="Email Address" />
              </label>
            </div>
            <label className="field">
              <Phone size={20} aria-hidden="true" />
              <span className="sr-only">Phone Number</span>
              <input type="tel" name="phone" placeholder="Phone Number" />
            </label>
            <label className="field textarea-field">
              <Pencil size={20} aria-hidden="true" />
              <span className="sr-only">How can we help you?</span>
              <textarea name="message" placeholder="How can we help you?" rows={6} />
            </label>
            <button type="submit" className="button contact-submit">
              Send Message
              <Send size={18} aria-hidden="true" />
            </button>
            <p className="privacy-note">
              <LockKeyhole size={14} aria-hidden="true" />
              We respect your privacy. Your information is safe with us.
            </p>
          </form>

          <div className="contact-info-card">
            <h2>Contact Information</h2>
            <div className="mini-gold-line card-ornament" aria-hidden="true">
              <span />
              <span>✦</span>
            </div>
            <div className="info-list">
              <div className="info-item">
                <span className="info-icon">
                  <Phone size={26} aria-hidden="true" />
                </span>
                <div>
                  <h3>Phone</h3>
                  <a href={`tel:${business.phone.replace(/[^\d+]/g, "")}`}>{business.phone}</a>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">
                  <Mail size={26} aria-hidden="true" />
                </span>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">
                  <MapPin size={26} aria-hidden="true" />
                </span>
                <div>
                  <h3>Location</h3>
                  <p>{business.address}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">
                  <Clock size={26} aria-hidden="true" />
                </span>
                <div>
                  <h3>Hours</h3>
                  <dl className="contact-hours">
                    {business.hours.map(([day, hours]) => (
                      <div key={day}>
                        <dt>{day}</dt>
                        <dd>{hours}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="timezone-note">{business.timeZoneNote}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">
                  <Instagram size={26} aria-hidden="true" />
                </span>
                <div>
                  <h3>Follow Us</h3>
                  <div className="contact-socials">
                    <a href="https://www.instagram.com/sepidehmz_phibrows" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <Instagram size={26} aria-hidden="true" />
                    </a>
                    <a href="https://www.facebook.com/sepideh.phibrows/" target="_blank" rel="noreferrer" aria-label="Facebook">
                      <Facebook size={26} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA title="Ready to Book?" copy="Your perfect look is just a click away." />
    </>
  );
}
