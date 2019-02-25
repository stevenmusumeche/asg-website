import { listEvents } from "./services/calendar";
import { APIGatewayProxyHandler } from "aws-lambda";

export const upcoming_events: APIGatewayProxyHandler = async (
  event,
  context
) => {
  try {
    const events = await listEvents();
    return {
      statusCode: 200,
      body: JSON.stringify({ events }),
    };
  } catch (e) {
    return {
      statusCode: (e && e.response.status) || 500,
      body: "",
    };
  }
};
