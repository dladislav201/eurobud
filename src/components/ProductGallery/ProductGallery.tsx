"use client";

import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import { AutomaticModel } from "@/models";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "./productgallery.scss";
import { AutomaticCharacteristic } from "../AutomaticCharacteristic";

interface ProductGalleryProps {
  automaticModels: AutomaticModel[];
}

const AnimatedUL = animated("ul");

export const ProductGallery = ({ automaticModels }: ProductGalleryProps) => {
  const [activeCharacteristicIndex, setActiveCharacteristicIndex] = useState<
    number | null
  >(null);

  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const galleryRef = useRef<HTMLLIElement>(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    if (galleryRef.current) {
      setItemWidth(galleryRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (activeCharacteristicIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCharacteristicIndex]);

  const toggleCharacteristic = (index: number) => {
    setActiveCharacteristicIndex(
      activeCharacteristicIndex === index ? null : index
    );
  };

  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const goToSlide = (index: number) => {
    setCurrentGalleryIndex(index);
    api.start({ x: -index * itemWidth });
  };

  const bind = useDrag(
    ({ movement: [mx], direction: [dx], velocity, down, event }) => {
      event.preventDefault();

      if (!down) {
        if (Math.abs(velocity[0]) > 0.2) {
          const nextIndex =
            dx > 0 ? currentGalleryIndex - 1 : currentGalleryIndex + 1;
          const clampedIndex = Math.max(
            0,
            Math.min(nextIndex, automaticModels.length - 1)
          );
          goToSlide(clampedIndex);
        } else {
          goToSlide(currentGalleryIndex);
        }
      } else {
        api.start({
          x: -currentGalleryIndex * itemWidth + mx,
          immediate: true,
        });
      }
    },
    { axis: "x", eventOptions: { passive: false } }
  );

  const nextSlide = () => {
    const nextIndex = currentGalleryIndex + 1;
    const clampedIndex = Math.min(nextIndex, automaticModels.length - 1);
    goToSlide(clampedIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentGalleryIndex - 1;
    const clampedIndex = Math.max(prevIndex, 0);
    goToSlide(clampedIndex);
  };

  const isFirstSlide = currentGalleryIndex === 0;
  const isLastSlide = currentGalleryIndex === automaticModels.length - 1;

  return (
    <>
      <div className="product-gallery">
        <AnimatedUL
          {...bind()}
          className="gallery-items-container"
          style={{
            transform: x.to((xVal) => `translate3d(${xVal}px, 0, 0)`) as any,
          }}
        >
          {automaticModels.map((automaticModel, index) => (
            <li
              ref={index === 0 ? galleryRef : null}
              key={index}
              className="gallery-item"
            >
              <div className="content-container">
                <div className="product-link"></div>
                <div className="product-typography-wrapper">
                  {automaticModel.isSalePrice && (
                    <p className="product-eyebrow">Акційна ціна</p>
                  )}
                  {automaticModel.isNewProduct && (
                    <p className="product-eyebrow">Новинка</p>
                  )}
                  <h1 className="product-headline">{automaticModel.name}</h1>
                  <p className="product-pricing">
                    {automaticModel.price.toLocaleString("uk-UA")} грн
                  </p>
                </div>
                <div className="product-picture-container levigato">
                  <img className="picture" src={automaticModel.productImage} />
                </div>
                <div className="product-action-content">
                  <Link
                    href="/conversation"
                    className="btn automatic-product-btn buy"
                  >
                    Замовити
                  </Link>
                  <button
                    className="btn automatic-product-btn more"
                    onClick={() => toggleCharacteristic(index)}
                  >
                    Характеристики
                  </button>
                </div>
              </div>
            </li>
          ))}
        </AnimatedUL>
        <AnimatePresence>
          {activeCharacteristicIndex !== null && (
            <AutomaticCharacteristic
              automaticModel={automaticModels[activeCharacteristicIndex]}
              onClose={() => setActiveCharacteristicIndex(null)}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="product-gallery-btn-container">
        <div className="btn-groove">
          <button
            onClick={prevSlide}
            disabled={isFirstSlide}
            className="btn-chevron"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={isLastSlide}
            className="btn-chevron"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
