import React from "react";
import { useRequest } from "../useRequest";
import { Post, PostTitle, PostBody } from "./StyledComponents/PostStyle";
import s from "./userprofile.module.scss";

export const UserPost = ({ userId }) => {
  const { data } = useRequest(`users/${userId}/posts`);
  const posts = data.slice(0, 3);
  return (
    <Post>
      {posts.map(({ title, body }) => {
        return (
          <React.Fragment key={title}>
            <PostTitle>{title}</PostTitle>
            <PostBody className={s.postBody}>{body}</PostBody>
          </React.Fragment>
        );
      })}
    </Post>
  );
};
