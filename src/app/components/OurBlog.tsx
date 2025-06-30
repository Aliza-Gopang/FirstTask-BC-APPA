"use client";

import React from "react";
import Image from "next/image";

const OurBlog: React.FC = () => {
  return (
    <section className="container py-5">
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
        <div className="col-md-4">
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
              <h5 className="">Services That Printing At You Is Important</h5>
            </div>
            <div className="card-footer bg-white border-top pt-3">
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center text-muted ">
                {/* Author */}
                <div className="d-flex align-items-center text-muted">
                  <Image
                    src="/OurBlog/IconsFolder/UserIcon.png"
                    alt="Workplace Blog"
                    width={15}
                    height={15}
                    className=""
                  />
                  <span className="p-3">By Admin</span>
                </div>

                {/* Divider */}
                <div className="text-primary">|</div>

                {/* Date */}
                <div className="d-flex align-items-center text-muted">
                  <Image
                    src="/OurBlog/IconsFolder/calendar.png"
                    alt="Workplace Blog"
                    width={15}
                    height={15}
                    className=""
                  />
                  <span className="p-3">Sep 30, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-1">
            <div className="d-flex justify-content-center mt-3 p-2">
              <Image
                src="/OurBlog/coding.png"
                alt="Workplace Blog"
                width={300}
                height={200}
                className="img-fluid"
              />
            </div>
            <div className="card-body text-lg-start text-center">
              <h5 className="card-title">
                A checklist to improve your daily routine
              </h5>
            </div>
            <div className="card-footer bg-white border-top pt-3">
              <div className="d-flex align-items-center gap-4">
                {/* Author */}
                <div className="d-flex align-items-center text-muted">
                  <Image
                    src="/OurBlog/IconsFolder/UserIcon.png"
                    alt="Workplace Blog"
                    width={15}
                    height={15}
                    className="img-fluid"
                  />
                  <span className="p-3">By Admin</span>
                </div>

                {/* Divider */}
                <div className="text-primary">|</div>

                {/* Date */}
                <div className="d-flex align-items-center text-muted">
                  <Image
                    src="/OurBlog/IconsFolder/calendar.png"
                    alt="Workplace Blog"
                    width={15}
                    height={15}
                    className="img-fluid"
                  />
                  <span className="p-3">Sep 30, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
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
              <h5 className="card-title">
                That will help you get 1% better every day
              </h5>
            </div>
            <div className="card-footer bg-white border-top pt-3">
              <div className="d-flex align-items-center gap-4">
                {/* Author */}
                <div className="d-flex align-items-center text-muted">
                  <Image
                    src="/OurBlog/IconsFolder/UserIcon.png"
                    alt="Workplace Blog"
                    width={15}
                    height={15}
                    className="img-fluid"
                  />
                  <span className="p-3">By Admin</span>
                </div>

                {/* Divider */}
                <div className="text-primary">|</div>

                {/* Date */}
                <div className="d-flex align-items-center text-muted">
                  <Image
                    src="/OurBlog/IconsFolder/calendar.png"
                    alt="Workplace Blog"
                    width={15}
                    height={15}
                    className="img-fluid"
                  />
                  <span className="p-3">Sep 30, 2024</span>
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
