import React, { useEffect } from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Banner from "../sections/Banner";
import About from "../sections/About";
import PastEvents from "../sections/PastEvents";
import Footer from "../sections/Footer";
import MainStripe from "../sections/MainStripe";
import UpcomingEvents from "../sections/UpcomingEvents";
import { GlobalStyle } from "../styles/typography";
import StateProvider from "../components/StateProvider";
import ReactGA from "react-ga";
import Header from "../components/Header";

const IndexPage: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize("UA-137057022-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
        <UpcomingEvents />
        <MainStripe />
        <About />
        <PastEvents maxEvents={3}/>
        <Footer />
      </Layout>
    </StateProvider>
  );
};

export default IndexPage;
