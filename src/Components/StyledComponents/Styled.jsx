import styled from "styled-components";
import quotes from "../../static/images/quotes.svg";

export const HeaderContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;
export const PostContainer = styled.div`
  max-width: 1040px;
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

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: #384758;
  margin-top:10px;
  margin-bottom:25px;

  @media(min-width:768px){
    font-size: 38px;
    line-height: 38px;
 
  }
  @media(min-width:1024px){
    font-size: 48px;
    line-height: 48px;
  }

 

  &:before {
   display:none;

   @media(min-width:768px){
      position: absolute;
      display: block;
      content:${(props) => (props.quote ? `url(${quotes}` : "")} );
      left:13.5%;
    }
    @media(min-width:992px){
      left:20%;
    }
    @media(min-width:1300px){
      left:17%;
    }

  }
`;

export const SubTitle = styled.p`
  margin: 0;
  display: inline-block;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #606f81;

  @media (min-width: 992px) {
    font-size: 18px;
    line-height: 27px;
  }
`;
