import styled from "styled-components";

/**
 * Handles max width and centering
 */
export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.0875rem 1.45rem;
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
 * Sets max width and centering for body
 */
export const BodyContainer = styled(Container)`
  padding-top: 0;
`;