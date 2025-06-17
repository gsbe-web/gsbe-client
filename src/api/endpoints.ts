// src/api/endpoints.ts
/** biome-ignore-all lint/style/useNamingConvention: to help with stuff */

export const ENDPOINT_MAPPERS = {
	COUNTRIES: {
		GET: "https://ipapi.co/json/",
	},
	EVENTS: {
		FEATURES_REGEX: /.*(events).*/,
		V1: {
			getBySlug: (slug: string) => `/events/slug/${slug}`,
			list: "/events",
		},
	},
	NEWS: {
		FEATURES_REGEX: /.*(news).*/,
		V1: {
			getBySlug: (slug: string) => `/news/slug/${slug}`,
			list: "/news",
		},
	},
};
