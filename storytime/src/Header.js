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
  // import global context with actions

  useEffect(() => {
    if (user) {
      fetch("/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      });
      // get the login user and set as current user with the correct action
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetch("/profile/:handle", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }, [user]);

  return (
    <NavWrapper>
      <NavbarLeft>
        <NavItem>
          <StyledLink exact to="/">
            Home
          </StyledLink>
          <StyledLink exact to="/about">
            About
          </StyledLink>
        </NavItem>
      </NavbarLeft>
      <StyledLink exact to="/storytime">
        Storytime
      </StyledLink>
      <NavbarRight>
        {/* <NavItem>
          <StyledLink exact to="/profile">
            <Icon size={20} icon={usericon} />
            Profile
          </StyledLink>
        </NavItem> */}
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
                <Icon size={30} icon={logIn} />
              )}
            </div>

            {isActive && (
              <Dropdown>
                {user ? (
                  <UserInfo>
                    <span>{user.name}</span>
                    <span>{user.email}</span>
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

const Dropdown = styled.div``;

const UserInfo = styled.div`
  position: absolute;
  margin-left: -150px;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  background-color: #1bfb99;
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
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
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
