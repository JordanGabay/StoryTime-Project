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
  width: 200px;
  border-radius: 7px;
  border: none;
  background-color: #1bfb99;
`;

export default LogoutButton;