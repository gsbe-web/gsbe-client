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
			getCalendarEvents: "/events/calendar",
		},
	},
	PUBLICATIONS: {
		FEATURES_REGEX: /.*(publications).*/,
		V1: {
			getBySlug: (slug: string) => `/publications/slug/${slug}`,
			list: "/publications",
		},
	},
	MEMBERS: {
		FEATURES_REGEX: /.*(members).*/,
		V1: {
			getBySlug: (slug: string) => `/members/slug/${slug}`,
			list: "/members",
		},
	},
	DUES: {
		FEATURES_REGEX: /.*(dues).*/,
		V1: {
			create: "/dues",
		},
	},
};
