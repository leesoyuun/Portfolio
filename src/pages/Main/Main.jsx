import React from "react";
// import MainStyle from './MainStyle';
import * as c from "../../Component/Common/CommonStyle";
import Header from "../../Component/Header/Header";
import Project from "../../Component/Project/Project";
import Introduce from "../../Component/Introduce/Introduce";
import AboutMe from "../../Component/AboutMe/AboutMe";

const Main = () => {
  return (
    <>
      <Header />
      <c.total>
        <Introduce />
        <AboutMe />
      </c.total>
    </>
  );
};

export default Main;
