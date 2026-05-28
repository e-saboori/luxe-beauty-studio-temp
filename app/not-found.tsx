import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <p className="eyebrow">Not Found</p>
        <h1>This page is not available.</h1>
        <p>Return home to continue exploring services, work, and booking options.</p>
        <Button href="/">Back Home</Button>
      </div>
    </section>
  );
}
