import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Events = () => (
  <Layout>
    <SEO title="Events" />
    <h1>Events</h1>
    <p>Welcome to the events page.  Let's put a calendar here or something...</p>
    <Link to="/">Home</Link>
  </Layout>
);

export default Events;
