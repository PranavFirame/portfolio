"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./EyeTracker.module.css";

interface EyeTrackerProps {
  size?: number;
  className?: string;
  label?: string;
}

export default function EyeTracker({ size = 28, className = "", label }: EyeTrackerProps) {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      [leftEyeRef.current, rightEyeRef.current].forEach((eyeEl) => {
        if (!eyeEl) return;
        const pupil = eyeEl.querySelector(`.${styles.pupil}`) as HTMLElement;
        if (!pupil) return;

        const rect = eyeEl.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(Math.hypot(deltaX, deltaY) / 18, size * 0.22);

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Occasional natural blink
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.4) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 180);
      }
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, [size]);

  const handleManualBlink = () => {
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 200);
  };

  const eyeStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const pupilStyle = {
    width: `${Math.round(size * 0.45)}px`,
    height: `${Math.round(size * 0.45)}px`,
  };

  return (
    <div
      className={`${styles.container} ${className}`}
      onClick={handleManualBlink}
      title="Click me to wink!"
      role="button"
      tabIndex={0}
    >
      <div className={`${styles.eyesWrap} ${isBlinking ? styles.blinking : ""}`}>
        <div ref={leftEyeRef} className={styles.eye} style={eyeStyle}>
          <div className={styles.pupil} style={pupilStyle}>
            <span className={styles.catchlight} />
          </div>
        </div>
        <div ref={rightEyeRef} className={styles.eye} style={eyeStyle}>
          <div className={styles.pupil} style={pupilStyle}>
            <span className={styles.catchlight} />
          </div>
        </div>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
