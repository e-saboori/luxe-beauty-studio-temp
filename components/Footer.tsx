import Link from "next/link";
import { Calendar } from "lucide-react";
import { bookingUrl, business, contactLinks } from "@/lib/site-data";
import { Button } from "./Button";
import { Logo } from "./SiteHeader";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <SocialLinks />
        </div>
        <div>
          <h2 className="footer-title">Contact</h2>
          <div className="footer-list">
            {contactLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
              href.startsWith("/") ? (
                <Link key={label} href={href}>
                  <Icon size={18} aria-hidden="true" />
                  <span>{label}</span>
                </Link>
              ) : (
                <a key={label} href={href}>
                  <Icon size={18} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              )
            ))}
          </div>
        </div>
        <div>
          <h2 className="footer-title">Hours</h2>
          <dl className="hours-list">
            {business.hours.map(([day, hours]) => (
              <div key={day}>
                <dt>{day}</dt>
                <dd>{hours}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="footer-booking">
          <h2 className="footer-title">Book Your Appointment</h2>
          <p>Appointments are reserved through Square for a simple, secure experience.</p>
          <Button href={bookingUrl}>
            <Calendar size={16} aria-hidden="true" />
            Book Appointment
          </Button>
        </div>
      </div>
      <p className="copyright">© 2026 {business.name}. All rights reserved.</p>
    </footer>
  );
}
