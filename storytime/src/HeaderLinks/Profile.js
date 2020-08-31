import React from "react";
import styled from "styled-components";
import moment from "moment";
import RichTextEditor from "../components/RichTextEditor";

const Profile = (props) => {
  const date = moment();
  const monthYear = date.format("MMMM YYYY");
 

  return (
    <MainWrapper>
     <RichTextEditor/>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15vw;
  padding: 30px 0;
`;

export default Profile;
