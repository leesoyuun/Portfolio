import React from "react";
import * as h from "./HeaderStyle";
import GitLogo from "../../assets/img/github.svg";
import Velog from "../../assets/img/velog.svg";

const Header = () => {
  return (
    <h.total>
      <h.myName>{`LEE SOYUN`}</h.myName>
      <h.hamburgerMenu/>
      <h.subMenuTotal>
        <h.subMenu>{`HOME`}</h.subMenu>
        <h.subMenu>{`ABOUT ME`}</h.subMenu>
        <h.subMenu>{`PROJECT`}</h.subMenu>
        <h.subMenu>{`TECH SKILL`}</h.subMenu>
        <a href="https://github.com/leesoyuun" target="_blank">
          <h.subImg src={GitLogo} />
        </a>
        <a href="https://velog.io/@leesoyuun/posts" target="_blank">
          <h.subImg src={Velog} />
        </a>
      </h.subMenuTotal>
    </h.total>
  );
};
export default Header;
