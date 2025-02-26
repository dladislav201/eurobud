"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { products } from "@/data";
import Link from "next/link";
import classNames from "classnames";
import "./globalnav.scss";

export const GlobalNav = () => {
  const pathname = usePathname();
  const normalizedPathname = useMemo(() => {
    const withoutLocale = pathname.replace(/^\/[a-z]{2}\//, "");
    return withoutLocale ? `/${withoutLocale}` : pathname;
  }, [pathname]);

  const [isOpen, setIsOpen] = useState(false);
  const bottomOpenRef = useRef<SVGAnimateElement>(null);
  const bottomCloseRef = useRef<SVGAnimateElement>(null);
  const topOpenRef = useRef<SVGAnimateElement>(null);
  const topCloseRef = useRef<SVGAnimateElement>(null);

  const toggleNav = () => {
    if (isOpen) {
      startCloseAnimation();
    } else {
      startOpenAnimation();
    }

    setIsOpen(!isOpen);
  };

  const startOpenAnimation = () => {
    bottomOpenRef.current?.beginElement();
    topOpenRef.current?.beginElement();
  };

  const startCloseAnimation = () => {
    bottomCloseRef.current?.beginElement();
    topCloseRef.current?.beginElement();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
        bottomCloseRef.current?.beginElement();
        topCloseRef.current?.beginElement();
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav className="globalnav">
        <div className={classNames("flyout-nav", { expanded: isOpen })}>
          <div className="nav-content-wrapper">
            <Link className="logo-link" href="/">
              <p className="logo-text">Євробуд</p>
            </Link>
            <ul className="menu">
              {products.map((product) => (
                <li
                  key={product.id}
                  className={classNames("menu-item", {
                    current: normalizedPathname === product.linkUrl,
                  })}
                >
                  <Link href={product.linkUrl} onClick={toggleNav}>
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="burger-icon">
              <button className="burger-icon-btn" onClick={toggleNav}>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="2 12, 16 12"
                  >
                    <animate
                      ref={bottomOpenRef}
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                    ></animate>
                    <animate
                      ref={bottomCloseRef}
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                    ></animate>
                  </polyline>
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="2 5, 16 5"
                  >
                    <animate
                      ref={topOpenRef}
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                    ></animate>
                    <animate
                      ref={topCloseRef}
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                    ></animate>
                  </polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.label
            className="nav-curtain"
            initial={{
              display: "none",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            animate={{
              display: "block",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              backgroundColor: "rgba(232, 232, 237, 0.33)",
            }}
            exit={{
              display: "none",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={toggleNav}
          ></motion.label>
        )}
      </AnimatePresence>
    </>
  );
};
