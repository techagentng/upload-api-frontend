import Logo from "./logo";
import "../css/footer.css";
import facebook from "../assets(png)/icon-social-facebook-white@2x.png";
import twitter from "../assets(png)/icon-social-twitter-white@2x.png";
import insta from "../assets(png)/insta.png";
import { Link } from "react-router-dom";

export default function Footer({ faq, feature }) {
  let newYr = new Date().getFullYear();

  const scrollDown = () => {
    window.scrollTo({
      top: faq.current.offsetTop,
      behavior: "smooth",
    });
  };
  // const scrollDownToFeature = () => {
  //   window.scrollTo({
  //     top: feature.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };
  // const scrollDownToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <footer className="landing-footer">
      <div className="footer-header">
        <Logo />
        <p className="footer-info">
          RoutePay is a peer-2-peer financial inclusion application that <br className="h2" /> simplifies payment by making access to cash easy for the retail <br className="h2" /> market.
        </p>
        <p className="footer-web footer-year">
          &copy;{newYr} RoutePay, All Rights Reserved
        </p>
      </div>
      <div className="landing-footer-info">
        <div>
          <p className="footer-title">Product Features</p>
          <ul>
            <li>
              <a className='footer-links' href="#cash"> Cash Request</a>
            </li>
            <li>
              <a className='footer-links' href="#transfer">Transfer Cash</a>
            </li>
            <li>
              <a className='footer-links' href="#utility">Utility Payment</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Company</p>
          <ul>
            <li>
              <Link to="/terms-and-condition">Terms & Conditions</Link>            
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>              
            </li>
            <li>
              <a className='footer-links' href="#faq" onClick={scrollDown}>
                {" "}
                FAQS
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Support</p>
          <ul>
            <li>Gbagada Lagos</li>
            <li>
              <a className='footer-links' href="mailto:support@routepay.com">support@routepay.com</a>
            </li>
            <li>
              <span className="followUs">Follow us</span>
              <span>
                <a href="https://m.facebook.com/routepay/">
                  <img
                    className="facebook-img"
                    style={{ marginLeft: "20.53px" }}
                    width="7.47px"
                    height="14px"
                    src={facebook}
                    alt="facebook"
                  />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/routepay?s=21">
                  <img
                    style={{ marginRight: "20.53px", marginLeft: "20.53px" }}
                    width="13px"
                    height="11px"
                    src={twitter}
                    alt="twitter"
                  />
                </a>
              </span>
              <span>
                <a href="https://instagram.com/routepay">
                  <img width="14px" height="14px" src={insta} alt="insta" />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-mobile footer-year">
        &copy;{newYr} Routepay, All Rights Reserved.
      </p>
    </footer>
  );
}
