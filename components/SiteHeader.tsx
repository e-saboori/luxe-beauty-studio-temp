"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Calendar, Menu, X } from "lucide-react";
import { bookingUrl, navItems } from "@/lib/site-data";
import { Button } from "./Button";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Sepid Beauty Studio home">
      <span className="logo-mark">S</span>
      <span>
        SEPID
        <small>Beauty Studio</small>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <Logo />
        <nav className={`nav-links ${isMenuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                href={item.href}
                key={item.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                scroll
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Button href={bookingUrl} className="nav-book">
          <Calendar size={16} aria-hidden="true" />
          Book Appointment
        </Button>
        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
