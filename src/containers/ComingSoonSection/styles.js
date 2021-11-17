import styled from 'styled-components'


export const ComingSoonWrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:96px;

    img{
        margin-bottom:40px;
    }

    p{
        color:var(--text);
        font-size:16px;
        line-height:28px;
        max-width:784px;
        text-align:center;

    }

    @media(max-width:700px){
        text-align:center;
        padding:64px 16px;
    }

`;