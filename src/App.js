import "./App.css";

import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService/TermsOfService";
import Disclamer from "./components/Disclamer/Disclamer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
// import { AiFillMobile } from "react-icons/ai";
// import AboutModel from "./components/AboutModel/AboutModel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/disclamer" element={<Disclamer />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
      </Routes>
    </>
  );
}

export default App;
