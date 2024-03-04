import React from "react";
import * as c from "../Common/CommonStyle";
import * as i from "./IntroduceStyle";
import styled from "@emotion/styled";
import ReactIcon from "../../assets/img/techSkill/react.svg";
import Js from "../../assets/img/techSkill/javascript.svg";
import Jquery from "../../assets/img/techSkill/jquery.svg";
import StyledComponentIcon from "../../assets/img/techSkill/styledComponents.png";
import Tailwind from "../../assets/img/techSkill/tailwind-css.svg";
import Bootstrap from "../../assets/img/techSkill/bootstrap.svg";

const Center = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  height: calc(100vh - 101px);
  width: 100%;
  margin-top: 100px;
`;

const Introduce = () => {
  const TechSkillIcons = [ReactIcon, Js, Jquery, StyledComponentIcon, Tailwind, Bootstrap];
  return (
    <Center>
    <i.Whole>
      <i.Title>{`Front-End Developer\nLeeSoyun 👩‍💻`}</i.Title>
      <i.SubDescription>{`안녕하세요. 끊임없이 배우고, 발전하며 사용자 경험을 증진시키기 위해 노력하는\n프론트엔드 개발자 이소윤입니다.`}</i.SubDescription>
      <i.TechSkillTop>
        <i.TechSKillTxt>{`Tech Stack | `}</i.TechSKillTxt>
        {TechSkillIcons?.map(tech => <i.TechSKill src={tech}/>)}
      </i.TechSkillTop>
    </i.Whole>
    <i.Container>
      <i.LiquidShape></i.LiquidShape>
    </i.Container>
  </Center>
  );
};
export default Introduce;
