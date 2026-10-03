"use client";

import React from "react";
import styles from "./Projects.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Project {
  id: string;
  name: string;
  badge: string;
  tags: string[];
  title: string;
  desc: string;
  metrics: { value: string; label: string }[];
  tech: string[];
  mockupIcon: string;
  accentColor: string;
  accentBg: string;
  floats: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: "taskflow",
    name: "TaskFlow",
    badge: "Fullstack & Real-Time",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    title: "Real-time collaborative project workspace with zero-latency synchronization.",
    desc: "Engineered a low-latency Kanban workspace for distributed engineering teams. Architected bi-directional WebSocket pipelines with conflict resolution, role-based access control, and instant task telemetry.",
    metrics: [
      { value: "<45ms", label: "WebSocket broadcast latency across clients" },
      { value: "100%", label: "Real-time state consistency without refresh" },
    ],
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    mockupIcon: "⚡",
    accentColor: "#4338CA",
    accentBg: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
    floats: ["📋", "💬", "⚡"],
    githubUrl: "https://github.com/PranavFirame",
    demoUrl: "#",
  },
  {
    id: "cloudvault",
    name: "CloudVault",
    badge: "Web Security & Cloud",
    tags: ["Next.js", "AWS S3", "PostgreSQL", "Redis"],
    title: "Zero-knowledge encrypted cloud storage with client-side cryptography.",
    desc: "Designed and built an end-to-end encrypted storage architecture where user files are encrypted client-side using AES-256-GCM before uploading to cloud buckets, ensuring zero plaintext exposure to the host server.",
    metrics: [
      { value: "AES-256", label: "Client-side Galois/Counter Mode encryption" },
      { value: "0 bytes", label: "Plaintext file exposure on storage servers" },
    ],
    tech: ["Next.js", "TypeScript", "AWS S3", "PostgreSQL", "Redis"],
    mockupIcon: "🛡️",
    accentColor: "#059669",
    accentBg: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
    floats: ["🔒", "☁️", "🛡️"],
    githubUrl: "https://github.com/PranavFirame",
    demoUrl: "#",
  },
  {
    id: "devconnect",
    name: "DevConnect",
    badge: "Community & APIs",
    tags: ["Next.js", "GraphQL", "Prisma", "TypeScript"],
    title: "High-throughput community platform for developers with instant GraphQL querying.",
    desc: "Developed a community knowledge platform featuring threaded architectural discussions, interactive code playground embeds, automated markdown linting, and sub-100ms search indexing.",
    metrics: [
      { value: "99.9%", label: "Uptime with Redis cached query layer" },
      { value: "60%", label: "Reduction in over-fetching via GraphQL" },
    ],
    tech: ["Next.js", "GraphQL", "Prisma ORM", "TypeScript", "Tailwind"],
    mockupIcon: "🌐",
    accentColor: "#E11D48",
    accentBg: "linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 100%)",
    floats: ["💻", "🚀", "✨"],
    githubUrl: "https://github.com/PranavFirame",
    demoUrl: "#",
  },
  {
    id: "sentinelsec",
    name: "SentinelSec / AnalyticsPro",
    badge: "Security Telemetry & Data",
    tags: ["React", "FastAPI", "Python", "D3.js"],
    title: "Automated vulnerability assessment & real-time threat telemetry dashboard.",
    desc: "Created an automated security compliance scanner checking for OWASP Top 10 misconfigurations, dependency CVEs, header vulnerabilities, and SSL expiry with interactive visual telemetry.",
    metrics: [
      { value: "10+ Checks", label: "Automated OWASP Top 10 compliance audits" },
      { value: "Real-time", label: "D3.js attack vector & risk breakdown graphs" },
    ],
    tech: ["React", "Python", "FastAPI", "D3.js", "Docker"],
    mockupIcon: "📊",
    accentColor: "#D97706",
    accentBg: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
    floats: ["🔍", "📈", "🛡️"],
    githubUrl: "https://github.com/PranavFirame",
    demoUrl: "#",
  },
];

export default function Projects() {
  const revealRef = useScrollReveal();

  return (
    <section id="projects" className={styles.section} ref={revealRef as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <div className="eyebrow-pill">
            <span>●</span> Selected Work
          </div>
          <h2 className={styles.title}>
            Problems worth <span className="serif-italic">solving</span> &amp; systems{" "}
            <span className="serif-italic">fortified</span>.
          </h2>
          <p className={styles.lead}>
            A curated collection of fullstack web applications, security tools, and APIs
            engineered from concept to production.
          </p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, idx) => (
            <article key={project.id} className={`${styles.caseCard} reveal`}>
              {/* Visual Mockup Stage */}
              <div
                className={styles.mockupStage}
                style={{ background: project.accentBg }}
              >
                <div className={styles.deviceFrame}>
                  <div className={styles.deviceHeader}>
                    <div className={styles.deviceDots}>
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className={styles.deviceUrl}>https://{project.id}.pranav.dev</span>
                  </div>

                  <div className={styles.deviceContent}>
                    <div className={styles.iconCircle} style={{ background: project.accentColor }}>
                      <span className={styles.mainIcon}>{project.mockupIcon}</span>
                    </div>
                    <h4 className={styles.screenHeading}>{project.id.toUpperCase()}</h4>
                    <p className={styles.screenSub}>Active Module · Production Ready</p>
                    <div className={styles.codePreview}>
                      <code>
                        <span style={{ color: "#3B82F6" }}>const</span> engine ={" "}
                        <span style={{ color: "#10B981" }}>initSecurityModule</span>();
                      </code>
                    </div>
                  </div>
                </div>

                {/* Floating Emojis (Vaibhav Verma style) */}
                {project.floats.map((emoji, fIdx) => (
                  <span
                    key={fIdx}
                    className={`${styles.floatEmoji} ${styles[`float_${fIdx}`]}`}
                    aria-hidden="true"
                  >
                    {emoji}
                  </span>
                ))}
              </div>

              {/* Case Body */}
              <div className={styles.caseBody}>
                <div className={styles.badgeRow}>
                  <div className={styles.badgeGroup}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <span className={styles.badge} style={{ color: project.accentColor }}>
                      · {project.badge}
                    </span>
                  </div>
                  <span className={styles.number}>0{idx + 1}</span>
                </div>

                <div className={styles.tagPills}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tagPill}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={styles.caseTitle}>{project.title}</h3>
                <p className={styles.caseDesc}>{project.desc}</p>

                {/* Quantified Metrics (Vaibhav Verma signature) */}
                <div className={styles.metricsGrid}>
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className={styles.metricItem}>
                      <span className={styles.metricValue} style={{ color: project.accentColor }}>
                        {metric.value}
                      </span>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  ))}
                </div>

                {/* Dual CTAs */}
                <div className={styles.ctaRow}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.primaryLink}
                  >
                    <span>View on GitHub</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>

                  <a
                    href={project.demoUrl}
                    className={styles.secondaryLink}
                  >
                    <span>Live Preview ↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
