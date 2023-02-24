import React from "react";
import heroImg from "../assets/hero.svg";
import ProductLogo from "../assets/productLogo1.png";
import Qoutes from "../assets/quotes.png";

function LandingPage() {
  return (
    <section className="landingPage display__Flex alignCenter">
      <article className="container display__Flex alignCenter justifyCenter">
        <figure className="flex30">
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
          <figure>
            <img
              style={{
                marginLeft: "2.5rem",
                marginBottom: "-1rem",
                width: "5rem",
              }}
              src={Qoutes}
              alt=""
            />
          </figure>
          <figure>
            <img
              style={{ width: "10%" }}
              src={ProductLogo}
              alt="Product Logo"
            />
          </figure>
          <div className="display__Flex">
            <h2 className="heading heading1">DriveDock</h2>{" "}
            <p style={{ fontWeight: 700 }}>Groups</p>
          </div>
          <h1 className="heading">Presentig Ourseleves</h1>
          <p className="landingContent">
            Education in a practicel way we always wanted
          </p>
          <p className="landingContent">
            We're going to be going live on this website soon, so mark your
            calendars and get ready to join us for an unforgettable online
            experience!
          </p>
          <small style={{ color: "gray" }}>cc @ Drivedock groups 2023</small>
        </div>
      </article>
    </section>
  );
}

export default LandingPage;
