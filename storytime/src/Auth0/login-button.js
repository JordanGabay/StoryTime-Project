import React from 'react';
import {useAuth0} from '@auth0/auth0-react'
import styled from 'styled-components';


const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    return (
      <Wrapper>
        <Button1
          onClick={() => loginWithRedirect()}
        >
          Log in
        </Button1>
      </Wrapper>
    );
}

const Button1 = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 7px;
  border: none;
  background-color: #00ab60;
  color: white;
  font-weight: bold;
  margin-left: -85px;
  margin-top: 5px;
`;

const Wrapper = styled.div`
margin-top: 10px;
`

export default LoginButton;