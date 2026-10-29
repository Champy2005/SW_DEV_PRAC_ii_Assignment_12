"use client";

import Image from "next/image";
import { Rating } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import InteractiveCard from "./InteractiveCard";
// A07 TODO Step 3 (A07_GUIDE.md): add an optional href prop and import next/link.
// Place the image, name, and description inside one Link; keep Rating outside
// that Link so clicking stars updates the rating without opening venue details.
// Keep the outer article as the grid item to preserve the complete card layout.
type CardProps = {
  imgSrc?: string;
  venueName?: string;
  description?: string;
  onRatingChange?: (venueName: string, newValue: number) => void;
  href?: string;
};

export default function Card({
  imgSrc = "/img/venue-wedding-hall.jpg",
  venueName = "The Heritage Ballroom",
  description = "A graceful historic hall with elegant arches, candlelit tables, and timeless character for weddings and formal receptions.",
  onRatingChange,
  href,
}: CardProps) {
  const [rating, setRating] = useState<number | null>(0);
  const ratingName = `${venueName} Rating`;
  return (
    <InteractiveCard>
      <Link
        href={href ?? "#"}
        className="block min-w-0 rounded-xl focus-visible:outline-2 focus-visible:outline-amber-800"
      >
        <div className="relative mb-[clamp(1rem,2vw,1.5rem)] aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-200 ring-1 ring-amber-900/10">
          <Image
            src={imgSrc}
            alt={venueName}
            fill
            sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 45vw, 360px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h2 className="mb-[clamp(0.6rem,1vw,0.9rem)] text-center text-[clamp(1.15rem,2vw,1.4rem)] leading-tight font-bold text-amber-950">
          {venueName}
        </h2>
        <p className="text-sm leading-[1.65] text-stone-600">{description}</p>
      </Link>
      {/* A07 TODO Step 3: this Rating must remain a sibling of the Link.
          Preserve value, onChange, id, name, and data-testid from A06. */}
      {onRatingChange && (
        <Rating
          value={rating}
          onChange={(_event, newValue) => {
            if (newValue !== null) {
              setRating(newValue);
              onRatingChange?.(venueName, newValue);
            }
          }}
          id={ratingName}
          name={ratingName}
          data-testid={ratingName}
        />
      )}
    </InteractiveCard>
  );
}
