import "./privacy.css";
import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom";

function PrivacySidebar() {
    return (
        <>
        <div className="side-bar">
          <div className="side-content">
                <h4>Routepay Policy</h4>
            <div className="inner-content">
            <li><Link to="/terms-and-condition">Terms & Condition</Link></li>
                <Link to="/privacy">  <div className="terms-icon">
                <div className="icon"><FaLongArrowAltRight /></div> <li>Privacy Policy</li>
                </div> </Link>
                 <li><Link to="/eula">EULA</Link></li>
                 <li><Link to="/quicklinks">quicklinks</Link></li>
            </div>
          </div>  
        </div>
        
        </>
    )
};

export default PrivacySidebar