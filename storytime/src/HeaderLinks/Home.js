import React from "react";
import styled from "styled-components";
import RichTextEditor from "../components/RichTextEditor";

import { StoryFeed } from "./StoryFeed";

const Home = (props) => {

  return (
    <Wrapper>
      <RichTextEditor />
      <StoryFeed />
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

export default Home;
