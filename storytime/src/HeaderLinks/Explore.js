import React from "react";
import styled from "styled-components";
import Searchbar from "../components/Searchbar";
import {Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

const ProductFeed = () => {
  const {user, isAuthenticated} = useAuth0();
  const search = useLocation().search.toLowerCase();
  const filteredUsers = user.filter(user => search ? user.name.toLowerCase().includes(search.slice(8)) : user)
  const totalUsers = filteredUsers.length
}


const Explore = (props) => {
  return (
    <div>
      <Wrapper>
        <Searchbar/>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div``;


export default Explore;
