"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function MissionVision() {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <>
      {/* Top Section */}
      <div className="container bg-light text-dark py-5 rounded-5">
        <div className="row align-items-center justify-content-center text-start">
          {/* ✅ Image First on Mobile/MD, Right on LG */}
          <div className="col-12 col-lg-6 d-flex justify-content-center order-1 order-lg-2 mb-4 mb-lg-0">
            <Image
              src="/MissionVision/arrow.png"
              alt="Arrow Illustration"
              width={260}
              height={300}
              className="img-fluid rounded-3"
            />
          </div>

          {/* ✅ Text Second on Mobile/MD, Left on LG */}
          <div className="col-12 col-lg-6 px-5 order-2 order-lg-1">
            <div className="mb-3">
              <span className="bg-Pur text-secondary px-2 py-1 rounded-4 d-inline-block bg-Text">
                Mission & Vision 🔥
              </span>
            </div>
            <h2 className="fw-bold mt-3">Our Vision</h2>
            <p className="text-muted">
              To eliminate financial insecurity in group savings, ensuring every
              member contributes and gets their fair payout – without any risk.
            </p>
            <h3 className="fw-bold mt-4">Our Mission</h3>
            <p className="text-muted">
              To provide a worry-free digital BC platform where every user
              enjoys secure, insured, and seamless savings experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Background Image & Animated CountUp */}
      <div
        className="container my-5"
        style={{
          backgroundImage: 'url("/MissionVision/bg-blue.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
        }}
      >
        <div ref={ref} className="text-white text-center py-5 px-3">
          <div className="row">
            {[
              { end: 56, text: "Customers visit app every month", suffix: "+" },
              { end: 10, text: "Total downloaded of our app", suffix: "K+" },
              { end: 156, text: "Total Members of App Users", suffix: "K+" },
              {
                end: 4.9,
                text: "Satisfaction rate from customers",
                decimals: 1,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`col-6 col-md-3 mb-4 mb-md-0 ${inView ? "fade-slide-up" : ""}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <h2 className="fw-bold">
                  {startCount && (
                    <CountUp
                      end={item.end}
                      duration={2.5}
                      separator={item.suffix?.includes("K") ? "," : ""}
                      decimals={item.decimals || 0}
                    />
                  )}
                  {item.suffix && item.suffix}
                </h2>
                <p className="small">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
