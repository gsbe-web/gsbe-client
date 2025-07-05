import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Input,
	Label,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@components/ui";
import {
	faApplePay,
	faCcMastercard,
	faCcVisa,
	faGooglePay,
	faPaypal,
} from "@fortawesome/free-brands-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useId } from "react";

export function PaymentForm() {
	return (
		<div className="mx-auto flex h-170 w-250 items-center gap-2 rounded border shadow">
			<div className="flex h-full w-full items-center justify-center py-8">
				<div className="h-full w-full min-w-sm">
					<Tabs defaultValue="account" className="h-full px-4">
						<TabsList>
							<TabsTrigger value="account">
								<FontAwesomeIcon icon={faFileInvoice} size="2x" />
							</TabsTrigger>
							<TabsTrigger value="visa" disabled={true}>
								<FontAwesomeIcon icon={faCcVisa} size="5x" />
							</TabsTrigger>
							<TabsTrigger value="master" disabled={true}>
								<FontAwesomeIcon icon={faCcMastercard} size="5x" />
							</TabsTrigger>
							<TabsTrigger value="google" disabled={true}>
								<FontAwesomeIcon icon={faGooglePay} size="5x" />
							</TabsTrigger>
							<TabsTrigger value="apple" disabled={true}>
								<FontAwesomeIcon icon={faApplePay} size="5x" />
							</TabsTrigger>
							<TabsTrigger value="paypal" disabled={true}>
								<FontAwesomeIcon icon={faPaypal} size="5x" />
							</TabsTrigger>
						</TabsList>
						<TabsContent value="account">
							<Card className="h-full rounded-none border-none shadow-none">
								<CardHeader>
									<CardTitle>Payment Form</CardTitle>
									<CardDescription>
										Please fill the form below to make payment.
									</CardDescription>
								</CardHeader>
								<CardContent className="grid gap-6">
									<div className="grid gap-3">
										<Label htmlFor="tabs-demo-name">First Name</Label>
										<Input id={useId()} defaultValue="Pedro Duarte" />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="tabs-demo-username">Last Name</Label>
										<Input id={useId()} defaultValue="@peduarte" />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="tabs-demo-username">Membership ID</Label>
										<Input id={useId()} defaultValue="@peduarte" />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="tabs-demo-username">Email Address</Label>
										<Input id={useId()} defaultValue="@peduarte" />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="tabs-demo-username">Amount</Label>
										<Input id={useId()} defaultValue="@peduarte" />
									</div>
								</CardContent>
								<CardFooter>
									<Button>Make Payment</Button>
								</CardFooter>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</div>

			<div className="hidden h-full w-full border md:flex">
				<img
					src="/images/officialgsbe_cover_about.jpeg"
					alt="Payment Illustration"
					className="h-full w-full object-cover"
				/>
			</div>
		</div>
	);
}
