"use client";

import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
      <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={isPlaying} />
      <div className="m-5 text-black text-lg font-semibold flex flex-col gap-5">
        Book your venue today.
        <button
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
