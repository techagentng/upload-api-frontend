import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing-page/landing";
import TermsAndCondition from "./pages/terms-and-condition/terms-and-conditions"
import PrivacyPolicy from "./pages/privacy/privacy"
import Cookies from "./pages/cookies-policy/cookies-policy"
import Enduser from "./pages/eula/eula"
import Alfiles from "./pages/allfiles"
import { FileProvider } from "./FileContext"
import {useRef} from "react"

const App = () => {
  const faq = useRef(null);
  return (
    <FileProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing faq={faq}/>}></Route>
            <Route exact path="/terms-and-condition" element={<TermsAndCondition faq={faq}/>}></Route>
            <Route exact path="/privacy" element={<PrivacyPolicy />}></Route>
            <Route exact path="/eula" element={<Enduser />}></Route>
            <Route exact path="/cookies" element={<Cookies />}></Route>
            <Route exact path="/list" element={<Alfiles />}></Route>
          </Routes>
        </Router>  
    </FileProvider>
  );
}

export default App;
