import React from "react";
import * as c from "../Common/CommonStyle";
import * as a from "./AboutMeStyle";
import styled from "@emotion/styled";
import AboutMeJson from "../../assets/json/AboutMe.json";

const AboutMe = () => {
  return (
    <a.Center>
      <a.Whole>
        <c.Flex>
          <a.Name>{`이소윤`}</a.Name>
          <a.Name isEnName={true}>{`LEESOYUN`}</a.Name>
        </c.Flex>
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
