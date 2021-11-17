import React from "react";
import {
  ShareHomeSection,
  ShareHomeSectionLeftSide,
  ShareHomeSectionRightSide,
} from "./styles";
import sectionImg from "../../assets/ImageSection1.png";
import Divider from "../../components/Divider/Divider";

function ShareSection() {
  return (
    <>
    <ShareHomeSection>
      <ShareHomeSectionLeftSide>
        <h2>Share your home, nanny and costs</h2>
        <p>
          You have a fantastic home, a fantastic nanny and wouldn’t cutting your
          costs in half be, well, fantastic?! If only it was easy to connect
          with other parents to share your costs? Well now it is, with Hapu.{" "}
          <span>Hapu means tribe</span> and it’s our foundational 3 tribal
          principles that empowers you to create and manage your own tribe. A
          tribe that together has the power to create new affordable solutions
          in childcare that work for you and your community.
        </p>
        <a href="/">Ready to get started?</a>
      </ShareHomeSectionLeftSide>
      <ShareHomeSectionRightSide>
        <figure>
          <img
            src={sectionImg}
            alt="Screenshot of Share your home, nanny and costs"
          />
        </figure>
      </ShareHomeSectionRightSide>
    </ShareHomeSection>
    <Divider />
    </>
  );
}

export default ShareSection;
