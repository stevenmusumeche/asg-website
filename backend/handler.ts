import { listEvents } from "./services/calendar";
import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import { requestInvite } from "./services/slack";
import { verifyToken } from "./services/recaptcha";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

export const upcomingEvents: APIGatewayProxyHandler = async () => {
  try {
    const events = await listEvents();
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ events }),
    };
  } catch (e) {
    return {
      statusCode: (e && e.response.status) || 500,
      headers: corsHeaders,
      body: "",
    };
  }
};

export const joinSlack: APIGatewayProxyHandler = async event => {
  try {
    const request = validateRequest(event);

    const validRecaptcha = await verifyToken(request.recaptchaToken);
    if (!validRecaptcha) {
      return {
        statusCode: 401,
        headers: corsHeaders,
        body: "Invalid reCAPTCHA token",
      };
    }
    await requestInvite(request.email);

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify(""),
    };
  } catch (e) {
    return {
      statusCode: (e && e.response.status) || 400,
      headers: corsHeaders,
      body: e.toString(),
    };
  }
};

function validateRequest(event: APIGatewayProxyEvent) {
  if (!event.body) throw new Error("invalid request");
  const request = JSON.parse(event.body);
  if (!request.email) throw new Error("missing email");
  if (!request.recaptchaToken) throw new Error("missing reCAPTCHA token");
  return request;
}
