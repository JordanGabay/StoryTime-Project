import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Auth0/logout-button";
import LoginButton from "./Auth0/login-button";
import { user as usericon, search, logIn } from "react-icons-kit/feather";
import Icon from "react-icons-kit";
import { GlobalContext } from "./Context/GlobalContext";

const Navbar = () => {
  const { user } = useAuth0();
  const [isActive, setIsActive] = useState(false);
  const { state, actions } = useContext(GlobalContext);
  const {setCurrentUser} = actions

  useEffect(() => {
    if (user) {
      fetch("/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
      .then(res => res.json())
      .then(result => setCurrentUser([result.data]) )
    }
  }, [user]);

  return (
    <NavWrapper>
      <NavbarLeft>
        <NavItem>
          <StyledLink exact to="/">
            Home
          </StyledLink>
        </NavItem>
      </NavbarLeft>
      <StyledLink exact to="/storytime">
        Storytime
      </StyledLink>
      <NavbarRight>
        <NavItem>
          <StyledLink exact to="/explore">
            <Icon size={20} icon={search} />
            Explore
          </StyledLink>
        </NavItem>
        <NavItem>
          <Nav>
            <div onClick={() => setIsActive(!isActive)}>
              {user ? (
                <ProfileImg src={user.picture} />
              ) : (
                <IconColor>
                  <Icon size={30} icon={logIn} />
                </IconColor>
              )}
            </div>

            {isActive && (
              <Dropdown>
                {user ? (
                  <UserInfo>
                    {/* <span>{user.name}</span> */}
                    {/* <span>{user.email}</span> */}
                    <LogoutButton />
                  </UserInfo>
                ) : (
                  <LoginButton />
                )}
              </Dropdown>
            )}
          </Nav>
        </NavItem>
      </NavbarRight>
    </NavWrapper>
  );
};

export default Navbar;

const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 5vh;
  right: 15px;
`;

const UserInfo = styled.div`
  position: absolute;
  margin-left: -150px;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  background-color: black;
  height: 8vh;

  @media (min-width: 600px) {
    p {
      font-size: 1.25rem;
    }
  }
`;

const Nav = styled.nav``;

const NavItem = styled.li`
  .active {
    font-weight: bold;
    border-bottom: 2px solid white;
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  margin: auto 30px;
  color: white;
`;


const IconColor = styled.div`
color:white;
margin-right: 15px;
`