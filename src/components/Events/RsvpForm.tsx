import { useEvent } from "@api/events";
import { Spinner } from "@components/shared";
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from "@components/ui";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { type RsvpData, RsvpSchema } from "@typings/events/rsvp";
import { formatTimestamp } from "@utils";

import { logger } from "loggers";
import { CalendarCheck2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast } from "sonner";

export const EventForm = () => {
	const form = useForm<RsvpData>({
		resolver: valibotResolver(RsvpSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
	});

	const onSubmit = (values: RsvpData) => {
		toast.success("Rsvp Submitted Successfully", {
			position: "top-right",
			closeButton: true,
			icon: <CalendarCheck2 color="green" />,
		});
		logger.info("Rsvp Submitted Successfully:", values);
	};

	const { slug } = useParams();

	const { data: event, isLoading, isError } = useEvent(slug || "");

	if (isLoading) {
		return <Spinner isLoading={true} />;
	}

	if (isError) {
		return <p>Failed to load data</p>;
	}

	if (!event) {
		return <div>Event not found</div>;
	}

	const { date, time } = formatTimestamp(event.date.toString());

	return (
		<div className="md:p-12 lg:p-20">
			<div className="flex flex-col-reverse items-start justify-center space-y-8 bg-white py-8 md:flex-row md:space-y-0 md:space-x-16">
				<div className="w-full p-4 md:w-1/2 lg:p-20">
					<h2 className="mb-6 text-2xl font-bold text-green-800">
						Add Your Details
					</h2>
					<Form {...form}>
						<form
							autoComplete="on"
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-6 text-gray-700"
						>
							<div className="flex gap-6">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>
												<span className="text-red-600">*</span>First Name:
											</FormLabel>
											<FormControl>
												<Input {...field} type="text" className="p-5" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>
												<span className="text-red-600">*</span>Last Name:
											</FormLabel>
											<FormControl>
												<Input {...field} type="text" className="p-5" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											<span className="text-red-600">*</span>Email:
										</FormLabel>
										<FormControl>
											<Input {...field} type="email" className="p-5" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="w-full bg-gray-700 p-4 font-semibold hover:bg-gray-800"
							>
								Submit
							</Button>
						</form>
					</Form>
				</div>
				<div className="border-gray w-full border border-solid bg-gray-100 p-6 shadow-sm md:w-[320px]">
					<h3 className="text-xl font-semibold text-green-800">
						{event.title}
					</h3>
					<p className="mt-4 text-green-800">
						{date}, {time}
					</p>
					<p className="text-green-800">{event.location}</p>
				</div>
			</div>
		</div>
	);
};
