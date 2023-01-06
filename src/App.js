import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MemberSection from "./components/MemberSection/MemberSection";
import NavBar from "./components/NavBar/NavBar";
import ProjectSection from "./components/ProjectSection/ProjectSection";

function App() {
  return (
    <>
      <div className="homeContainer">
        <NavBar />
        <section>
          <Home />
        </section>
        <section>
          <ProjectSection />
        </section>

        <section>
          <MemberSection />
        </section>
        <section className="sectionFooter">
          <div className="footerImage">
            <img
              src={require("./assets/image/14620625_5484597.jpg")}
              alt="illustratorImg"
            />
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
