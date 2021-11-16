import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  padding: 0 228px 0px 128px;
`;

export const HeroText = styled.div`
  color: #ffffff;
  font-family: var(--font);
  padding-top:30px;
  width:584px;
  margin-right:180px;

  

  h1 {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1px;
    font-weight: 500;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    
  }
`;

export const HeroAction = styled.div`
  display: flex;
  align-items: center;
  margin-top:40px;
  margin-bottom:170px;

  button {
    border: 0px;
    outline: 0px;
    background: var(--primary);
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    i {
      background: #ffffff;
    }
  }

  p {
      font-size: 16px;
      line-height:24px;
      text-decoration: underline;
      margin-left:16px;

      a{
          color:#ffffff;
      }
  }
`;

export const HeroImg = styled.div``;
