import "./landing.css";
import { useRef, useState, useContext, useEffect } from "react";
import Feature from "../../components/feature";
import GetStarted from "../../components/GetStarted";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Nav from "../../components/nav";
import Hero from "../../components/hero";
import mobileGroup from "../../img/accordion/Image_eexubx.png";
import playstore from "../../img/accordion/playimg.png";
import Accord from "./accord/accord";
import circle from "../../img/half-circle.svg";
import shape2 from "../../img/shape-2.svg";
import bake1 from "../../img/half-bake.svg";
import Modal from "../../components/modal";
import ModalTailwind from "../../components/tailwindModal";
import CookiePop from "../../components/cookie-pop";
import AuthContext from "../../Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Landing({faq}) {
  const { token } = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [hidden, setHidden] = useState({
    display: "none",
  });
  function handleActive() {
    if (!token) {
      navigate("/login");
    }
    if (!isActive) {
      setIsActive((c) => (c = true));
      setHidden((c) => (c = { display: "block" }));
      console.log("here " + isActive);
    } else {
      setIsActive((c) => (c = false));
      setHidden((c) => (c = { display: "none" }));
      console.log("here " + isActive);
    }
  }
 
  const feature = useRef(null);

    // This will refresh the page after 1 second
      // window.location.reload();

  return (
    <div className="landing-container">
   
      {/* <InfoSucess /> */}
      <div style={hidden}>
        <Modal setIsOpen={handleActive} />
      </div>
      <div className="landing-content">
        <Nav faq={faq} feature={feature} handleActive={handleActive} />

        <Hero handleClick={handleActive} />

        {/* <div class="pagedown" onClick={scrollToBottom}>
          <img src={downAngle} alt="" />
        </div> */}

        <section ref={feature}>
          <Card />
        </section>

        <section className="contents">
          <GetStarted handleClick={handleActive} />
        </section>
        <section className="feature-section">
          <Feature handleClick={handleActive} />
        </section>
        <section class="help" ref={faq}>
          <div class="help__head">
            <p>Frequently Asked Question?</p>
            <h2>We Can Help!</h2>
          </div>
          <img
            style={{
              position: "absolute",
              marginLeft: "40%",
              marginTop: "-43px",
            }}
            src={shape2}
            alt="svg"
          />

          <img
            style={{ position: "absolute", marginLeft: "64%", marginTop: "0%" }}
            src={circle}
            alt="svg"
          />

          <div class="accordCont">
            {/* <div class="pageup" onClick={scrollToTop}>
              <img src={upAngle} alt="" />
            </div> */}
            <div class="accordion__child">
              <Accord
                title="What is RoutePay?"
                content=" RoutePay helps make cash request delivery seamless by connecting you in real-time with a cash provider. With
                RoutePay, you can get cash delivered to friends and colleagues"
              />
              <Accord
                title="What do I need to open account with 
                RoutePay?"
                content="To open a RoutePay account, all you need is your valid BVN & phone number"
              />
              <Accord
                title="How does RoutePay work?"
                content="RoutePay simplify access to cash by connecting users with mobile money agents."
              />
            </div>
            <div class="accordion__child">
              <Accord
                title="Can I make money on RoutePay?"
                content="Yes, you can. All you need to do is join the waitlist so you can be signed up as a Mobile Money Agent on RoutePay."
              />
              <Accord
                title="Is the app available for download?"
                content="Not yet! The app is currently in a beta testing phase."
              />
              <Accord
                title="What other services does RoutePay offer?"
                content="RoutePay will also provide additional services like cash request , bills payment e.g utility bills, buy airtime, data bundle and cable TV."
              />
            </div>
            <img
              style={{
                position: "absolute",
                marginLeft: "12%",
                marginTop: "13%",
              }}
              src={bake1}
              alt="svg"
            />
          </div>
          <div class="make"></div>
        </section>
        <section class="app">
          <div class="mobCont">
            <div class="mobc l">
              <h2>RoutePay app Coming Soon !</h2>
              <img src={playstore} alt="" />
            </div>
            <div class="mobc c2">
              <img src={mobileGroup} alt="group-mobile-icons" />
            </div>
          </div>
        </section>
        <CookiePop/>
        <Footer faq={faq} feature={feature} />
      </div>
    </div>
  );
}

// const cardSection = {
//   icon: Card,
//   heading,
//   content,
// }

/* <section className="app">
          <div class="app__wrapper">
            <img class="app__wrapper_lines" src={lines} alt="lines" />
            <div class="app__play">
              <h2>Zojapay Coming Soon !</h2>
              <img src={playstore} alt="mobile_download_icon" />
              <img class="app__wrapper_linesDex" src={lines} alt="lines" />
            </div>
            <div class="app__img">
              <img src={mobileGroup} alt="group-mobile-icons" />
            </div>
          </div>
        </section> */
