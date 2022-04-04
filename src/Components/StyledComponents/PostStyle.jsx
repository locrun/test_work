import styled from "styled-components";

export const Post = styled.div`
  padding: 5px 0 0;
`;

export const PostTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  margin-bottom: 10px;
  color: #384758;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
export const PostBody = styled.p`
  margin-top: 6px;
  color: #606f81;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 28px;
  }
`;
