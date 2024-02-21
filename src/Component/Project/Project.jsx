import React from "react";
import * as c from "../Common/CommonStyle";
import * as p from "./ProjectStyle";
import ProjectJson from "../../assets/json/Project.json";
import Test from "../../assets/img/Test.png";

const Project = () => {
  return (
    <p.Center>
      <p.Whole>
        <p.Headername>{`PROJECT`}</p.Headername>
        {ProjectJson.project.map((project) => (
          <p.TotalProject>
            <p.ProjectImg src={Test} />
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
