import styled from "styled-components";

export const CTAWrapper = styled.section`
  align-items: center;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  display: flex;
  justify-content: center;
  padding: 28px;

  img {
    margin-right: 32px;
  }

  p:first-of-type {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration: underline;
    color: var(--secondary);
  }
  p {
    color: #000000;
    text-decoration: none;
    font-family: Helvetica Neue;
    font-weight: bold;
  }
`;
