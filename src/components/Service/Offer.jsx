import React from "react";
import styled from "styled-components";

const Offer = () => {
  return (
    <StyledOffer>
      <StyledOfferContent>
        <div className="offer__content__left">
          <p>What do we offer?</p>
          <span>We provide all professional IT services.</span>
        </div>
        <div className="offer__content__right">
          A key aspect of IT services is infrastructure management. This
          involves the design, implementation, and technical support of
          hardware, software, networks, and servers.
        </div>
      </StyledOfferContent>
      <StyledOfferCards>
        <StyledOfferCard>
          <div className="offer__card__icon">
            <i class="fa-solid fa-arrow-up-right-dots"></i>
          </div>
          <div className="offer__card__head">Development</div>
          <div className="offer__card__content">
            Our development services are crafted to perfection in every detail.
          </div>
        </StyledOfferCard>
        <StyledOfferCard>
          <div className="offer__card__icon">
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div className="offer__card__head">E-commerce</div>
          <div className="offer__card__content">
            Our e-commerce solutions enable you to manage your customers more
            effectively.
          </div>
        </StyledOfferCard>{" "}
        <StyledOfferCard>
          <div className="offer__card__icon">
            <i class="fa-solid fa-circle-user"></i>
          </div>
          <div className="offer__card__head">
            Customer Relationship Management (CRM)
          </div>
          <div className="offer__card__content">
            Our CRM solutions help you manage customer relationships in the most
            modern and efficient way.
          </div>
        </StyledOfferCard>{" "}
        <StyledOfferCard>
          <div className="offer__card__icon">
            <i class="fa-brands fa-aws"></i>
          </div>
          <div className="offer__card__head">Web Design</div>
          <div className="offer__card__content">
            Make your brand more appealing in the online space with our
            professional web design services.
          </div>
        </StyledOfferCard>{" "}
        <StyledOfferCard>
          <div className="offer__card__icon">
            <i class="fa-solid fa-hands-bound"></i>
          </div>
          <div className="offer__card__head">IT Support</div>
          <div className="offer__card__content">
            Our IT support team quickly resolves your technical issues.
          </div>
        </StyledOfferCard>
      </StyledOfferCards>
    </StyledOffer>
  );
};
const StyledOffer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 50px;
`;
const StyledOfferContent = styled.div`
  display: flex;
  justify-content: space-between;
  .offer__content__left {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      font-size: ${({ theme }) => theme.fontSize.md};
      color: rgb(19, 81, 216);
      font-family: "Graphik-Regular400";
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      font-family: "Graphik-Regular400";
    }
  }
  .offer__content__right {
    width:70%;
    display: flex;
    align-items: center;
    font-family: "Graphik-Light300";
  }
`;
const StyledOfferCards = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;
const StyledOfferCard = styled.div`
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.06);
  padding: 50px 24px 40px 26px;
  width: calc(100% / 5 - 40px);
  height: auto;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  
  gap: 12px;
  i {
    font-size: 30px;
    color: #1351d8;
  }

  .offer__card__head {
    font-size: 16px;
    font-family: "Graphik-Regular400";
    color: rgb(28, 28, 28);
    text-decoration: none;
  }

  .offer__card__content {
    margin-top: 10px;
    color: rgba(28, 28, 28, 0.5);
    font-family: "Graphik-Light300";
    font-size: 12px;
  }

  @media only screen and (max-width: 1250px) {
    width: calc(100% / 4 - 40px);
  }
  @media only screen and (max-width: 1000px) {
    width: calc(100% / 3 - 40px);
  }
  @media only screen and (max-width: 800px) {
    width: calc(100% / 2 - 40px);
  }
`;
export default Offer;
