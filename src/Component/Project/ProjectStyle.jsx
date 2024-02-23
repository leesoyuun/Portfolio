import styled from "@emotion/styled";
import { css } from "@emotion/css";

const breakpoints = [480, 768, 992, 1280];
const media = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Center = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 15% 5% 15%;
  min-height: calc(100vh - 101px);
  width: 100%;
  ${media[2]} {
    padding: 0px 0px 5% 0px;
  }
`;
export const Whole = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Headername = styled.div`
  color: #4f66e3;
  font-weight: 700;
  font-size: 1.3rem;
`;
export const TotalProject = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  ${media[1]} {
    flex-direction: column;
  }
`;
export const DetailProject = styled.div`
  margin-left: 1.5rem;
  width: calc((100vw - 1.5rem - 300px - 15%) / 2);
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  flex-direction: column;
  ${media[2]} {
    margin-left: 1rem;
    margin-top: 1rem;
    width: calc(100vw - 12% - 1.5rem);
  }
  ${media[1]} {
    margin-left: 0rem;
  }
`;
export const ProjectName = styled.div`
  font-weight: 600;
  margin-bottom: calc(1.5rem - 5px);
  width: max-content;
  cursor: pointer;
  &::after {
    display: block;
    content: "";
    margin-top: 5px;
    border-bottom: solid 4px #5144EB;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
`;
export const ProjectDescript = styled.div`
  color: #525252;
  font-weight: 500;
  line-height: 1.7rem;
  text-align: center;
  white-space: pre-wrap;
`;
export const ProjectImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 16px;
  padding: 10px;
`;
export const Languages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  margin-top: 1.5rem;
`;
export const UseLanguage = styled.div`
  font-weight: 600;
  margin-left: 1rem;
`;
