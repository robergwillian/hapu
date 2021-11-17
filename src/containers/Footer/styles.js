import styled from "styled-components";

export const FooterWrapper = styled.footer`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 80px 10px 80px;

  h2 {
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 32px;
  }

  a {
    font-weight: 500;
  }

  @media(max-width:700px){
    padding:64px 16px 10px;
  }
`;

export const CreateNannyShare = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--secondary);
  border-radius: 4px;
  width: 304px;
  height: 68px;
  color: #ffffff;
  padding: 14px;
  margin-bottom: 24px;

  &:hover {
    filter: brightness(0.9);
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 0px;

    span {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 82px;
  margin-bottom: 90px;
  width: 100%;

  @media(max-width:700px){
    flex-direction: column;
    margin-top:40px;
  }
`;

export const NavLinks = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: 115px;
  width: 415px;

  a {
    color: var(--text);
  }

  @media(max-width:700px){
    max-width:70%;
    flex-wrap:wrap;
    margin-left:0;
    justify-content: space-around;
    font-size:14px;
    margin-top:32px;

    a{
      margin-bottom:26px;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
`;

export const Copyright = styled.div`
  color: var(--text);
  font-size: 12px;
  line-height: 16px;
  opacity: 0.6;

  @media(max-width:700px){
    padding:24px 64px 0;
    border-top:1px solid #dfdfdf;
  }
`;
