import React from "react";
import * as c from "../Common/CommonStyle";
import * as t from "./TechSkillStyle";
import Bracket from "../../assets/img/techSkill/bracket.png";
import Arrow from "../../assets/img/techSkill/arrow.json";
import Application from "../../assets/img/techSkill/phone.svg";
import OS from "../../assets/img/techSkill/linux.svg";
import Collaboration from "../../assets/img/techSkill/collaboration.png";

const TechSkill = () => {
  let frontEndSKill = [
    "HTML",
    "CSS",
    "JavaScript",
    "Jquery",
    "React",
    "Styled-components",
    "Emotion",
    "TailWind",
    "BootStrap",
    "Recoil",
    "PWA",
    "",
  ];
  return (
    <t.Center>
      <t.Headername>{`TECH SKILL`}</t.Headername>
      <t.TotalTechSkill>
        <t.TechBox>
          <c.Flex>
            <t.FieldIcon src={Bracket} />
            <t.Field>{`Frontend`}</t.Field>
            <t.LottieStyle animationData={Arrow} />
          </c.Flex>
          {frontEndSKill.map((frontend) => (
            <>
              <t.Language>{frontend}</t.Language>
              <t.ProgressBar>
                <t.Progress> </t.Progress>
              </t.ProgressBar>
            </>
          ))}
        </t.TechBox>
        <t.TechBox>
          <t.FieldIcon src={Bracket} />
          <t.Field>{`Backend`}</t.Field>
          <t.LottieStyle animationData={Arrow} />
        </t.TechBox>
        <t.TechBox>
          <t.FieldIcon src={Application} />
          <t.Field>{`Application`}</t.Field>
          <t.LottieStyle animationData={Arrow} />
        </t.TechBox>
        <t.TechBox>
          <t.FieldIcon src={OS} />
          <t.Field>{`OS`}</t.Field>
          <t.LottieStyle animationData={Arrow} />
        </t.TechBox>
        <t.TechBox>
          <t.FieldIcon src={Collaboration} />
          <t.Field>{`Collaboration Tool`}</t.Field>
          <t.LottieStyle animationData={Arrow} />
        </t.TechBox>
      </t.TotalTechSkill>
    </t.Center>
  );
};
export default TechSkill;
