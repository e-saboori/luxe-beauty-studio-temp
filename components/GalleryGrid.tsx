import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import { gallery, galleryGroups } from "@/lib/site-data";

type GalleryGridProps = {
  limit?: number;
  grouped?: boolean;
};

function PhotoGrid({ photos }: { photos: typeof gallery }) {
  return (
    <div className="gallery-grid">
      {photos.map((photo) => (
        <figure key={`${photo.category}-${photo.src}`} className="gallery-card">
          <Image
            src={withBasePath(photo.src)}
            alt={photo.alt}
            width={620}
            height={780}
            sizes="(max-width: 760px) 100vw, 25vw"
          />
          <figcaption>{photo.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function GalleryGrid({ limit, grouped = false }: GalleryGridProps) {
  const photos = typeof limit === "number" ? gallery.slice(0, limit) : gallery;

  if (grouped) {
    return (
      <div className="gallery-groups">
        {galleryGroups.map((group) => (
          <section key={group.id} className="gallery-group" aria-labelledby={`${group.id}-gallery`}>
            <h3 id={`${group.id}-gallery`}>{group.label}</h3>
            <PhotoGrid photos={group.photos.map((photo) => ({ ...photo, category: group.label }))} />
          </section>
        ))}
      </div>
    );
  }

  return (
    <PhotoGrid photos={photos} />
  );
}
