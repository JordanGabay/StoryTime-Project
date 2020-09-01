import React from "react";
import styled from "styled-components";
import Searchbar from "../components/Searchbar";
import { useLocation } from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

const ProductFeed = () => {
  const {user} = useAuth0();
  const search = useLocation().search.toLowerCase();
  const filteredUsers = user.filter(user => search ? user.name.toLowerCase().includes(search.slice(8)) : user)
  const totalUsers = filteredUsers.length
}


const Explore = (props) => {
  return (
    <div>
      <Wrapper>
        <Searchbar/>
        Page coming soon...
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15vw;
  padding: 30px 0;
`;


export default Explore;
