import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>Resolution</Logo>
          <NavHold>
            <Nav>home</Nav>
            <Nav>About</Nav>
            <Nav>Services</Nav>
            <Nav>Features</Nav>
            <Nav>Blog</Nav>
            <Nav>Contact us</Nav>
            <Button>Get a Quote </Button>
          </NavHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #36216e;
`;

const Wrapper = styled.div`
  width: 85%;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const NavHold = styled.div`
  width: 55%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const Nav = styled.div`
  color: white;
  font-weight: bold;
  :hover {
    border-bottom: 1px solid orange;
    transition: all 350ms;
    color: silver;
  }
`;

const Button = styled.div`
  height: 50px;
  width: 170px;
  background-image: linear-gradient(
    90deg,
    rgba(230, 37, 125, 1) 49%,
    rgba(242, 112, 4, 1) 94%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(0.9);
  }
`;

const Logo = styled.h1`
  color: white;
`;
