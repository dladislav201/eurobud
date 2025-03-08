"use client";

import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { AutomaticModel } from "@/models";
import { ConfigList } from "../ConfigList";
import Link from "next/link";
import "./AutomaticCharacteristic.scss";

interface AutomaticCharacteristicProps {
  automaticModel: AutomaticModel;
  onClose: () => void;
}

const AnimatedUL = animated("ul");

export const AutomaticCharacteristic = ({
  automaticModel,
  onClose,
}: AutomaticCharacteristicProps) => {
  const [configIndex, setConfigIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const hasMultipleImages = automaticModel.productGalleryImages.length > 1;
  const galleryRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      setItemWidth(galleryRef.current.offsetWidth);
    }
  }, []);

  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const goToSlide = (index: number) => {
    setCurrentGalleryIndex(index);
    api.start({ x: -index * itemWidth });
  };

  const bind = hasMultipleImages
    ? useDrag(
        ({ movement: [mx], direction: [dx], velocity, down, event }) => {
          event.preventDefault();

          if (!down) {
            if (Math.abs(velocity[0]) > 0.2) {
              const nextIndex =
                dx > 0 ? currentGalleryIndex - 1 : currentGalleryIndex + 1;
              const clampedIndex = Math.max(
                0,
                Math.min(
                  nextIndex,
                  automaticModel.productGalleryImages.length - 1
                )
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
      )
    : () => ({});

  return (
    <motion.div
      className="product-overlay-container"
      initial={{
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
      animate={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(0, 0, 0, .18)",
      }}
      exit={{
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 200,
          opacity: 0,
        }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="overlay-card-wrapper"
      >
        <div className="overlay-card">
          <div className="card-btn-root">
            <button className="modal-close-button" onClick={onClose}>
              <span className="modal-close-icon">
                <svg aria-hidden="true">
                  <path fill="none" d="M0 0h21v21H0z"></path>
                  <path d="m12.12 10 4.07-4.06a1.5 1.5 0 1 0-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 1 0-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0L10 12.12l4.06 4.07a1.45 1.45 0 0 0 1.06.44 1.5 1.5 0 0 0 1.06-2.56Z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="item-content-container">
            <div className="wrapper inline-wide">
              {automaticModel.isSalePrice && (
                <p className="product-eyebrow">Акційна ціна</p>
              )}
              <h1 className="product-card-headline">{automaticModel.name}</h1>

              <ConfigList
                configList={automaticModel.automaticConfigs}
                setConfigIndex={setConfigIndex}
                configIndex={configIndex}
              />

              <div className="card-pricing-container config-content relevant">
                <p className="product-card-pricing">
                  {automaticModel.automaticConfigs[
                    configIndex
                  ].price.toLocaleString("uk-UA")}{" "}
                  грн
                </p>
                <Link
                  className="btn automatic-product-btn buy"
                  href="/conversation"
                >
                  Замовити
                </Link>
              </div>
            </div>
            <div className="product-card-gallery-container">
              <div className="product-card-gallery">
                <AnimatedUL
                  {...bind()}
                  className="product-card-gallery-items"
                  style={{
                    transform: x.to(
                      (xVal) => `translate3d(${xVal}px, 0, 0)`
                    ) as any,
                  }}
                >
                  {automaticModel.productGalleryImages.map((image, index) => (
                    <li
                      ref={index === 0 ? galleryRef : null}
                      key={index}
                      className="product-card-gallery-item"
                    >
                      <div className="product-card-content">
                        <div className="product-card-img-wrapper">
                          <img className="product-card-img" src={image} />
                        </div>
                      </div>
                    </li>
                  ))}
                </AnimatedUL>
              </div>
              {automaticModel.productGalleryImages.length > 1 && (
                <div className="dotnav-wrapper">
                  <ul className="dotnav-container">
                    {automaticModel.productGalleryImages.map((image, index) => (
                      <li key={index} className="dotnav">
                        <button
                          className={classNames("dotnav-btn", {
                            relevant: index === currentGalleryIndex,
                          })}
                          onClick={() => goToSlide(index)}
                        ></button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="characteristics-container">
              <ul className="characteristics-items">
                {automaticModel.features.map((feature, index) => (
                  <li key={index} className="characteristics-item">
                    <img
                      className="characteristic-icon"
                      src={feature.iconSrc}
                    />
                    <p className="characteristic-capture">
                      {feature.title}{" "}
                      {feature.values?.[configIndex] ||
                        feature.values?.[0] ||
                        ""}{" "}
                      {feature.unit || ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="overlay-contact-wrapper">
          <div className="wrapper inline-wide">
            <div className="product-support-block">
              <h1 className="headline small">Як замовити</h1>
              <p className="product-support-content">
                Ми тут щоб знайти найкраще рішення для вас та вашого
                об&apos;єкту.
              </p>
              <Link className="product-support-link" href="/conversation">
                Розпочати
                <span className="material-symbols-outlined special">
                  chevron_right
                </span>
              </Link>
            </div>
            <div className="product-support-block">
              <h1 className="headline small">Зателфонуйте нам</h1>
              <p className="product-support-content">
                Ви можете зателефонувати нам прямо зараз або у зручний для вас
                час.
              </p>
              <Link className="product-support-link" href="tel:+380677177164">
                +380 (67) 717 71 64
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
