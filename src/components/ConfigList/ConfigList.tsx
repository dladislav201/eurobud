"use client";

import { useEffect, useState, useRef } from "react";
import { AutomaticConfig } from "@/models";
import classNames from "classnames";
import "./ConfigList.scss";

interface ConfigListProps {
  configList: AutomaticConfig[];
  setConfigIndex: (index: number) => void;
  configIndex: number;
}

export const ConfigList = ({
  configList,
  setConfigIndex,
  configIndex,
}: ConfigListProps) => {
  const configListRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollAmount = 100;

  const updateScrollButtons = () => {
    if (configListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = configListRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const handleScrollLeft = () => {
    if (configListRef.current) {
      configListRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (configListRef.current) {
      configListRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const handleResize = () => updateScrollButtons();

    window.addEventListener("resize", handleResize);
    if (configListRef.current) {
      configListRef.current.addEventListener("scroll", updateScrollButtons);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (configListRef.current) {
        configListRef.current.removeEventListener(
          "scroll",
          updateScrollButtons
        );
      }
    };
  }, []);

  return (
    <div className="config-btn-wrapper">
      <ul ref={configListRef} className="config-items-container">
        {configList.map((configItem, index) => (
          <li
            key={index}
            className={classNames("config-item", {
              relevant: index === configIndex,
            })}
          >
            <button
              className="config-btn"
              onClick={() => setConfigIndex(index)}
            >
              {configItem.config}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="slide-list-btn left"
        onClick={handleScrollLeft}
        disabled={!canScrollLeft}
      >
        <span className="config-btn-icon">
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m2.252 6.5001s0-.0001 0-.0001l4.4336-4.877c.3438-.3789.3164-.9648-.0625-1.3086s-.9648-.3174-1.3086.0625l-5 5.5c-.3212.3535-.3212.8927 0 1.2462l5 5.5c.3438.3799.9297.4062 1.3086.0625s.4062-.9297.0625-1.3086z"></path>
          </svg>
        </span>
      </button>
      <button
        className="slide-list-btn right"
        onClick={handleScrollRight}
        disabled={!canScrollRight}
      >
        <span className="config-btn-icon">
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m4.748 6.5001s0-.0001 0-.0001l-4.4336-4.877c-.3438-.3789-.3164-.9649.0625-1.3086s.9648-.3174 1.3086.0625l5 5.5c.3213.3535.3213.8927 0 1.2462l-5 5.5c-.3438.3799-.9297.4062-1.3086.0625s-.4062-.9297-.0625-1.3086l4.4336-4.877z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};
