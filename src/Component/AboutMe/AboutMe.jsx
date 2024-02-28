import React from "react";
import * as c from "../Common/CommonStyle";
import * as a from "./AboutMeStyle";
import AboutMeJson from "../../assets/json/AboutMe.json";
import Email from "../../assets/img/common/email.svg";
import Github from "../../assets/img/github.svg";

const AboutMe = () => {
  return (
    <a.Center>
      <a.Whole>
        <c.Flex>
          <a.Name>{`이소윤`}</a.Name>
          <a.Name isEnName={true}>{`LEESOYUN`}</a.Name>
        </c.Flex>
        <c.Flex>
          <a href="mailto:leesoyun4206@icloud.com" style={{ display: "flex", alignItems: "center", color : "#333", textDecoration : "none", marginBottom : "10px" }}>
            <a.Icon src={Email}/>
            <a.InfoText>{`leesoyun4206@icloud.com`}</a.InfoText>
          </a>
        </c.Flex>
        <c.Flex>
          <a href="https://github.com/leesoyuun" target="_blank" style={{ display: "flex", alignItems: "center", color : "#333", textDecoration : "none" }}>
            <a.Icon src={Github}/>
            <a.InfoText>{`@leesoyuun`}</a.InfoText>
          </a>
        </c.Flex>
        <a.DetailAboutMe>{`안녕하세요. 소통을 중심으로 더 나은 코드를 구현하는 프론트엔드 개발자 이소윤입니다.\ndddd`}</a.DetailAboutMe>
        <a.Title>{`이력`}</a.Title>
        {AboutMeJson.project.experience.map((val) => (
          <c.Flex>
            <a.Date>{val.date}</a.Date>
            <a.Descript>{val.descript}</a.Descript>
          </c.Flex>
        ))}
        <a.Title>{`수상내역`}</a.Title>
        {AboutMeJson.project.award.map((val) => (
          <c.Flex>
            <a.Date>{val.date}</a.Date>
            <a.Descript>{val.descript}</a.Descript>
          </c.Flex>
        ))}
        <a.Title>{`기술 발표 내역`}</a.Title>
        {AboutMeJson.project.announce.map((val) => (
          <c.Flex>
            <a.Date>{val.date}</a.Date>
            <a.Descript>{val.descript}</a.Descript>
          </c.Flex>
        ))}
      </a.Whole>
    </a.Center>
  );
};
export default AboutMe;
