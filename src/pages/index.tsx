import React, { useState, useContext } from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Banner from "../sections/Banner";
import About from "../sections/About";
import PastEvents from "../sections/PastEvents";
import Join from "../sections/Join";
import MainStripe from "../components/MainStripe";
import UpcomingTalk from "../sections/UpcomingEvents";
import { GlobalStyle } from "../styles/typography";
import StateProvider from "../components/StateProvider";

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
        <PastEvents />
        <About />
        <Join />
      </Layout>
    </StateProvider>
  );
};

export default IndexPage;
