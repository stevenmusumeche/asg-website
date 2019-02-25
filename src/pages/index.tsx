import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { About } from "../sections/about";
import { Events } from "../sections/events";
import { Jobs } from "../sections/jobs";
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
    <About />
    <Events />
    <Jobs />
    <Join />
  </Layout>
);

export default IndexPage;
