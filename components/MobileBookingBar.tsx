import { Calendar } from "lucide-react";
import { bookingUrl } from "@/lib/site-data";

export function MobileBookingBar() {
  return (
    <div className="mobile-booking-bar">
      <a href={bookingUrl} target="_blank" rel="noreferrer">
        <Calendar size={18} aria-hidden="true" />
        Book Appointment
      </a>
    </div>
  );
}
