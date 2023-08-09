import Icon1 from "../pages/landing-page/icon/icon1";
import Icon2 from "../pages/landing-page/icon/icon2";
import Icon3 from "../pages/landing-page/icon/icon3";
import "../css/card.css";
import vector from "../assets(png)/group-29-1@1x.png";
import bake from "../img/half-baked.svg";
import circle from "../img/half-circle.svg";

export default function Card() {
  return (
    <div className="section2">
      <img style={{ marginLeft: "3%" }} src={bake} alt="svg" />
      <div className="section2-text-section">
        <h2>
          Request cash, pay bills <br className="h2" /> - all in one place
        </h2>
        <p>
          {/* Zojapay allow users conveniently request for cash to be{" "}
          <br className="h2" />
          delivered to their location as well as sorting out their bills. */}
        </p>
        <br />
      </div>
      <div className="section2-cards">
        <div className="section2-card card1">
          <Icon1 />
          <img
            className="img"
            style={{
              position: "absolute",
              marginTop: "2px",
            }}
            src={vector}
            alt="vector"
          />
          <h4>Request Cash</h4>
          <p style={{ color: "#5E6366;" }}>Get cash delivered to you in minutes!</p>
        </div>

        <div className="section2-card card2">
          <Icon2 />
          <img
            className="img"
            style={{
              position: "absolute",
              marginTop: "2px",
            }}
            src={vector}
            alt="vector"
          />
          <h4>Cash Request To Loved Ones</h4>
          <p>
            anyone, anywhere can get cash from your profile!
          </p>
        </div>
        <div className="section2-card card3">
          <Icon3 />
          <img
            className="img"
            style={{
              position: "absolute",
              marginLeft: "0px",
              marginTop: "2px",
            }}
            src={vector}
            alt="vector"
          />
          <h4>Bills Payment</h4>
          <p>
          Settle bills and utility across billing agents in Nigeria
          </p>
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          marginLeft: "25%",
          marginTop: "1%",
          marginBottom: "-21px",
        }}
        src={circle}
        alt="svg"
      />
    </div>
  );
}
