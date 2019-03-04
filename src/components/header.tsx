import React from "react";
import styled from "styled-components";

import Asg from "./Asg";
import Nav from "./Nav";
import { primaryColor } from "../styles/colors";
import { Container } from "../styles/alignment";

const StyledHeader = styled.header`
  background: ${primaryColor};
`;

/**
 * Sets max width, centering, and alignment for header. Extends Container
 */
const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

/**
 * Top header
 */
const Header: React.FC = () => (
  <StyledHeader>
    <HeaderContainer>
      <Asg />
      <Nav />
    </HeaderContainer>
  </StyledHeader>
);

export default Header;
