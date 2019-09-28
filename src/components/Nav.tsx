import React, { useContext } from "react";

import Modal from "react-modal";
import { NavLink, FontSmooth } from "../styles/typography";
import styled from "styled-components";
import { StateContext } from "./StateProvider";
import SlackSignupForm from "./SlackSignupForm";
import { Location } from "@reach/router";

Modal.setAppElement("#___gatsby");

const Wrapper = styled.div`
  ${FontSmooth}
`;

interface NavProps {
  location?: {
    pathname: string;
  };
}

/**
 * List of nav links in the header
 */
const Nav: React.FC<NavProps> = ({ location }) => {
  const { toggleSlackModal, showSlackModal } = useContext(StateContext);
  const isHome = location && location.pathname === "/";

  return (
    <>
      <Wrapper>
        {isHome ? (
          <>
            <NavLink href={`#about`}>About&nbsp;ASG</NavLink>
            <NavLink href={`#past-events`}>Past&nbsp;Events</NavLink>
          </>
        ) : (
          <>
            <NavLink href={`/`}>Home</NavLink>
          </>
        )}
        <NavLink
          onClick={event => {
            event.preventDefault();
            toggleSlackModal();
          }}
          href={`#`}
        >
          Join&nbsp;Slack
        </NavLink>
      </Wrapper>
      <Modal
        isOpen={showSlackModal}
        onRequestClose={() => toggleSlackModal()}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        className="slack-modal-content"
        overlayClassName="slack-modal-overlay"
      >
        <SlackSignupForm close={toggleSlackModal} />
      </Modal>
    </>
  );
};

export default (props: any) => (
  <Location>{locationProps => <Nav {...locationProps} {...props} />}</Location>
);
