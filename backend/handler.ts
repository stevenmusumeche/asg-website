import { listEvents } from "./services/calendar";
import { APIGatewayProxyHandler } from "aws-lambda";
import { requestInvite } from "./services/slack";

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
    if (!event.body) throw new Error("invalid request");
    const request = JSON.parse(event.body);
    if (!request.email) throw new Error("missing email");
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
