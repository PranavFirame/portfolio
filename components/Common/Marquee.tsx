"use client";

import React from "react";
import styles from "./Marquee.module.css";

const items = [
  "FULLSTACK ENGINEERING",
  "WEB SECURITY",
  "NEXT.JS & REACT",
  "NODE.JS & EXPRESS",
  "OWASP HARDENED",
  "RESTFUL APIS",
  "DOCKER & CI/CD",
  "HIGH PERFORMANCE",
  "PUNE, INDIA",
];

export default function Marquee() {
  return (
    <div className={styles.marqueeSection} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeGroup}>
          {items.map((item, index) => (
            <span key={index} className={styles.marqueeItem}>
              <span className={styles.sparkle}>✦</span>
              {item}
            </span>
          ))}
        </div>
        <div className={styles.marqueeGroup} aria-hidden="true">
          {items.map((item, index) => (
            <span key={`dup-${index}`} className={styles.marqueeItem}>
              <span className={styles.sparkle}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
