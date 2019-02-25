import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StripedHeader } from "../styles/typography";

interface IAsgProps {
  headerTitle: string;
}

const AsgLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

/**
 * Striped acronym header
 * @param props requires headerTitle
 */
export const Asg = ({ headerTitle }: IAsgProps) => (
  <StripedHeader>
    <AsgLink to="/">{headerTitle}</AsgLink>
  </StripedHeader>
);
