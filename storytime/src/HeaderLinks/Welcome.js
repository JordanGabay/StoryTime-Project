import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { search, users, messageCircle } from "react-icons-kit/feather";
import WelcomeBackground from "../images/WelcomeBackground.jpg";

const Welcome = () => {
  return (
    <MainContent>
      <Bg src={WelcomeBackground} alt="welcome" />
      <WelcomeWrapper>
        <Header>
          <StoryTime>Welcome to StoryTime</StoryTime>
        </Header>
        <Dreams>
          <h3>Story Stitching! Stich stories together</h3>
          <Features>
            <Icon icon={search} size={20} />
            <Feature>Follow people who share your interests.</Feature>
          </Features>
          <Features>
            <Icon icon={users} size={20} />
            <Feature>Read people's latest stories and add to them yourself</Feature>
          </Features>
          <Features>
            <Icon icon={messageCircle} size={20} />
            <Feature>Join conversation with your connections</Feature>
          </Features>
        </Dreams>
      </WelcomeWrapper>
    </MainContent>
  );
};

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  width: 100%;
`;

const Bg = styled.img`
  position: absolute;
  top: 8vh;
  height: 92vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -10;
`;

const WelcomeWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin-top: 20vh;
  color: white;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
`;

const Header = styled.div`
  width: 100%;
`;

const Features = styled.div`
  display: flex;
  padding-top: 15px;
`

const Feature = styled.div`
  margin-left: 10px;
`

const StoryTime = styled.h1`
  padding: 0 0.5em;
`;

const Dreams = styled.div`
  background-color: rgba(43, 43, 43, 0.8);
  padding: 1em;
  width: 100%;
  margin-top: 20px;
`;

export default Welcome;
