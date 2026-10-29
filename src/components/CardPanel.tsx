"use client";

import Card from "./Card";
import { useReducer } from "react";
import { venues } from "@/libs/venues";

// A07 TODO Step 2 (A07_GUIDE.md): create src/lib/venues.ts with the venue array
// and a separate Map<string, Venue> for detail lookups. Use string IDs:
// "001" = The Bloom Pavilion, "002" = Spark Space, "003" = The Grand Table.
// Keep the rating reducer below: its Map stores ratings, not venue details.
type RatingAction =
  | {
      type: "update";
      venueName: string;
      rating: number;
    }
  | {
      type: "remove";
      venueName: string;
    };

export default function CardPanel() {
  const setStarRatingReducer = (
    ratingMap: Map<string, number>,
    action: RatingAction,
  ) => {
    switch (action.type) {
      case "update": {
        const nextMap = new Map(ratingMap);
        nextMap.set(action.venueName, action.rating);
        return nextMap;
      }
      case "remove": {
        const nextMap = new Map(ratingMap);
        nextMap.delete(action.venueName);
        return nextMap;
      }
      default:
        return ratingMap;
    }
  };

  const [ratingState, dispatchSetRating] = useReducer(
    setStarRatingReducer,
    new Map<string, number>([
      ["The Bloom Pavilion", 0],
      ["Spark Space", 0],
      ["The Grand Table", 0],
    ]),
  );

  const handleRatingChange = (venueName: string, rating: number) => {
    dispatchSetRating({
      type: "update",
      venueName,
      rating,
    });
  };

  return (
    <section className="cards">
      <div className="mx-auto mt-[clamp(2rem,5vw,5rem)] grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-[clamp(1.25rem,2.4vw,2.75rem)] px-[clamp(1rem,2.5vw,3rem)] pb-[clamp(2.5rem,6vw,6rem)]">
        {/* A07 TODO Steps 2-3: replace ONLY the three static <Card /> elements
            with venues.map(...), using key={venue.vid} and
            href={`/venue/${venue.vid}`} after adding href to CardProps.
            Keep this grid and the ratings list below. */}
        {venues.map((venue) => (
          <Card
            key={venue.vid}
            href={`/venue/${venue.vid}`}
            imgSrc={venue.imgSrc}
            venueName={venue.venueName}
            description={venue.description}
            onRatingChange={handleRatingChange}
          />
        ))}

        <div className="col-span-full">
          <p>Venue List with Ratings : {ratingState.size}</p>

          {Array.from(ratingState.entries()).map(([venueName, rating]) => (
            <div
              key={venueName}
              data-testid={venueName}
              onClick={() => {
                dispatchSetRating({ type: "remove", venueName });
              }}
            >
              {venueName} Rating : {rating}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
