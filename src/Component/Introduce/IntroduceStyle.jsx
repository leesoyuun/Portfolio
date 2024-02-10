import styled from "@emotion/styled";

export const Whole = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: max-content;
  margin-right: 10vw;
`;
export const Title = styled.div`
  font-size: 44px;
  white-space: pre-wrap;
  line-height: 1.4;
  font-weight: 700;
`;
export const SubDescription = styled.div`
  color: #aeaeae;
  font-size: 19.5px;
  white-space: pre-wrap;
  line-height: 1.5;
  margin-top: 6px;
  margin-bottom: 4px;
`;
export const MoreAbout = styled.div`
  cursor: pointer;
  font-size: 24px;
  &:hover {
    text-decoration: line-through;
  }
`;
