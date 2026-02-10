import { useState, useEffect } from "react";

/**
 * Custom hook to track screen size using media queries
 * @param {string} query - Media query to track (e.g., '(min-width: 1024px)')
 * @returns {boolean} - True if the media query matches
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatches = () => setMatches(media.matches);

    // Initial check
    updateMatches();

    // Listen for changes
    media.addEventListener("change", updateMatches);
    return () => media.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
};

/**
 * Shortcut hook for checking mobile/tablet vs desktop (lg breakpoint)
 * @returns {boolean} - True if screen width is less than 1024px
 */
export const useIsMobile = () => {
  return !useMediaQuery("(min-width: 1024px)");
};
