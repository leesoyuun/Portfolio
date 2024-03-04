import styled from "@emotion/styled";
const breakpoints = [480, 768, 992, 1280];
const media = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
import Leesoyuun from "../../assets/img/introduce/leesoyuun.jpeg";
import Leesoyuun2 from "../../assets/img/introduce/leesoyuun4.jpeg";

export const Whole = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: auto;
  margin-right: 10vw;
`;
export const Title = styled.div`
  font-size: 2.75rem;
  white-space: pre-wrap;
  line-height: 1.4;
  font-weight: 700;
  ${media[2]} {
    font-size: 1.75rem;
  }
`;
export const SubDescription = styled.div`
  color: #aeaeae;
  font-size: 1.12rem;
  white-space: pre-wrap;
  line-height: 1.5;
  margin-top: 6px;
  margin-bottom: 4px;
  ${media[2]} {
    font-size: 1rem;
  }
`;
export const MoreAbout = styled.div`
  cursor: pointer;
  font-size: 24px;
  &:hover {
    text-decoration: line-through;
  }
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media[2]} {
    display: none;
  }
`;
export const LiquidShape = styled.div`
  border: 2px solid black;
  width: 250px;
  height: 250px;
  background-image: url(${Leesoyuun2});
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
  ${media[2]} {
    display: none;
  }
`;
export const TechSkillTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  gap: 15px;
`;
export const TechSKillTxt = styled.div`
  color: #333;
  margin-top: 5px;
  font-weight: 700;
`;
export const TechSKill = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  margin-right: 10px;
`;