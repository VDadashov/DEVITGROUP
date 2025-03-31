import React from "react";
import styled from "styled-components";

const ContactText = () => {
  return (
    <StyledText>
      <div class="contact__text__name">Contact</div>
      <div class="contact__text__head">
        We would be happy to get in touch with you!
      </div>
      <div class="contact__text__subject">
        Our friendly team is always ready to answer your questions.
      </div>
    </StyledText>
  );
};
const StyledText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  .contact__text__name {
    font-family: Poppins-Regular400;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #8aa43c;
    margin-bottom: 10px;
  }
  .contact__text__head {
    font-family: Poppins-Regular400;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 20px;
  }
  .contact__text__subject {
    font-family: Poppins-Regular400;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
  }

  @media only screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    .contact__text__name {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 10px;
    }
    .contact__text__head {
      font-size: 26px;
      font-weight: 700;
      line-height: 36px;
      margin-bottom: 20px;
    }
    .contact__text__subject {
      font-size: 16px;
      font-weight: 400;
      line-height: 32px;
    }
  }
  @media only screen and (max-width: 720px) {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    .contact__text__name {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 10px;
    }
    .contact__text__head {
      font-size: 26px;
      font-weight: 700;
      line-height: 36px;
      margin-bottom: 20px;
    }
    .contact__text__subject {
      font-size: 16px;
      font-weight: 400;
      line-height: 32px;
    }
  }

  @media only screen and (max-width: 660px) {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    .contact__text__name {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 10px;
    }
    .contact__text__head {
      font-size: 26px;
      font-weight: 700;
      line-height: 36px;
      margin-bottom: 20px;
    }
    .contact__text__subject {
      font-size: 16px;
      font-weight: 400;
      line-height: 32px;
    }
  }

  @media only screen and (max-width: 515px) {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    .contact__text__name {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 10px;
    }
    .contact__text__head {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      margin-bottom: 20px;
    }
    .contact__text__subject {
      font-size: 16px;
      font-weight: 400;
      line-height: 32px;
    }
  }
  @media only screen and (max-width: 480px) {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    .contact__text__name {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 10px;
    }
    .contact__text__head {
      font-size: 18px;
      font-weight: 700;
      line-height: 36px;
      margin-bottom: 10px;
    }
    .contact__text__subject {
      font-size: 14px;
      font-weight: 400;
      line-height: 32px;
    }
  }
  @media only screen and (max-width: 400px) {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    contact__text__name {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 10px;
    }
    contact__text__head {
      font-size: 18px;
      font-weight: 700;
      line-height: 36px;
      margin-bottom: 10px;
    }
    contact__text__subject {
      font-size: 14px;
      font-weight: 400;
      line-height: 32px;
    }
  }
`;
export default ContactText;
