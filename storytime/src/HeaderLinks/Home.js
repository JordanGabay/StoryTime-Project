import React from "react";
import styled from "styled-components";
import RichTextEditor from '../components/RichTextEditor'



const Wrapper = styled.div``;

const Button1 = styled.button`
background-color: lightgray;
border-radius: 5px;
border: none;
margin-top: 15px;
`

const Home = (props) => {
  return (
    <Wrapper>
      <RichTextEditor/>

    </Wrapper>
  );
};

export default Home;
