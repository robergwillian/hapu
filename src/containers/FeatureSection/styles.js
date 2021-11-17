import styled from 'styled-components'

export const FeatureWrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:100px 228px;
    color: var(--text);
    


    h2 {
        font-size:28px;
        line-height: 32px;
        font-weight:500;
        margin-bottom:40px;
    }

    p{
        font-size:16px;
        line-height:28px;
        text-align:center;
        font-weight:400;
        max-width:784px;
        margin-bottom:40px;
    }

    a{
        color:var(--secondary);
        text-decoration:underline;
        font-weight:500;
        margin-bottom:64px;
    }

    @media(max-width:700px){
        padding:64px 16px;
        text-align:center;

        img{
            display:none;
        }

        a {
            margin-bottom:0;
        }
        
    }
`;