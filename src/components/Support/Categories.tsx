import { useState } from "react";

const DuesTable = () => {
	return (
		<table className="mx-auto my-2 w-full border-collapse border border-gray-400 text-center">
			<thead className="bg-black text-white">
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
	const [isEllipsisOpen, setIsEllipsisOpen] = useState(false);

	return (
		<div className="mx-auto w-full text-justify font-light text-black md:w-2/3">
			{isEllipsisOpen ? (
				<>
					<h2 className="inline-block py-6 text-pretty">
						Want to stay in good standing with GSBE? Here's a simple breakdown
						of how to confirm your dues, make payment via Mobile Money or bank
						transfer, and get your membership updated.
					</h2>
					<ol className="ml-6 list-decimal">
						<li className="pb-6">
							<h3>Confirm Amount Due: </h3>
							<p>
								Verify your membership category and confirm the total amount
								payable (including any registration fees if applicable).
							</p>
						</li>
						<li className="pb-6">
							<h3>Make Payment: </h3>
							<p>
								Pay the applicable fees through any of the following channels:
							</p>
							<ul>
								<li>Mobile Money MTN Momo Pay ID: 302179 </li>
								<li>Account Name: Ghana Society of Biomedical Engineers</li>
							</ul>
							<ul>
								<li>Bank Transfer or Deposit</li>
								<li>Bank Name: Ghana Commercial </li>
								<li>
									Bank Account Name: Ghana Society of Biomedical Engineers
								</li>
								<li>Account Number: 6271010100828 </li>
								<li>Branch: Bantama Branch</li>
							</ul>
						</li>
						<li className="pb-6">
							<h3>Send Proof of Payment: </h3>
							<p>
								Email your payment receipt or transaction reference to:
								communications@gsbegh.org or via WhatsApp to the treasurer on
								0243302755
							</p>
						</li>
						<li className="pb-6">
							<h3>Receive Confirmation: </h3>
							<p>
								The Financial Committee will confirm your payment and issue an
								official receipt. Your membership status will then be updated
								accordingly.
							</p>
						</li>
					</ol>
					<button
						type="button"
						className="font-semibold hover:cursor-pointer hover:text-[#636362]"
						onClick={() => setIsEllipsisOpen(false)}
					>
						Read less
					</button>
				</>
			) : (
				<>
					<h2 className="inline-block py-6 text-pretty">
						Want to stay in good standing with GSBE? Here's a simple breakdown
						of how to confirm your dues, make payment via Mobile Money or bank
						transfer, and get your membership updated ...
					</h2>
					<button
						type="button"
						className="font-semibold hover:cursor-pointer hover:text-[#636362]"
						onClick={() => setIsEllipsisOpen(true)}
					>
						Read more
					</button>
				</>
			)}
		</div>
	);
};

export const AnnualMembershipDues = () => {
	return (
		<div className="w-full p-4">
			<div>
				<h1 className="tracking text-center text-2xl tracking-widest text-[#2F2F2E] uppercase">
					Annual Membership Dues
				</h1>
				<div className="w-full">
					<DuesTable />
					<PaymentInstructions />
				</div>
			</div>
		</div>
	);
};
