/** biome-ignore-all lint/nursery/noMagicNumbers: necessary */

import { isValidPhoneNumber } from "react-phone-number-input";
import * as v from "valibot";

export const ContactSchema = v.object({
	name: v.pipe(
		v.string("Enter your name"),
		v.trim(),
		v.minLength(2, "Name should not be less than two characters long"),
	),
	email: v.pipe(v.string("Enter your email"), v.trim(), v.email()),
	subject: v.pipe(
		v.string("Enter the subject matter of the email"),
		v.trim(),
		v.minLength(2, "Subject should not be less than two characters long"),
	),
	phone: v.pipe(
		v.string("Enter your phone number"),
		v.trim(),
		v.minLength(7, "Phone number should not be less than two characters long"),
		v.check((input) => isValidPhoneNumber(input), "Invalid phone number"),
	),
	message: v.pipe(
		v.string("Enter a message"),
		v.trim(),
		v.minLength(2, "Message should not be less than two characters long"),
	),
});

export type ContactData = v.InferOutput<typeof ContactSchema>;
