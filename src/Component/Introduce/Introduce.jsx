import React from "react";
import * as c from "../Common/CommonStyle";
import * as i from "./IntroduceStyle";
import styled from "@emotion/styled";
import Leesoyuun from "../../assets/img/Test.png";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px)
`;
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LiquidShape = styled.div`
  border: 2px solid black;
  width: 250px;
  height: 250px;
  background-image: url(${Leesoyuun});
  background-size: cover;
  animation: liquid 8s ease-in-out infinite;

  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  @keyframes liquid {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }
`;
const Introduce = () => {
  return (
    <c.total>
      <Center>
        <i.Whole>
          <i.Title>{`Front-End Developer\nLeeSoyun 👩‍💻`}</i.Title>
          <i.SubDescription>{`안녕하세요. 끊임없이 배우고, 발전하며 사용자 경험을 증진시키기 위해 노력하는\n프론트엔드 개발자 이소윤입니다.`}</i.SubDescription>
          <i.MoreAbout>{`More About Me`}</i.MoreAbout>
        </i.Whole>
        <Container>
          <LiquidShape></LiquidShape>
        </Container>
      </Center>
    </c.total>
  );
};
export default Introduce;
