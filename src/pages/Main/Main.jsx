import React, {useState, useRef} from "react";
import * as c from "../../Component/Common/CommonStyle";
import Header from "../../Component/Header/Header";
import Project from "../../Component/Project/Project";
import Introduce from "../../Component/Introduce/Introduce";
import AboutMe from "../../Component/AboutMe/AboutMe";

const Main = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current !== null) {
      const offset = ref.current.offsetTop-120;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <Header scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectRef={projectRef}/>
      <c.total>
        <div ref={homeRef}>
          <Introduce />
        </div>
        <div ref={aboutRef}>
          <AboutMe/>
        </div>
        <div ref={projectRef}>
          <Project/>
        </div>
      </c.total>
    </>
  );
};

export default Main;
