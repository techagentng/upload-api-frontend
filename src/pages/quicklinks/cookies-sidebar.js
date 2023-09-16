import "../terms-and-condition/terms-and-condition.css";
import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom";

function CookiesSideBar() {
    return (
        <>
        <div className="side-bar">
          <div className="side-content">
               <h4>RoutePay Policy</h4>
            <div className="inner-content">
                <li><Link to="/terms-and-condition">Terms & Condition</Link></li>
                 <li><Link to="/privacy" tabindex="1">Privacy Policy</Link></li>
                 <li><Link to="/eula">EULA</Link></li>
                <Link to="" tabindex="1"> 
                <div className="terms-icon">
                  <div className="icon"><FaLongArrowAltRight /></div><li>QuickLinks</li> 
                </div>
                </Link>
            </div>
          </div>  
        </div>
        
        </>
    )
};

export default CookiesSideBar