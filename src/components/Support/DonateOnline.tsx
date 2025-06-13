/** biome-ignore-all lint/complexity/noExcessiveCognitiveComplexity: not yet */
import type React from "react";
import type { ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { useState } from "react";

const REGEX = /^GH¢\s*/;
const NUMBER_REGEX = /^[0-9.]$/;

export const DonateOnline: React.FC = () => {
	const [enterAmount, setEnterAmount] = useState(false);
	const [activeFrequencyButton, setActiveFrequencyButton] = useState("");
	const [activeAmountButton, setActiveAmountButton] = useState("");

	const handleOtherButtonClick = () => {
		setEnterAmount(!enterAmount);
		if (enterAmount) {
			setActiveAmountButton("");
		} else {
			setActiveAmountButton("other");
		}
	};

	const handleFrequencyButtonClick = (buttonType: string) => {
		setActiveFrequencyButton(buttonType);
	};

	const handleAmountButtonClick = (amount: string) => {
		setActiveAmountButton(amount);
		setEnterAmount(false);
	};

	return (
		<div className="md:p-20">
			<div className="bg-white px-4 py-6 text-center text-[#254152]">
				<h1 className="text-4xl font-extrabold tracking-widest text-[#D55342] uppercase">
					Donate Online
				</h1>
				<p className="py-4">
					Make an impact with just a click! Support our mission by donating
					online to help advance biomedical engineering and improve healthcare
					in Ghana. Every contribution brings us closer to innovation and better
					health outcomes. Join us in making a difference!
				</p>
				<div>
					<div className="pb-2 text-start">Frequency</div>
					<div className="flex flex-row justify-between gap-2 tracking-wide">
						<button
							className={`h-12 w-full border px-4 py-2 ${activeFrequencyButton === "oneTime" ? "border-[#254152] bg-[#EFEFEF] text-[#254152]" : "border-[#254152] bg-transparent text-[#254152]"}`}
							onClick={() => handleFrequencyButtonClick("oneTime")}
							type="button"
						>
							One time
						</button>
						<button
							className={`w-full border px-4 py-2 ${activeFrequencyButton === "monthly" ? "border-[#254152] bg-[#EFEFEF] text-[#254152]" : "border-[#254152] bg-transparent text-[#254152]"}`}
							onClick={() => handleFrequencyButtonClick("monthly")}
							type="button"
						>
							Monthly
						</button>
					</div>
				</div>
				<div>
					<div className="pt-4 pb-2 text-start">Amount</div>
					<div className="flex flex-col justify-between gap-2 tracking-wide md:flex-row">
						<button
							className={`w-full border p-2 ${activeAmountButton === "10.00" ? "border-[#254152] bg-[#EFEFEF] text-[#254152]" : "border-[#254152] bg-transparent text-[#254152]"}`}
							onClick={() => handleAmountButtonClick("10.00")}
							type="button"
						>
							GH¢ 10.00
						</button>
						<button
							className={`w-full border px-4 py-2 ${activeAmountButton === "50.00" ? "border-[#254152] bg-[#EFEFEF] text-[#254152]" : "border-[#254152] bg-transparent text-[#254152]"}`}
							onClick={() => handleAmountButtonClick("50.00")}
							type="button"
						>
							GH¢ 50.00
						</button>
						<button
							className={`w-full border px-4 py-2 ${activeAmountButton === "100.00" ? "border-[#254152] bg-[#EFEFEF] text-[#254152]" : "border-[#254152] bg-transparent text-[#254152]"}`}
							onClick={() => handleAmountButtonClick("100.00")}
							type="button"
						>
							GH¢ 100.00
						</button>
						<button
							className={`w-full border px-4 py-2 ${activeAmountButton === "200.00" ? "border-[#254152] bg-[#EFEFEF] text-[#254152]" : "border-[#254152] bg-transparent text-[#254152]"}`}
							onClick={() => handleAmountButtonClick("200.00")}
							type="button"
						>
							GH¢ 200.00
						</button>
						<button
							className={`w-full border px-4 py-2 ${activeAmountButton === "other" ? "border-[#254152] bg-[#EFEFEF] text-[#254152]" : "border-[#254152] bg-transparent text-[#254152]"}`}
							onClick={handleOtherButtonClick}
							type="button"
						>
							Other
						</button>
					</div>
					{enterAmount && (
						<div className="flex justify-center pt-4">
							<input
								className="h-12 w-full border border-[#254152] px-10"
								defaultValue="GH¢ "
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									let value = e.target.value;

									if (value.startsWith("GH¢ ")) {
										value = `GH¢ ${value.substring(4).replace(REGEX, "")}`;
									} else {
										value = `GH¢ ${value.replace(REGEX, "")}`;
									}
									e.target.value = value;
									e.target.setSelectionRange(value.length, value.length);
								}}
								onClick={(e: MouseEvent<HTMLInputElement>) => {
									const input = e.target as HTMLInputElement;
									if (
										input.selectionStart !== null &&
										input.selectionStart < 4
									) {
										e.preventDefault();
										input.setSelectionRange(4, 4);
									}
								}}
								onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
									e.target.setSelectionRange(4, 4)
								}
								onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
									const input = e.target as HTMLInputElement;
									const cursorPosition = input.selectionStart ?? 0;
									const charCode = e.key;

									if (
										cursorPosition <= 4 &&
										(charCode === "ArrowLeft" || charCode === "ArrowRight")
									) {
										e.preventDefault();
										input.setSelectionRange(4, 4);
									}

									if (charCode === "Backspace" && cursorPosition > 4) {
										input.value =
											input.value.slice(0, cursorPosition - 1) +
											input.value.slice(cursorPosition);
										input.setSelectionRange(
											cursorPosition - 1,
											cursorPosition - 1,
										);
										e.preventDefault();
									} else if (charCode === "Backspace") {
										e.preventDefault();
									}

									if (cursorPosition <= 4 && charCode === "Delete") {
										e.preventDefault();
									}

									if (
										!(
											NUMBER_REGEX.test(charCode) ||
											[
												"Backspace",
												"Delete",
												"ArrowLeft",
												"ArrowRight",
											].includes(charCode)
										)
									) {
										e.preventDefault();
									}

									if (charCode === "." && input.value.includes(".")) {
										e.preventDefault();
									}

									const decimalIndex = input.value.indexOf(".");
									if (decimalIndex !== -1 && cursorPosition > decimalIndex) {
										const decimalPart = input.value.substring(decimalIndex + 1);
										if (
											decimalPart.length >= 2 &&
											cursorPosition > decimalIndex
										) {
											e.preventDefault();
										}
									}
								}}
								onMouseDown={(e: MouseEvent<HTMLInputElement>) => {
									const input = e.target as HTMLInputElement;
									if (
										input.selectionStart !== null &&
										input.selectionStart < 4
									) {
										e.preventDefault();
									}
								}}
								placeholder="Enter other amount"
								type="text"
							/>
						</div>
					)}
					<div className="pt-8 pb-16">
						<button
							className="h-12 w-full bg-[#F4CE50] px-4 py-2 hover:bg-[#F9E7AA]"
							type="button"
						>
							Donate
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
