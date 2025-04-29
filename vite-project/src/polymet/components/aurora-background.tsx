// src/polymet/components/aurora-background.tsx
"use client";
import React, { ReactNode, CSSProperties } from "react";

interface AuroraBackgroundProps {
  children: ReactNode;
  showAurora?: boolean;
}

export default function AuroraBackground({
  children,
  showAurora = true,
}: AuroraBackgroundProps) {
  // style for vertical bars
  const barStyle: CSSProperties = {
    position: "absolute",
    width: "4vw", // line thickness
    height: "200vh", // extend for smooth blur
    filter: "blur(80px)", // moderate blur
    mixBlendMode: "screen",
    opacity: 0.6,
    top: "-50vh", // center vertically around viewport
  };

  // color palette for bars
  const colors = [
    "#15054A",
    "#001264",
    "#003e7e",
    "#147fcf",
    "#5a24f2",
    "#33f4ff",
    "#ff69b4",
    "#ff8ae8",
    "#a356ff",
    "#66ffff",
  ];

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#020024",
      }}
    >
      {/* Add global styles without jsx and global attributes */}
      <style>{`
        @keyframes moveRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes moveLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            filter: blur(60px);
          }
          50% {
            filter: blur(100px);
          }
        }
        @keyframes scan {
          0% {
            top: -200px;
          }
          100% {
            top: 100%;
          }
        }
      `}</style>

      {showAurora && (
        <>
          {/* scan tail only: starts with sharp line at top, then blurred fade downward */}
          <div
            style={{
              position: "absolute",
              top: "-200px",
              left: 0,
              width: "100%",
              height: "200px",
              background:
                "linear-gradient(to top, transparent, rgba(255,255,255,0.3))",
              filter: "blur(12px)",
              opacity: 0.3,
              animation: "scan 8s linear infinite",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* rotated blurred bars */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              transform: "rotate(30deg)",
              transformOrigin: "top center",
              pointerEvents: "none",
            }}
          >
            {colors.map((color, i) => (
              <div
                key={i}
                style={{
                  ...barStyle,
                  backgroundColor: color,
                  left: `${i * 10}%`,
                  animation: `${i % 2 === 0 ? "moveRight" : "moveLeft"} ${4 + i * 0.5}s linear infinite, pulse 6s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%" }}>
        {children}
      </div>
    </div>
  );
}
