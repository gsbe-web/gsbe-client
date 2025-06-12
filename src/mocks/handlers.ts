import { ENDPOINT_MAPPERS } from "@api/endpoints";
import { logger } from "loggers";
import { http } from "msw";

export const handlers = [
  http.get("https://lh3.googleusercontent.com/*", ({ request }) => {
    logger.info("Fetched", request.url);
    return;
  }),

  http.get(/.*(istockphoto|unsplash).*/, ({ request }) => {
    logger.info("Fetched", request.url);
    return;
  }),

  http.post(/.*(maps).*/, ({ request }) => {
    try {
      logger.info("Posted Maps:", request.url);
      return;
    } catch (error) {
      logger.error(error);
    }
  }),

  http.get(/.*(maps).*/, ({ request }) => {
    logger.info("Fetched Maps", request.url);
    return;
  }),

  http.get(ENDPOINT_MAPPERS.EVENTS.FEATURES_REGEX, ({ request }) => {
    logger.info("Fetched events: ", request.method, request.url, request.body);
    return;
  }),
];
