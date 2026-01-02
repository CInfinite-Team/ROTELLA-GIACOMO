import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("default");
  const [isVisible, setIsVisible] = useState(true);
useEffect(() => {
  const move = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
    setIsVisible(true);

    const el = e.target;
    const style = window.getComputedStyle(el);
    const currentCursor = style.cursor;

    // Detect hover over elements
    if (
      el.tagName === "A" ||
      el.tagName === "BUTTON" ||
      el.classList.contains("cursor-pointer") ||
      currentCursor === "pointer"
    ) {
      setCursorType("pointer");
    } else if (
      el.tagName === "INPUT" ||
      el.tagName === "TEXTAREA" ||
      el.isContentEditable ||
      currentCursor === "text"
    ) {
      setCursorType("text");
    } else if (currentCursor.includes("resize")) {
      setCursorType("resize");
    } else {
      setCursorType("default");
    }

    // Hide when hovering over iframe or embed
    if (el.tagName === "IFRAME" || el.tagName === "EMBED") {
      setIsVisible(false);
    }
  };

  // Hide when cursor leaves the browser window entirely
  const handleMouseOut = (e) => {
    if (!e.relatedTarget && !e.toElement) {
      setIsVisible(false);
    }
  };

  // Show again when it comes back
  const handleMouseEnter = () => setIsVisible(true);

  window.addEventListener("mousemove", move);
  window.addEventListener("mouseout", handleMouseOut);
  window.addEventListener("mouseenter", handleMouseEnter);

  return () => {
    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseout", handleMouseOut);
    window.removeEventListener("mouseenter", handleMouseEnter);
  };
}, []);


  return (
    <>
      {/* Hide system cursor globally */}
      <style>{`
        * { cursor: none !important  }
      `}</style>

      {isVisible && (
        <>
          {/* Figma-style default cursor */}
          {cursorType === "default" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 396 433"
              fill="none"
              style={{
                position: "fixed",
                top: `${pos.y}px`,
                left: `${pos.x}px`,
                transform: "translate(0px, 0px)", // Adjust tip alignment
                pointerEvents: "none",
                zIndex: 9999,
                transition: "transform 0.05s linear, opacity 0.2s ease",
              }}
            >
              <g filter="url(#filter0_d_2_20)">
                <path
                  d="M39.9744 31.8759C38.2182 23.4825 47.2034 16.9545 54.6432 21.2183L351.11 191.127C358.653 195.45 357.401 206.692 349.09 209.248L205.199 253.511C202.971 254.196 201.054 255.643 199.785 257.599L127.77 368.534C122.94 375.973 111.523 373.84 109.707 365.158L39.9744 31.8759Z"
                  fill="#333333"
                />
                <path
                  d="M346.169 199.749L202.277 244.012C197.821 245.383 193.988 248.277 191.449 252.188L119.434 363.121L49.7012 29.8407L346.169 199.749Z"
                  stroke="white"
                  strokeWidth="19.8759"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2_20"
                  x="0"
                  y="0"
                  width="395.86"
                  height="432.694"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="19.8759" />
                  <feGaussianBlur stdDeviation="19.8759" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_20"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_20"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          )}

          {/* Hand cursor for clickable items */}
          {cursorType === "pointer" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                position: "fixed",
                top: `${pos.y}px`,
                left: `${pos.x}px`,
                transform: "translate(-6px, -2px)",
                pointerEvents: "none",
                zIndex: 9999,
                transition: "transform 0.05s linear",
              }}
            >
              <path
                d="M10 11V6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6V11M14 11V10C14 8.89543 14.8954 8 16 8C17.1046 8 18 8.89543 18 10V11M18 11V10.5C18 9.39543 18.8954 8.5 20 8.5C21.1046 8.5 22 9.39543 22 10.5V11M10 11V9C10 7.89543 9.10457 7 8 7C6.89543 7 6 7.89543 6 9V17C6 19.2091 7.79086 21 10 21H16C18.2091 21 20 19.2091 20 17V11M10 11H14H18"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="white"
              />
            </svg>
          )}

          {/* Text selection cursor */}
          {cursorType === "text" && (
            <div
              style={{
                position: "fixed",
                top: pos.y,
                cursor:"text !important",
                left: pos.x,
                transform: "translate(-1px, -15px)",
                width: "2px",
                height: "20px",
                backgroundColor: "#333",
                zIndex: 9999,
                pointerEvents: "none",
              }}
            />
          )}

          {/* Resize cursor */}
          {cursorType === "resize" && (
            <div
              style={{
                position: "fixed",
                top: pos.y,
                left: pos.x,
                transform: "translate(-50%, -50%) rotate(45deg)",
                width: "15px",
                height: "15px",
                borderTop: "2px solid #333",
                borderLeft: "2px solid #333",
                zIndex: 9999,
                pointerEvents: "none",
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default CustomCursor;
