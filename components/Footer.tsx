"use client";

import { Calendar } from "lucide-react";
import { usePathname } from "next/navigation";
import { bookingUrl, business } from "@/lib/site-data";
import { BookingHelperText } from "./BookingHelperText";
import { Button } from "./Button";
import { Logo } from "./SiteHeader";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname.startsWith("/contact");

  return (
    <footer className="site-footer">
      <div className="container footer-simple">
        <div className="footer-brand">
          <Logo />
          <SocialLinks />
        </div>

        {!isContactPage ? (
          <div className="footer-contact">
            <p>{business.address}</p>
            <a href={`tel:${business.phone.replace(/[^\d+]/g, "")}`}>{business.phone}</a>
          </div>
        ) : null}

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
