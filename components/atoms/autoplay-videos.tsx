"use client";

import { useEffect } from "react";

// Videos inside markdown HTML don't reliably start on their own after
// hydration, so kick off any muted autoplay videos once mounted.
export const AutoplayVideos = () => {
  useEffect(() => {
    document
      .querySelectorAll<HTMLVideoElement>(".markdown-body video[autoplay]")
      .forEach((video) => {
        video.muted = true;
        video.play().catch(() => {});
      });
  }, []);

  return null;
};
