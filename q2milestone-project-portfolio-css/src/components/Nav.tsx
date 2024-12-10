"use client";
import { useState } from "react";
import Link from "next/link";
import style from "@/style/Nav.module.css"
const NavbarFunc = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={style.navbar}>
      {/* Website Logo */}
      <Link href="/">
        <div>
          <p className={style.navbarLogo}>MY PORTFOLIO</p>
          <p className={style.navbarSubtitle}>MUHAMMAD ANUS AHMED</p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className={style.navLinks}>
        <Link href="/" className={style.navLink}>
          Home
        </Link>
        <Link href="/resume" className={style.navLink}>
          Resume
        </Link>
        <Link href="/#experience" className={style.navLink}>
          Experience
        </Link>
        <Link href="/about" className={style.navLink}>
          About
        </Link>
        <Link href="/contact" className={style.navLink}>
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={style.hamburger}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className={style.hamburgerIcon}></span>
        <span className={style.hamburgerIcon}></span>
        <span className={style.hamburgerIcon}></span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={style.mobileMenu}>
          <ul className={style.mobileMenuList}>
            <li>
              <Link href="/" className={style.myLink}
              onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/resume" className={style.myLink} onClick={() => setIsMobileMenuOpen(false)}>
                Resume
              </Link>
            </li>
            <li>
              <Link href="/#experience" className={style.myLink} onClick={() => setIsMobileMenuOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="/about" className={style.myLink} onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={style.myLink} onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarFunc;
