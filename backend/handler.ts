import { listEvents } from "./services/calendar";
import { APIGatewayProxyHandler } from "aws-lambda";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

export const upcoming_events: APIGatewayProxyHandler = async () => {
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
