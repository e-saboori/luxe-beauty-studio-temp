import { Calendar } from "lucide-react";
import { bookingUrl } from "@/lib/site-data";
import { Button } from "./Button";

type BookingCTAProps = {
  title?: string;
  copy?: string;
  buttonLabel?: string;
};

export function BookingCTA({
  title = "Ready to Book?",
  copy = "Your perfect look is just a click away.",
  buttonLabel = "Book Appointment"
}: BookingCTAProps) {
  return (
    <section className="booking-band" aria-label="Book an appointment">
      <div className="container booking-box">
        <div className="booking-icon">
          <Calendar size={44} aria-hidden="true" />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <Button href={bookingUrl}>{buttonLabel}</Button>
      </div>
    </section>
  );
}
