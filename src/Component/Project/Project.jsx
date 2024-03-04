import React, { useEffect } from "react";
import * as c from "../Common/CommonStyle";
import { useNavigate } from "react-router-dom";
import * as p from "./ProjectStyle";
import ProjectJson from "../../assets/json/Project.json";
import Geeks from "../../assets/img/project/geeks/mainLogo.svg";
import Ofi from "../../assets/img/project/ofi/ofi.png";
import Portfolio from "../../assets/img/project/portfolio/portfolio.png";
import Cheonan from "../../assets/img/project/cheonan/cheonanData.jpeg";
import Music from "../../assets/img/project/music/music.jpeg";
import Git from "../../assets/img/github.svg";
import Link from "../../assets/img/link.png";
import Paper from "../../assets/img/common/paper.svg";
import Plus from "../../assets/img/common/plus.svg";

const Project = () => {
  let TitleImg = [Geeks, Ofi, Portfolio, Cheonan, Music];
  const navigate = useNavigate();
  const handleClick = (projectName) => {
    let name = projectName.split(" ");
    name.pop();
    let urlName = name.join("");
    navigate("/project/" + urlName);
  };
  return (
    <p.Center>
      <p.Whole>
        <p.Headername>{`PROJECT`}</p.Headername>
        <p.HeaderDescript>{`프로젝트 이름 및 이미지를 클릭하시면 디테일한 설명을 보실 수 있습니다:)`}</p.HeaderDescript>
        {ProjectJson.project.map((project, index) => (
          <p.TotalProject>
            <p.ProjectImg
              src={TitleImg[index]}
              onClick={() => handleClick(project.name)}
            />
            <p.DetailProject>
              <p.ProjectName onClick={() => handleClick(project.name)}>
                {project.name}
              </p.ProjectName>
              <p.ProjectDescript>{project.description}</p.ProjectDescript>
              <p.Languages>
                {project.useLanguage?.map((language) => (
                  <p.UseLanguage>{language}</p.UseLanguage>
                ))}
              </p.Languages>
              <p.Links isCenter={project?.useLink}>
                {project?.gitLink && (
                  <a
                    href={project?.gitLink}
                    target="_blank"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <p.LinkImg src={Git} />
                    <p.LinkTxt>{`Code`}</p.LinkTxt>
                  </a>
                )}
                {project?.useLink && (
                  <a
                    href={project?.useLink}
                    target="_blank"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <p.LinkImg src={Link} />
                    <p.LinkTxt>{`Live Demo`}</p.LinkTxt>
                  </a>
                )}
                {project?.thesis && (
                  <a
                  href={project?.thesis}
                  target="_blank"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <p.LinkImg src={Paper} />
                  <p.LinkTxt>{`논문 링크`}</p.LinkTxt>
                </a>
                )}
              </p.Links>
              {
                  <p.MoreInfoBox>
                    <div onClick={() => handleClick(project.name)}>{`More Info`}</div>
                  </p.MoreInfoBox>
                }
            </p.DetailProject>
          </p.TotalProject>
        ))}
      </p.Whole>
    </p.Center>
  );
};
export default Project;
