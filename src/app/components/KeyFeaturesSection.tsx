"use client";

import React from "react";
import Image from "next/image";

const KeyFeaturesSection: React.FC = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="container mt-3">
          <div className="text-center">
            <div className="row">
              <div className="col-12">
                <span className="bg-Pur text-secondary px-3 py-2 rounded-5 d-inline-block bg-Text mb-1">
                  Features 🔥
                </span>
                <h2 className="mb-4 fw-bold">Key Features</h2>
                <div className="row justify-content-center">
                  <div className="col-lg-3 py-5">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <Image
                        src="/KeyFeatures/Icon.png"
                        alt="Insurance Icon"
                        width={40}
                        height={40}
                        className="img-fluid"
                      />
                      <div className="text-start">
                        <h6 className="fw-semibold mb-1">Insurance-Backed Security</h6>
                        <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>
                          Your payout is covered, even if someone defaults.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        src="/KeyFeatures/Icon2.png"
                        alt="Sharia Icon"
                        width={40}
                        height={40}
                        className="animate-wiggle"
                      />
                      <div className="text-start">
                        <h6 className="fw-semibold mb-1">Sharia-Compliant Options</h6>
                        <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>
                          Choose from Islamic savings circles with zero Riba (interest).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 d-flex align-items-center justify-content-center mt-4">
                    <Image
                      src="/KeyFeatures/Graphite.png"
                      alt="Verified"
                      width={300}
                      height={300}
                      className="mb-3 img-fluid animate-scaleFade"
                    />
                  </div>

                  <div className="col-lg-3 py-5">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <Image
                        src="/KeyFeatures/Icon.png"
                        alt="Insurance Icon"
                        width={40}
                        height={40}
                        className="animate-wiggle"
                      />
                      <div className="text-start">
                        <h6 className="fw-semibold mb-1">Insurance-Backed Security</h6>
                        <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>
                          Your payout is covered, even if someone defaults.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        src="/KeyFeatures/Icon4.png"
                        alt="Sharia Icon"
                        width={40}
                        height={40}
                        className="img-fluid"
                      />
                      <div className="text-start">
                        <h6 className="fw-semibold mb-1">Sharia-Compliant Options</h6>
                        <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>
                          Choose from Islamic savings circles with zero Riba (interest).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 mt-4 d-flex justify-content-center d-none d-lg-flex">
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        src="/KeyFeatures/Icon5.png"
                        alt="Sharia Icon"
                        width={40}
                        height={40}
                      />
                      <div className="text-start">
                        <h6 className="fw-semibold mb-1">Real-Time Tracking</h6>
                        <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>
                          Monitor all contributions and payouts with complete transparency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="mt-4 fw-bold">
                  📢 No more financial worries – BC Appa has you covered!
                </h5>
              </div>
            </div>
          </div>
        </div>

        <section className="container text-center py-5">
          <span className="bg-Pur text-secondary px-3 py-2 rounded-5 d-inline-block bg-Text mb-2">
            Peace of Mind 🔥
          </span>
          <h2 className="mb-4">What Makes BC Appa Different?</h2>

          <div className="row justify-content-center">
            <div className="col-md-4 p-lg-2 border border-secondary rounded py-3 me-lg-4 mb-3">
              <Image
                src="/KeyFeatures/Icon6.png"
                alt="Shield Icon"
                width={40}
                height={40}
                className="mb-3 animate-wiggle"
              />
              <h4>BC Appa</h4>
              <p>
                Even if a member fails to pay, your money is safe with our insurance-backed protection.
              </p>
            </div>
            <div className="col-md-4 p-lg-2 border border-secondary rounded p-3 mb-3">
              <Image
                src="/KeyFeatures/Icon7.png"
                alt="Phone Icon"
                width={40}
                height={40}
                className="mb-3 animate-wiggle"
              />
              <h4>No More Cash Hassles</h4>
              <p>Everything is managed online, ensuring complete security.</p>
            </div>
          </div>

          <p className="mt-4 fw-bold">
            📢 Your Savings Are Safe - Always!
          </p>
        </section>
      </section>
    </>
  );
};

export default KeyFeaturesSection;