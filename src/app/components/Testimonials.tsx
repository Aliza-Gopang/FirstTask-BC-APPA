import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div
      className="container-fluid my-5 py-5"
      style={{
        background:
          "linear-gradient(to right, rgb(237, 244, 250), #ffffff, rgb(244, 238, 248))",
      }}
    >
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-12 mb-4">
          <span className="bg-Pur text-secondary px-3 py-2 rounded-5 d-inline-block bg-Text mb-1">
            Testimonial 🔥
          </span>
          <h2 className="fw-bold mt-2">What Our Clients Say?</h2>
        </div>
        <div className="col-12">
          <div className="row g-2">
            {/* Card 1 */}
            <div className="col-md-4">
              <div
                className="bg-light rounded-4 p-3 shadow-sm"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <div className="d-flex align-items-center mb-2">
                  <Image
                    src="/Testimonials/Zara.png"
                    alt="Zara Noor"
                    width={50}
                    height={50}
                    className="rounded-2 me-3"
                  />
                  <div>
                    <h6 className="mb-0">Zara Noor</h6>
                    <small className="text-muted">Team Leader</small>
                  </div>
                </div>
                <div className="text-start me-2">
                  <span className="text-warning">★★★★★</span>
                </div>
                <div className="d-flex align-items-center">
                  <p className="small text-start mb-0">
                    I never have to worry about losing money again! Even when a
                    member defaulted, my payout was fully covered.
                  </p>
                </div>
                <div className="text-end">
                  <span>
                    <Image
                      src="/Testimonials/commaicon.png"
                      alt="Quote Icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div
                className="bg-light rounded-4 p-3 shadow-sm"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <div className="d-flex align-items-center mb-2">
                  <Image
                    src="/Testimonials/Abdullah.png"
                    alt="Abdullah Malik"
                    width={50}
                    height={50}
                    className="rounded-2 me-3"
                  />
                  <div>
                    <h6 className="mb-0">Abdullah Malik</h6>
                    <small className="text-muted">Team Leader</small>
                  </div>
                </div>
                <div className="text-start me-2">
                  <span className="text-warning">★★★★★</span>
                </div>
                <div className="d-flex align-items-center">
                  <p className="small text-start mb-0">
                    I never have to worry about losing money again! Even when a
                    member defaulted, my payout was fully covered.
                  </p>
                </div>
                <div className="text-end">
                  <span>
                    <Image
                      src="/Testimonials/commaicon.png"
                      alt="Quote Icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div
                className="bg-light rounded-4 p-3 shadow-sm"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <div className="d-flex align-items-center mb-2">
                  <Image
                    src="/Testimonials/Hira Khan.png"
                    alt="Hira Khan"
                    width={50}
                    height={50}
                    className="rounded-2 me-3"
                  />
                  <div>
                    <h6 className="mb-0">Hira Khan</h6>
                    <small className="text-muted">Team Leader</small>
                  </div>
                </div>
                <div className="text-start me-2">
                  <span className="text-warning">★★★★★</span>
                </div>
                <div className="d-flex align-items-center">
                  <p className="small text-start mb-0">
                    I never have to worry about losing money again! Even when a
                    member defaulted, my payout was fully covered.
                  </p>
                </div>
                <div className="text-end">
                  <span>
                    <Image
                      src="/Testimonials/commaicon.png"
                      alt="Quote Icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center mt-5">
          <button className="btn btn-purple rounded-pill px-4 py-2">
             Join a Secure BC Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
