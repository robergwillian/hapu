import styled from "styled-components";

export const DividerBG = styled.div`
  background: #faf9f7;
  max-width: 1440px;
`;

export const DividerClass = styled.hr`
  background: #f2f2f2;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
  max-width: 784px;

  @media(max-width:700px){
    max-width:328px;
  }
`;
