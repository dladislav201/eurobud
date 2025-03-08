"use client";

import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

interface PanoramaGalleryVideoProps {
  video: string;
  poster?: string;
}

export const PanoramaGalleryVideo = ({
  video,
  poster,
}: PanoramaGalleryVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting && !isManualPaused) {
              videoRef.current.play();
              setIsVideoPlaying(true);
            } else {
              videoRef.current.pause();
              setIsVideoPlaying(false);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isManualPaused]);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsManualPaused(true);
      } else {
        videoRef.current.play();
        setIsManualPaused(false);
      }

      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className="video"
        poster={poster}
        playsInline
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>
      <button
        className={classNames(
          "btn-play",
          "btn-secondary",
          "internal-btn-play",
          {
            paused: !isVideoPlaying,
          }
        )}
        onClick={toggleVideoPlayback}
      ></button>
    </>
  );
};
