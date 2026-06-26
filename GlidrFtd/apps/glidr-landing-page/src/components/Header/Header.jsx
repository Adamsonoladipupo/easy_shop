import { useState } from "react";
import { GlidrLogo } from "../../assets/illustrations";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Company", href: "#" },
  { label: "Supermarkets", href: "#" },
  { label: "Logistics", href: "#" },
  { label: "More", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Brand */}
        <a href="/" className={styles.brand} aria-label="Glidr home">
          <GlidrLogo size={26} />
          <span className={styles.brandName}>lidr</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className={styles.navLink}>
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#" className={styles.cta}>Use App</a>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className={menuOpen ? styles.barTop : styles.bar} />
          <span className={menuOpen ? styles.barHidden : styles.bar} />
          <span className={menuOpen ? styles.barBottom : styles.bar} />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#" className={styles.mobileCta}>Use App</a>
        </nav>
      )}
    </header>
  );
}
