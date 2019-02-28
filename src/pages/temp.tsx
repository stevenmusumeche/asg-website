import React from "react";

import Layout from "../components/layout";
import UpcomingEvents from "../components/UpcomingEvents";

const IndexPage = () => (
  <Layout>
    <h1>this is a placeholder page for testing the UpcomingEvents component</h1>
    <UpcomingEvents maxEvents={2} />
  </Layout>
);

export default IndexPage;
