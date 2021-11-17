import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  padding: 0 228px 0px 128px;

  @media(max-width:700px){
    padding:70px;
  }
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

  @media(max-width:700px){
    width:100%;
    padding:0;
    margin:0;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;

    h1{
      font-size:28px;
      line-height:32px;
      max-width:250px;
    }

    p{
      font-size:16px;
      line-height:28px;
      text-align:center;
    }
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

  @media(max-width:700px){
    margin-bottom:0px;
  }
`;

export const HeroImg = styled.div`

  @media(max-width:700px){
    display:none;
  }


`;
