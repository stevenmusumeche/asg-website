import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.0875rem 1.45rem;
`;

export const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Body = styled(Container)`
  padding-top: 0;
`;