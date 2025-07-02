import React from "react";
import Image from "next/image";

const Work: React.FC = () => {
  return (
    <>
      <section id="how-it-works" className="how-it-works">
        <div className="row">
          <div className="col-12 text-center p-3">
            <span className="bg-Pur text-secondary px-3 py-2 rounded-5 d-inline-block bg-Text mt-5 mb-2">
              How It Work 🔥
            </span>
            <h2 className="mb-lg-5 fw-bold">How It Work</h2>
          </div>
        </div>
        <div className=" container d-none d-lg-block position-relative">
          {/* Wrapper for full width */}
          <div className="w-100">
            <Image
              src="/Work/Vector1.png"
              alt="wave"
              width={1500}
              height={400}
              style={{ width: "100%", height: "auto" }}
              className="wave-animate"
            />
          </div>
          <div className="container d-none d-lg-block">
            <div className="position-absolute top-0 start-0 w-100 h-100  d-flex align-items-center">
              <div className="row justify-content-between text-center">
                <div className="col-3 heading-bottom">
                  <h6 className=" fw-bold bg-Pur text-secondary px-4 py-2 rounded-5 d-inline-block bg-Text">
                    STEP-01
                  </h6>
                  <h6 className="fw-bold">Create or Join a BC</h6>
                  <p className="small ">
                    Select your savings circle with confidence, knowing all
                    members are verified.
                  </p>
                </div>
                <div className="col-3 heading-top">
                  <h6 className="fw-bold fw-bold bg-Pur text-secondary  px-4 py-1 rounded-5 d-inline-block bg-Text mt-5 ">
                    STEP-02
                  </h6>
                  <h6 className="fw-bold">Set Contributions & Payouts</h6>
                  <p className="small mb-0">
                    Transparent terms, with guaranteed safety if someone
                    defaults.
                  </p>
                </div>
                <div className="col-3 mb-5">
                  <h6 className="fw-bold fw-bold  bg-Pur text-secondary  px-4 py-1 rounded-5 d-inline-block bg-Text">
                    STEP-03
                  </h6>
                  <h6 className="fw-bold">Enjoy Secure Transactions</h6>
                  <p className="small mb-4">
                    Digital deposits & withdrawals, eliminating cash risks.
                  </p>
                </div>
                <div className="col-3 heading-top mt-5">
                  <h6 className="fw-bold fw-bold  bg-Pur text-secondary  px-4 py-1 rounded-5 d-inline-block bg-Text">
                    STEP-04
                  </h6>
                  <h6 className="fw-bold">Your Money is Insured</h6>
                  <p className="small mb-0">Your Money is Insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Small + Medium screens only */}
        <div className="container d-block d-lg-none">
          <div className="row g-4">
            {/* Step 1 */}
            <div className="col-12 text-center">
              <h6 className="fw-bold bg-Pur text-secondary px-4 py-1 rounded-5 d-inline-block bg-Text">
                STEP-01
              </h6>
              <h6 className="fw-bold mt-2">Create or Join a BC</h6>
              <p className="small">
                Select your savings circle with confidence, knowing all members
                are verified.
              </p>
            </div>
            {/* Step 2 */}
            <div className="col-12 text-center">
              <h6 className="fw-bold bg-Pur text-secondary px-4 py-1 rounded-5 d-inline-block bg-Text">
                STEP-02
              </h6>
              <h6 className="fw-bold mt-2">Set Contributions & Payouts</h6>
              <p className="small">
                Transparent terms, with guaranteed safety if someone defaults.
              </p>
            </div>
            {/* Step 3 */}
            <div className="col-12 text-center">
              <h6 className="fw-bold bg-Pur text-secondary px-4 py-1 rounded-5 d-inline-block bg-Text">
                STEP-03
              </h6>
              <h6 className="fw-bold mt-2">Enjoy Secure Transactions</h6>
              <p className="small">
                Digital deposits & withdrawals, eliminating cash risks.
              </p>
            </div>
            {/* Step 4 */}
            <div className="col-12 text-center">
              <h6 className="fw-bold bg-Pur text-secondary px-4 py-1 rounded-5 d-inline-block bg-Text">
                STEP-04
              </h6>
              <h6 className="fw-bold mt-2">Your Money is Insured</h6>
              <p className="small">If a member defaults, you still get paid!</p>
            </div>
          </div>
        </div>
        <div className="container py-5 mt-2 text-center">
          <span className="bg-Pur text-secondary px-3 py-2 rounded-5 d-inline-block bg-Text mt-5 mb-2">
            Peace of Mind 🔥
          </span>
          <h5 className="fw-bold mb-5">
            Why BC Appa Gives You Complete Peace Of Mind
          </h5>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <div className="text-primary mb-2">
                 <Image src="/Work/icon1.png" width={50} height={50} alt="icon" />
                </div>
                <h5>No More Risk of Default</h5>
                <p>
                  Even if a member fails to pay, your money is safe with our
                  insurance-backed protection.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <div className="text-primary mb-2">
                 <Image src="/Work/icon2.png" width={50} height={50} alt="icon" />
                </div>
                <h5>No More Cash Hassles</h5>
                <p>Everything is managed online, ensuring complete security.</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <div className="text-primary mb-2">
                  <Image src="/Work/icon3.png" width={50} height={50} alt="icon" />

                </div>
                <h5>No More Fraud</h5>
                <p>
                  Verified users, automated tracking, and secure digital
                  transactions eliminate risks.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-3 fw-bold">
            ✨ Save with Confidence – Your money is always protected!
          </p>
        </div>
      </section>
    </>
  );
};

export default Work;
