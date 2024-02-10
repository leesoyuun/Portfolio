import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";

const breakpoints = [480, 768, 992, 1280];
const media = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px 3% 30px 3%;
  cursor: pointer;
  height: max-content;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
`;
export const myName = styled.div`
  cursor: pointer;
  font-size: 24px;
  width: max-content;
  &:hover {
    text-decoration: line-through;
  }
`;
export const subMenuTotal = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  ${media[2]} {
    display: none;
  }
`;
export const subMenu = styled(myName)`
  width: max-content;
  font-size: 20px;
  text-align: right;
  padding-left: 24px;
  padding-right: 20px;
  white-space: nowrap;
`;
export const subImg = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 24px;
  margin-right: 20px;
`;
export const hamburgerMenu = styled(GiHamburgerMenu)`
  display: none;
  ${media[2]} {
    display: block;
  }
`;
