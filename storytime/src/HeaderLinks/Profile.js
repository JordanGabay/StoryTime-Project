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
  margin: 0 15vw;
`;

export default Profile;
