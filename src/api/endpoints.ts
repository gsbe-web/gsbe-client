// src/api/endpoints.ts
/** biome-ignore-all lint/style/useNamingConvention: to help with stuff */

export const ENDPOINT_MAPPERS = {
  EVENTS: {
    FEATURES_REGEX: /.*(events).*/,
    V1: {
      getBySlug: (slug: string) => `/api/v1/events/slug/${slug}`,
      list: "/api/v1/events",
    },
  },
  NEWS: {
    FEATURES_REGEX: /.*(news).*/,
    V1: {
      getBySlug: (slug: string) => `/api/v1/news/slug/${slug}`,
      list: "/api/v1/news",
    },
  },
};
