import React, { useContext } from "react";

import { Container } from "../styles/alignment";
import { SectionHeader } from "../styles/typography";
import { StateContext } from "../components/StateProvider";

const About: React.FC = () => {
  const { toggleSlackModal } = useContext(StateContext);
  return (
    <Container>
      <SectionHeader>About</SectionHeader>
      <p>
        The Acadiana Software Group (ASG) is a community of software developers
        located in Lafayette, LA and the surrounding areas of Acadiana founded
        in 2015*. We welcome professional and hobbyist developers to advance our
        core mission by exchanging knowledge exchange and building a community.
      </p>
      <p>
        Members give presentations on a wide variety of topics at monthly
        meetups, followed by a Q&amp;A. Presentations adjourn to nearby
        restaurants where members continue their conversations or socialize
        generally. We also have an active{" "}
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            toggleSlackModal();
          }}
        >
          Slack channel
        </a>{" "}
        for technical and professional advice, professional networking, venting,
        and socializing.
      </p>
      <p>
        Software development is a wide field that brings together many parts of
        our community. Our unique culture comes from gathering people with
        different skills, skill levels, and experience. Our members benefit from
        every participant's knowledge and company. There is as much to learn in
        presenting or teaching as there is in listening or soliciting advice.
      </p>
      <p>
        Thank you for your support and being a part of this community! Please
        contact us if you would like to give a talk or if you have an idea for
        an event or social gathering. You can contact a committee member by{" "}
        <a href="mailto:admin@acadianasoftwaregroup.org">emailing us</a>.
      </p>
      <p>
        <em>
          * Founded by Chris Parich, Corey Gaudin, Brian Stanford, &amp; Demian
          Neidetcher
        </em>
      </p>
    </Container>
  );
};

export default About;
