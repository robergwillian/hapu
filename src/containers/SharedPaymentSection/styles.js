import styled from "styled-components";

export const SharedPaymentSection = styled.section`
  display: flex;
  margin: 0 auto;
  padding: 96px 228px;
  justify-content: space-between;


  @media(max-width:700px){
      flex-direction:column;
      padding:64px 24px;
      justify-content:center;
      align-items:center;
  }
`;

export const SharedPaymentSectionLeftSide = styled.div`


  @media(max-width:700px){
      img{
          max-width:312px;
          margin-bottom:40px;
      }
  }
`;

export const SharedPaymentSectionRightSide = styled.div`
max-width:460px;

    h2{
        color:var(--text);
        font-weight: 500;
        font-family:var(--font);
        font-size: 28px;
        line-height: 32px;
        margin-bottom:40px;
    }

    p{
        color: var(--text);
        font-size: 16px;
        line-height: 28px;
        margin-bottom:40px;
    }

    a{
        color:var(--secondary);
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-decoration-line: underline;
    }

    @media(max-width:700px){
        text-align:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        h2{
            max-width:70%;
            margin-bottom:16px;
        }

        p{
            
        }
    }
`;
