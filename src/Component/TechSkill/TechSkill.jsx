import React, { useState } from "react";
import * as c from "../Common/CommonStyle";
import * as t from "./TechSkillStyle";
import Bracket from "../../assets/img/techSkill/bracket.png";
import Arrow from "../../assets/img/techSkill/arrow.json";
import Application from "../../assets/img/techSkill/phone.svg";
import OS from "../../assets/img/techSkill/linux.svg";
import Collaboration from "../../assets/img/techSkill/collaboration.svg";
import TechSkillJson from "../../assets/json/TechSkill.json";

const TechSkill = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feOpen, setFeOpen] = useState(false);
  const [beOpen, setBeOpen] = useState(false);
  const [osOpen, setOsOpen] = useState(false);
  const [appOpen, setAppOpen] = useState(false);
  const [collaboOpen, setCollaboOpen] = useState(false);
  const [field, setField] = useState(null);
  const handleOpen = (fieldName) => {
    setIsOpen(!isOpen);
    setField(fieldName);
  };
  return (
    <t.Center>
      <t.Headername>{`TECH SKILL`}</t.Headername>
      <t.TotalTechSkill>
        <t.TechBox onClick={() => setFeOpen(!feOpen)} isOpen={feOpen} changeHeight={TechSkillJson.techskill.frontend.length * 53}>
          <c.FlexCenter>
            <t.FieldIcon src={Bracket} />
            <t.Field>{`Frontend`}</t.Field>
            <t.LottieStyle animationData={Arrow} isOpen={feOpen} />
          </c.FlexCenter>
          {feOpen &&
            TechSkillJson.techskill.frontend?.map((techInfo) => (
              <t.Slide key={techInfo.techName} isOpen={feOpen}>
                <c.FlexBetween>
                  <t.Language>{techInfo.techName}</t.Language>
                  <t.Percent>{techInfo.percent}</t.Percent>
                </c.FlexBetween>
                <t.ProgressBar>
                  <t.Progress percent={techInfo.percent} />
                </t.ProgressBar>
              </t.Slide>
            ))}
        </t.TechBox>
        <t.TechBox onClick={() => setBeOpen(!beOpen)}>
          <c.FlexCenter>
            <t.FieldIcon src={Bracket} />
            <t.Field>{`Backend`}</t.Field>
            <t.LottieStyle animationData={Arrow} isOpen={beOpen} />
          </c.FlexCenter>
          {beOpen &&
            TechSkillJson.techskill.backend?.map((techInfo) => (
              <t.Slide key={techInfo.techName} isOpen={beOpen}>
                <c.FlexBetween>
                  <t.Language>{techInfo.techName}</t.Language>
                  <t.Percent>{techInfo.percent}</t.Percent>
                </c.FlexBetween>
                <t.ProgressBar>
                  <t.Progress percent={techInfo.percent} />
                </t.ProgressBar>
              </t.Slide>
            ))}
        </t.TechBox>
        <t.TechBox onClick={() => setAppOpen(!appOpen)}>
          <c.FlexCenter>
            <t.FieldIcon src={Application} />
            <t.Field>{`Application`}</t.Field>
            <t.LottieStyle animationData={Arrow} isOpen={appOpen}/>
          </c.FlexCenter>
          {appOpen &&
            TechSkillJson.techskill.application?.map((techInfo) => (
              <t.Slide key={techInfo.techName} isOpen={appOpen}>
                <c.FlexBetween>
                  <t.Language>{techInfo.techName}</t.Language>
                  <t.Percent>{techInfo.percent}</t.Percent>
                </c.FlexBetween>
                <t.ProgressBar>
                  <t.Progress percent={techInfo.percent} />
                </t.ProgressBar>
              </t.Slide>
            ))}
        </t.TechBox>
        <t.TechBox onClick={() => setOsOpen(!osOpen)}>
          <c.FlexCenter>
            <t.FieldIcon src={OS} />
            <t.Field>{`OS`}</t.Field>
            <t.LottieStyle animationData={Arrow} isOpen={osOpen}/>
          </c.FlexCenter>
          {osOpen &&
            TechSkillJson.techskill.os?.map((techInfo) => (
              <t.Slide key={techInfo.techName} isOpen={osOpen}>
                <c.FlexBetween>
                  <t.Language>{techInfo.techName}</t.Language>
                  <t.Percent>{techInfo.percent}</t.Percent>
                </c.FlexBetween>
                <t.ProgressBar>
                  <t.Progress percent={techInfo.percent} />
                </t.ProgressBar>
              </t.Slide>
            ))}
        </t.TechBox>
        <t.TechBox onClick={() => setCollaboOpen(!collaboOpen)}>
          <c.FlexCenter>
            <t.FieldIcon src={Collaboration} />
            <t.Field>{`Collaboration Tool`}</t.Field>
            <t.LottieStyle animationData={Arrow} isOpen={collaboOpen}/>
          </c.FlexCenter>
          {collaboOpen &&
            TechSkillJson.techskill.collaboration?.map((techInfo) => (
              <t.Slide key={techInfo.techName} isOpen={collaboOpen}>
                <c.FlexBetween>
                  <t.Language>{techInfo.techName}</t.Language>
                  <t.Percent>{techInfo.percent}</t.Percent>
                </c.FlexBetween>
                <t.ProgressBar>
                  <t.Progress percent={techInfo.percent} />
                </t.ProgressBar>
              </t.Slide>
            ))}
        </t.TechBox>
      </t.TotalTechSkill>
    </t.Center>
  );
};
export default TechSkill;
