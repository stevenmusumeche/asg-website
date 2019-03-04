import React from "react";

import Layout from "../components/layout";
import UpcomingEvents from "../components/UpcomingEvents";
import SlackSignup from "../components/SlackSignup";

const IndexPage = () => (
  <Layout>
    <h1>this is a temporary page for testing the stuff</h1>
    <hr />
    <SlackSignup />
    <hr />
    <UpcomingEvents maxEvents={2} />
  </Layout>
);

export default IndexPage;
