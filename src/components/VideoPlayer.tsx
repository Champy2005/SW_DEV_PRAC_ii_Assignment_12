"use client";

import { useRef, useEffect } from "react";

export default function VideoPlayer({
  vdoSrc,
  isPlaying,
}: {
  vdoSrc: string;
  isPlaying: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      // Pausing or unmounting while play() is pending can reject its promise.
      // Optional chaining also supports media mocks that return undefined.
      video.play()?.catch((error: DOMException) => {
        if (error.name !== "AbortError") {
          console.warn("Video playback could not start:", error);
        }
      });
    } else {
      video.pause();
    }
  }, [isPlaying, vdoSrc]);

  return (
    <video
      ref={videoRef}
      src={vdoSrc}
      controls
      autoPlay={isPlaying}
      preload="metadata"
      playsInline
      loop
      muted
      className="w-[40%] h-auto rounded-lg shadow-mdz"
    />
  );
}
