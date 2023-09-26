import { BrowserRouter as Router, Route, Routes, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing-page/landing";
import TermsAndCondition from "./pages/terms-and-condition/terms-and-conditions"
import PrivacyPolicy from "./pages/privacy/privacy"
import QuickLinks from "./pages/quicklinks/quicklinks"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Enduser from "./pages/eula/eula"
import Alfiles from "./pages/allfiles"
import Single from "./pages/single"
import HomePage from "./pages/landing-page/landing";
import ProtectedRoute from "./components/ProtectedRoute";


import {useRef} from "react"


const App = () => {
  const faq = useRef(null);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/login" element={<LoginPage />}></Route>
    )
  )
  return (
        <Router>
          <Routes>
                <Route path="/lala" element={<Landing faq={faq}/>}></Route> 
                <Route path="/" element={<HomePage />}></Route>
                <Route exact path="/terms-and-condition" element={<TermsAndCondition faq={faq}/>}></Route>
                <Route exact path="/privacy" element={<PrivacyPolicy />}></Route>
                <Route exact path="/folder/:folderName" element={<Single />}></Route>
                <Route exact path="/eula" element={<Enduser />}></Route>
                <Route exact path="/quicklinks" element={<QuickLinks />}></Route>
                <Route exact path="/list" element={<Alfiles />}></Route>
                <Route exact path="/register" element={<RegisterPage/>}></Route>
                <Route exact path="/login" element={<LoginPage/>}></Route>
                <Route path="/lala" element={<Landing faq={faq} />} />
          </Routes> 
        </Router>
  );
}

export default App;
      