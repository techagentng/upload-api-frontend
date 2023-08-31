import "./enduser-sidbar";
import "./enduser.css"
import { useRef } from "react";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import { useState } from "react";
import Modal from "../../components/modal";
import EnduserSideBar from "./enduser-sidbar";

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
              <EnduserSideBar />
          </section>

          <section>
              <div className="terms-content">
              <h1 style={{fontSize: "40px"}}>End User License Agreement</h1>
              <div>
            
                  <p>This End-User License Agreement (this “EULA”) is a legal agreement between you and RoutePay Technologies Limited, the author of Routepay including all HTML files, XML files, Java files, graphics files, animation files, data files, technology, development tools, scripts and programs, both in object code and source code (the “Software”), the deliverables provided pursuant to this EULA, which may include associated media, printed materials, and “online” or electronic documentation.</p>
                  <p>By installing, copying, or otherwise using the Software, Licensee agrees to be bound by the terms and conditions set forth in this EULA. If Licensee does not agree to the terms and conditions set forth in this EULA, then Licensee may not download, install, or use the Software.</p>
                  <h5>1. GRANT OF LICENSE</h5>
                  <p>A) Scope of License. Subject to the terms of this EULA, Licensor hereby grants to Licensee a royalty-free, non-exclusive license to possess and to use a copy of the Software.</p>
                  <p>B) Installation and Use. Licensee can NOT make back-up copies of the Software. Licensee may install and use (Check one) an unlimited number of the Software solely for Licensee's (Check one) business and personal use.</p>
                  <h5>2. Description of Rights and Limitations</h5>
                  <p>A) Limitations. Licensee and third parties may not reverse engineer, decompile, or disassemble the Software, except and only to the extent that such activity is expressly permitted by applicable law notwithstanding the limitation. </p>
                  <p>B) Update and Maintenance. Licensor shall provide updates and maintenance on the Software on an as needed basis </p>
                  <p>C) Separation of Components. The Software is licensed as a single product. Its components may not be separated for use on more than one computer.</p>
                  <h5>3. TITLE TO SOFTWARE</h5>
                  <p>Licensor represents and warrants that it has the legal right to enter into and perform its obligations under this EULA, and that use by the Licensee of the Software, in accordance with the terms of this EULA, will not infringe upon the intellectual property rights of any third parties.</p>
                  <h5>4. INTELLECTUAL PROPERTY</h5>
                  <p>All now known or hereafter known tangible and intangible rights, title, interest, copyrights and moral rights in and to the Software, including but not limited to all images, photographs, animations, video, audio, music, text, data, computer code, algorithms, and information, are owned by Licensor. The Software is protected by all applicable copyright laws and international treaties.</p>
                  <h5>5. LICENSOR</h5>
                  <h5>Licensor will provide phone support, available during normal business hours</h5>
                  <h5>Duration</h5>
                  <p>Licensor will provide phone support, available during normal business hours</p>
                  <p>A) Automatically terminated or suspended if Licensee fails to comply with any of the terms and conditions set forth in this EULA; or</p>
                  <p>B) Terminated or suspended by Licensor, with or without cause. In the event this EULA is terminated, you must cease use of the Software and destroy all copies of the Software.</p>
                  <h5>7. JURISDICTION</h5>
                  <p>This EULA shall be deemed to have been made in and shall be construed pursuant to the laws of the federal republic of Nigeria, without regard to conflicts of laws provisions thereof. Any legal action or proceeding relating to this EULA shall be brought exclusively in courts located in Nigeria, and each party consents to the jurisdiction thereof. The prevailing party in any action to enforce this EULA shall be entitled to recover costs and expenses including, without limitation, attorneys’ fees. This EULA is made within the exclusive jurisdiction of the Federal Republic of Nigeria, and its jurisdiction shall supersede any other jurisdiction of either party’s election.</p>
                  <h5>8. NON-TRANSFERABLE</h5>
                  <p>This EULA is not assignable or transferable by Licensee without the prior written consent of Licensor, and any attempt to do so shall be void.</p>
                  <h5>9. SEVERABILITY</h5>
                  <p>No failure to exercise, and no delay in exercising, on the part of either party, any privilege, any power or any rights hereunder will operate as a waiver thereof, nor will any single or partial exercise of any right or power hereunder preclude further exercise of any other right hereunder. If any provision of this EULA shall be adjudged by any court of competent jurisdiction to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that this EULA shall otherwise remain in full force and effect and enforceable.</p>
                  <h5>9. SEVERABILITY</h5>
                  <p>No failure to exercise, and no delay in exercising, on the part of either party, any privilege, any power or any rights hereunder will operate as a waiver thereof, nor will any single or partial exercise of any right or power hereunder preclude further exercise of any other right hereunder. If any provision of this EULA shall be adjudged by any court of competent jurisdiction to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that this EULA shall otherwise remain in full force and effect and enforceable.</p>
                  <h5>10. WARRANTY DISCLAIMER</h5>
                  <p>licensor, AND AUTHOR OF THE SOFTWARE, HEREBY EXPRESSLY DISCLAIM ANY WARRANTY FOR THE SOFTWARE. THE SOFTWARE AND ANY RELATED DOCUMENTATION IS PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. LICENSEE ACCEPTS ANY AND ALL RISK ARISING OUT OF USE OR PERFORMANCE OF THE SOFTWARE.</p>
                  <h5>11. LIMITATION OF LIABILITY</h5>
                  <p>LICENSOR SHALL NOT BE LIABLE TO LICENSEE, OR ANY OTHER PERSON OR ENTITY CLAIMING THROUGH LICENSEE ANY LOSS OF PROFITS, INCOME, SAVINGS, OR ANY OTHER CONSEQUENTIAL, INCIDENTAL, SPECIAL, PUNITIVE, DIRECT OR INDIRECT DAMAGE, WHETHER ARISING IN CONTRACT, TORT, WARRANTY, OR OTHERWISE. THESE LIMITATIONS SHALL APPLY REGARDLESS OF THE ESSENTIAL PURPOSE OF ANY LIMITED REMEDY. UNDER NO CIRCUMSTANCES SHALL LICENSOR’S AGGREGATE LIABILITY TO LICENSEE, OR ANY OTHER PERSON OR ENTITY CLAIMING THROUGH LICENSEE, EXCEED THE FINANCIAL AMOUNT ACTUALLY PAID BY LICENSEE TO LICENSOR FOR THE SOFTWARE.</p>
                  <h5>12. ENTIRE AGREEMENT</h5>
                  <p>This EULA constitutes the entire agreement between Licensor and Licensee and supersedes all prior understandings of Licensor and Licensee, including any prior representation, statement, condition, or warranty with respect to the subject matter of this EULA.</p>
                  
              </div>
              </div>
          </section>
        </div>
        <Footer faq={faq} feature={feature} />
      </div>
    </div>
  );
}
