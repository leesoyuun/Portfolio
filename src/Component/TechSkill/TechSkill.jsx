import React, { useState } from "react";
import * as c from "../Common/CommonStyle";
import * as t from "./TechSkillStyle";
import Bracket from "../../assets/img/techSkill/bracket.png";
import Arrow from "../../assets/img/techSkill/arrow.json";
import Application from "../../assets/img/techSkill/phone.svg";
import OS from "../../assets/img/techSkill/linux.svg";
import Collaboration from "../../assets/img/techSkill/collaboration.png";
import TechSkillJson from "../../assets/json/TechSkill.json";

const TechSkill = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [field, setField] = useState(null);
  const handleOpen = (fieldName) => {
    setIsOpen(!isOpen);
    setField(fieldName);
  };
  return (
    <t.Center>
      <t.Headername>{`TECH SKILL`}</t.Headername>
      <t.TotalTechSkill>
        <t.TechBox onClick={() => handleOpen("fe")}>
          <c.FlexCenter>
            <t.FieldIcon src={Bracket} />
            <t.Field>{`Frontend`}</t.Field>
            <t.LottieStyle animationData={Arrow} isOpen={isOpen} />
          </c.FlexCenter>
          {isOpen &&
            field === "fe" &&
            TechSkillJson.techskill.frontend.map((techInfo) => (
              <>
                <c.FlexBetween>
                  <t.Language>{techInfo.techName}</t.Language>
                  <t.Percent>{techInfo.percent}</t.Percent>
                </c.FlexBetween>
                <t.ProgressBar>
                  <t.Progress width={techInfo.percent} />
                </t.ProgressBar>
              </>
            ))}
        </t.TechBox>
        <t.TechBox onClick={() => handleOpen("be")}>
          <c.FlexCenter>
            <t.FieldIcon src={Bracket} />
            <t.Field>{`Backend`}</t.Field>
            <t.LottieStyle animationData={Arrow} isOpen={isOpen} />
          </c.FlexCenter>
          {isOpen &&
            field === "be" &&
            TechSkillJson.techskill.backend?.map((techInfo) => (
              <>
                <c.FlexBetween>
                  <t.Language>{techInfo.techName}</t.Language>
                  <t.Percent>{techInfo.percent}</t.Percent>
                </c.FlexBetween>
                <t.ProgressBar>
                  <t.Progress width={techInfo.percent} />
                </t.ProgressBar>
              </>
            ))}
        </t.TechBox>
        <t.TechBox onClick={() => handleOpen("app")}>
          <c.FlexCenter>
            <t.FieldIcon src={Application} />
            <t.Field>{`Application`}</t.Field>
            <t.LottieStyle animationData={Arrow} />
          </c.FlexCenter>
          {isOpen &&
            field === "app" &&
            TechSkillJson.techskill.application?.map((techInfo) => (
              <>
                <c.FlexBetween>
                  <t.Language>{techInfo.techName}</t.Language>
                  <t.Percent>{techInfo.percent}</t.Percent>
                </c.FlexBetween>
                <t.ProgressBar>
                  <t.Progress width={techInfo.percent} />
                </t.ProgressBar>
              </>
            ))}
        </t.TechBox>
        <t.TechBox onClick={() => handleOpen("os")}>
          <c.FlexCenter>
            <t.FieldIcon src={OS} />
            <t.Field>{`OS`}</t.Field>
            <t.LottieStyle animationData={Arrow} />
          </c.FlexCenter>
          {isOpen &&
            field === "os" &&
            TechSkillJson.techskill.os?.map((techInfo) => (
              <>
                <c.FlexBetween>
                  <t.Language>{techInfo.techName}</t.Language>
                  <t.Percent>{techInfo.percent}</t.Percent>
                </c.FlexBetween>
                <t.ProgressBar>
                  <t.Progress width={techInfo.percent} />
                </t.ProgressBar>
              </>
            ))}
        </t.TechBox>
        <t.TechBox onClick={() => handleOpen("collaboration")}>
          <c.FlexCenter>
            <t.FieldIcon src={Collaboration} />
            <t.Field>{`Collaboration Tool`}</t.Field>
            <t.LottieStyle animationData={Arrow} />
          </c.FlexCenter>
          {isOpen &&
            field === "collaboration" &&
            TechSkillJson.techskill.collaboration?.map((techInfo) => (
              <>
                <c.FlexBetween>
                  <t.Language>{techInfo.techName}</t.Language>
                  <t.Percent>{techInfo.percent}</t.Percent>
                </c.FlexBetween>
                <t.ProgressBar>
                  <t.Progress width={techInfo.percent} />
                </t.ProgressBar>
              </>
            ))}
        </t.TechBox>
      </t.TotalTechSkill>
    </t.Center>
  );
};
export default TechSkill;
