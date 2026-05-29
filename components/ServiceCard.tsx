import { Calendar } from "lucide-react";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import type { StudioService } from "@/lib/services";
import { Button } from "./Button";

type ServiceCardProps = {
  service: StudioService;
  variant?: "default" | "editorial";
};

export function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  if (variant === "editorial") {
    return (
      <article className="service-card service-card-editorial">
        <div className="service-media" aria-hidden={!service.imageSrc}>
          {service.imageSrc ? (
            <Image
              src={withBasePath(service.imageSrc)}
              alt={`${service.name} service example`}
              width={360}
              height={420}
              sizes="(max-width: 760px) 100vw, 22vw"
            />
          ) : (
            <Calendar size={64} strokeWidth={1.35} aria-hidden="true" />
          )}
        </div>
        <div className="service-editorial-copy">
          <h3>{service.name}</h3>
          <div className="mini-gold-line" aria-hidden="true">
            <span />
            <span>*</span>
          </div>
          <p>{service.description}</p>
          <div className="service-editorial-meta">
            <span>
              {service.price} · {service.duration}
            </span>
          </div>
          <Button href={service.bookingUrl} className="service-book">
            Book Now
          </Button>
        </div>
      </article>
    );
  }

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
          {service.price} · {service.duration}
        </span>
      </div>
      <Button href={service.bookingUrl} className="service-book">
        <Calendar size={15} aria-hidden="true" />
        Book Now
      </Button>
    </article>
  );
}
