import React from 'react';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {search, users, messageCircle} from 'react-icons-kit/feather'
import {useAuth0} from '@auth0/auth0-react';
import LogoutButton from './Auth0/logout-button';
import LoginButton from './Auth0/login-button';



const Login = () => {
    return (
      <MainWrapper>
          
        <Wrapper>
          <TextWrapper>
            <Icon size={20} icon={search} />
            <Interest>Follow people who share your interests.</Interest>
          </TextWrapper>
          <TextWrapper>
            <Icon size={20} icon={users} />
            <Read>Read people's latest stories and add to them yourself.</Read>
          </TextWrapper>
          <TextWrapper>
            <Icon size={20} icon={messageCircle} />
            <Join>Join conversations with your connections.</Join>
          </TextWrapper>
        </Wrapper>
        <Wrapper2>
          <TextWrapper2>
            <Stitch>Story stitching! Stitch stories together</Stitch>
            <Join1>Join StoryTime today.</Join1>
          </TextWrapper2>
          <ButtonWrapper>
          </ButtonWrapper>
        </Wrapper2>
      </MainWrapper>
    );
}

const Nav = styled.nav`

`

const MainWrapper = styled.div`

`

const Wrapper = styled.div`
  background-color: #1bfb99;
  height: 400px;
  margin: 0 auto;
`;

const Interest = styled.h3`
margin-left: 10px;

`

const Read = styled.h3`
margin-left: 10px;
`

const Join = styled.h3`
margin-left: 10px;
`

const TextWrapper = styled.div`
  display: flex;
  margin: 0 0 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 25px;
  padding: 7px 10px;
  align-items: center;
`;

const Wrapper2 = styled.div`
  background-color: #00ab60;
  height: 550px;
`;

const Stitch = styled.h2`
padding: 10px;
`

const Join1 = styled.h3`
padding: 10px;
`



const ButtonWrapper = styled.div`
display: column;

`

const TextWrapper2 = styled.div`
margin: 0 auto;
`

export default Login;