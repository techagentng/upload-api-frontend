import "./privacy.css";
import { useRef } from "react";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import { useState } from "react";
import Modal from "../../components/modal";
import PrivacySideBar from "./privacy-sidbar";

export default function TermsAndCondition(props) {
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
        
        <div className="terms-contents">
          <section className="term-sidebar">
              <PrivacySideBar />
          </section>

          <section>
              <div className="terms-content">
              <h1>Privacy Policy</h1>
              <div>
                  
                  <p>At RoutePay, the privacy of our Data suggests that personal data is of utmost importance to us. In line with our resolution, we have developed this Privacy Policy to explain your privacy rights regarding our collection, use, sharing and protection of your Personal Data when you visit our website, premises or use any of our digital platforms. This Privacy policy and its Addendum(s)(“Privacy Policy”) describe how RoutePay operates for cash in transit services and their affiliates (collectively “RoutePay”, “we”, “us” or “our”) collect, use, process and disclose your Personal Data through the use of RoutePay’s Apps and Websites (including all mobile applications and websites operated by RoutePay (respectively “Platform”), products, features, and other services globally (collectively, “Services”).</p>
                  <p>This Policy applies to our customers, passengers, agents, vendors, suppliers, partners (such as merchant partners), contractors and service providers who has full legal capacity (collectively “you”, “your” or “yours”) to give consent to this Policy.Your consent means any freely given, specific, informed and unambiguous indication of your wishes by which you signify agreement to the processing of Personal Data relating to you which might be used for marketing purposes and offering our diverse services, through ticking the “Read and Agree” box of this Policy and clicking the “Agree” button on RoutePay Apps or Websites.</p>
                  <h5>Our Privacy Policies:</h5>
                  <li>RoutePay collects the following data exclusively to be able to provide the Service: name, surname, email address, mobile phone number, Bank Verification Number and transaction details on the app as provided by you. RoutePay might also collect your mobile phone number directly from your device if possible. RoutePay uses the data to deliver the Service and maintain a customer relationship, including processing refund claims.</li>
                  <li>RoutePay uses Analytics to collect statistics on users’ interaction with the Service to improve the Service and related in-app functionality.</li>
                  <li>The Service may create aggregate usage reports for advertisers and partners. This allows our advertisers to advertise more effectively and allows our users to receive advertisements that are relevant to their needs. RoutePay never shares individual personal information with anyone, so an advertiser will never know that a specific user clicked on that advertiser’s advertisement.</li>
                  <li>RoutePay uses the above-described information to tailor the Service to suit user needs and help our advertisers better understand our audience demographics. We do not share information about individual users with any third party.</li>
                  <li>RoutePay reserves the right to disclose any information we have as required by law and when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, court order, or legal process.</li>
                  <li>In the event that you use the Service to purchase Products from third party Merchants as further described in the terms of service, the collection of data by such third-party Merchant is described in the relevant privacy policy of such Merchant. </li>
                  <li>RoutePay will inform of any changes or updates to this Privacy Policy, through its website or in-app notifications. To learn more about the measures implemented by RoutePay to protect your personal information, or if you have any inquiries on the processing of your data, you may contact us at https://RoutePay.com.</li>
                  <li>By using any part of the Service, you acknowledge and agree to the processing of your personal data, under the terms and conditions set out in this Privacy Policy.</li>
                
              </div>
              </div>
          </section>
        </div>
        <Footer faq={faq} feature={feature} />
      </div>
    </div>
  );
}
