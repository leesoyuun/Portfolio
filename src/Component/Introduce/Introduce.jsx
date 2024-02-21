import React from "react";
import * as c from "../Common/CommonStyle";
import * as i from "./IntroduceStyle";
import styled from "@emotion/styled";

const Center = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  height: calc(100vh - 101px);
  width: 100%;
  margin-top: 100px;
`;

const Introduce = () => {
  return (
    <Center>
      <i.Whole>
        <i.Title>{`Front-End Developer\nLeeSoyun 👩‍💻`}</i.Title>
        <i.SubDescription>{`안녕하세요. 끊임없이 배우고, 발전하며 사용자 경험을 증진시키기 위해 노력하는\n프론트엔드 개발자 이소윤입니다.`}</i.SubDescription>
        <i.MoreAbout>{`More About Me`}</i.MoreAbout>
      </i.Whole>
      <i.Container>
        <i.LiquidShape></i.LiquidShape>
      </i.Container>
    </Center>
  );
};
export default Introduce;
