import { useStaticQuery, graphql } from "gatsby";

export const usePastEvents = () => {
  const data: QueryData = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 24
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              talkTitle
              date(formatString: "dddd, MMMM Do, YYYY")
              presenter
              slideUrl
            }
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges.map(edge => ({
    id: edge.node.id,
    presenter: edge.node.frontmatter.presenter,
    date: edge.node.frontmatter.date,
    slideUrl: edge.node.frontmatter.slideUrl,
    talkTitle: edge.node.frontmatter.talkTitle,
    html: edge.node.html,
  }));
};

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
