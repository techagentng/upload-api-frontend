import "../terms-and-condition/terms-and-condition.css";
import { useRef } from "react";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import { useState } from "react";
import Modal from "../../components/modal";
import CookiesSideBar from "./cookies-sidebar";

export default function Cookies(props) {
  const [isActive, setIsActive] = useState(false);
  const [hidden, setHidden] = useState({
    display: "none",
  });
  function handleActive() {
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

  const faq = useRef(null);

  const feature = useRef(null);

  return (
    <div className="terms-container">
      <div style={hidden}>
        <Modal setIsOpen={handleActive} />
      </div>
        <div className="terms-nav">
        <Nav faq={faq} feature={feature} handleActive={handleActive} />
        </div>
        <div className="terms-contents">
          <section className="term-sidebar">
              <CookiesSideBar />
          </section>

          <section>
              <div className="terms-content">
                <h1>Cookies Policy</h1>
                <div className="cookies">
                  <p>This Cookie Policy explains how RoutePay, is using cookies and similar technologies when You visit our website located at <a href="https://RoutePay.com">RoutePay</a> </p>
                  <h5>WHAT IS A COOKIE POLICY?</h5>
                  <p>
                    <li>A cookie is a small text file that a website saves on Your computer or mobile device when You visit the site. It enables the website to remember Your actions and preferences (such as login, language, font size and other preferences) over a period of time, so that You do not have to keep re-entering them whenever You come back to the site or browse from one page to another. Although cookies do identify a user's device, cookies do not personally identify users.</li>
                    <li>Additionally, mobile devices may use other tracking files which are similar to cookies (for example iOS devices use Apple’s ‘identifier for advertisers’ (IDFA) and Android devices use Google’s Android ID). In the context of tracking within an App, the concept of a cookie will include an IDFA and an Android ID for the purpose of this Cookie Policy.</li>
                  </p>

                  <h5>WHY WE USE COOKIES</h5>
                  <p>Our website and App use cookies to distinguish you from other users. This helps us to improve our website and App and to provide you with a good experience when you browse our website or use our App.</p>
                  
                  <h5>WHAT TYPES OF COOKIES DO WE USE?</h5>
                  <li>Essential cookies <br />
                    These are cookies which are strictly necessary for our website to be able to operate or to provide You with a service on our website which You have requested. Without these cookies You would not be able to use our website's features.
                  </li>
                  <li>Functionality cookies <br />
                  These cookies allow the website to remember choices You make (such as Your user name, language, the region You are in, when you return to a website or App) and provide enhanced, more personal features.                    
                  </li>
                  <li>Performance cookies <br />
                  These cookies collect information about how visitors use our website, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies do not collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how our website works. To place these cookies, we use Google Analytics and hotjar. Please note that these are third party cookies.
                  </li>
                  <li>Targeting cookies <br />
                  These cookies record your visit to a website or App, including the individual pages visited and the links followed.
                  </li>
                  <li>Advertising cookies <br />
                  Our website does not place any third-party advertisements via cookies. We rely only on such advertising cookies, which allow us to place our advertisements on third-party websites, which You visit after visiting our website.
                  </li>
                  
                  <p>Generally, the essential cookies and some performance and functionality cookies only last for the duration of your visit to a website or expire when you close an App: these are known as 'session cookies'. The functionality cookies and some targeting and performance cookies will last for a longer period of time: these are known as 'persistent cookies'.</p>
                  <p>Most websites, mobile devices and apps automatically accept cookies but, if you prefer, you can change your browser, device or app settings to prevent that or to notify you each time a cookie is set. To block the IDFA on your iOS mobile device, you should follow this path: Settings &gt; General &gt; About &gt; Advertising and then turn on 'Limit Ad Tracking'. To block Android ID on your Android device, you should follow this path: Google Settings &gt; Ads and then turn on 'Opt out of interest-based ads'.</p>

                  <h5>CONTACT US</h5>
                  <p>If You have any questions or comments regarding our Cookie Policy, please contact us at info@RoutePay.com </p>
                
                </div>
              </div>
          </section>
        </div>
        <Footer faq={faq} feature={feature} />
    </div>
  );
}
