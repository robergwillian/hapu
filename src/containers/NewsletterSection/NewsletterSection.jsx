import React from "react";
import Divider from "../../components/Divider/Divider";
import NewsLetterForm from "../../components/NewsLetterForm/NewsLetterForm";
import { NewsLetterWrapper } from "./styles";

function NewsletterSection() {
  return (
    <>
      <NewsLetterWrapper>
        <h3>Are you a parent without a nanny and looking to share?</h3>
        <p>
          Leave us your name and email and we’ll update you as soon as a share
          becomes available in your area!
        </p>

        <NewsLetterForm />
      </NewsLetterWrapper>
      <Divider />
    </>
  );
}

export default NewsletterSection;
