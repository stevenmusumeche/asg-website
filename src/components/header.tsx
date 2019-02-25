import React from "react";
import styled from "styled-components";
import { primaryColor } from "../styles/colors";
import { Asg } from "../components/asg";
import { Nav } from "../components/nav";
import { HeaderContainer as Container } from "../styles/alignment";

interface IHeaderProps {
  headerTitle: string;
}

const StyledHeader = styled.header`
  background: ${primaryColor};
  margin-bottom: 1.45rem;
`;

/**
 * Top header
 * @param props requires headerTitle
 */
const Header = ({ headerTitle = "" }: IHeaderProps) => (
  <StyledHeader>
    <Container>
      <Asg headerTitle={headerTitle} />
      <Nav />
    </Container>
  </StyledHeader>
);

export default Header;
