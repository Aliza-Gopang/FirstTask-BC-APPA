"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const OurBlog: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="ourblog" className="ourblog">
      <div className="container py-5">
        {/* Top Heading */}
        <div className="text-center mb-5">
          <span className="bg-Pur text-secondary px-3 py-2 rounded-5 d-inline-block bg-Text mb-1">
            Our Blog 🔥
          </span>
          <h2 className="fw-bold">Recent Articles And Latest Blog</h2>
        </div>

        {/* Blog Cards */}
        <div className="row g-4">
          {/* Card 1 */}
          <div
            className="col-12 col-md-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card h-100 shadow-sm border-1">
              <div className="d-flex justify-content-center mt-3 p-2">
                <Image
                  src="/OurBlog/image (3).png"
                  alt="Workplace Blog"
                  width={300}
                  height={200}
                  className="img-fluid"
                />
              </div>
              <div className="card-body text-lg-start text-center">
                <h5 className="fs-6 fs-md-5">
                  Services That Printing At You Is Important
                </h5>
              </div>
              <div className="card-footer bg-white border-top pt-3">
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center text-muted">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/OurBlog/IconsFolder/UserIcon.png"
                      alt="User"
                      width={15}
                      height={15}
                    />
                    <span className="p-3">By Admin</span>
                  </div>
                  <div className="text-primary">|</div>
                  <div className="d-flex align-items-center">
                    <Image
                      src="/OurBlog/IconsFolder/calendar.png"
                      alt="Date"
                      width={15}
                      height={15}
                    />
                    <span className="p-3">Sep 30, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="col-12 col-md-4"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="card h-100 shadow-sm border-1">
              <div className="d-flex justify-content-center mt-3 p-2">
                <Image
                  src="/OurBlog/coding.png"
                  alt="Coding Blog"
                  width={300}
                  height={200}
                  className="img-fluid"
                />
              </div>
              <div className="card-body text-lg-start text-center">
                <h5 className="fs-6 fs-md-5">
                  A checklist to improve your daily routine
                </h5>
              </div>
              <div className="card-footer bg-white border-top pt-3">
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center text-muted">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/OurBlog/IconsFolder/UserIcon.png"
                      alt="User"
                      width={15}
                      height={15}
                    />
                    <span className="p-3">By Admin</span>
                  </div>
                  <div className="text-primary">|</div>
                  <div className="d-flex align-items-center">
                    <Image
                      src="/OurBlog/IconsFolder/calendar.png"
                      alt="Date"
                      width={15}
                      height={15}
                    />
                    <span className="p-3">Sep 30, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="col-12 col-md-4"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="card h-100 shadow-sm border-1">
              <div className="d-flex justify-content-center mt-3 p-2">
                <Image
                  src="/OurBlog/image (3).png"
                  alt="Better Every Day"
                  width={300}
                  height={200}
                  className="img-fluid"
                />
              </div>
              <div className="card-body text-lg-start text-center">
                <h5 className="fs-6 fs-md-5">
                  That will help you get 1% better every day
                </h5>
              </div>
              <div className="card-footer bg-white border-top pt-3">
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center text-muted">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/OurBlog/IconsFolder/UserIcon.png"
                      alt="User"
                      width={15}
                      height={15}
                    />
                    <span className="p-3">By Admin</span>
                  </div>
                  <div className="text-primary">|</div>
                  <div className="d-flex align-items-center">
                    <Image
                      src="/OurBlog/IconsFolder/calendar.png"
                      alt="Date"
                      width={15}
                      height={15}
                    />
                    <span className="p-3">Sep 30, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
