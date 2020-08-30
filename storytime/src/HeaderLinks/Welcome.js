import React from 'react';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {search, users, messageCircle} from 'react-icons-kit/feather'
import WelcomeBackground from '../images/WelcomeBackground.jpg'

const Welcome = () => {
      return (
        <MainContent>
            <Image1 src={WelcomeBackground} alt="welcome" />
          <Bordered>
            <Header>
              <StoryTime>Welcome to StoryTime</StoryTime>
            </Header>
            <Dreams>
              Story Stitching! Stich stories together
              <article>
                <Icon icon={search} size={20}/>
                <p>Follow people who share your interests.</p>
                <Icon icon={users} size={20}/>
                <p>Read people's latest stories and add to them yourself</p>
                <Icon icon={messageCircle} size={20}/>
                <p>Join conversation with your connections</p>
              </article>
            </Dreams>
            </Bordered>
            </MainContent>
      );
}

const MainContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Image1 = styled.img`
height: 100vh;
width: 100%;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`

const Bordered = styled.div`
border: none;
color: black;
width: 80%;
display: table-column;
justify-content: center;
align-items: center;
z-index: 1;
`

const Header = styled.div`

`

const StoryTime = styled.h1`
padding: 0 0.5em;
`

const Dreams = styled.div`
background-color: rgba(43, 43, 43, 0.5);
padding: 1em;

.article {
display: flex;
}

.p {

}
`



export default Welcome;
