"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
      <section id="about" className="about">
            <div className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-md-6 text-center mb-4 mb-md-0 ">
            <Image
              src="/About/Group (1).png"
              alt="About us"
              width={400}
              height={300}
              className="img-fluid w-75"
            />
          </div>

          {/* Text Column */}
          <div className="col-md-6">
            <span className="bg-Pur text-secondary px-2 py-1 rounded-4 d-inline-block bg-Text order-1 order-md-2">
              About Our App 🔥
            </span>

            <h1 className="mt-3 mb-lg-3 fw-bold">
              🔒 Revolutionizing Savings Circles with 100% Financial Security
            </h1>

            <p className="mb-0 mt-3">
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
                      src="/About/circleicon-2.png"
                      alt="Guaranteed Protection"
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
    </div>
      </section>

  );
}
