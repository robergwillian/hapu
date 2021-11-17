import styled from "styled-components";

export const SharedPaymentSection = styled.section`
  display: flex;
  margin: 0 auto;
  padding: 96px 228px;
  justify-content: space-between;
`;

export const SharedPaymentSectionLeftSide = styled.div``;

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
`;
