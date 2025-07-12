/** biome-ignore-all lint/nursery/noExcessiveLinesPerFunction: cool */
import { PaymentForm } from "@components/Dues/PaymentForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
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

export function Payment() {
	return (
		<div className="mx-auto flex h-180 w-full items-center gap-2 rounded border shadow lg:w-9/10 xl:w-2/3">
			<div className="flex h-full w-full items-center justify-center py-8">
				<div className="h-full w-full lg:min-w-sm">
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
							<Card className="h-full w-full rounded-none border-none text-[#254152] shadow-none">
								<CardHeader>
									<CardTitle>Payment Form</CardTitle>
									<CardDescription>
										Please fill the form below to make payment.
									</CardDescription>
								</CardHeader>
								<CardContent className="text-left">
									<PaymentForm />
								</CardContent>
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
