import React, { useState, useRef } from "react";
import * as h from "./HeaderStyle";
import GitLogo from "../../assets/img/github.svg";
import Velog from "../../assets/img/velog.svg";

const Header = ({ scrollToSection, homeRef, aboutRef, projectRef }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      {subMenuOpen && (
        <h.subMenuTotal>
          <h.close onClick={() => setSubMenuOpen(false)} />
          <h.subMenus>
            <h.subMenu>{`HOME`}</h.subMenu>
            <h.subMenu>{`ABOUT ME`}</h.subMenu>
            <h.subMenu>{`PROJECT`}</h.subMenu>
            <h.subMenu>{`TECH SKILL`}</h.subMenu>
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
          <h.Menu>{`TECH SKILL`}</h.Menu>
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
