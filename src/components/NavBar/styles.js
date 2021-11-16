import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  display: flex;
  margin-bottom:92px;
  padding: 0 20px;
  width: 100%;
  font: var(--font) 500;

  a {
    color: #ffffff;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const LogoWrapper = styled.div`
  align-items: center;
  background: var(--logoBg);
  border-radius: 0px 0px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 64px;
  padding: 13px;
  width: 48px;

  img {
    width: 22px;
    height: 22px;
  }
`;

export const Nav = styled.nav`
  margin-left:40px;
  display:flex;
  flex:1;
  flex-direction:row;
  width:
  font-size:14px;
  line-height:20px;
  color:#ffffff;
  
  p {
      margin-right:32px;
  }

`;

export const SideNav = styled.nav`
  display: flex;
  align-items: center;

  button {
    background: var(--primary);
    border: 0px;
    border-radius: 4px;
    outline: 0px;
    color: #ffffff;
    width: 233px;
    height: 44px;
  }

  p {
    margin-left: 23px;
  }
`;
