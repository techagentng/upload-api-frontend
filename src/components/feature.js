import "../css/feature.css";
import FeatureIcon from "../pages/landing-page/icon/featureIcon";
import FeatureIcon2 from "../pages/landing-page/icon/featureicon2";
import FeatureIcon3 from "../pages/landing-page/icon/featureicon3";
import Arrow from "./arrow";
import oshape from "../img/oshape.svg";
import circle from "../img/half-circle.svg";
import shape2 from "../img/shape-2.svg";
import bake1 from "../img/half-bake.svg";

const Feature = ({ handleClick }) => (
  <div className="feature-container">
    <img
      style={{ position: "absolute", marginLeft: "27%", marginTop: "5%" }}
      src={shape2}
      alt="svg"
    />
    <img
      style={{ position: "absolute", marginLeft: "27%", marginTop: "30%" }}
      src={bake1}
      alt="svg"
    />

    <img
      style={{ position: "absolute", marginLeft: "64%", marginTop: "5%" }}
      src={circle}
      alt="svg"
    />

    <div className="feature">
      <div className="feature-body-1">
        <div className="feature-title">
          <p className=" font">
            Your safety and earnings <br className="h2" /> is our obsessive passion
          </p>
        </div>
        <div className="feature-detail">
          Our platform is secure enough to let you focus on raking in
          <br className="h2" /> revenues
        </div>
        <div onClick={handleClick} className="f-btn feature-button web">
          <button className=" trans feature-btn">
            Join the Waitlist {<Arrow />}
          </button>
        </div>
      </div>
      <div className="feature-shape">
        <div className="feature-body-2">
          <div className="feature-transaction-container feature-transaction-fee">
            <div className="trans-icon1">
              <FeatureIcon />
            </div>
            <div
              className="feature-p trans-detail"
              style={{ color: "#494B83" }}
            >
              Transaction Fees Earnings
            </div>
          </div>
          <div className="feature-transaction-container feature-transaction-ads">
            <div className="trans-icon1">
              <FeatureIcon2 />
            </div>
            <div className="trans-detail">
              <p className="feature-p" style={{ color: "#494B83" }}>
                Security & Privacy
              </p>
            </div>
          </div>
        </div>

        <div className="feature-body-3">
          <div className="feature-transaction-container feature-transaction-utility">
            <div className="trans-icon1">
              <FeatureIcon3 />
            </div>
            <div
              className="feature-p utility-detail"
              style={{ color: "#494B83" }}
            >
              Bill and Utility Transactions
            </div>
          </div>
        </div>
      </div>

      <img style={{ marginBottom: "-500px" }} src={oshape} alt="svg" />

      <div onClick={handleClick} className="mobile-btn feature-button web">
        <button className="trans feature-btn">
          Join the Waitlist{<Arrow />}
        </button>
      </div>
      <img
        style={{ position: "absolute", marginLeft: "105px", marginTop: "35%" }}
        src={circle}
        alt="svg"
      />
    </div>
  </div>
);

export default Feature;
