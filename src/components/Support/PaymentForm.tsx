/** biome-ignore-all lint/nursery/noExcessiveLinesPerFunction: cool */
import { cn } from "@components/lib/utils";
import {
	Button,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Label,
} from "@components/ui";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { logger } from "@loggers";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Currencies, type DuesData, DuesSchema } from "@typings/support";
import { ChevronsUpDown, Handshake } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const PaymentForm = () => {
	const form = useForm<DuesData>({
		resolver: valibotResolver(DuesSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			membershipId: "",
			emailAddress: "",
			currency: "GHS",
			amount: 0.1,
		},
	});

	//TODO:: implement backend for sending such message to an actual receipient
	const onSubmit = (values: DuesData) => {
		toast.success("Payment Made successfully", {
			position: "top-right",
			closeButton: true,
			icon: <Handshake color="green" />,
		});
		logger.info(values);
	};
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="space-y-4">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name:</FormLabel>
								<FormControl>
									<Input {...field} type="text" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name:</FormLabel>
								<FormControl>
									<Input {...field} type="text" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="membershipId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Membership ID:</FormLabel>
								<FormControl>
									<Input {...field} type="text" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="emailAddress"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email Address:</FormLabel>
								<FormControl>
									<Input {...field} type="email" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="space-y-2">
						<Label>Amount:</Label>
						<div className="flex items-center gap-2">
							<FormField
								control={form.control}
								name="currency"
								render={({ field }) => (
									<FormItem>
										<DropdownMenu>
											<DropdownMenuTrigger asChild={true}>
												<Button variant="outline" className="">
													{field.value}
													<ChevronsUpDown
														className={cn("-mr-2 size-4 opacity-50")}
													/>
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												<DropdownMenuLabel>Select Currency</DropdownMenuLabel>
												<DropdownMenuSeparator />
												<DropdownMenuRadioGroup
													value={field.value}
													onValueChange={field.onChange}
												>
													{Object.values(Currencies).map((value) => (
														<DropdownMenuRadioItem value={value} key={value}>
															{value}
														</DropdownMenuRadioItem>
													))}
												</DropdownMenuRadioGroup>
											</DropdownMenuContent>
										</DropdownMenu>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="amount"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input {...field} type="number" className="" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<Button type="submit" className="bg-[#254152] hover:bg-[#1e3544]">
						Make Payment
					</Button>
				</div>
			</form>
		</Form>
	);
};
