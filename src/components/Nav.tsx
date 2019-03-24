import React, { useContext } from "react";

import Modal from "react-modal";
import { NavLink, FontSmooth } from "../styles/typography";
import styled from "styled-components";
import { StateContext } from "./StateProvider";
import SlackSignupForm from "./SlackSignupForm";

Modal.setAppElement("#___gatsby");

const Wrapper = styled.div`
  ${FontSmooth}
`;

/**
 * List of nav links in the header
 */
const Nav: React.FC = () => {
  const { toggleSlackModal, showSlackModal } = useContext(StateContext);

  return (
    <>
      <Wrapper>
        <NavLink href={`#about`}>About&nbsp;ASGxxx</NavLink>
        <NavLink href={`#past-events`}>Past&nbsp;Events</NavLink>
        <NavLink
          onClick={e => {
            e.preventDefault();
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

export default Nav;
