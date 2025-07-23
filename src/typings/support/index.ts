/** biome-ignore-all lint/nursery/noMagicNumbers: necessary */

import * as v from "valibot";

export const Currencies = {
	ghs: "GHS",
	ngn: "NGN",
	usd: "USD",
	kes: "KES",
	zar: "ZAR",
};

export const DuesSchema = v.object({
	firstName: v.pipe(
		v.string("Enter your first name"),
		v.trim(),
		v.minLength(2, "First name should not be less than two characters long"),
	),
	lastName: v.pipe(
		v.string("Enter your last name"),
		v.trim(),
		v.minLength(2, "Last name should not be less than two characters long"),
	),
	membershipId: v.pipe(
		v.string("Enter your membership id"),
		v.trim(),
		v.minLength(2, "Membership ID should not be less than two characters long"),
	),
	emailAddress: v.pipe(
		v.string("Enter your email"),
		v.trim(),
		v.email("Input must be a valid email"),
	),
	currency: v.pipe(v.string(), v.trim(), v.enum_(Currencies)),
	amount: v.pipe(v.number("Enter an amount"), v.minValue(0.1)),
});

export type DuesData = v.InferOutput<typeof DuesSchema>;
