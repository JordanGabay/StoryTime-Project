import React, {useContext, useState, useEffect} from "react";
import styled from "styled-components";
import RichTextEditor from "../components/RichTextEditor";
import {GlobalContext} from '../Context/GlobalContext'

import { StoryFeed } from "./StoryFeed";

const StoryTime = (props) => {
  const { state, actions } = useContext(GlobalContext);
  const [filteredUsers, setFilteredUsers] = useState([])
  
  useEffect(() => {
    setFilteredUsers(state.users)
  }, [state.users])
  
  const showAllFeed = () => {
    setFilteredUsers(state.users)
    console.log('filteredUsers', filteredUsers)
  }
  
  const showMyFeed = () => {
    setFilteredUsers(state.currentUser)
    console.log('filteredUsers', filteredUsers)
  }
  
  return (
    <Wrapper>
      <h2>Storytime</h2>
      <RichTextEditor />
      <ButtonWrapper>
      <Button onClick={showAllFeed}>All Feed</Button>
      <Button onClick={showMyFeed}>My Feed</Button>
      </ButtonWrapper>
      <StoryFeed filteredUsers={filteredUsers} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15vw;
  padding: 30px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
`

const Button = styled.button`
  margin: 0 10px;
`

export default StoryTime;
