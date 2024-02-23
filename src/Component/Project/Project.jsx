import React from "react";
import * as c from "../Common/CommonStyle";
import * as p from "./ProjectStyle";
import ProjectJson from "../../assets/json/Project.json";
import Test from "../../assets/img/Test.png";
import Geeks from "../../assets/img/project/geeks/mainLogo.svg";
import Ofi from "../../assets/img/project/ofi/ofi.png";
import Portfolio from "../../assets/img/project/portfolio/portfolio.png";
import Cheonan from "../../assets/img/project/cheonan/cheonanData.jpeg";
import Music from "../../assets/img/project/music/music.jpeg";
const Project = () => {
  let TitleImg = [Geeks, Ofi,Portfolio, Cheonan,Music]
  return (
    <p.Center>
      <p.Whole>
        <p.Headername>{`PROJECT`}</p.Headername>
        {ProjectJson.project.map((project,index) => (
          <p.TotalProject>
            <p.ProjectImg src={TitleImg[index]} />
            <p.DetailProject>
              <p.ProjectName>{project.name}</p.ProjectName>
              <p.ProjectDescript>{project.description}</p.ProjectDescript>
              <p.Languages>
              {project.useLanguage?.map((language) => (
                <p.UseLanguage>{language}</p.UseLanguage>
              ))}
              </p.Languages>
            </p.DetailProject>
          </p.TotalProject>
        ))}
      </p.Whole>
    </p.Center>
  );
};
export default Project;
