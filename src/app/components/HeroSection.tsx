import Image from "next/image";
import JoinButton from "./JoinButton";


const HeroSection: React.FC = () => {
  return (
    <section
      id="HeroSection"
      className="rounded-bottom-5 pt-5"
      style={{
        background:
          "linear-gradient(to right, rgb(237, 244, 250), #ffffff, rgb(244, 238, 248))",
      }}
    >
      <div className="container-fluid">
        {/* ✅ Dark-star Image Below Navbar */}
        <div className="text-start ms-3">
          <Image
            src="/HeroSection/Dark-star.png"
            alt="Dark Star"
            width={40}
            height={40}
            className="img-fluid mt-5 rotate-spin"
          />
        </div>

        <div className="row align-items-center ">
          {/* ✅ Image Column */}
          <div className="col-12 col-md-6 col-lg-6 text-center mb-4 mt-2 order-1 order-lg-2 float-image">
            <Image
              src="/HeroSection/mobile.png"
              alt="App screen"
              width={500}
              height={400}
              className="img-fluid"
            />
          </div>

          {/* ✅ Text Column */}
          <div className="col-12 col-md-6 col-lg-6 text-start px-lg-5 order-2 order-lg-1">
            <div className="mb-3">
              <span className="bg-Pur text-secondary px-2 p-1 rounded-5 d-inline-block bg-Text mb-1">
                <span className="bg-white text-black p-1 me-1 rounded-pill fw-bold d-inline-block small">
                  BC APPA
                </span>
                <span className="small bg-Text">Connect & Save 🔥</span>
              </span>
            </div>
            <h1 className="display-5 fw-bold mb-4">
              Guaranteed Safety
              <br />
              For Your Savings
            </h1>
            <p className="mb-0">
              Join a trusted platform where every Rupee you save is fully
              protected, even if a member defaults.
            </p>
            <p className="fw-bold mb-4">
              🚀 Save, Contribute & Grow — With Complete Peace of Mind!
            </p>
            <div className="row">
              <div className="col-12">
                <ul className="small list-unstyled d-flex gap-1 text-dark flex-wrap justify-content-start">
                  <li className="small fw-bold">🔹 100% Verified Users</li>
                  <li className="small fw-bold">
                    🔹 Insurance-Backed Security
                  </li>
                  <li className="small fw-bold">
                    🔹 Real-Time Digital Tracking
                  </li>
                </ul>
              </div>
            </div>
            <div className="justify-content-center align-items-center mb-3">
              <JoinButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
