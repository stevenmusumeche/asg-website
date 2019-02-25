import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { primaryColor } from "../styles/colors";
import { StripedHeaderText } from "../styles/typography";

interface IHeaderProps {
  headerTitle: string;
}

const StyledHeader = styled.header`
  background: ${primaryColor};
  margin-bottom: 1.45rem;
`;

const Header = ({ headerTitle = "" }: IHeaderProps) => (
  <StyledHeader>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <StripedHeaderText style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {headerTitle}
        </Link>
      </StripedHeaderText>
    </div>
  </StyledHeader>
);

export default Header;
