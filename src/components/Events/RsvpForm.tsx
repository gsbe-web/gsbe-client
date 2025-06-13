import { useEvent } from "@api/events";
import { Spinner } from "@components/shared";
import { formatTimestamp } from "@utils";

import { logger } from "loggers";
import { useId, useState } from "react";
import { useParams } from "react-router";

export const EventForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});
	const emaiId = useId();
	const firstNameId = useId();
	const lastNameId = useId();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Add form submission logic here
		logger.info(formData);
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
					<form autoComplete="on" className="space-y-6" onSubmit={handleSubmit}>
						<div className="flex space-x-6">
							<div className="w-1/2">
								<label
									className="block text-sm font-medium text-gray-700"
									htmlFor="firstName"
								>
									<span className="text-red-600">*</span>First Name
								</label>
								<input
									className="mt-1 block w-full border border-gray-300 p-2 shadow-sm"
									id={firstNameId}
									name="firstName"
									onChange={handleChange}
									required={true}
									type="text"
									value={formData.firstName}
								/>
							</div>
							<div className="w-1/2">
								<label
									className="block text-sm font-medium text-gray-700"
									htmlFor="lastName"
								>
									<span className="text-red-600">*</span>Last Name
								</label>
								<input
									className="mt-1 block w-full border border-gray-300 p-2 shadow-sm"
									id={lastNameId}
									name="lastName"
									onChange={handleChange}
									required={true}
									type="text"
									value={formData.lastName}
								/>
							</div>
						</div>
						<div>
							<label
								className="block text-sm font-medium text-gray-700"
								htmlFor="email"
							>
								<span className="text-red-600">*</span>Email
								<input
									autoComplete="on"
									className="mt-1 block w-full border border-gray-300 p-2 shadow-sm"
									id={emaiId}
									name="email"
									onChange={handleChange}
									required={true}
									type="email"
									value={formData.email}
								/>
							</label>
						</div>
						<button
							className="w-full bg-gray-700 px-4 py-2 font-semibold text-white hover:bg-gray-800 focus:outline-none"
							type="submit"
						>
							SUBMIT
						</button>
					</form>
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
