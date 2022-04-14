import React from "react";
import { useRequest } from "../useRequest";
import { Post, PostHeading, SubTitle } from "./StyledComponents/Styled";

export const UserPost = ({ userId }: any) => {
  const { users } = useRequest(`users/${userId}/posts`);
  const posts = users.slice(0, 3);

  return (
    <Post>
      {posts &&
        posts.map(({ title, body }) => {
          return (
            <React.Fragment key={title}>
              <PostHeading>{title}</PostHeading>
              <SubTitle alignLeft={"left"} size={20 + "px"}>
                {body}
              </SubTitle>
            </React.Fragment>
          );
        })}
    </Post>
  );
};
