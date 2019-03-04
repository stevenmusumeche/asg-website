import React, { useState } from "react";
import wretch from "wretch";
import styled from "styled-components";

interface Props {}

const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const EmailInput = styled.input<{ hasError: boolean }>`
  border-color: ${props => (props.hasError ? "red" : "grey")};
`;

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
    <form onSubmit={handleSubmit}>
      <EmailInput
        name="email"
        value={email}
        onChange={handleChange}
        hasError={error !== ""}
      />
      {!submitting ? (
        <button type="submit">Join</button>
      ) : (
        <button disabled>Submitting</button>
      )}
    </form>
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