import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import RichTextEditor from "../components/RichTextEditor";
import { GlobalContext } from "../Context/GlobalContext";

import { StoryFeed } from "./StoryFeed";

const StoryTime = (props) => {
  const { state, actions } = useContext(GlobalContext);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userState, setUserState] = useState("users");

  useEffect(() => {
    if (userState === "users") {
      setFilteredUsers(state.users);
    } else {
      setFilteredUsers(state.currentUser);
    }
  }, [state]);

  const showAllFeed = () => {
    setFilteredUsers(state.users);
    setUserState("users");
    console.log("filteredUsers", filteredUsers);
  };

  const showMyFeed = () => {
    setFilteredUsers(state.currentUser);
    setUserState("currentUser");
    console.log("filteredUsers", filteredUsers);
  };

  return (
    <Wrapper>
      <h2>Storytime</h2>
      <RichTextEditor currentUser={state.currentUser} />
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
`;

const Button = styled.button`
  margin: 0 10px;
  border:none;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  font-weight: bold;
`;

export default StoryTime;
