import axios from "axios";

export async function requestInvite(email: string) {
  const slackUrl = process.env.SLACK_JOIN_REQUEST_URL as string;
  return axios.post(slackUrl, {
    text: `ASG Slack Invitation Request from ${email}`,
  });
}
