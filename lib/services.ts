import { bookingUrl } from "./site-data";

export type StudioService = {
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

function serviceImageFor(name: string, category: string) {
  const value = `${name} ${category}`.toLowerCase();

  if (value.includes("eyeline") || value.includes("eyeliner")) {
    return "/images/eyeline/eyeliner-shading-result.jpg";
  }

  if (value.includes("lip")) {
    return "/images/lip/lip-blush-result.jpg";
  }

  if (value.includes("brow") || value.includes("microblad")) {
    return "/images/eyebrows/brow-shaping-result.jpg";
  }

  if (value.includes("touch") || value.includes("fill")) {
    return "";
  }

  return "/images/lash/classic-lash-result.jpg";
}

const mockServices: StudioService[] = [
  {
    id: "classic-lash",
    name: "Classic Lash Extensions",
    category: "Lashes",
    description: "Natural, everyday lash enhancement for a clean and polished look.",
    price: "$120",
    duration: "120 min",
    imageSrc: serviceImageFor("Classic Lash Extensions", "Lashes"),
    bookingUrl,
    sortOrder: 10
  },
  {
    id: "hybrid-lash",
    name: "Hybrid Lash Extensions",
    category: "Lashes",
    description: "A soft blend of classic and volume lashes for light fullness.",
    price: "$145",
    duration: "135 min",
    imageSrc: serviceImageFor("Hybrid Lash Extensions", "Lashes"),
    bookingUrl,
    sortOrder: 20
  },
  {
    id: "volume-lash",
    name: "Volume Lash Extensions",
    category: "Lashes",
    description: "Fuller, dramatic lashes with a refined, weightless finish.",
    price: "$165",
    duration: "150 min",
    imageSrc: serviceImageFor("Volume Lash Extensions", "Lashes"),
    bookingUrl,
    sortOrder: 30
  },
  {
    id: "lip-blush",
    name: "Lip Blushing",
    category: "Lips",
    description: "Semi-permanent lip color designed for a soft, natural tint.",
    price: "$350",
    duration: "180 min",
    imageSrc: serviceImageFor("Lip Blushing", "Lips"),
    bookingUrl,
    sortOrder: 40
  },
  {
    id: "brow-shaping",
    name: "Brow Shaping",
    category: "Brows",
    description: "Clean, balanced brows that frame your features beautifully.",
    price: "$45",
    duration: "45 min",
    imageSrc: serviceImageFor("Brow Shaping", "Brows"),
    bookingUrl,
    sortOrder: 50
  },
  {
    id: "touch-up",
    name: "Touch-Up Appointment",
    category: "Touch-Ups",
    description: "Maintenance appointment to keep your beauty results fresh.",
    price: "$75+",
    duration: "60 min",
    imageSrc: serviceImageFor("Touch-Up Appointment", "Touch-Ups"),
    bookingUrl,
    sortOrder: 60
  }
];

type SquareCatalogObject = {
  id: string;
  type: string;
  updated_at?: string;
  present_at_all_locations?: boolean;
  present_at_location_ids?: string[];
  item_data?: {
    name?: string;
    description?: string;
    category_id?: string;
    variations?: SquareCatalogObject[];
  };
  item_variation_data?: {
    name?: string;
    price_money?: {
      amount?: number;
      currency?: string;
    };
    service_duration?: number;
  };
  category_data?: {
    name?: string;
  };
};

function formatPrice(amount?: number, currency = "USD") {
  if (typeof amount !== "number") return "Price varies";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: amount % 100 === 0 ? 0 : 2
  }).format(amount / 100);
}

function formatDuration(milliseconds?: number) {
  if (!milliseconds) return "Duration varies";

  const minutes = Math.round(milliseconds / 60000);
  if (minutes < 60) return `${minutes} min`;

  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  return remaining ? `${hours} hr ${remaining} min` : `${hours} hr`;
}

function inferCategory(name: string, fallback?: string) {
  const value = `${name} ${fallback ?? ""}`.toLowerCase();
  if (value.includes("lash")) return "Lashes";
  if (value.includes("lip")) return "Lips";
  if (value.includes("brow")) return "Brows";
  if (value.includes("touch") || value.includes("fill")) return "Touch-Ups";
  return fallback || "Services";
}

function normalizeSquareCatalog(objects: SquareCatalogObject[]): StudioService[] {
  const categories = new Map(
    objects
      .filter((object) => object.type === "CATEGORY")
      .map((object) => [object.id, object.category_data?.name ?? "Services"])
  );

  return objects
    .filter((object) => object.type === "ITEM" && object.item_data?.variations?.length)
    .flatMap((item, itemIndex) => {
      const itemName = item.item_data?.name ?? "Beauty Service";
      const categoryName = categories.get(item.item_data?.category_id ?? "");

      return (item.item_data?.variations ?? []).map((variation, variationIndex) => {
        const variationName = variation.item_variation_data?.name;
        const serviceName =
          variationName && variationName.toLowerCase() !== "regular"
            ? `${itemName} - ${variationName}`
            : itemName;

        return {
          id: variation.id,
          name: serviceName,
          category: inferCategory(serviceName, categoryName),
          description:
            item.item_data?.description ??
            "Personalized cosmetic beauty service tailored to your features and goals.",
          price: formatPrice(
            variation.item_variation_data?.price_money?.amount,
            variation.item_variation_data?.price_money?.currency
          ),
          duration: formatDuration(variation.item_variation_data?.service_duration),
          imageSrc: serviceImageFor(serviceName, inferCategory(serviceName, categoryName)),
          bookingUrl,
          sortOrder: itemIndex * 100 + variationIndex
        };
      });
    })
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getServices(): Promise<{ services: StudioService[]; source: "square" | "mock" }> {
  const token = process.env.SQUARE_ACCESS_TOKEN;
  const environment = process.env.SQUARE_ENVIRONMENT === "sandbox" ? "sandbox" : "production";
  const locationId = process.env.SQUARE_LOCATION_ID;

  if (!token) return { services: mockServices, source: "mock" };

  try {
    const response = await fetch(
      `https://connect.${environment === "sandbox" ? "squareupsandbox" : "squareup"}.com/v2/catalog/list?types=ITEM,CATEGORY`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Square-Version": "2026-05-21",
          "Content-Type": "application/json"
        },
        next: { revalidate: 86400 }
      }
    );

    if (!response.ok) {
      console.error("Square catalog request failed", response.status, await response.text());
      return { services: mockServices, source: "mock" };
    }

    const payload = (await response.json()) as { objects?: SquareCatalogObject[] };
    const objects = (payload.objects ?? []).filter((object) => {
      if (!locationId) return true;
      if (object.present_at_all_locations) return true;
      return object.present_at_location_ids?.includes(locationId);
    });
    const services = normalizeSquareCatalog(objects);

    return services.length ? { services, source: "square" } : { services: mockServices, source: "mock" };
  } catch (error) {
    console.error("Square service sync failed", error);
    return { services: mockServices, source: "mock" };
  }
}

export function groupServices(services: StudioService[]) {
  return services.reduce<Record<string, StudioService[]>>((groups, service) => {
    groups[service.category] ??= [];
    groups[service.category].push(service);
    return groups;
  }, {});
}
