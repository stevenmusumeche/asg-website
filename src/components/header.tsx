import React from "react";
import styled from "styled-components";
import { primaryColor } from "../styles/colors";
import { HeaderAcronym, HeaderLink } from "../styles/typography";
import { Nav } from "../components/nav";
import { HeaderContainer } from "../styles/alignment";

interface IHeaderProps {
  headerTitle: string;
}

const StyledHeader = styled.header`
  background: ${primaryColor};
  margin-bottom: 1.45rem;
`;

const Header = ({ headerTitle = "" }: IHeaderProps) => (
  <StyledHeader>
    <HeaderContainer>
      <HeaderAcronym>
        <HeaderLink to="/">{headerTitle}</HeaderLink>
      </HeaderAcronym>
      <Nav />
    </HeaderContainer>
  </StyledHeader>
);

export default Header;
