import React from "react";
import Page from "./pages/Page";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Yumz's</Logo>
        </Nav>
        <Search />
        <Category />
        <Page />
      </Container>
    </BrowserRouter>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  margin-left: 1rem;
`;

const Nav = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;
