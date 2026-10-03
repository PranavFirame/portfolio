"use client";

import React, { useState } from "react";
import styles from "./Experience.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const terminalTabs = [
  { id: "cli", label: ">_ Interactive CLI", icon: "💻" },
  { id: "security", label: "Security Checklist", icon: "🛡️" },
  { id: "philosophy", label: "Engineering Tenets", icon: "⚡" },
];

export default function Experience() {
  const revealRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState("cli");
  const [terminalInput, setTerminalInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([
    "Welcome to Pranav's security & engineering terminal v2.4",
    "Type 'help' or click commands below: [whoami, skills, security, contact, clear]",
  ]);

  const handleCommand = (cmd: string) => {
    const clean = cmd.trim().toLowerCase();
    if (!clean) return;

    let response = "";
    switch (clean) {
      case "help":
        response = "Available commands: whoami, skills, security, experience, contact, clear";
        break;
      case "whoami":
        response = "Pranav Firame · Fullstack Web Developer & Web Security Specialist based in Pune, India.";
        break;
      case "skills":
        response = "Java, C++, C, JavaScript, React, Next.js, Node.js, Express, MongoDB, SQL, Docker, Postman, Figma.";
        break;
      case "security":
        response = "Specializations: OWASP Top 10 audits, JWT auth, AES-256 cryptography, secure API rate-limiting, and sanitized SQL/NoSQL pipelines.";
        break;
      case "experience":
        response = "Software Developer @ Infeanet Digital Solution and Web Media, Pune (2024 - Present).";
        break;
      case "contact":
        response = "Email: pranavfirame06@gmail.com | LinkedIn: /in/pranavfirame | GitHub: /PranavFirame";
        break;
      case "clear":
        setCommandHistory([]);
        setTerminalInput("");
        return;
      default:
        response = `Command '${clean}' not recognized. Type 'help' for available commands.`;
    }

    setCommandHistory((prev) => [...prev, `$ ${clean}`, response]);
    setTerminalInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(terminalInput);
    }
  };

  return (
    <section id="experience" className={styles.section} ref={revealRef as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} reveal`}>
          <div className="eyebrow-pill">
            <span>●</span> Career &amp; Track Record
          </div>
          <h2 className={styles.title}>
            Professional experience &amp; <span className="serif-italic">engineering</span> impact.
          </h2>
          <p className={styles.lead}>
            Shipping production-grade software with rigorous attention to runtime performance,
            maintainability, and defense-in-depth security.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className={`${styles.experienceCard} reveal`}>
          <div className={styles.timelineStem}>
            <div className={styles.timelineNode}>
              <span className={styles.nodeCore} />
            </div>
            <div className={styles.stemLine} />
          </div>

          <div className={styles.expContent}>
            <div className={styles.expHeader}>
              <div>
                <span className={styles.companyBadge}>Full-Time Role</span>
                <h3 className={styles.roleTitle}>Software Developer</h3>
                <h4 className={styles.companyName}>
                  Infeanet Digital Solution and Web Media
                  <span className={styles.location}>📍 Pune, Maharashtra, India</span>
                </h4>
              </div>
              <div className={styles.periodBadge}>
                <span>2024 — Present</span>
              </div>
            </div>

            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                <span className={styles.bulletIcon}>▹</span>
                <span>
                  <strong>Developed and deployed robust software modules</strong> that satisfied complex business requirements and strict project delivery timelines.
                </span>
              </li>
              <li className={styles.bulletItem}>
                <span className={styles.bulletIcon}>▹</span>
                <span>
                  <strong>Improved backend performance</strong> by systematically identifying architectural bottlenecks, reducing redundant database lookups, and optimizing critical application workflows.
                </span>
              </li>
              <li className={styles.bulletItem}>
                <span className={styles.bulletIcon}>▹</span>
                <span>
                  <strong>Automated user data management processes</strong> to eliminate repetitive manual overhead and elevate internal operational efficiency.
                </span>
              </li>
              <li className={styles.bulletItem}>
                <span className={styles.bulletIcon}>▹</span>
                <span>
                  <strong>Collaborated within cross-functional teams</strong> using Git-based version control, trunk workflows, thorough code reviews, and structured branching.
                </span>
              </li>
              <li className={styles.bulletItem}>
                <span className={styles.bulletIcon}>▹</span>
                <span>
                  <strong>Participated actively in debugging, testing, and continuous maintenance</strong> across production web systems to ensure high availability and zero regression.
                </span>
              </li>
            </ul>

            <div className={styles.techTagsRow}>
              <span className={styles.techChip}>Fullstack Development</span>
              <span className={styles.techChip}>API Optimization</span>
              <span className={styles.techChip}>Git Workflow</span>
              <span className={styles.techChip}>Performance Tuning</span>
              <span className={styles.techChip}>Automated Data Pipelines</span>
            </div>
          </div>
        </div>

        {/* Retro TV / Interactive Terminal Widget (Vaibhav Verma signature) */}
        <div className={`${styles.terminalWidget} reveal`}>
          <div className={styles.terminalFrame}>
            {/* TV Screen Bezel Header */}
            <div className={styles.terminalBezel}>
              <div className={styles.terminalControls}>
                <span className={styles.ctrlClose} />
                <span className={styles.ctrlMin} />
                <span className={styles.ctrlMax} />
              </div>

              <div className={styles.terminalTabs}>
                {terminalTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className={styles.terminalPwr}>
                <span className={styles.pwrLed} />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Screen Content Body */}
            <div className={styles.screenBody}>
              {activeTab === "cli" && (
                <div className={styles.cliContainer}>
                  <div className={styles.cliLogs}>
                    {commandHistory.map((line, i) => (
                      <div
                        key={i}
                        className={line.startsWith("$") ? styles.cliUserCmd : styles.cliOutput}
                      >
                        {line}
                      </div>
                    ))}
                  </div>

                  <div className={styles.cliInputLine}>
                    <span className={styles.cliPrompt}>pranav@portfolio:~$</span>
                    <input
                      type="text"
                      className={styles.cliInput}
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type 'help' or click quick command..."
                      aria-label="Terminal command input"
                    />
                  </div>

                  <div className={styles.quickCommands}>
                    <span>Quick run:</span>
                    {["whoami", "skills", "security", "experience", "clear"].map((c) => (
                      <button
                        key={c}
                        type="button"
                        className={styles.quickCmdBtn}
                        onClick={() => handleCommand(c)}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className={styles.checklistGrid}>
                  {[
                    { label: "OWASP Top 10 Mitigation", status: "PASS", note: "Defense against SQLi, XSS, CSRF, and SSRF." },
                    { label: "Stateless JWT Authentication", status: "PASS", note: "HttpOnly, SameSite strict cookies with short-lived tokens." },
                    { label: "Parameterized SQL & NoSQL Sanitization", status: "PASS", note: "Zero concatenated query vectors." },
                    { label: "Content Security Policy (CSP)", status: "PASS", note: "Strict script-src and frame-ancestors definitions." },
                    { label: "Rate Limiting & DDoS Shield", status: "PASS", note: "Bucket token algorithms to prevent brute-force abuse." },
                    { label: "AES-256-GCM Cryptography", status: "PASS", note: "Authenticated symmetric encryption for sensitive stores." },
                  ].map((item, idx) => (
                    <div key={idx} className={styles.checklistItem}>
                      <div className={styles.checkHeader}>
                        <span className={styles.checkStatus}>✔ {item.status}</span>
                        <span className={styles.checkName}>{item.label}</span>
                      </div>
                      <p className={styles.checkNote}>{item.note}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "philosophy" && (
                <div className={styles.philosophyGrid}>
                  <div className={styles.philosophyCard}>
                    <h4>1. Security by Design</h4>
                    <p>Security is not an afterthought or an audit checkbox. Every architectural decision accounts for threat vectors from day zero.</p>
                  </div>
                  <div className={styles.philosophyCard}>
                    <h4>2. Measurable Performance</h4>
                    <p>Measure before and after optimization. Sub-100ms roundtrips, lean bundles, and unblocked event loops dictate quality.</p>
                  </div>
                  <div className={styles.philosophyCard}>
                    <h4>3. Empathy for Code &amp; Users</h4>
                    <p>Writing clean, typed, well-documented code that teammates love reading and maintainable systems that withstand scale.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
