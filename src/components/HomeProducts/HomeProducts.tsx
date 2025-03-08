"use client";

import { useRef, useState, useEffect } from "react";
import { Product } from "@/models";
import classNames from "classnames";
import Link from "next/link";
import "./HomeProducts.scss";

interface HomeProductsProps {
  product: Product;
}

export const HomeProducts = ({ product }: HomeProductsProps) => {
  const { title, description, linkUrl, imgSrc, videoSrc, posterSrc } = product;
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
    <section className="page-section block-narrow">
      <div className="wrapper inline-wide">
        <h1 className="headline great">{title}</h1>
      </div>
      <div className="media-wrapper">
        <Link className="product-link" href={linkUrl}>
          &nbsp;
        </Link>
        {videoSrc ? (
          <video
            ref={videoRef}
            className="media"
            poster={posterSrc}
            playsInline
            muted
            loop
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          imgSrc && (
            <img className="media" src={imgSrc} alt={title} loading="lazy" />
          )
        )}
      </div>
      <div className="wrapper inline-wide">
        <p className="description small">{description}</p>
      </div>
      <div className="btn-groove">
        <Link className="btn btn-main btn-small" href="/conversation">
          Замовити
        </Link>
        <Link href={linkUrl} className="btn btn-secondary btn-small">
          Детальніше
        </Link>
        {videoSrc && (
          <button
            className={classNames("btn-play", "btn-secondary", {
              paused: !isVideoPlaying,
            })}
            onClick={toggleVideoPlayback}
          ></button>
        )}
      </div>
    </section>
  );
};
