import React from "react";
import { useRequest } from "../useRequest";
import { Post, PostHeading, SubTitle } from "./StyledComponents/Styled";

export const UserPost = ({ userId }) => {
  const { data } = useRequest(`users/${userId}/posts`);
  const posts = data.slice(0, 3);
  return (
    <Post>
      {posts.map(({ title, body }) => {
        return (
          <React.Fragment key={title}>
            <PostHeading>{title}</PostHeading>
            <SubTitle alignLeft size>
              {body}
            </SubTitle>
          </React.Fragment>
        );
      })}
    </Post>
  );
};
