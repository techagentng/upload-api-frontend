import Button from "./button";
import "../css/hero.css";
import female from "../img/female.png";
import topLeft from "../img/top-left.svg";
import eliment from "../img/eliment.svg";
import arrDown from "../img/arrDown.svg";
import oshape from "../img/oshape.svg";
import baked from "../img/baked.svg";
import bluebox from "../img/bluebox.svg"

export default function Hero({ handleClick }) {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="hero-info">
          Document Management System<br className="h2" />
        </p>
        <p className="hero-join-text">
          This tool will enable routpay staff to upload <br className="h2" />
          and retrieve all kinds of document.{" "}
        </p>
        <div onClick={handleClick} className="feature-btn">
          <Button content="Join the Waitlist" />
        </div>
      </div>
      <div className="hero-img">
        <img className="female" src={female} alt="female" />
        <img className="curl" src={topLeft} alt="top-left" />
        <img className="eliment" src={eliment} alt="eliment" />
        <img className="arrDown" src={arrDown} alt="eliment" />
        <img className="oshape" src={oshape} alt="oshape" />
        <img className="baked" src={baked} alt="baked" />
        {/* <img className="bluebox" src={bluebox} alt="bluebox" /> */}
      </div>
    </div>
  );
}

/* <img className="flower" src={flower} height={54.46} width={47.36} />
        <img className="arrow" src={arrow} height={54.46} width={47.36} /> */
