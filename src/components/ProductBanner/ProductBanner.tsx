"use client";

import { useRef, useState, useEffect } from "react";
import { productSale } from "@/data";
import classNames from "classnames";
import Link from "next/link";
import "./ProductBanner.scss";

interface ProductBannerProps {
  title: string;
  videoSrc: string;
  posterSrc: string;
  isBuyBtn?: boolean;
  price?: number;
  priceUnit?: string;
}

export const ProductBanner = ({
  title,
  videoSrc,
  posterSrc,
  isBuyBtn = false,
  price,
  priceUnit,
}: ProductBannerProps) => {
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
    <section className="product-banner">
      <div className="wrapper inline-wide block-narrow">
        <h1 className="product-banner-title">{title}</h1>
      </div>
      <div className="product-hero-container">
        <video
          ref={videoRef}
          className="product-hero-video"
          poster={posterSrc}
          playsInline
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {!isBuyBtn && (
          <button
            className={classNames(
              "btn-play",
              "internal-btn-play",
              "btn-secondary",
              {
                paused: !isVideoPlaying,
              }
            )}
            onClick={toggleVideoPlayback}
          ></button>
        )}
      </div>
      {isBuyBtn && (
        <div className="product-welcome-group">
          <div className="btn-groove">
            <Link className="btn btn-main btn-small" href="/conversation">
              Замовити розрахунок
            </Link>
            <button
              className={classNames("btn-play", "btn-secondary", {
                paused: !isVideoPlaying,
              })}
              onClick={toggleVideoPlayback}
            ></button>
          </div>
          <p className="product-welcome-pricing">
            Від {price?.toLocaleString("uk-UA")} грн {priceUnit}{" "}
            {productSale.priceValidityPeriod}.
          </p>
        </div>
      )}
    </section>
  );
};
