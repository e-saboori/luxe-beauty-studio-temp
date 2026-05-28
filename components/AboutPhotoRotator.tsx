"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/paths";

type RotatingPhoto = {
  src: string;
  alt: string;
};

type AboutPhotoRotatorProps = {
  photos: RotatingPhoto[];
};

export function AboutPhotoRotator({ photos }: AboutPhotoRotatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % photos.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="about-photo-rotator" aria-label="Rotating artist photos">
      {photos.map((photo, index) => (
        <Image
          key={photo.src}
          src={withBasePath(photo.src)}
          alt={photo.alt}
          width={620}
          height={720}
          priority={index === 0}
          className={index === activeIndex ? "is-active" : ""}
          sizes="(max-width: 760px) 100vw, 45vw"
        />
      ))}
    </div>
  );
}
