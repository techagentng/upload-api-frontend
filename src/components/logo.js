import "../css/logo.css";
import logo from "../img/rlogo.svg";
export default function Logo() {
  return (
    <div className="landing-logo">
      <img src={logo} className="rlogo" alt="logo" />
    </div>
  );
}

// function LogoSvg (){
//   return(
//     <div></div>
//   )
// }
