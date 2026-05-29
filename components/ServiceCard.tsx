import { Calendar } from "lucide-react";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import { Button } from "./Button";

type ServiceCardProps = {
  service: {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    duration: string;
    imageSrc: string;
    bookingUrl: string;
    sortOrder: number;
  };
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card">
      {service.imageSrc ? (
        <div className="service-card-image">
          <Image
            src={withBasePath(service.imageSrc)}
            alt={`${service.name} result`}
            width={520}
            height={420}
            sizes="(max-width: 760px) 100vw, 28vw"
          />
        </div>
      ) : null}
      <div className="service-badge" aria-hidden="true">
        <span>{service.category.slice(0, 1)}</span>
      </div>
      <p className="service-category">{service.category}</p>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <div className="service-meta">
        <span>
          {service.price}
          {" \u30fb "}
          {service.duration}
        </span>
      </div>
      <div className="service-booking-action">
        <Button href={service.bookingUrl} className="service-book">
          <Calendar size={15} aria-hidden="true" />
          Book Appointment
        </Button>
      </div>
    </article>
  );
}
