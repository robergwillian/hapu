import styled from "styled-components";

export const NewsLetterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 228px;

  h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 74px;
  }

  input {
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #dfdfdf;
    height: 48px;
    margin-right: 12px;
    padding: 0 20px;
    width: 232px;
  }

  input[type="button"] {
    width:96px;
    height:48px;
    background:var(--primary);
    color:#ffffff;

    &:hover{
        cursor:pointer;
        filter:brightness(0.9);
    }
  }

  @media(max-width:700px){
    padding:64px 16px;

    h3, p{
      max-width:100%;
      text-align:center;
      line-height:28px;
    }

    p{
      margin-bottom:32px;
    }

    input, input[type="button"]{
      width:100%;
      margin-bottom:10px;
    }
  }
`;
