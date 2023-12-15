import "../terms-and-condition/terms-and-condition.css";
import { useRef } from "react";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import { useState } from "react";
import Modal from "../../components/modal";
import CookiesSideBar from "./cookies-sidebar";
import { Link } from "react-router-dom";

export default function QuickLinks(props) {
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

          <section className="mb-44">
              <div className="terms-content">
                <h1>Quick links</h1>
                <div className="cookies w-[400px]">
                  <p><a href="https://portal.routepay.com/">Merchant portal PRODUCTION</a></p>
                  <p><Link to="https://portalqa.routepay.com/">Merchant portal QA</Link></p>
                  <p><Link to="https://portalqa.routepay.com/">Merchant portal DEV</Link></p>
                  <p><Link to="https://bills.fastrouteng.com/">fastroute PRODUCTION</Link></p>
                  <p><Link to="https://bills.fastrouteng.com/">fastroute DEV</Link></p>
                  <p><Link to="https://bills.fastrouteng.com/">fastroute QA</Link></p>
                  <p><Link to="https://bills.fastrouteng.com/">fastroute DEV</Link></p>
                  <p><Link to="https://dev.azure.com/">Azure cloud for development</Link></p>  
                  <p><Link to="https://routepay.atlassian.net/wiki/home">Confluence on Jira</Link></p>
                  <p><Link to="https://routepay.com">Routepay official website</Link></p>
                  <p><Link to="https://routepay.atlassian.net/wiki/home">Confluence</Link></p>
                </div>
              </div>
          </section>
        </div>
        <Footer faq={faq} feature={feature} />
    </div>
  );
}
