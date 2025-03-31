import React from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";

const Text = () => {
  return (
    <StyledSection>
      <StyledText>
        <span className="develop">İnkişaf</span>
        <h1>Mükəmməl IT həlləri biznesinizin artımını sürətləndirir</h1>
        <span className="description">
          Biznesiniz üçün ən müasir və inteqrasiya olunmuş IT həlləri təqdim
          edirik, işinizi daha effektiv və məhsuldar etmək üçün buradayıq.
        </span>
      </StyledText>
      <StyledButton>
        <button className="moreBtn">
          <span>Daha çox öyrən</span>
        </button>
        <button className="linkBtn">
          <span>
            Əlaqə qurun
            <span>
              <i class="fa-solid fa-arrow-up-long"></i>
            </span>
          </span>
        </button>
      </StyledButton>
    </StyledSection>
  );
};
const StyledSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media only screen and (max-width: 800px) {
    order: 2;
    width: 83% !important;
    text-align: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  .develop {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: #f0b90b;
    font-family: "Poppins-Regular400";
  }
  .description {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: "Poppins-Regular400";
    padding: 20px 0;
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSize.custom1};
    font-family: "Poppins-Regular400";
  }

    @media only screen and (max-width: 1400px) {
    .h1 {
      font-size: 48px !important;
      line-height: 60px !important;
  }
}

@media only screen and (max-width: 1300px) {
    .h1 {
      font-size: 44px !important;
      line-height: 55px !important;
    }
    .description {
      font-size: 18px !important;
    }
}

@media only screen and (max-width: 1200px) {
    .h1{
      font-size: 42px !important;
      line-height: 55px !important;
    }
}

@media only screen and (max-width: 1000px) {
    .h1{
      font-size: 40px !important;
      line-height: 55px !important;
    }
    .description {
      font-size: 17px !important;
  }
}

@media only screen and (max-width: 900px) {
    .develop {
      font-size: 12px !important;
    }
    h1 {
      font-size: 35px !important;
      line-height: 48px !important;
    }
    .description {
      font-size: 14px !important;
  }
}
  

@media only screen and (max-width: 800px) {

      order: 2;
      width: 83% !important;
      text-align: center;
      h1{
        margin: 5px 0;
        font-size: 32px !important;
        line-height: 42px !important;
      }
      .develop{
        margin: 0 auto;
      }
    }
}

@media only screen and (max-width: 700px) {

      width: 85% !important;
      h1{
        margin: 5px 0;
        font-size: 28px !important;
        line-height: 38px !important;
      }
      .description{
        padding-top: 10px !important;
      }
  }
}

@media only screen and (max-width: 600px) {
      h1{
        font-size: 28px !important;
        line-height: 35px !important;
      }
      .description{
        font-size: 13px !important;
      }
}


@media only screen and (max-width: 520px) {
      h1{
        font-size: 23px !important;
        line-height: 32px !important;
        letter-spacing: 1.1px !important;
      }
      .description{
        font-size: 12px !important;
    }
}

@media only screen and (max-width: 485px) {
      h1{
        font-size: 20px !important;
        line-height: 30px !important;
        letter-spacing: 1.1px !important;
      }
      .description{
        font-size: 11px !important;
      }
    }


    @media only screen and (max-width: 410px) {
      h1{
        font-size: 21px !important;
        line-height: 30px !important;
      }
      .description{
        padding-top: 5px !important;
        padding-bottom: 16px !important;
      }
}
`;
const StyledButton = styled.div`
  display: flex;
  gap: 1.5rem;
  .linkBtn {
    background-color: #f0b90b;
    position: relative;
    padding: 10px 35px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: "Poppins-Regular400";
    text-decoration: none;
    cursor: pointer;
    border: 1px solid #f0b90b;
    border-radius: 25px;
    outline: none;
    overflow: hidden;
    color: #fff;
    transition: color 0.3s 0.1s ease-out;
    text-align: center;
    &::before {
      position: absolute;
      margin: auto;
      content: "";
      border-radius: 50%;
      display: block;
      width: 20em;
      height: 20em;
      left: -5em;
      text-align: center;
      transition: box-shadow 0.5s ease-out;
      z-index: 0;
    }
    span {
      z-index: 1;
      span {
        font-size: 13px;
        i {
          transform: rotate(25deg);
        }
      }
    }
    &:hover {
      color: #f0b90b;
      border: 1px solid #f0b90b;
      &::before {
        box-shadow: inset 0 0 0 10em #fff;
      }
    }
  }
  .moreBtn {
    background: transparent;
    position: relative;
    padding: 12px 35px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: "Poppins-Regular400";
    text-decoration: none;
    cursor: pointer;
    border: 1px solid #f0b90b;
    border-radius: 25px;
    outline: none;
    overflow: hidden;
    color: #f0b90b;
    transition: color 0.3s 0.1s ease-out;
    text-align: center;
    &::before {
      position: absolute;
      margin: auto;
      content: "";
      border-radius: 50%;
      display: block;
      width: 20em;
      height: 20em;
      left: -5em;
      text-align: center;
      transition: box-shadow 0.5s ease-out;
      z-index: 0;
    }
    span {
      z-index: 1;
    }
    &:hover {
      color: #fff;
      border: 1px solid #f0b90b;
      &::before {
        box-shadow: inset 0 0 0 10em #f0b90b;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    button {
      font-size: 14px !important;
      padding: 12px 32px !important;
    }
  }

  @media only screen and (max-width: 900px) {
    button {
      font-size: 12px !important;
      padding: 12px 30px !important;
    }
    button i {
      font-size: 12px !important;
    }
  }

  @media only screen and (max-width: 700px) {
    button {
      padding: 10px 26px !important;
    }
    button i {
      font-size: 11px !important;
    }
  }

  @media only screen and (max-width: 485px) {
    button {
      padding: 9px 24px !important;
    }
    button i {
      font-size: 11px !important;
    }
  }

  @media only screen and (max-width: 450px) {
    button {
      padding: 9px 24px !important;
    }
    button i {
      font-size: 11px !important;
    }
  }

  @media only screen and (max-width: 410px) {
    button {
      font-size: 10px !important;
      padding: 9px 24px !important;
    }
    button i {
      font-size: 10px !important;
    }
  }
`;
export default Text;
