"use client";

import React from "react";
import styles from "./About.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className={styles.section} ref={revealRef as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <div className="eyebrow-pill">
            <span>●</span> About Pranav
          </div>
          <h2 className={styles.title}>
            A developer who builds with <span className="serif-italic">precision</span> &amp;{" "}
            <span className="serif-italic">security</span>.
          </h2>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Column: Visual Portrait / Identity badge */}
          <div className={`${styles.portraitCol} reveal`}>
            <div className={styles.portraitCard}>
              <div className={styles.avatarOrb}>
                <span className={styles.avatarEmoji}>👨‍💻</span>
                <div className={styles.orbRing} />
              </div>

              <div className={styles.cardBio}>
                <h3 className={styles.cardName}>Pranav Firame</h3>
                <p className={styles.cardTitle}>Fullstack Web Developer &amp; Security Specialist</p>
                <div className={styles.cardMeta}>
                  <span>📍 Pune, Maharashtra, India</span>
                  <span>🎓 Computer Engineering</span>
                  <span>⚡ Available for Global Remote</span>
                </div>
              </div>

              <div className={styles.stamp}>
                <span>AUTHENTICATED</span>
                <span>CODE &middot; 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative + Key Numbers */}
          <div className={`${styles.narrativeCol} reveal`}>
            <p className={styles.leadPara}>
              I bridge the gap between <strong>high-craft frontend experiences</strong> and{" "}
              <strong>resilient backend architectures</strong>. I treat performance, clean abstractions,
              and cybersecurity as primary product features—never afterthoughts.
            </p>

            <p className={styles.bodyPara}>
              Currently engineering web modules and optimizing backend workflows as a {" "}
              <strong>Freelancer</strong>. When I&apos;m not
              writing TypeScript or tuning database indices, I study cybersecurity attack vectors,
              dissect OWASP guidelines, and build open-source tools.
            </p>

            {/* Key stats row (Vaibhav Verma & Zainab Kabira style) */}
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>3+</span>
                <span className={styles.statLabel}>Years Coding &amp; Systems</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>20+</span>
                <span className={styles.statLabel}>Completed Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Security-First Mindset</span>
              </div>
            </div>

            {/* Quote block (Vaibhav Verma style) */}
            <blockquote className={styles.pullQuote}>
              <p>
                &ldquo;Clean code is great; secure and performant code that solves real business
                problems under real constraints is transformative.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
