import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

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
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/events/">Events</Link>
  </Layout>
);

export default IndexPage;
