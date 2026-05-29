export const bookingHelperText = "You'll be redirected to Square to choose your service and appointment time.";

export function BookingHelperText({ className = "" }: { className?: string }) {
  return <p className={`booking-helper ${className}`.trim()}>{bookingHelperText}</p>;
}
