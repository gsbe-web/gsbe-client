import { Link } from "react-router";

const DuesTable = () => {
	return (
		<table className="border-collapse border border-gray-400 text-center max-sm:w-full">
			<thead className="bg-[#254152] text-white">
				<tr>
					<th className="w-1/2 border border-gray-300 px-6 py-2">
						Membership Category
					</th>
					<th className="w-1/2 border border-gray-300 px-6 py-2">
						Annual Dues (GHS)
					</th>
				</tr>
			</thead>
			<tbody className="bg-white text-black">
				<tr>
					<td className="border border-gray-300 px-6 py-2">Student Member</td>
					<td className="border border-gray-300 px-6 py-2">
						Determined by Various Student Chapters
					</td>
				</tr>
				<tr>
					<td className="border border-gray-300 px-6 py-2">Associate Member</td>
					<td className="border border-gray-300 px-6 py-2">360</td>
				</tr>
				<tr>
					<td className="border border-gray-300 px-6 py-2">Full Member</td>
					<td className="border border-gray-300 px-6 py-2">360</td>
				</tr>
				<tr>
					<td className="border border-gray-300 px-6 py-2">Corporate Member</td>
					<td className="border border-gray-300 px-6 py-2">To be Determined</td>
				</tr>
			</tbody>
		</table>
	);
};

const PaymentInstructions = () => {
	return (
		<div className="mx-auto max-w-3xl space-y-8 py-2 md:p-8">
			<h1 className="text-center text-3xl font-bold text-[#254152]">
				Stay in Good Standing with GSBE
			</h1>
			<p className="text-center text-gray-600">
				Follow these simple steps to confirm your dues, make payment, and update
				your membership.
			</p>

			<div className="space-y-6">
				<div className="border-primary border-l-4 pl-4">
					<h2 className="text-xl font-semibold text-[#254152]">
						1. Confirm Amount Due
					</h2>
					<p className="text-gray-700">
						Verify your membership category and confirm the total amount payable
						(including any registration fees if applicable).
					</p>
					<DuesTable />
				</div>

				<div className="border-primary border-l-4 pl-4">
					<h2 className="text-xl font-semibold text-[#254152]">
						2. Make Payment
					</h2>
					<p className="mb-2 text-gray-700">
						Pay the applicable fees through any of the following channels:
					</p>

					<div className="space-y-4 rounded-lg bg-gray-50 p-4">
						<div>
							<h3 className="font-medium text-gray-800">
								📱 Mobile Money (MTN MoMo Pay)
							</h3>
							<p className="text-gray-700">
								<span className="font-semibold">Pay ID:</span> 302179
								<br />
								<span className="font-semibold">Account Name:</span> Ghana
								Society of Biomedical Engineers
							</p>
						</div>

						<div>
							<h3 className="font-medium text-gray-800">
								🏦 Bank Transfer or Deposit
							</h3>
							<p className="text-gray-700">
								<span className="font-semibold">Bank Name:</span> Ghana
								Commercial Bank
								<br />
								<span className="font-semibold">Account Name:</span> Ghana
								Society of Biomedical Engineers
								<br />
								<span className="font-semibold">Account Number:</span>{" "}
								6271010100828
								<br />
								<span className="font-semibold">Branch:</span> Bantama Branch
							</p>
						</div>
					</div>
				</div>

				<div className="border-primary border-l-4 pl-4">
					<h2 className="text-xl font-semibold text-[#254152]">
						3. Send Proof of Payment
					</h2>
					<p className="text-gray-700">
						Email your payment receipt or transaction reference to:{" "}
						<a
							href="mailto:communications@gsbegh.org"
							className="text-[#254152] underline"
						>
							communications@gsbegh.org
						</a>{" "}
						or via WhatsApp to the treasurer on{" "}
						<a href="tel:+233243302755" className="text-[#254152] underline">
							0243302755
						</a>
						.
					</p>
				</div>

				<div className="border-primary border-l-4 pl-4">
					<h2 className="text-xl font-semibold text-[#254152]">
						4. Receive Confirmation
					</h2>
					<p className="text-gray-700">
						The Financial Committee will confirm your payment and issue an
						official receipt. Your membership status will then be updated
						accordingly.
					</p>
				</div>
			</div>

			<div className="text-center">
				<Link
					to="/contact"
					className="rounded-lg bg-[#254152] px-6 py-3 text-white hover:bg-[#1e3544]"
				>
					Contact GSBE Now
				</Link>
			</div>
		</div>
	);
};

export const AnnualMembershipDues = () => {
	return (
		<div className="w-full p-4">
			<div>
				<div className="mx-auto w-full gap-4">
					<PaymentInstructions />
				</div>
			</div>
		</div>
	);
};
