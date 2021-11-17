import styled from 'styled-components'

export const ShareHomeSection = styled.section`
    width:1440px;
    display:flex;
    margin:0 auto;
    background: #FAF9F7;
    padding:120px 128px 120px 228px;
    justify-content:space-between;
`;

export const ShareHomeSectionLeftSide = styled.div`

    max-width:400px;

    h2{
        color:var(--text);
        font-weight: 500;
        font-family:var(--font);
        font-size: 28px;
        line-height: 32px;
        margin-bottom:40px;
        max-width:285px;
    }

    p{
        color: #4A4A4A;
        font-size: 16px;
        line-height: 28px;
        margin-bottom:40px;

        span {
            color:var(--secondary);
            font-weight:bold;
            text-decoration:underline;
            line-height:24px;
        }
    }

    a{
        color:var(--secondary);
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        text-decoration-line: underline;
    }
`;
export const ShareHomeSectionRightSide = styled.div`
    
`;
