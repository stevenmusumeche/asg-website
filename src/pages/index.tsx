import React, { useState, useContext } from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Banner from "../sections/Banner";
import About from "../sections/About";
import PastEvents from "../sections/PastEvents";
import Footer from "../sections/Footer";
import MainStripe from "../components/MainStripe";
import UpcomingTalk from "../sections/UpcomingEvents";
import { GlobalStyle } from "../styles/typography";
import StateProvider from "../components/StateProvider";
import { graphql } from "gatsby";

// interface EventEntry {
//   frontmatter: {
//     date: string;
//     presenter: string;
//     slideUrl?: string;
//     talkTitle: string;
//   };
//   html: string;
// }

// interface Props {
//   //data: { allMarkdownRemark: { edges: Array<{ node: EventEntry }> } };
// }

const IndexPage: React.FC = () => {
  return (
    <StateProvider>
      <Layout>
        <SEO
          title="Acadiana Software Group | Lafayette, LA Developer Meetup"
          keywords={[
            `acadia`,
            `acadiana`,
            `cajun`,
            `code`,
            `lafayette`,
            `software`,
            `acadiana software group`,
          ]}
        />
        <GlobalStyle />
        <Banner />
        <UpcomingTalk />
        <MainStripe />
        <About />
        <PastEvents />
        <Footer />
      </Layout>
    </StateProvider>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 12
    ) {
      edges {
        node {
          html
          frontmatter {
            talkTitle
            date(formatString: "MMMM Do, YYYY")
            presenter
            slideUrl
          }
        }
      }
    }
  }
`;
