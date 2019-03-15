import React from "react";
import styled from "styled-components";

import Nav from "./Nav";
import colors from "../styles/colors";
import { Container } from "../styles/alignment";

const StyledHeader = styled.header`
  background: ${colors.blue};
`;

/**
 * Sets max width, centering, and alignment for header. Extends Container
 */
const HeaderContainer = styled(Container)`
  text-align: center;
`;

/**
 * Top header
 */
const Header: React.FC = () => (
  <StyledHeader>
    <HeaderContainer>
      <Nav />
    </HeaderContainer>
  </StyledHeader>
);

export default Header;
