import "./terms-and-condition.css";
import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom";

function TermsSideBar() {
    return (
        <>
        <div className="side-bar">
          <div className="side-content">
                <h4>Zojapay Policy</h4>
            <div className="inner-content">
            <Link to="/terms-and-condition" tabindex="1"> <div className="terms-icon">
                <div className="icon"><FaLongArrowAltRight /></div> <li>Terms & Condition</li>
                </div> </Link>
                 <li><Link to="/privacy">Privacy Policy</Link></li>
                 <li><Link to="/eula">EULA</Link></li>
                 <li><Link to="/cookies">Cookies Policy</Link></li>
            </div>
          </div>  
        </div>
        
        </>
    )
};

export default TermsSideBar