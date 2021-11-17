import React from "react";
import Divider from "../../components/Divider/Divider";
import {
  SharedPaymentSection,
  SharedPaymentSectionLeftSide,
  SharedPaymentSectionRightSide,
} from "./styles";
import sectionImg from "../../assets/ImageSection3.png";

function SharedPayment() {
  return (
    <>
      <SharedPaymentSection>
        <SharedPaymentSectionLeftSide>
          <figure>
            <img
              src={sectionImg}
              alt="Screenshot of Share your home, nanny and costs"
            />
          </figure>
        </SharedPaymentSectionLeftSide>
        <SharedPaymentSectionRightSide>
          <h2>Shared payments made simple</h2>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need never talk
            money or who owes what.
          </p>
          <a href="/">Read how Bridget’s share (without Hapu) ended over $15</a>
        </SharedPaymentSectionRightSide>
      </SharedPaymentSection>
      <Divider />
    </>
  );
}

export default SharedPayment;
