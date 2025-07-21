import * as v from "valibot";

export const RsvpSchema = v.object({
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
	email: v.pipe(
		v.string("Enter your email"),
		v.email("Enter a valid email"),
		v.trim(),
	),
});

export type RsvpData = v.InferOutput<typeof RsvpSchema>;
