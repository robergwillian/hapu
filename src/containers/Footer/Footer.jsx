import React from "react";
import {
  FooterWrapper,
  CreateNannyShare,
  NavLinks,
  Nav,
  SocialLinks,
  Copyright
} from "./styles";
import calendar from "../../assets/calendar.svg";
import hapuLogo from "../../assets/hapu.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <FooterWrapper>
      <h2>Become a nanny share host</h2>
      <p>Takes less than 5 minutes to get started</p>
      <CreateNannyShare>
        <i>
          <img src={calendar} alt="Become a nanny share host button" />
        </i>
        <p>
          Create Your Nanny Share
          <br />
          <span>Takes less than 5 minutes</span>
        </p>
      </CreateNannyShare>
      <a href="/">Or browse local nanny-shares</a>
      <Nav>
        <div>
          <img src={hapuLogo} alt="Hapu Nanny Sharing" />
        </div>
        <NavLinks>
          <a href="/">Share Your Nanny</a>
          <a href="/">Our Story</a>
          <a href="/">Blog</a>
          <a href="/">Terms & Privacy</a>
        </NavLinks>
        <SocialLinks>
          <a href="/">
            <img src={facebook} alt="Check out our facebook page" />
          </a>
          <a href="/">
            <img src={twitter} alt="See what we have to say on Twitter" />
          </a>
          <a href="/">
            <img src={instagram} alt="Check our stories on instagram" />
          </a>
        </SocialLinks>
      </Nav>
      <Copyright>Copyright © 2017 Hapu PTY Limited All rights reserved</Copyright>
    </FooterWrapper>
  );
}

export default Footer;
