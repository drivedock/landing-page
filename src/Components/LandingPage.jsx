import React from "react";
import heroImg from "../assets/hero.svg";
import ProductLogo from "../assets/productLogo1.png";
import Qoutes from "../assets/quotes.png";

function LandingPage() {
  return (
    <section className="landingPage display__FlexColumn alignCenter">
      <article className="container display__Flex alignCenter justifyCenter">
        <figure className="flex30 image_container">
          <img
            style={{
              width: "100%",
              marginRight: "-2rem",
              display: "block",
            }}
            src={heroImg}
            alt="HeroImg"
          />
        </figure>

        <div className="flex50 LandingRightContent">
         <div className=" logo-container display__flexColumn">
              <img
                style={{ width: "20%" }}
                src={ProductLogo}
                alt="Product Logo"
              />
              <h2 className="company-name">DriveDock Groups</h2>{" "}
         </div>
          <h1 className="heading"> <span className="glass">Presentig</span> Ourseleves</h1>
          <p className="landingContent">
            Education in a practicel way we always wanted!
          </p>
          <p className="landingContent">
            We're going to be going <span className="glass">live</span>on this website soon, so mark your
            calendars and get ready to join us for an unforgettable online
            experience!
          </p>
        </div>
      </article>
      <footer className="footer">
      <small className="footer-glass">&copy; DriveDock Groups @ 2023</small>
      </footer>
    </section>
  );
}

export default LandingPage;
