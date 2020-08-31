import React from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { heart, messageSquare, repeat, share } from "react-icons-kit/feather";
import Action from "../components/Action";

export const StoryFeed = ({ filteredUsers }) =>
  filteredUsers.map((user) => (
    <MainWrapper>
      <h1>Story Feed</h1>
      <UserStories>
        <Users>{user.name}</Users>
        <UserHandle>{user.handle}</UserHandle>
        <Stories>{user.stories}</Stories>
      </UserStories>
      <IconWrapper>
        <Action color="rgb(27, 149, 224)" size={40}>
          <Icon icon={messageSquare} />
        </Action>
        <Action color="rgb(23,191,99)" size={40}>
          <Icon icon={repeat} />
        </Action>
        <Action color="red" size={40}>
          <Icon icon={heart} />
        </Action>
        <Action color="grey" size={40}>
          <Icon icon={share} />
        </Action>
      </IconWrapper>
    </MainWrapper>
  ));

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  border-bottom: 2px solid grey;
  width: 100%;
  padding: 1rem;
`;

const UserStories = styled.div``;

const Stories = styled.p`
  padding: 5px;
`;

const Users = styled.p`
  padding: 5px;
`;

const UserHandle = styled.p``;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
