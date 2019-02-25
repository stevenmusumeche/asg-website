import React from "react";
import styled from "styled-components";
import { primaryColor } from "../styles/colors";
import { Asg } from "../components/asg";
import { Nav } from "../components/nav";
import { HeaderContainer as Container } from "../styles/alignment";

const StyledHeader = styled.header`
  background: ${primaryColor};
  margin-bottom: 1.45rem;
`;

/**
 * Top header
 */
const Header = () => (
  <StyledHeader>
    <Container>
      <Asg />
      <Nav />
    </Container>
  </StyledHeader>
);

export default Header;
