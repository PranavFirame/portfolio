"use client";

import React, { useState, useEffect } from "react";
import EyeTracker from "../Common/EyeTracker";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`${styles.navWrapper} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navPill} aria-label="Main navigation">
        <a href="#home" className={styles.brand} onClick={closeMenu}>
          <EyeTracker size={22} />
          <span className={styles.brandName}>
            Pranav<span className={styles.brandDot}>.</span>
          </span>
        </a>

        <div className={`${styles.navLinks} ${isOpen ? styles.navLinksActive : ""}`}>
          <a href="#projects" onClick={closeMenu} className={styles.navLink}>
            Work
          </a>
          <a href="#skills" onClick={closeMenu} className={styles.navLink}>
            Skills
          </a>
          <a href="#experience" onClick={closeMenu} className={styles.navLink}>
            Experience
          </a>
          <a href="#about" onClick={closeMenu} className={styles.navLink}>
            About
          </a>
          <a href="#contact" onClick={closeMenu} className={styles.navLink}>
            Contact
          </a>
        </div>

        <div className={styles.navRight}>
          <a
            href="/resume.pdf"
            download
            className={styles.resumeBtn}
            title="Download Pranav Firame's Resume"
          >
            <span>Résumé</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>

          <button
            type="button"
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
