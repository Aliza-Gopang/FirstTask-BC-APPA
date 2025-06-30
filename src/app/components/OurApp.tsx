import React from "react";
import Image from "next/image";

const OurApp: React.FC = () => {
  return (
    <section className="container-fluid bg-app">
      <div className="row">
        <div className="col-12 text-center py-5 mt-5">
          <span className="bg-Pur text-secondary px-3 py-2 rounded-5 d-inline-block bg-Text mb-1">
            Our App 🔥
          </span>
          <h2 className="fw-bold mb-4 text-white">
            Join BC Appa Today – Where Your Money Is Always Protected!
          </h2>
          <Image
            src="/OurApp/Frame.png"
            alt="How It Works"
            width={1600}
            height={600}
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default OurApp;
