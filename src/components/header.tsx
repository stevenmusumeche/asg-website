import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { primaryColor } from "../styles/colors";

interface IHeaderProps {
  siteTitle: string;
}

const StyledHeader = styled.header`
  background: ${primaryColor};
  margin-bottom: 1.45rem;
`;

const Header = ({ siteTitle = "" }: IHeaderProps) => (
  <StyledHeader>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
);

export default Header;
