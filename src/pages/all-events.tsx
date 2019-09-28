import React, { useEffect } from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Banner from "../sections/Banner";
import PastEvents from "../sections/PastEvents";
import Footer from "../sections/Footer";
import MainStripe from "../sections/MainStripe";
import { GlobalStyle, textStriper } from "../styles/typography";
import colors from "../styles/colors";
import StateProvider from "../components/StateProvider";
import ReactGA from "react-ga";
import styled from "styled-components";

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
        <MainStripe />
        <PastEvents />
        <Footer />
        <GoBack href="#">{"Top"}</GoBack>
      </Layout>
    </StateProvider>
  );
};

export default IndexPage;

const GoBack = styled.a`
  position: fixed;
  z-index: 1;
  color: ${colors.white};
  background-color: ${colors.blue};
  bottom: 0;
  left: 0;
  display: block;
  padding: 1em;
  text-shadow: ${textStriper({
    colorArray: [colors.red],
    step: 0.1,
  })};
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.25em;
`;
