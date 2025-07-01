"use client";

import React from "react";

const FaqSection = () => {
  return (
    <section id="faqs" className="faqs">
      <div className="container my-5 py-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 mb-4">
            <span className="bg-Pur text-secondary px-3 py-2 rounded-5 d-inline-block bg-Text mb-1">
              FAQ 🔥{" "}
            </span>
            <h2 className="fw-bold mt-2">Frequently Asked Questions</h2>
            <p className="small text-muted mt-2 mb-5">
              There are many variations of passages Lorem Ipsum available,
              majority have suffered alteration in some form, by injected
              humour,randomised words which do not look even slightly
            </p>
          </div>

          <div className="col-12">
            <div className="accordion" id="faqAccordion">
              {/* FAQ 1 */}
              <div className="accordion-item bg-light mb-3">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    What Happens If A Member Defaults?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-start">
                    Your payout is covered by our insurance — you will still
                    receive your full amount even if a member defaults.
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="accordion-item bg-light mb-3">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How Do I Know My Money Is Safe?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-start">
                    We use end-to-end encryption, secure payment gateways, and
                    keep full transparency so your funds are always protected.
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="accordion-item bg-light mb-3">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Are Transactions Legally Protected?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse text-start"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes! All transactions are governed by a legal agreement, and
                    we provide proper documentation for your protection.
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="accordion-item bg-light mb-3">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Can I Track My Contributions And Payouts?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body  text-start">
                    Absolutely! Our dashboard lets you track every contribution
                    and payout in real-time.
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

export default FaqSection;
