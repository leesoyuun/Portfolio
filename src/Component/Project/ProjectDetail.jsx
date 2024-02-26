import React, {useEffect} from "react";
import { useParams,useLocation } from "react-router-dom";
import * as p from "./ProjectStyle";
import * as c from "../Common/CommonStyle";
import * as pd from "./ProjectDetailStyle";
import ProjectDetailJson from "../../assets/json/ProjectDetail.json";
import Header from "../Header/Header";
import PhoneTool from "../../assets/img/common/phoneTool.jpg";
import Check from "../../assets/img/common/check.png";
import Geeks1 from "../../assets/img/project/geeks/geeks1.png";
const Geeks = () => {
  const projectParamsName = useParams();
  let ProjectPhoto = [Geeks1];

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  const project = ProjectDetailJson.projectDetail?.find(val => val.bigTitle == projectParamsName.projectParamsName)

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }
  return (
    <>
      <Header />
      <pd.Center>
        <p.Whole>
          <pd.ProjectName>{project.name}</pd.ProjectName>
              <pd.Date>{project.date}</pd.Date>
              <c.FlexBetween>
                <pd.PhoneTool src={PhoneTool} />
                <pd.InnerImg src={Geeks1} />
                <pd.DetailExplain>
                  {project.details?.map((detail) => (
                    <>
                      <pd.Title>{detail.title}</pd.Title>
                      <pd.Descript>{detail.detail}</pd.Descript>
                      {detail.useReason?.map((reason) => (
                        <c.Flex>
                          <pd.Check src={Check}/>
                          <pd.Reason>{reason}</pd.Reason>
                        </c.Flex>
                      ))}
                    </>
                  ))}
                </pd.DetailExplain>
              </c.FlexBetween>
        </p.Whole>
      </pd.Center>
    </>
  );
};
export default Geeks;
