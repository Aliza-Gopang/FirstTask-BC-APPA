import React from "react";
import Image from "next/image";

const FooterSection: React.FC = () => {
  return (
    <footer className="container-fluid bg-light p-5 mt-5 ">
      <div className="row justify-content-center align-items-start">
        {/* Left Section - BC APPA */}
        <div className="col-md-4 text-center text-md-start">
          <Image
            src="/logo/BC Appa.png"
            alt="App Store"
            width={100}
            height={50}
            className="img-fluid "
          />
          <p className="text-muted py-4">
            It is a long established fact that from will be distracted by the
            readable from when looking.
          </p>
          <div>
            <a href="#" className="btn">
              <Image
                src="/FooterSection/Appstore.png"
                alt="App Store"
                width={120}
                height={40}
                className="img-fluid"
              />
            </a>
            <a href="#" className="btn">
              <Image
                src="/FooterSection/Playstore.png"
                alt="Play Store"
                width={120}
                height={40}
                className="img-fluid"
              />
            </a>
          </div>
        </div>

        {/* Middle Section - Pages */}
        <div className="col-md-4 text-center">
          <h5 className="mb-3">Pages</h5>
          <hr className="bg-primary border-2 border-top border-primary w-25 mx-auto mb-4" />
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-muted text-decoration-none">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted text-decoration-none">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted text-decoration-none">
                Integrations
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted text-decoration-none">
                Features
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted text-decoration-none">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted text-decoration-none">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Address */}
        <div className="col-md-4 text-center text-md-start">
          <p className="text-primary">Address</p>
          <div>
            <h4>Ready To Get Started?</h4>
            <p className="text-muted mb-2">
              It is a long established fact that a reader will be distracted
              layout.
            </p>
            <p className="text-primary mb-2">
              <Image
                src="/FooterSection/Email.png"
                alt="Play Store"
                width={15}
                height={20}
                className="img-fluid me-2"
              />
              <a
                href="mailto:info@bcappa.com"
                className="text-muted text-decoration-none"
              >
                info@bcappa.com
              </a>
            </p>
            <p className="text-primary">
              <Image
                src="/FooterSection/Phone.png"
                alt="Play Store"
                width={15}
                height={20}
                className="img-fluid me-2"
              />
              <a
                href="tel:+8801236547890"
                className="text-muted text-decoration-none"
              >
                +880 123 654 7890
              </a>
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="row align-items-center text-center text-md-start">
              {/* Left Column */}
              <div className="col-12 col-md-6 mb-2 mb-md-0">
                <p className="small text-muted mb-0">
                  © BC APPA. All Rights Reserved.
                </p>
              </div>

              {/* Right Column */}
              <div className="col-12 col-md-6 text-center text-md-end">
                <div className="small">
                  <a href="#" className="text-muted me-3">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="text-muted me-3">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-muted">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
