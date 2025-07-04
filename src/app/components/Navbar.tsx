"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import JoinButton from "./JoinButton";

const Navbar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);

    // Scroll down when toggled open
    if (isCollapsed) {
      setTimeout(() => {
        window.scrollBy({
          top: 300, // Adjust based on your section heights
          behavior: "smooth",
        });
      }, 200);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-fluid py-1 px-lg-2 px-lg-5">
        <Link className="navbar-brand d-flex align-items-center p-3" href="/">
          <Image
            src="/HeroSection/logo.png"
            alt="Logo"
            width={150}
            height={200}
            className="img-fluid"
          />
        </Link>

        {/* Toggle Button */}
        <button
          className={`navbar-toggler ${!isCollapsed ? "bg-white" : ""}`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <div className="d-flex align-items-center w-100">
            <ul className="navbar-nav mx-auto d-flex justify-content-center align-items-center gap-1 fw-bold">
              <li className="nav-item">
                <Link className="nav-link text-dark" href="#HeroSection">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/#about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/#how-it-works">
                  Works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/#features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/#ourapp">
                  App
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/#ourblog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/#testimonials">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/#faqs">
                  FAQ’s
                </Link>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-center">
              <JoinButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
