import styled from "styled-components";

export const CTAWrapper = styled.section`
  max-width: 1440px;
  padding: 28px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

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
    font-weight:bold;
  }
`;
