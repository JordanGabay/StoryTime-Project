import React from 'react';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {search, users, messageCircle} from 'react-icons-kit/feather'
import WelcomeBackground from '../images/WelcomeBackground.jpg'

const Welcome = () => {
      return (
        <MainWrapper>
          <Wrapper>
              <Image1 src={WelcomeBackground} alt="welcome"/>
            <TextWrapper2>
              <Stitch>Story stitching! Stitch stories together</Stitch>
            </TextWrapper2>
            <TextWrapper>
              <Icon size={20} icon={search} />
              <Interest>Follow people who share your interests.</Interest>
            </TextWrapper>
            <TextWrapper>
              <Icon size={20} icon={users} />
              <Read>
                Read people's latest stories and add to them yourself.
              </Read>
            </TextWrapper>
            <TextWrapper>
              <Icon size={20} icon={messageCircle} />
              <Join>Join conversations with your connections.</Join>
            </TextWrapper>
          </Wrapper>
        </MainWrapper>
      );
}

const Image1 = styled.img`
height: 100vh;
width: 100%;
background-position: center;
background-size:cover;
background-repeat: no-repeat;
display: flex;
justify-content:center;
align-items:center;
`

const MainWrapper = styled.div``;

const Wrapper = styled.div`
  height: 400px;
  margin: 0 auto;
  background-size: cover;
`;

const Interest = styled.h3`
  margin-left: 10px;
`;

const Read = styled.h3`
  margin-left: 10px;
`;

const Join = styled.h3`
  margin-left: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  margin: 0 0 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 25px;
  padding: 7px 10px;
  align-items: center;
  color:grey;
`;

const Stitch = styled.h2`
  padding: 10px;
`;

const TextWrapper2 = styled.div`
  margin: 0 auto;
`;

export default Welcome;
