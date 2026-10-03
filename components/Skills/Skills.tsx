"use client";

import React from "react";
import styles from "./Skills.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  badge: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "☕",
    color: "#E5A93C",
    badge: "Core Logic",
    skills: ["Java", "C++", "C", "JavaScript (ES6+)"],
  },
  {
    title: "Frontend Engineering",
    icon: "⚡",
    color: "#4338CA",
    badge: "Interactive UI",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Bootstrap", "EJS"],
  },
  {
    title: "Backend & Systems",
    icon: "⚙️",
    color: "#059669",
    badge: "Scalable APIs",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Microservices", "Auth/JWT"],
  },
  {
    title: "Database Architectures",
    icon: "🗄️",
    color: "#2563EB",
    badge: "Data Layers",
    skills: ["MongoDB", "SQL", "Schema Design", "Query Optimization"],
  },
  {
    title: "DevOps & Tooling",
    icon: "🐳",
    color: "#D97706",
    badge: "Infrastructure",
    skills: ["Docker", "Git", "GitHub Actions", "Postman", "Figma", "Linux/Bash"],
  },
  {
    title: "Spoken Languages",
    icon: "🌐",
    color: "#E11D48",
    badge: "Communication",
    skills: ["English (Fluent)", "Hindi (Fluent)", "Marathi (Native)", "German (Beginner A1)"],
  },
];

export default function Skills() {
  const revealRef = useScrollReveal();

  return (
    <section id="skills" className={styles.section} ref={revealRef as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <div className="eyebrow-pill">
            <span>●</span> Technical Arsenal
          </div>
          <h2 className={styles.title}>
            Languages, frameworks &amp; <span className="serif-italic">security</span> disciplines.
          </h2>
          <p className={styles.lead}>
            A versatile fullstack toolkit spanning foundational systems programming,
            modern frontend ergonomics, robust server architecture, and security best practices.
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={`${styles.card} reveal`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap} style={{ background: `${cat.color}15` }}>
                  <span className={styles.icon}>{cat.icon}</span>
                </div>
                <div className={styles.titleArea}>
                  <span className={styles.categoryBadge} style={{ color: cat.color }}>
                    {cat.badge}
                  </span>
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                </div>
              </div>

              <div className={styles.tagWrap}>
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
