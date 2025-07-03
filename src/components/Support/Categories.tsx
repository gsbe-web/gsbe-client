import { useState } from "react";

const DuesTable = () => {
	return (
		<table className="border border-collapse  border-gray-400 mx-auto my-2 text-center">
			<thead className="text-white bg-black">
				<tr>
					<th className="border border-gray-300 px-6 py-2 w-1/2">
						Membership Category
					</th>
					<th className="border border-gray-300 px-6 py-2 w-1/2">
						Annual Dues (GHS)
					</th>
				</tr>
			</thead>
			<tbody className="text-black bg-white">
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
		<div className="text-black font-light text-justify mx-auto w-2/3">
			{isEllipsisOpen ? (
				<>
					<h2 className="inline-block py-6 text-pretty">
						Want to stay in good standing with GSBE? Here's a simple breakdown
						of how to confirm your dues, make payment via Mobile Money or bank
						transfer, and get your membership updated.
					</h2>
					<ol className="list-decimal ml-6">
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
		<div className="bg-[#EAEAE8]  p-4">
			<div>
				<h1 className="text-2xl tracking tracking-widest uppercase text-[#2F2F2E] text-center">
					Annual Membership Dues
				</h1>
				<div>
					<DuesTable />
					<PaymentInstructions />
				</div>
			</div>
		</div>
	);
};
