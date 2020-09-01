import React from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { heart, messageSquare, plus, share } from "react-icons-kit/feather";
import Action from "../components/Action";

export const StoryFeed = ({ filteredUsers }) => (
  <MainWrapper>
    <h1>Story Feed</h1>
    {filteredUsers.map((user) =>
      user.stories.map((story, index) => (
        <Feed key={index}>
          <UserStories>
            <Users>{user.name}</Users>
            <UserHandle>{user.handle}</UserHandle>
            <Stories>{story}</Stories>
          </UserStories>
          <IconWrapper>
            <Action color="rgb(27, 149, 224)" size={40}>
              <Icon icon={messageSquare} />
            </Action>
            <Action color="rgb(23,191,99)" size={40}>
              <Icon icon={plus} />
            </Action>
            <Action color="red" size={40}>
              <Icon icon={heart} />
            </Action>
            <Action color="grey" size={40}>
              <Icon icon={share} />
            </Action>
          </IconWrapper>
        </Feed>
      ))
    )}
  </MainWrapper>
);

const Feed = styled.div`
  border: 2px solid grey;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
  
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  border-bottom: 2px solid grey;
  width: 100%;
  padding: 1rem 0;
`;

const UserStories = styled.div`
  border-bottom: 1px solid gray;
`;

const Stories = styled.p`
  padding: 5px;
  margin-bottom: 10px;
`;

const Users = styled.p`
  padding: 5px;
`;

const UserHandle = styled.p`
  padding: 5px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
