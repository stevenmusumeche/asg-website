import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Banner from "../sections/Banner";
import About from "../sections/About";
import PastEvents from "../sections/PastEvents";
import Join from "../sections/Join";
import MainStripe from "../components/MainStripe";
import UpcomingTalk from "../sections/UpcomingEvents";
import { GlobalStyle } from "../styles/typography";

const IndexPage: React.FC = () => (
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
    <PastEvents />
    <About />
    <Join />
  </Layout>
);

export default IndexPage;
