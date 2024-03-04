import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Lottie from "lottie-react";
const breakpoints = [480, 768, 992, 1280];
const media = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Center = styled.div`
  padding: 0px 20% 5% 20%;
  min-height: calc(100vh - 101px);
  width: 100%;
  ${media[2]} {
    padding: 0px 0px 5% 0px;
  }
`;
export const Headername = styled.div`
  color: #4f66e3;
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  ${media[2]} {
    margin-top: 2.3rem;
  }
`;
export const TotalTechSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media[1]} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const TechBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #d0d0d0;
  padding: 0.7rem;
  border-radius: 16px;
  height: max-content;
  width: calc((100% / 2) - 3rem);
  position: relative;
  margin-right: 3rem;
  margin-bottom: 3rem;
  ${media[1]} {
    margin-right: 0rem;
    margin-bottom: 1.5rem;
    width: 100%;
  }
`;
export const LottieStyle = styled(Lottie)`
  width: 40px;
  height: 40px;
  overflow-y: hidden;
  position: absolute;
  right: 0;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'none')};
`;

export const Slide = styled.div`
  height: '0';
  overflow: 'hidden';
  transition: 'height 0.3s ease-in-out';
`;

export const Language = styled.div`
  font-weight: 500;
  font-size: 0.94rem;
  margin-top: 1rem;
  margin-bottom: 1px;
`;
export const Percent = styled(Language)`
  color: #525252;
`;
const slideAnimation = (width) => `
  @keyframes slide {
    0% {
      width: 0%;
    }
    100% {
      width: ${width}%;
    }
  }

  animation: slide 1s ease-out;
`;
export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #dedede;
  font-weight: 600;
  font-size: 0.8rem;
  border-radius: 18px;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`;
export const Progress = styled.div`
  width: ${(props) => props.percent};
  height: 8px;
  padding: 0;
  text-align: center;
  background-color: #949494;
  color: #111;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  ${(props) => slideAnimation(props.percent)};
`;
export const FieldIcon = styled.img`
  width: 35px;
  height: 30px;
`;
export const Field = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  margin-left: 1rem;
  color: #333;
`;
export const TechSkillIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
`;
