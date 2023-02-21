import React from "react";
import Home from "./Home";
import Footer from "../Footer/Footer";
import MemberSection from "../MemberSection/MemberSection";
import NavBar from "../NavBar/NavBar";
import ProjectSection from "../ProjectSection/ProjectSection";
import { useRef } from "react";

export default function HomePage() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();

  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  const ProjectData1 = {
    type: "Laptop & Mobile",
    title: "Homic",
    version: "version 0.1.25",
    about:
      "A platform to look for people who provide services and also for freelancers to make use of their talent. ",
    link: "https://github.com/Blazify/homic-web",

    URLlinkLaptop: "/images/homic_web.jpeg",

    URLlinkMobile: "/images/homic_app.png",
  };
  //   const ProjectData2 = {
  //     type: "Laptop",
  //     title: "Blaze2",
  //     version: "version 0.1.25",
  //     about: "AOT compiled object oriented programming language ",
  //     link: "www.google.com",
  //     URLlink: "https://udo.net.au/image/TWsIzVkwk80UN80v1wA/Omnione",
  //   };
  //   const ProjectData3 = {
  //     type: "Mobile",
  //     title: "BlazeX3",
  //     version: "version 0.1.25",
  //     about:
  //       "AOT compiled object oriented programming language loram loram loram loram loram loram ",
  //     link: "www.google.com",
  //     URLlink:
  //       "https://img.gadgethacks.com/img/26/61/63729893520020/0/enable-popup-notification-bubbles-for-your-chats-android-11.w1456.jpg",
  //   };
  return (
    <>
      <section className="homeContainer">
        <NavBar
          scrollHandler={scrollHandler}
          sections={[section1, section2, section3, section4]}
        />
        <section ref={section1}>
          {/* <AboutModel /> */}
          <Home />
        </section>
        <section ref={section2}>
          <ProjectSection ProjectData={ProjectData1} />
        </section>

        {/* <section>
          <ProjectSection ProjectData={ProjectData2} />
        </section>
        <section>
          <ProjectSection ProjectData={ProjectData3} />
        </section> */}

        <section ref={section3}>
          <MemberSection />
        </section>
        <section className="sectionFooter" ref={section4}>
          <div className="footerImage">
            <img
              src={require("../../assets/image/14620625_5484597.jpg")}
              alt="illustratorImg"
            />
          </div>

          <Footer />
        </section>
      </section>
    </>
  );
}
