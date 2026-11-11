"use client";

import { useState } from "react";
import styles from "./site-header.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8 sm:py-4 lg:px-12">
        <a
          aria-label="Miyigbena Abidemi Dorcas, home"
          className="flex items-center gap-3"
          href="#home"
          onClick={closeMenu}
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center bg-[var(--ink)] text-sm font-semibold tracking-wide text-white">
            MD
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">
            Miyigbena Abidemi Dorcas
          </span>
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span aria-hidden="true" className={styles.menuIcon}>
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          aria-label="Main navigation"
          className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""}`}
          id="primary-navigation"
        >
          <ul className={styles.linkList}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  className={label === "Contact" ? styles.contactLink : styles.navLink}
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
