"use client";

import React, { useState, FormEvent } from "react";
import styles from "./Contact.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const revealRef = useScrollReveal();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/pranavfirame06@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject") || "Portfolio Inquiry",
          message: formData.get("message"),
          _subject: `New Portfolio Message from ${formData.get("name")}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 6000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" className={styles.contactSection} ref={revealRef as React.RefObject<HTMLElement>}>
      {/* Decorative Reach Connector (Vaibhav Verma signature Adam's hands feel) */}
      <div className={styles.connectorArt} aria-hidden="true">
        <span className={styles.handLeft}>👈</span>
        <div className={styles.sparkCenter}>
          <span className={styles.sparkDot} />
        </div>
        <span className={styles.handRight}>👉</span>
      </div>

      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <div className="eyebrow-pill" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)", color: "#E4E4E7" }}>
            <span>●</span> Start A Conversation
          </div>
          <h2 className={styles.heading}>
            Let&apos;s build something <span className={styles.italicAccent}>secure</span> &amp;{" "}
            <span className={styles.italicAccent}>extraordinary</span>.
          </h2>
          <p className={styles.lead}>
            Whether you have an upcoming project, a challenging role, or simply want to talk
            web architectures and security—my inbox is always open.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Info Card */}
          <div className={`${styles.infoCard} reveal`}>
            <div className={styles.directBlock}>
              <span className={styles.blockLabel}>Direct Email</span>
              <a href="mailto:pranavfirame06@gmail.com" className={styles.emailLink}>
                pranavfirame06@gmail.com
              </a>
            </div>

            <div className={styles.directBlock}>
              <span className={styles.blockLabel}>Location &amp; Availability</span>
              <p className={styles.locationText}>
                Pune, Maharashtra, India · Available for full-time roles &amp; remote contracts globally.
              </p>
            </div>

            <div className={styles.directBlock}>
              <span className={styles.blockLabel}>Social Profiles</span>
              <div className={styles.socialList}>
                <a
                  href="https://www.linkedin.com/in/pranavfirame"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialBtn}
                >
                  <span>LinkedIn ↗</span>
                </a>
                <a
                  href="https://github.com/PranavFirame"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialBtn}
                >
                  <span>GitHub ↗</span>
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`}
                  download
                  className={styles.socialBtn}
                >
                  <span>Résumé ↓</span>
                </a>
              </div>
            </div>

            <div className={styles.encryptionBadge}>
              <span className={styles.lockIcon}>🔒</span>
              <span>Submissions encrypted &amp; delivered directly to personal inbox</span>
            </div>
          </div>

          {/* Form */}
          <div className={`${styles.formCard} reveal`}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Maya Lin"
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. maya@example.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject">Subject / Project Type</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g. Fullstack Developer Role / Security Audit"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about what you're building..."
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

              {status === "success" && (
                <div className={styles.toastSuccess}>
                  ✔ Thank you! Your message was sent directly to pranavfirame06@gmail.com. I&apos;ll be in touch soon.
                </div>
              )}

              {status === "error" && (
                <div className={styles.toastError}>
                  ✖ Failed to send. Please email me directly at pranavfirame06@gmail.com.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
