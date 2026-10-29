"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import cover from "../../public/img/cover.jpg";
import cover2 from "../../public/img/cover2.jpg";
import cover3 from "../../public/img/cover3.jpg";
import cover4 from "../../public/img/cover4.jpg";
import { useSession } from "next-auth/react";

// Static imports give each file a content-based URL and optimizer cache key.
const covers = [cover, cover2, cover3, cover4];

export default function Banner() {
  const router = useRouter();
  const [coverIndex, setCoverIndex] = useState(0);

  const { data: session } = useSession();

  return (
    <header className="relative flex h-[clamp(280px,30vw,520px)] min-h-[280px] w-full items-center justify-center overflow-hidden">
      {session && (
        <div className="absolute top-6 right-6 z-20 flex items-center gap-3 rounded-lg bg-amber-100 px-5 py-3 font-bold text-amber-950 shadow-lg">
          Welcome {session.user?.name}
        </div>
      )}
      <button
        type="button"
        aria-label="Change banner image"
        className="absolute inset-0 cursor-pointer focus-visible:outline-4 focus-visible:outline-amber-400 focus-visible:-outline-offset-4"
        onClick={() => {
          setCoverIndex((prev) => (prev + 1) % covers.length);
        }}
      >
        {/* Keep each image mounted and load ahead so cycling does not replace
            the visible image's source while another download is pending. */}
        {covers.map((cover, index) => (
          <Image
            key={index}
            src={cover}
            alt={`Event venue banner ${index + 1}`}
            aria-hidden={index !== coverIndex}
            fill
            sizes="100vw"
            loading="eager"
            className={`object-cover ${index === coverIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </button>
      {/* This decorative overlay lets clicks reach the image button underneath. */}
      <div className="pointer-events-none absolute inset-0 bg-stone-950/35" />
      <div className="pointer-events-none relative z-10 max-w-4xl p-6 text-center text-white">
        <h1 className="text-[clamp(2.25rem,5.5vw,5.25rem)] leading-[1.02] font-bold tracking-[-0.03em] text-[#fff8e7] text-balance">
          where every event finds its venue
        </h1>
        <h3 className="mt-5 flex items-center justify-center gap-3 text-[clamp(1rem,1.8vw,1.5rem)] leading-relaxed font-semibold text-amber-300 before:h-px before:w-[clamp(24px,6vw,72px)] before:bg-current before:content-[''] after:h-px after:w-[clamp(24px,6vw,72px)] after:bg-current after:content-['']">
          Curated spaces for celebrations worth remembering.
        </h3>
      </div>
      <button
        type="button"
        className="absolute right-6 bottom-6 z-20 rounded-lg bg-amber-100 px-5 py-3 font-bold text-amber-950 shadow-lg"
        onClick={() => router.push("/venue")}
      >
        Select Venue
      </button>
    </header>
  );
}
