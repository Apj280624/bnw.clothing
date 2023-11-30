import React, { useState, useEffect } from "react";
import "./css/vars.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Temp from "./css/temp.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

/* home page uses temp.module.css not home.css */

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top after render

    AOS.init({
      offset: 400,
      duration: 800,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className={Temp.topDiv}>
        <p className={`${Temp.topText} ${Temp.commonText}`}>
          "Clothes mean nothing until someone lives in them."{" "}
          <span className={Temp.quoteText}>- Marc Jacobs</span>
        </p>
        {/* <img src="" /> */}
      </div>

      <div className="container-fluid">
        <div className={Temp.commonDiv}>
          <div className="row">
            <div className="col-lg-6">
              <div className={Temp.marginDiv}>
                <div
                  data-aos="flip-up"
                  className={`${Temp.cardDiv} ${Temp.leftDiv}`}
                >
                  <p className={`${Temp.cardText} ${Temp.commonText}`}>
                    We've got the rarest collection of black and white clothing
                    on the planet.{" "}
                  </p>
                </div>
              </div>

              <div
                data-aos="flip-up"
                className={`${Temp.cardDiv} ${Temp.rightDiv}`}
              >
                <p className={`${Temp.cardText} ${Temp.commonText}`}>
                  Just Sign Up and start shopping. 20% off store wide for new
                  customers till December
                </p>
                <div className={Temp.visitDiv}>
                  <Link
                    to="#"
                    className={`${Temp.cardText} ${Temp.commonText} ${Temp.visitText}`}
                  >
                    Sign Up <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                data-aos="flip-up"
                className={`${Temp.cardDiv} ${Temp.leftDiv}`}
              >
                <p className={`${Temp.cardText} ${Temp.commonText}`}>
                  Shopping with us means saving the planet! We donate 10% of our
                  profit towards saving the planet from garbage.
                </p>
              </div>

              <div
                data-aos="flip-up"
                className={`${Temp.cardDiv} ${Temp.rightDiv}`}
              >
                <p className={`${Temp.cardText} ${Temp.commonText}`}>
                  Try our AI fashion designer to know what looks elegant on you
                </p>
                <div className={Temp.visitDiv}>
                  <Link
                    to="#"
                    className={`${Temp.cardText} ${Temp.commonText} ${Temp.visitText}`}
                  >
                    Try <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
