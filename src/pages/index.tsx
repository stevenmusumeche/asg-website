import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Banner from "../sections/Banner";
import About from "../sections/About";
import Events from "../sections/Events";
import Join from "../sections/Join";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO
      title="Home"
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
    <Banner />
    <Events />
    <About />
    <Join />
  </Layout>
);

export default IndexPage;
