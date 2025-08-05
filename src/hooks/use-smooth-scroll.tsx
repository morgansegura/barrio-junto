"use client";

import { useEffect } from "react";

export function useSmoothScroll(offset = 0, enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.substring(1);
      const el = document.getElementById(id);

      if (el) {
        e.preventDefault();

        const top = el.getBoundingClientRect().top + window.scrollY - offset;

        const scrollContainer = document.querySelector("html, body");
        if (scrollContainer && scrollContainer.scrollTo) {
          const containerTop =
            el.getBoundingClientRect().top -
            scrollContainer.getBoundingClientRect().top;
          scrollContainer.scrollTo({
            top: containerTop - offset,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }

        history.pushState(null, "", href);
        // console.log(`✅ Smooth scrolled to #${id}`);
      } else {
        // console.warn(`⚠️ Element with id="${id}" not found`);
      }
    };

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, [enabled, offset]);
}
