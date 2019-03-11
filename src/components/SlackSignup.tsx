import React, { useState } from "react";
import wretch from "wretch";
import styled from "styled-components";

import { fonts } from "../styles/typography";
import colors from "../styles/colors";

interface Props {}

const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const Form = styled.form`
  margin-bottom: 0;
`;

const Interactive = `
  padding: .15em .6em;
  font-size: 1em;
  color: ${colors.white};
  border: 3px solid;
  border-color: ${colors.white};
  border-radius: 3px;
  background: transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const EmailInput = styled.input<{ hasError: boolean }>`
  ${Interactive}
  border-color: ${props => (props.hasError ? colors.red : colors.white)};
  vertical-align: bottom;
  &:focus {
    border-color: ${colors.yellow};
  }
`;

const Button = styled.button`
  ${Interactive}
  position: relative;
  padding-top: .3em;
  padding-bottom: 0;
  margin-left: .5em;
  font-family: ${fonts.display};
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  background-color: ${colors.blue};
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 3px solid;
    border-radius: 3px;
    transform: translate(0,0);
    transition: transform .1s;
  }

  &:before {
    border-color: ${colors.yellow};
    z-index: -1;
  }

  &:after {
    border-color: ${colors.red};
    z-index: -2;
  }

  &:focus,
  &:active {
    background-color: #868FD9;
  }

  &:hover {
    &:before {
      transform: translate(2px, 2px);
    }
    &:after {
      transform: translate(5px, 5px);
    }
  }
`;
/*
  */

const SlackSignup: React.FC<Props> = () => {
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

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    setError("");
    setSubmitting(true);
    setTimeout(() => {}, 2000);

    try {
      const result = await wretch(
        "https://wnephqc0h5.execute-api.us-east-1.amazonaws.com/prod/slack"
      )
        .post({ email })
        .json();

      setSubmitting(false);
      setSubmitted(true);
    } catch (e) {
      console.log(e);

      setSubmitting(false);
      setError("Error joining");
    }
  };

  if (submitted) {
    return <div>Join request sent for approval</div>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <EmailInput
        name="email"
        value={email}
        placeholder="developer@gmail.com"
        onChange={handleChange}
        hasError={error !== ""}
      />
      {!submitting ? (
        <Button type="submit">Join</Button>
      ) : (
        <Button disabled>Submitting...</Button>
      )}
    </Form>
  );
};

const validateEmail = (email: string): boolean => {
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

export default SlackSignup;