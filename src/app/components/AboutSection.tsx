"use client";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Overlay = ({ text }: { text: string }) => (
  <span className="bg-secondary text-white px-2 py-1 rounded-pill d-inline-block mb-3 fw-semibold">
    {text}
  </span>
);


const CircularProfiles = () => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 500, once: true });

    const orbit = orbitRef.current;
    let angle = 0;

    const outerCircle = orbit?.getElementsByClassName(
      "orbit-outer"
    ) as HTMLCollectionOf<HTMLElement>;
    const innerCircle = orbit?.getElementsByClassName(
      "orbit-inner"
    ) as HTMLCollectionOf<HTMLElement>;

    function rotate() {
      angle += 1;

      Array.from(outerCircle).forEach((item, index) => {
        const slice = (2 * Math.PI) / 4;
        const x = Math.cos(angle * 0.01 + slice * index) * 170;
        const y = Math.sin(angle * 0.01 + slice * index) * 170;

        item.style.position = "absolute";
        item.style.left = `calc(50% + ${x}px - 35px)`;
        item.style.top = `calc(50% + ${y}px - 35px)`;
      });

      Array.from(innerCircle).forEach((item, index) => {
        const slice = (2 * Math.PI) / 2;
        const x = Math.cos(-angle * 0.01 + slice * index) * 110;
        const y = Math.sin(-angle * 0.01 + slice * index) * 110;

        item.style.position = "absolute";
        item.style.left = `calc(50% + ${x}px - 25px)`;
        item.style.top = `calc(50% + ${y}px - 25px)`;
      });

      requestAnimationFrame(rotate);
    }

    if (outerCircle?.length || innerCircle?.length) rotate();
  }, []);

  return (
    <>
  
    <section data-aos="zoom-in-up" className="py-5">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left: Circular Orbit Section */}
          <div className="col-lg-6 text-center mb-4 mb-md-0 d-flex justify-content-center align-items-center">
            <div
              ref={orbitRef}
              className="position-relative mx-auto"
              style={{
                width: "min(400px, 90vw)", // Use 90% of viewport width or 400px, whichever is smaller
                height: "min(400px, 90vw)", // Maintain aspect ratio
                maxWidth: "100%", // Prevent overflow
              }}
            >
              {/* Rotating Dashed Border */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100 border border-2 border-dashed rounded-circle opacity-50"
                style={{ animation: "spin 10s linear infinite" }}
              ></div>

              {/* Center Woman Image */}
              <div className="position-absolute top-50 start-50 translate-middle">
                <div
                  className="rounded-circle border border-3 bg-text d-flex align-items-center justify-content-center"
                  style={{
                    width: "min(210px, 50vw)", // Responsive width
                    height: "min(205px, 50vw)", // Responsive height
                    backgroundColor: "rgba(134, 112, 229, 0.08)",
                  }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center border border-2"
                    style={{
                      width: "min(110px, 30vw)", // Responsive inner circle
                      height: "min(110px, 30vw)",
                    }}
                  >
                    <Image
                      src="/About/woman.png"
                      alt="Woman Center"
                      width={70}
                      height={70}
                      className="rounded-circle border border-2"
                      style={{ objectFit: "cover" }} // Ensure image fits properly
                    />
                  </div>
                </div>
              </div>

              {/* Orbiting Images */}
              <div className="position-absolute top-50 start-50 translate-middle">
                {/* Outer circle - 4 larger images */}
                {[
                  "/About/1.png",
                  "/About/2.png",
                  "/About/3.png",
                  "/About/4.png",
                ].map((src, index) => (
                  <div key={`outer-${index}`} className="orbit-outer">
                    <Image
                      src={src}
                      alt={`Outer ${index + 1}`}
                      width={70}
                      height={70}
                      className="rounded-circle border border-3 bg-Text"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}

                {/* Inner circle - 2 smaller images */}
                {["/About/5.png", "/About/6.png"].map((src, index) => (
                  <div key={`inner-${index}`} className="orbit-inner">
                    <Image
                      src={src}
                      alt={`Inner ${index + 5}`}
                      width={50}
                      height={50}
                      className="rounded-circle border border-2 bg-Text"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="col-lg-6">
            <span className="bg-Pur text-secondary px-3 py-2 rounded-5 d-inline-block bg-Text mb-1">
              About Our App 🔥
            </span>
            <h1 className="mt-2 mb-lg-3 fw-bold">
              🔒 Revolutionizing Savings Circles with 100% Financial Security
            </h1>

            <p className="mb-0">
              Traditional Beesis (BCs) have always been a trusted way to save,
              but the fear of fraud, mismanagement, and defaults has held many
              back.
            </p>

            <strong className="d-block">
              BC Appa is the ONLY platform where your savings are 100% secure,
              even if a member defaults – thanks to our insurance-backed
              protection
            </strong>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <p>
                  <strong>
                    <Image
                      src="/About/circleicon-1.png"
                      alt="About us"
                      width={20}
                      height={20}
                      className="img-fluid me-2"
                    />
                    Guaranteed Protection
                  </strong>
                  <small className="text-secondary">
                    {" "}
                    – If a member defaults, your payout is covered by insurance
                  </small>
                </p>
              </li>
              <li className="mb-2">
                <p>
                  <strong>
                    <Image
                      src="/About/circleicon-2.png"
                      alt="About us"
                      width={20}
                      height={20}
                      className="img-fluid me-2"
                    />
                    100% Verified Users
                  </strong>
                  <small className="text-secondary">
                    – Every participant is authenticated, reducing fraud risk
                  </small>
                </p>
              </li>

              <li className="mb-2">
                <p>
                  <strong>
                    <Image
                      src="/About/circleicon-3.png"
                      alt="About us"
                      width={20}
                      height={20}
                      className="img-fluid me-2"
                    />
                    Secure Digital Transactions
                  </strong>
                  <small> – No cash exchanges, no hidden risks</small>
                </p>
              </li>
              <li className="mb-2">
                <p>
                  <strong>
                    <Image
                      src="/About/circleicon-4.png"
                      alt="About us"
                      width={20}
                      height={20}
                      className="img-fluid me-2"
                    />
                    Full Transparency
                  </strong>
                  <small>
                    – All records are digital and trackable in real-time
                  </small>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default CircularProfiles;
