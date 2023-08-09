import "../css/getstarted.css";
import bake from "../img/half-baked.svg";

import Button from "./button";

function GetStarted({ handleClick }) {
  return (
    <div className="get-started">
      <img
        style={{ position: "absolute", marginLeft: "34%", marginTop: "0%" }}
        src={bake}
        alt="svg"
      />
      <h3 className="head" style={{ color: "#323348" }}>
        Perks as a RoutePay Repository Service Officer
      </h3>
      <div className="content">
        <div className="quick-registration">
          <div className="num">
            <p className="p">1</p>
          </div>
          <h6 className="quick-register">Make Extra Income</h6>
          <p className="text">
            Create new stream of income as a working professional by fulfiling
            cash request & earn on the go{" "}
          </p>
          {/* <img className="vector1" src={vectors} /> */}
        </div>

        <div className="quick-registration">
          <div className="num">
            <p className="p">2</p>
          </div>
          <h6 className="quick-register">Increased Customer Base</h6>

          <p className="text">
            As an existing POS agent, using RoutePay helps you get wider reach &
            increased customer base to fulfil cash requests for.{" "}
          </p>
        </div>

        <div className="quick-registration">
          {/* <img className="vector" src={vectors} /> */}
          <div className="num">
            <p className="p">3</p>
          </div>
          <h6 className="quick-register">
            Get Branded & Access to Business Loans
          </h6>
          <p className="text">
            As an active or early cash service officer, you stand the chance to
            get access to RoutePay branding & Business Suport loans
          </p>
        </div>
      </div>
      <div onClick={handleClick} className="feature-btn">
        <Button content="Join the Waitlist" />
      </div>
    </div>
  );
}

export default GetStarted;
