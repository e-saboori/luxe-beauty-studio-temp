"use client";

import { Calendar, MapPin, Phone } from "lucide-react";
import { bookingUrl, business } from "@/lib/site-data";
import { BookingHelperText } from "./BookingHelperText";
import { Button } from "./Button";
import { Logo } from "./SiteHeader";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-simple">
        <div className="footer-brand">
          <Logo />
          <SocialLinks />
        </div>

        <div className="footer-contact">
          <p>
            <MapPin size={17} aria-hidden="true" />
            <span>{business.address}</span>
          </p>
          <a href={`tel:${business.phone.replace(/[^\d+]/g, "")}`}>
            <Phone size={17} aria-hidden="true" />
            <span>{business.phone}</span>
          </a>
        </div>

        <div className="footer-booking">
          <Button href={bookingUrl}>
            <Calendar size={16} aria-hidden="true" />
            Book Appointment
          </Button>
          <BookingHelperText />
        </div>
      </div>
      <p className="copyright">&copy; 2026 {business.name}. All rights reserved.</p>
    </footer>
  );
}
