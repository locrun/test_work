import React, { useState } from "react";

import {
  Decor,
  Title,
  SubTitle,
  HeaderContainer,
  FlexWrapper,
  PostContainer,
} from "./StyledComponents/Styled";

import { UserProfile } from "./UserProfile";
import { UserPost } from "./UserPost";

import { settings } from "./settings";
import "./swipper.css";

import decor from "../static/images/decor-bottom.svg";

import Slider from "react-slick";

import { useRequest } from "../useRequest";

export const MainPage = () => {
  const { data } = useRequest("users");
  const [selected, setSelected] = useState(null);
  const [userName, setUserName] = useState("");

  const onHandleClick = (userId, userName) => {
    setSelected(userId);
    setUserName(userName);
  };

  return (
    <>
      <HeaderContainer>
        <Title>Наши топ-блогеры</Title>
        <SubTitle>Лучшие специалисты в своем деле,</SubTitle>
        <SubTitle>средний опыт работы в профессии - 27 лет</SubTitle>
      </HeaderContainer>
      <Slider {...settings}>
        {data.map((user) => {
          const active = selected === user.id;
          return (
            <div
              key={user.name}
              onClick={() => onHandleClick(user.id, user.name)}
            >
              <UserProfile user={user} active={active} />
            </div>
          );
        })}
      </Slider>
      <FlexWrapper>
        <Decor src={decor} alt="decor" />
        <PostContainer>
          {selected && <Title quote>3 актуальных поста {userName}</Title>}
          <UserPost userId={selected} />
        </PostContainer>
      </FlexWrapper>
    </>
  );
};
