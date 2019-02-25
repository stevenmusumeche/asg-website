import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { StripedHeader } from "../styles/typography";

const AsgLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

/**
 * Striped acronym header
 * @param props requires headerTitle
 */
export const Asg = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            acronym
          }
        }
      }
    `}
    render={data => (
      <StripedHeader>
        <AsgLink to="/">{data.site.siteMetadata.acronym}</AsgLink>
      </StripedHeader>
    )}
  />
);
