import styled from 'styled-components'

export const ShareHomeSection = styled.section`
    display:flex;
    margin:0 auto;
    padding:120px 128px 120px 228px;
    justify-content:space-between;

    @media(max-width:700px){
        flex-direction:column-reverse;
        padding:16px;
        justify-content:center;
        align-items:center;
        
    }
`;

export const ShareHomeSectionLeftSide = styled.div`

    max-width:440px;

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
        color: var(--text-secondary);
        font-size: 16px;
        line-height: 28px;
        margin-bottom:40px;

        span {
            color:var(--secondary);
            font-weight:500;
            text-decoration:underline;
            line-height:24px;
        }
    }

    a{
        color:var(--secondary);
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-decoration-line: underline;
    }

    @media(max-width:700px){
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;

        h2{
            width:100%;
            text-align:center;
        }

        p{
            text-align:center;
            width:100%;
        }

        a{
            margin-bottom:64px;
        }
    }
`;
export const ShareHomeSectionRightSide = styled.div`
    
    @media(max-width:700px){
        img{
            width:304px;
            margin:64px 0 24px;
        }
    }
`;
