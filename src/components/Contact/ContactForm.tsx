/** biome-ignore-all lint/nursery/noExcessiveLinesPerFunction: allowed */
import { useContact } from "@api/contact";
import { useUserLocation } from "@api/location";
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	Input,
	PhoneInput,
	Textarea,
} from "@components/ui";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { type ContactData, ContactSchema } from "@typings/contact";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Country } from "react-phone-number-input";
import { DotLoader } from "react-spinners";

export const ContactForm = () => {
	const [country] = useState<Country>("GH");
	const { data: userLocation } = useUserLocation();
	const form = useForm<ContactData>({
		resolver: valibotResolver(ContactSchema),
		defaultValues: {
			name: "",
			email: "",
			phoneNumber: "",
			subject: "",
			message: "",
		},
	});

	const contactMutation = useContact();

	const loadingStatus = (() => {
		if (contactMutation.isPending) {
			return (
				<DotLoader
					aria-label="Loading Spinner"
					color="#3B82F6"
					data-testid="loader"
					loading={contactMutation.isPending}
					size={30}
					className="mx-auto"
				/>
			);
		}
		if (contactMutation.isError) {
			return (
				<p className="mt-20 text-center text-red-500">Failed to load data</p>
			);
		}
		return null;
	})();

	const onSubmit = (values: ContactData) => {
		contactMutation.mutate(values);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex h-full flex-col gap-8"
			>
				<div className="flex flex-col gap-4 lg:flex-row">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormControl>
									<Input
										{...field}
										type="text"
										placeholder="Name"
										className="w-full rounded-none border-0 border-b p-6 placeholder:text-[#455D6B] focus:border-b-2 focus:border-[#87979F]"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormControl>
									<Input
										{...field}
										type="email"
										placeholder="Email"
										className="w-full rounded-none border-0 border-b p-6 placeholder:text-[#455D6B] focus:border-b-2 focus:border-[#87979F]"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="flex flex-col gap-4 lg:flex-row">
					<FormField
						control={form.control}
						name="subject"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormControl>
									<Input
										{...field}
										type="text"
										placeholder="Subject"
										className="w-full rounded-none border-0 border-b p-6 placeholder:text-[#455D6B] focus:border-b-2 focus:border-[#87979F]"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phoneNumber"
						render={({ field }) => (
							<FormItem className="min-h-12 flex-1">
								<FormControl>
									<PhoneInput
										{...field}
										inputComponent={(props) => (
											<Input
												{...props}
												className="h-full w-full rounded-none border-0 border-b-2 placeholder:text-[#455D6B] focus:border-[#87979F]"
												placeholder="Phone"
												type="text"
											/>
										)}
										type="text"
										placeholder="Phone"
										defaultCountry={
											userLocation ? userLocation.country : country
										}
										className="h-full w-full focus:border-[#87979F]"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem className="h-full">
							<FormControl>
								<Textarea
									{...field}
									placeholder="Message"
									className="min-h-35 w-full rounded-none border-0 border-b placeholder:text-[#455D6B] focus:border-b-2 focus:border-[#87979F]"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className="mx-auto w-fit cursor-pointer" variant="outline">
					Submit
				</Button>
				{loadingStatus}
			</form>
		</Form>
	);
};
