"use client";

import React from "react";
import Image from "next/image";
import { section } from "framer-motion/client";

const OurApp: React.FC = () => {
  return (
    <section id="ourapp" className="ourapp">
      <div className="container-fluid bg-app text-center py-5 position-relative overflow-hidden">
        <span className="bg-Pur text-secondary px-3 py-2 rounded-5 d-inline-block bg-Text mb-1">
          Our Blog 🔥
        </span>
        <h2 className="fw-bold text-white mb-5">
          Join BC Appa Today – Where Your Money Is Always Protected!
        </h2>

        <div className="slideshow-wrapper">
          {/* Slideshow container */}
          <div className="slideshow-track">
            {[...Array(3)]
              .flatMap(() => [
                "/OurApp/mobile.png",
                "/OurApp/Mobile 2.png",
                "/OurApp/Mobile 3.png",
                "/OurApp/Mobile 2.png",
                "/OurApp/mobile.png",
                "/OurApp/Mobile 2.png",
                "/OurApp/Mobile 3.png",
                "/OurApp/Mobile 2.png",
                "/OurApp/Mobile 3.png",
                "/OurApp/Mobile 2.png",
                "/OurApp/Mobile 3.png",
              ])
              .map((src, index) => (
                <div className="slide" key={index}>
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={240}
                    height={500}
                    className="slide-img"
                  />
                </div>
              ))}
          </div>

          {/* Center frame */}
          <div className="center-frame">
            <Image
              src="/OurApp/Mob-Frame.png"
              alt="Frame"
              width={240}
              height={500}
              className="frame-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApp;
