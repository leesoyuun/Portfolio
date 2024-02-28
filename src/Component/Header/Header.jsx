import React, { useState, useRef } from "react";
import * as h from "./HeaderStyle";
import GitLogo from "../../assets/img/github.svg";
import Velog from "../../assets/img/velog.svg";

const Header = ({ scrollToSection, homeRef, aboutRef, projectRef, techSkillRef }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      {subMenuOpen && (
        <h.subMenuTotal>
          <h.close onClick={() => setSubMenuOpen(false)} />
          <h.subMenus>
            <h.subMenu onClick={() => scrollToSection(homeRef,sub)}>{`HOME`}</h.subMenu>
            <h.subMenu onClick={() => scrollToSection(aboutRef,sub)}>{`ABOUT ME`}</h.subMenu>
            <h.subMenu onClick={() => scrollToSection(projectRef,sub)}>{`PROJECT`}</h.subMenu>
            <h.subMenu onClick={() => scrollToSection(techSkillRef,sub)}>{`TECH SKILL`}</h.subMenu>
          </h.subMenus>
          <h.subBottom></h.subBottom>
        </h.subMenuTotal>
      )}
      <h.total>
        <h.myName onClick={() => scrollToSection(homeRef)}>{`LEE SOYUN`}</h.myName>
        <h.hamburgerMenu onClick={() => setSubMenuOpen(true)} />
        <h.MenuTotal>
          <h.Menu onClick={() => scrollToSection(homeRef)}>{`HOME`}</h.Menu>
          <h.Menu onClick={() => scrollToSection(aboutRef)}>{`ABOUT ME`}</h.Menu>
          <h.Menu onClick={() => scrollToSection(projectRef)}>{`PROJECT`}</h.Menu>
          <h.Menu onClick={() => scrollToSection(techSkillRef)}>{`TECH SKILL`}</h.Menu>
          <a href="https://github.com/leesoyuun" target="_blank">
            <h.subImg src={GitLogo} />
          </a>
          <a href="https://velog.io/@leesoyuun/posts" target="_blank">
            <h.subImg src={Velog} />
          </a>
        </h.MenuTotal>
      </h.total>
    </>
  );
};
export default Header;
