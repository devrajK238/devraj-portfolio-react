import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import "../assets/css/responsive/fullpage.css";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Scroll effect
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Close menu on click outside
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <div className="container">
        <nav className="navbar" ref={menuRef}>
          <div className="navbar-brand">
            <Link to="/">
              <img src="/images/logo.png" className="img-fluid" alt="logo" />
            </Link>

            {/* Hamburger */}
            <button
              className={`nav-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Animated Menu */}
          <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>About me</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#Process" onClick={() => setMenuOpen(false)}>Work Process</a>
            </li>
            <li>
              <a href="#Form" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
            <li>
              <Button
                text="Let's talk"
                link="https://wa.me/919560710267"
                target="_blank"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
