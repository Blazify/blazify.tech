import "./App.css";

import { Fragment } from "react";
// import Member from "./components/Member card/Member";
// import memberData from "./assets/MemberData";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MemberSection from "./components/MemberSection/MemberSection";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="homeContainer">
        <NavBar />
        <section>
          <Home />
        </section>

        <section>
          <MemberSection />
        </section>
        <section className="sectionFooter">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
