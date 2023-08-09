import "./enduser.css";
import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom";

function EnduserSideBar() {
    return (
        <>
        <div className="side-bar">
          <div className="side-content">
                <h4>Zojapay Policy</h4>
            <div className="inner-content">  
            <li><Link to="/terms-and-condition">Terms And Condition</Link></li>
                 <li><Link to="/privacy">Privacy Policy</Link></li>                
                 <Link to="/eula"><div className="terms-icon"><div className="icon"><FaLongArrowAltRight /></div><li>EULA</li></div></Link>
                 <li><Link to="/cookies" tabIndex="1">Cookies Policy</Link></li>
            </div>
          </div>  
        </div>
        
        </>
    )
};

export default EnduserSideBar