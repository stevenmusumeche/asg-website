import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Banner } from "../sections/banner";
import { About } from "../sections/about";
import { Events } from "../sections/events";
import { Join } from "../sections/join";

const IndexPage = () => (
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
    <About />
    <Events />
    <Join />
  </Layout>
);

export default IndexPage;
