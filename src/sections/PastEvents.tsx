import React from "react";

import { Container } from "../styles/alignment";
import { SectionHeader, FontSmooth } from "../styles/typography";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

interface EventEntry {
  id: string;
  frontmatter: {
    date: string;
    presenter: string;
    slideUrl?: string;
    talkTitle: string;
  };
  html: string;
}

interface QueryData {
  allMarkdownRemark: { edges: Array<{ node: EventEntry }> };
}

const PastEvents: React.FC = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 12
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                talkTitle
                date(formatString: "dddd, MMMM Do YYYY")
                presenter
                slideUrl
              }
            }
          }
        }
      }
    `}
    // todo: move to component
    render={(data: QueryData) => (
      <StyledContainer>
        <SectionHeader>Past Events</SectionHeader>
        <List>
          {data.allMarkdownRemark.edges.map(edge => (
            <ListItem key={edge.node.id}>
              <EventName>{edge.node.frontmatter.talkTitle}</EventName>
              <div>
                {edge.node.frontmatter.presenter}, {edge.node.frontmatter.date}{" "}
                (
                {edge.node.frontmatter.slideUrl && (
                  <a href={edge.node.frontmatter.slideUrl} target="_blank">
                    View Slides
                  </a>
                )}
                )
              </div>
              <div />
              <TalkDescription
                dangerouslySetInnerHTML={{ __html: edge.node.html }}
              />
            </ListItem>
          ))}
        </List>
      </StyledContainer>
    )}
  />
);

export default PastEvents;

const List = styled.ul`
  margin: 0;
  list-style-type: none;
  ${FontSmooth}
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  & + & {
    margin-top: 2em;
  }
`;

const EventName = styled.h3`
  font-size: 1.5em;
  margin-bottom: 0.25em;
`;

const TalkDescription = styled.div`
  margin-top: 1em;
`;

const StyledContainer = styled(Container)`
  padding-top: 0;
`;
