import React from "react";
import Image from "next/image";

const BcAppSection = () => {
  return (
    
    <div
      className="container-fluid py-5 text-center"
      style={{
        backgroundColor: "#8670E5",
        borderRadius: "20px",
        padding: "40px 20px",
      }}
    >
      <div className="row">
        <div className="col-lg-6 mb-4 p-lg-5">
          <div className="text-lg-start ">
            <span className="bg-Pur text-secondary px-3 py-2 rounded-5 d-inline-block bg-Text mb-1">
              Our App 🔥
            </span>
          </div>

          <h2 className="text-lg-start text-white fw-bold mt-2 ">
            Join BC Appa Today – Where Your Money Is Always Protected!
          </h2>
          <p className="small text-white mt-3 text-lg-start">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised
          </p>
          <div className="col-12 d-flex justify-content-center justify-content-lg-start">
            <a href="#" className="btn  me-lg-3">
              <Image
                src="/BcApp/Google.png"
                alt="Google Play"
                width={120}
                height={40}
              />
            </a>
            <a href="#" className="btn">
              <Image
                src="/BcApp/Playstore.png"
                alt="App Store"
                width={120}
                height={40}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-6 mb-4 ">
          <Image
            src="/BcApp/Mob.png" // Replace with your phone image path
            alt="Mobile Apps"
            width={400}
            height={200}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default BcAppSection;
