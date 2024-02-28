import React, {useState, useRef} from "react";
import * as c from "../../Component/Common/CommonStyle";
import Header from "../../Component/Header/Header";
import Introduce from "../../Component/Introduce/Introduce";
import AboutMe from "../../Component/AboutMe/AboutMe";
import Project from "../../Component/Project/Project";
import ProjectDetail from "../../Component/Project/ProjectDetail";
import TechSkill from "../../Component/TechSkill/TechSkill";

const Main = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const techSkillRef = useRef(null);

  const scrollToSection = (ref,sub) => {
    if(sub){
      setSubMenuOpen(false);
    }
    if (ref.current !== null) {
      const offset = ref.current.offsetTop-94;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <Header scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} techSkillRef={techSkillRef} />
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
        <div ref={techSkillRef}>
          <TechSkill/>
        </div>
      </c.total>
    </>
  );
};

export default Main;
