"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(272); // ~4:32 default until metadata loads
  const [isMuted, setIsMuted] = useState(false);

  // Sync audio time update
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio playback prevented or interrupted:", err);
        });
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPercentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = newPercentage * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Helper to split text into interactive hover letters (Zainab Kabira style)
  const renderInteractiveLetters = (text: string) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return <span key={index} className={styles.space}>&nbsp;</span>;
      }
      return (
        <span key={index} className={styles.letter}>
          {char}
        </span>
      );
    });
  };

  return (
    <section className={styles.heroWrapper} id="home">
      {/* Real Audio Element for Arctic Monkeys - Do I Wanna Know? */}
      <audio
        ref={audioRef}
        src="/audio/do-i-wanna-know.mp3"
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      {/* Background ambient sunset mesh & noise */}
      <div className={styles.ambientMesh} />
      <div className={styles.sunGlow} />

      <div className={styles.heroContainer}>
        {/* Eyebrow status pill (Vaibhav Verma style) */}
        <div className={styles.statusPill}>
          <span className="pulse-indicator" />
          <span className={styles.statusText}>
            Available for new roles & projects · Pune, India
          </span>
        </div>

        {/* Main Display Headline with letter physics and italic serif accents */}
        <h1 className={styles.headline}>
          <span className={styles.headlineLine}>
            {renderInteractiveLetters("Fullstack")}
          </span>
          <span className={styles.headlineLine}>
            <span className={styles.serifWord}>Developer</span>{" "}
            <span className={styles.ampersand}>&amp;</span>{" "}
            <span className={styles.serifWordItalic}>Security</span>
          </span>
        </h1>

        {/* Subtitle / Bio summary */}
        <p className={styles.subheadline}>
          Hi, I&apos;m <strong>Pranav Firame</strong>. I engineer resilient web applications,
          scalable backend APIs, and fortified digital products with clean aesthetics and
          impenetrable web security.
        </p>

        {/* Badges / Domains (Vaibhav Verma style) */}
        <div className={styles.domainTags}>
          <span className={styles.domainTag}>🛡️ Web Security</span>
          <span className={styles.domainTag}>⚡ Next.js &amp; React</span>
          <span className={styles.domainTag}>⚙️ Node &amp; RESTful APIs</span>
          <span className={styles.domainTag}>🐳 Docker &amp; DevOps</span>
        </div>

        {/* Action Buttons */}
        <div className={styles.ctaGroup}>
          <a href="#projects" className={styles.primaryCta}>
            <span>View Selected Work</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 13l5 5 5-5M12 4v14" />
            </svg>
          </a>

          <a href="/resume.pdf" download className={styles.secondaryCta}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Résumé</span>
          </a>

          <div className={styles.socialIcons}>
            <a
              href="https://github.com/PranavFirame"
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
              title="GitHub Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/pranavfirame"
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
              title="LinkedIn Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="mailto:pranavfirame06@gmail.com"
              className={styles.socialIcon}
              title="Email Me"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Vintage Physical Audio Player Pill with Arctic Monkeys - Do I Wanna Know? */}
        <div className={styles.mediaPlayerPill}>
          <div
            className={`${styles.vinylDisc} ${isPlaying ? styles.spinning : ""}`}
            onClick={togglePlay}
            title="Click to play/pause vinyl"
            role="button"
            tabIndex={0}
          >
            <div className={styles.vinylGrooves}>
              <div className={styles.vinylCenter}>
                <div className={styles.vinylHole} />
              </div>
            </div>
          </div>

          <div className={styles.mediaDetails}>
            <div className={styles.mediaHeader}>
              <div className={styles.songMeta}>
                <span className={styles.musicNote}>♫</span>
                <span className={styles.mediaTitle}>
                  Do I Wanna Know?
                </span>
                <span className={styles.artistName}>
                  Arctic Monkeys
                </span>
                <span className={styles.albumBadge}>AM</span>
              </div>

              {/* Animated Equalizer Waves */}
              <div className={styles.equalizerWave} aria-hidden="true">
                <span className={`${styles.eqBar} ${isPlaying ? styles.eqBarActive : ""}`} />
                <span className={`${styles.eqBar} ${isPlaying ? styles.eqBarActive : ""}`} />
                <span className={`${styles.eqBar} ${isPlaying ? styles.eqBarActive : ""}`} />
                <span className={`${styles.eqBar} ${isPlaying ? styles.eqBarActive : ""}`} />
                <span className={`${styles.eqBar} ${isPlaying ? styles.eqBarActive : ""}`} />
              </div>

              <span className={styles.mediaTimestamp}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div
              className={styles.progressBarBg}
              onClick={handleSeek}
              title="Click to seek in track"
              role="slider"
              aria-valuenow={progressPercent}
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
            >
              <div
                className={styles.progressBarFill}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className={styles.playerActions}>
            <button
              type="button"
              className={styles.muteBtn}
              onClick={toggleMute}
              title={isMuted ? "Unmute" : "Mute"}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="1" y1="1" x2="23" y2="23" />
                  <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
                  <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0a7 7 0 0 1-.11 1.23" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>

            <button
              type="button"
              className={styles.playBtn}
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause Do I Wanna Know" : "Play Do I Wanna Know"}
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Scroll prompt (Vaibhav Verma style) */}
        <a href="#about" className={styles.scrollDown}>
          <span className={styles.scrollText}>Scroll to explore</span>
          <div className={styles.scrollLine}>
            <div className={styles.scrollPip} />
          </div>
        </a>
      </div>
    </section>
  );
}
