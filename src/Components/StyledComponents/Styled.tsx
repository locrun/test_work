import styled from "styled-components";
import quotes from "../../static/images/quotes.svg";

export const HeaderContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;
export const PostContainer = styled.div`
  max-width: 1015px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
  }
`;

export const Decor = styled.img`
  display: block;
  width: 145px;
  @media (min-width: 768px) {
    width: 180px;
    margin-right: 75px;
  }

  @media (min-width: 992px) {
    display: block;
    margin-top: 195px;
    margin-left: -39px;
    margin-right: 180px;
  }
  @media (min-width: 1024px) {
    display: block;
    margin-top: 195px;
    margin-left: -39px;
    margin-right: 185px;
  }
  @media (min-width: 1300px) {
    display: block;
    margin-top: 195px;
    margin-left: -39px;
    margin-right: 175px;
  }
`;

export const Title = styled.h2<{ quote?: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: #384758;
  margin-top: 10px;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    font-size: 38px;
    line-height: 38px;
  }
  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 48px;
  }

  &:before {
    display: none;

    @media (min-width: 768px) {
      position: absolute;
      display: block;
      content:${({ quote }) => (quote ? `url(${quotes}` : "")} );
      left: 13.5%;
    }
    @media (min-width: 992px) {
      left: 20%;
    }
    @media (min-width: 1300px) {
      left: 17%;
    }
  }
`;

export const SubTitle = styled.p<{ alignLeft?: string } & { size?: string }>`
  margin: 0;
  display: inline-block;
  text-align: ${({ alignLeft }) => alignLeft || "center"};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #606f81;

  @media (min-width: 992px) {
    font-size: ${({ size }) => size || "18px"};
    line-height: 27px;
  }
`;
export const Post = styled.div`
  padding: 5px 0 0;
`;
export const PostHeading = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  margin-bottom: 10px;
  margin-top: 0px;
  color: #384758;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin-top: 24px;
  }
`;
