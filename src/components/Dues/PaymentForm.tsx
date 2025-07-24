/** biome-ignore-all lint/nursery/noExcessiveLinesPerFunction: cool */
import { useDue } from "@api/dues/dues.service";
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
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
	Currencies,
	type DuesData,
	DuesSchema,
	transform,
} from "@typings/dues";
import { ChevronsUpDown, Handshake } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router";
import { DotLoader } from "react-spinners";
import { toast } from "sonner";

export const PaymentForm = () => {
	const dueMutation = useDue();
	const [searchParams, setSearchParams] = useSearchParams();
	const success = searchParams.get("success");
	// const reference = searchParams.get("reference");

	useEffect(() => {
		if (success === "true") {
			toast.success("Payment made successfully", {
				position: "top-right",
				closeButton: true,
				icon: <Handshake color="green" />,
			});
		}
	});

	useEffect(() => {
		setSearchParams({});
	}, [setSearchParams]);

	const form = useForm<DuesData>({
		resolver: valibotResolver(DuesSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			membershipId: "",
			email: "",
			currency: "GHS",
			amount: 0,
		},
	});

	const loadingStatus = (() => {
		if (dueMutation.isPending) {
			return (
				<DotLoader
					aria-label="Loading Spinner"
					color="#3B82F6"
					data-testid="loader"
					loading={dueMutation.isPending}
					size={30}
					className="mx-auto"
				/>
			);
		}
		if (dueMutation.isError) {
			return (
				<p className="mt-20 text-center text-red-500">Failed to load data</p>
			);
		}
		return null;
	})();

	const onSubmit = (values: DuesData) => {
		dueMutation.mutate(values);
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
						name="email"
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
											<Input
												{...field}
												onChange={(e) => field.onChange(transform.output(e))}
												value={transform.input(field.value)}
												type="number"
												placeholder="0.1"
												min="0.1"
												step="any"
												className=""
											/>
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
					{loadingStatus}
				</div>
			</form>
		</Form>
	);
};
