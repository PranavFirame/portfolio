"use client";

import React from "react";
import EyeTracker from "../Common/EyeTracker";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <div className={styles.brandLogo}>
              <EyeTracker size={24} />
              <span className={styles.brandTitle}>
                Pranav Firame<span className={styles.brandDot}>.</span>
              </span>
            </div>
            <p className={styles.brandTagline}>
              Fullstack Web Developer &amp; Web Security Specialist
            </p>
          </div>

          <div className={styles.navCol}>
            <span className={styles.colTitle}>Navigation</span>
            <div className={styles.linksList}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Work</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className={styles.socialCol}>
            <span className={styles.colTitle}>Connect</span>
            <div className={styles.linksList}>
              <a
                href="https://github.com/PranavFirame"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/pranavfirame"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="mailto:pranavfirame06@gmail.com">
                pranavfirame06@gmail.com ↗
              </a>
              <a href="/resume.pdf" download>
                Download Résumé (PDF) ↓
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Pranav Firame. Built with Next.js &amp; crafted with precision.
          </p>

          <button
            type="button"
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
