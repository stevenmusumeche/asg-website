import React from "react";
import styled from "styled-components";

import { primaryColor } from "../styles/colors";
import { Asg } from "../components/asg";
import { Nav } from "../components/nav";
import { Container } from "../styles/alignment";

const StyledHeader = styled.header`
  background: ${primaryColor};
`;

/**
 * Sets max width, centering, and alignment for header. Extends Container
 */
export const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

/**
 * Top header
 */
const Header = () => (
  <StyledHeader>
    <HeaderContainer>
      <Asg />
      <Nav />
    </HeaderContainer>
  </StyledHeader>
);

export default Header;
