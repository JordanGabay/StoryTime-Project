import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import styled from 'styled-components';

const LogoutButton = () => {
    const {logout} = useAuth0();
    return(
        <Button
        onClick={() => logout()}
        >
            Log out
        </Button>
    )
}

const Button = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 7px;
  border: none;
  background-color: #00ab60;
  color: white;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 22px;
`;

export default LogoutButton;