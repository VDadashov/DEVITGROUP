import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <StyledFormSection>
      <StyledFormContent>
        <div>
          <h3>Contact Us</h3>
        </div>
        <div>
          <p>
            "Do you have a question or suggestion? Contact us – we would be
            happy to hear from you! Reach out to us whenever you need
            assistance."
          </p>
        </div>
      </StyledFormContent>
      <StyledForm action="submit">
        <div class="form__info">
          <div class="form__info__name">
            <label htmlFor="fullname">Full Name</label>
            <input
              name="fullname"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div class="form__info__email">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="E-mail address" />
          </div>
        </div>
        <div class="form__subject">
          <label htmlFor="subject">Subject</label>
          <textarea
            name="subject"
            id="subject"
            placeholder="Write your message"
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </StyledForm>
    </StyledFormSection>
  );
};
const StyledFormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  div {
    h3 {
      font-family: Poppins-Regular400;
      font-size: 36px;
      font-weight: 700;
      line-height: 48px;
    }
    p {
      font-family: Poppins-Regular400;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  @media only screen and (max-width: 1380px) {
    gap: 40px;
    .contact__text {
      gap: 20px;
      &__header {
        font-size: 30px;
        font-weight: 700;
        line-height: 48px;
      }
      &__text {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    gap: 30px;
    .contact__text {
      gap: 15px;
      &__header {
        font-size: 30px;
        font-weight: 700;
        line-height: 48px;
      }
      &__text {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }

  @media only screen and (max-width: 1150px) {
    gap: 20px;
    .contact__text {
      gap: 10px;
      &__header {
        font-size: 30px;
        font-weight: 700;
        line-height: 48px;
      }
      &__text {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }

  @media only screen and (max-width: 950px) {
    gap: 30px;
    .contact__text {
      gap: 15px;
      &__header {
        font-size: 30px;
        font-weight: 700;
        line-height: 48px;
      }
      &__text {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }

  @media only screen and (max-width: 720px) {
    gap: 30px;
    .contact__text {
      gap: 15px;
      &__header {
        font-size: 30px;
        font-weight: 700;
        line-height: 48px;
      }
      &__text {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }

  @media only screen and (max-width: 660px) {
    gap: 30px;
    .contact__text {
      gap: 15px;
      &__header {
        font-size: 30px;
        font-weight: 700;
        line-height: 48px;
      }
      &__text {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    gap: 30px;
    .contact__text {
      gap: 15px;
      &__header {
        font-size: 30px;
        font-weight: 700;
        line-height: 48px;
      }
      &__text {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    gap: 30px;
    .contact__text {
      gap: 15px;
      &__header {
        font-size: 30px;
        font-weight: 700;
        line-height: 48px;
      }
      &__text {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    gap: 30px;
    .contact__text {
      gap: 15px;
      &__header {
        font-size: 30px;
        font-weight: 700;
        line-height: 48px;
      }
      &__text {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }
`;
const StyledForm = styled.div`
  font-family: Poppins-Regular400;
  display: flex;
  flex-direction: column;
  gap: 50px;
  input::placeholder,
  textarea::placeholder {
    font-family: Poppins-Regular400;
  }
  .form__info {
    display: flex;
    gap: 50px;
    &__name {
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        width: 325px;
        padding: 12px 0;
        padding-left: 15px;
      }
    }
    &__email {
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        width: 325px;
        padding: 12px 0;
        padding-left: 15px;
      }
    }
  }
  .form__subject {
    display: flex;
    flex-direction: column;
    gap: 10px;
    #subject {
      max-width: 700px;
      height: 160px;
      font-size: 16px;
      padding-left: 25px;
      padding-top: 15px;
    }
  }
  button {
    padding: 16px 24px;
    width: 700px;
    background-color: #000;
    color: #fff;
    border: none;
  }

  @media only screen and (max-width: 1380px) {
    gap: 40px;
    .form__info {
      gap: 40px;
      &__name {
        gap: 10px;
        input {
          width: 310px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
      &__email {
        gap: 10px;
        input {
          width: 310px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
    }
    .form__subject {
      gap: 10px;
      #subject {
        max-width: 660px;
        height: 160px;
        font-size: 16px;
        padding-left: 25px;
        padding-top: 15px;
      }
    }
    button {
      padding: 16px 24px;
      width: 660px;
    }
  }

  @media only screen and (max-width: 1250px) {
    gap: 30px;
    .form__info {
      gap: 20px;
      &__name {
        gap: 10px;
        input {
          width: 290px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
      &__email {
        gap: 10px;
        input {
          width: 290px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
    }
    .form__subject {
      gap: 10px;
      #subject {
        max-width: 600px;
        height: 160px;
        font-size: 16px;
        padding-left: 25px;
        padding-top: 15px;
      }
    }
    button {
      padding: 16px 24px;
      width: 600px;
    }
  }

  @media only screen and (max-width: 1150px) {
    gap: 20px;
    .form__info {
      gap: 20px;
      &__name {
        gap: 10px;
        input {
          width: 240px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
      &__email {
        gap: 10px;
        input {
          width: 240px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
    }
    .form__subject {
      gap: 10px;
      #subject {
        max-width: 500px;
        height: 160px;
        font-size: 16px;
        padding-left: 25px;
        padding-top: 15px;
      }
    }
    button {
      padding: 16px 24px;
      width: 500px;
    }
  }

  @media only screen and (max-width: 950px) {
    gap: 30px;
    .form__info {
      gap: 20px;
      &__name {
        gap: 10px;
        input {
          width: 340px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
      &__email {
        gap: 10px;
        input {
          width: 340px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
    }
    .form__subject {
      gap: 10px;
      #subject {
        max-width: 700px;
        height: 160px;
        font-size: 16px;
        padding-left: 25px;
        padding-top: 15px;
      }
    }
    button {
      padding: 16px 24px;
      width: 700px;
    }
  }

  @media only screen and (max-width: 720px) {
    gap: 30px;
    .form__info {
      gap: 20px;
      &__name {
        gap: 10px;
        input {
          width: 260px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
      &__email {
        gap: 10px;
        input {
          width: 260px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
    }
    .form__subject {
      gap: 10px;
      #subject {
        max-width: 540px;
        height: 150px;
        font-size: 16px;
        padding-left: 25px;
        padding-top: 15px;
      }
    }
    button {
      padding: 16px 24px;
      width: 540px;
    }
  }

  @media only screen and (max-width: 660px) {
    gap: 30px;
    .form__info {
      gap: 20px;
      &__name {
        gap: 10px;
        input {
          width: 230px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
      &__email {
        gap: 10px;
        input {
          width: 230px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
    }
    .form__subject {
      gap: 10px;
      #subject {
        max-width: 540px;
        height: 150px;
        font-size: 16px;
        padding-left: 25px;
        padding-top: 15px;
      }
    }
    button {
      padding: 16px 24px;
      width: 450px;
    }
  }



  @media only screen and (max-width: 400px) {
    gap: 30px;
    .form__info {
      gap: 20px;
      &__name {
        gap: 10px;
        input {
          width: 150px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
      &__email {
        gap: 10px;
        input {
          width: 150px;
          padding: 12px 0;
          padding-left: 15px;
        }
      }
    }
    .form__subject {
      gap: 10px;
      #subject {
        max-width: 540px;
        height: 150px;
        font-size: 16px;
        padding-left: 25px;
        padding-top: 15px;
      }
    }
    button {
      padding: 16px 24px;
      width: 300px;
    }
  }
`;
const StyledFormSection = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
`;
export default ContactForm;
