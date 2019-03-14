import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "../images/close.svg";
import CheckmarkIcon from "../images/checkmark.svg";
import wretch from "wretch";

import { fonts } from "../styles/typography";
import colors from "../styles/colors";

interface Props {
  close: () => void;
}

const Success: React.FC = () => (
  <SuccessWrapper>
    <img src={CheckmarkIcon} style={{ width: "200px", margin: "0 2em" }} />
    <div>You should receive an invitation within 24 hours.</div>
    <CloseButton onClick={close} type="button">
      <StyledCloseIcon src={CloseIcon} alt="close" />
    </CloseButton>
  </SuccessWrapper>
);

// todo change to useReducer
const SlackSignupForm: React.FC<Props> = ({ close }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email.trim())) {
      setError("Invalid email address");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      // const result = await wretch(
      //   "https://wnephqc0h5.execute-api.us-east-1.amazonaws.com/prod/slack"
      // )
      //   .post({ email: email.trim() })
      //   .json();
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
      }, 2000);
    } catch (e) {
      setSubmitting(false);
      setError(
        "Well shit.  There was a server error when processing this form."
      );
    }
  };

  return !submitted ? (
    <>
      <h1>Join Acadiana Software Group on Slack</h1>
      <p>
        Please enter your email address below to request an invite to the ASG
        Slack. You should receive an invitation within 24 hours.
      </p>

      <Form onSubmit={handleSubmit}>
        <div>
          <EmailInput
            name="email"
            value={email}
            placeholder="developer@gmail.com"
            onChange={handleChange}
            hasError={error !== ""}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
        {!submitting ? (
          <Button type="submit" disabled={!!error}>
            Join
          </Button>
        ) : (
          <Button disabled>Joining</Button>
        )}
      </Form>
      <CloseButton onClick={close} type="button">
        <StyledCloseIcon src={CloseIcon} alt="close" />
      </CloseButton>
    </>
  ) : (
    <Success />
  );
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (!email) return false;
  if (email.length > 254) return false;

  const valid = emailRegex.test(email);
  if (!valid) return false;

  // Further checking of some things regex can't handle
  var parts = email.split("@");
  if (parts[0].length > 64) return false;

  var domainParts = parts[1].split(".");
  if (domainParts.some(part => part.length > 63)) return false;

  return true;
};

export default SlackSignupForm;

const Form = styled.form`
  margin-bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const EmailInput = styled.input<{ hasError: boolean }>`
  font-size: 1.2em;
  padding: 0 0.6em;
  border: 1px solid;
  color: ${colors.grey};
  border-color: ${props => (props.hasError ? colors.red : colors.grey)};
  width: 500px;
  vertical-align: bottom;
  &:focus {
    border-color: ${colors.yellow};
    outline: none;
  }
  transform: translate(0, 3px);
  line-height: 2.6;
`;

const Button = styled.button`
  font-size: 1.2em;
  color: ${colors.white};
  border-color: ${colors.white};
  position: relative;
  padding: 0 1em;
  min-width: 170px;
  border: 3px solid;
  margin-left: 0.5em;
  font-family: ${fonts.display};
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background-color: ${colors.blue};
  cursor: pointer;
  transition: all 0.2s;
  line-height: 2.3;
  appearance: none;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: -4px;
    bottom: -4px;
    border: 3px solid;
    transform: translate(2px, 2px);
    transition: transform 0.1s;
  }

  &:before {
    border-color: ${colors.yellow};
    z-index: -1;
  }

  &:after {
    transform: translate(5px, 5px);
    border-color: ${colors.red};
    z-index: -2;
  }

  &:hover {
    background-color: #394bef;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: ${colors.red};
  margin-top: 0.3em;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const StyledCloseIcon = styled.img`
  width: 1em;
  height: 1em;
  margin: 0;
`;

const SuccessWrapper = styled.div`
  text-align: center;
  color: black;
`;
