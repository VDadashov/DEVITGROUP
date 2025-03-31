import React from "react";
import styled from "styled-components";

const ContactPhone = () => {
  return (
    <StyledPhone>
      <div class="contact__number">
        <div class="number__icon">
          <i class="fa-solid fa-phone"></i>
        </div>
        <div class="number__text">
          <div class="number__text__head">Zəng edin</div>
          <div class="number__text__time">
            Bazar ertəsi - Cümə: 09:00 - 21:00
          </div>
          <div class="number__text__number">
            <a href="#">+994 55 548 28 66</a>
          </div>
        </div>
      </div>
      <div class="contact__support">
        <div class="support__icon">
          <i class="fa-regular fa-comment"></i>
        </div>
        <div class="support__text">
          <div class="support__text__head">Dəstək üçün yazın</div>
          <div class="support__text__subject">Yardım üçün buradayıq.</div>
          <div class="support__text__number">
            <a href="#">devservice@gmail.com</a>
          </div>
        </div>
      </div>
    </StyledPhone>
  );
};
const StyledPhone = styled.div`
  font-family: Poppins-Regular400;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .contact__number {
    display: flex;
    gap: 25px;
    .number__icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: #ecf8ca;
      color: #6b7f2e;
    }
    .number__text {
      display: flex;
      flex-direction: column;
      gap: 8px;
      &__head {
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
      }
      &__time {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
      &__number {
        a {
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: #8aa43c;
        }
      }
    }
  }
  .contact__support {
    display: flex;
    gap: 25px;
    .support__icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: #ecf8ca;
      color: #6b7f2e;
    }
    .support__text {
      display: flex;
      flex-direction: column;
      gap: 8px;
      &__head {
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
      }
      &__time {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
      &__number {
        a {
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: #8aa43c;
        }
      }
    }
  }

  @media only screen and (max-width: 950px) {
    width: 40%;
    flex-direction: column;
    gap: 30px;
    .contact__number {
      gap: 25px;
      .number__icon {
        width: 40px;
        height: 40px;
        border: none;
      }
      .number__text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            color: #8aa43c;
          }
        }
      }
    }
    .contact__support {
      gap: 25px;
      .support__icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
      }
      .support__text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 720px) {
    width: 100%;
    flex-direction: row !important;
    gap: 30px;
    .contact__number {
      gap: 25px;
      .number__icon {
        width: 40px;
        height: 40px;
        border: none;
      }
      .number__text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            color: #8aa43c;
          }
        }
      }
    }
    .contact__support {
      gap: 25px;
      .support__icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
      }
      .support__text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 660px) {
    width: 100%;
    flex-direction: row !important;
    gap: 25px;
    .contact__number {
      gap: 20px;
      .number__icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
      }
      .number__text {
        display: flex;
        flex-direction: column;
        gap: 7px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;
          }
        }
      }
    }
    .contact__support {
      gap: 20px;
      .support__icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
      }
      .support__text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 515px) {
    width: 100%;
    flex-direction: row !important;
    gap: 20px;
    .contact__number {
      gap: 15px;
      .number__icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
      }
      .number__text {
        display: flex;
        flex-direction: column;
        gap: 7px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 12px;
            font-weight: 600;
            line-height: 24px;
          }
        }
      }
    }
    .contact__support {
      gap: 20px;
      .support__icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
      }
      .support__text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 12px;
            font-weight: 600;
            line-height: 24px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: row !important;
    gap: 20px;
    .contact__number {
      gap: 15px !important;
      .number__icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
      }
      .number__text {
        display: flex;
        flex-direction: column;
        gap: 6px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 12px;
            font-weight: 600;
            line-height: 24px;
          }
        }
      }
    }
    .contact__support {
      gap: 20px;
      .support__icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
      }
      .support__text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 12px;
            font-weight: 600;
            line-height: 24px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
    flex-direction: column !important;
    gap: 30px;
    .contact__number {
      gap: 15px !important;
      .number__icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
      }
      .number__text {
        display: flex;
        flex-direction: column;
        gap: 6px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 12px;
            font-weight: 600;
            line-height: 24px;
          }
        }
      }
    }
    .contact__support {
      gap: 20px;
      .support__icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
      }
      .support__text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        &__head {
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
        }
        &__time {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
        }
        &__number {
          a {
            text-decoration: none;
            font-size: 12px;
            font-weight: 600;
            line-height: 24px;
          }
        }
      }
    }
  }
`;
export default ContactPhone;
