import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

export const ShareLinkPopUp = (props: {
	showSharePopup: boolean;
	setShowSharePopup: (data: boolean) => void;
}) => {
	const { showSharePopup, setShowSharePopup } = props;
	const popupRef = useRef<HTMLDivElement>(null);

	const handleCopyLink = () => {
		navigator.clipboard.writeText(window.location.href);
		alert("Link copied to clipboard!");
	};

	const handleClickOutside = (event: { target: unknown }) => {
		if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
			setShowSharePopup(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	return (
		<div>
			{showSharePopup && (
				<div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black">
					<div
						className="mx-4 h-auto w-1/3 bg-white px-12 py-16 shadow-lg"
						ref={popupRef}
					>
						<button
							className="absolute top-2 right-2 text-4xl text-[#254152]"
							onClick={() => setShowSharePopup(false)}
							type="button"
						>
							&times;
						</button>
						<h2 className="mb-3 flex items-center text-base font-extrabold tracking-widest uppercase">
							<FontAwesomeIcon className="mr-2" icon={faLink} />
							Share Link
						</h2>
						<input
							className="mb-3 w-full border border-gray-300 p-2"
							readOnly={true}
							type="text"
							value={window.location.href}
						/>
						<div className="flex justify-end space-x-6">
							<button
								className="border border-[#636362] px-4 py-2 text-sm font-light text-[#636362]"
								onClick={() => setShowSharePopup(false)}
								type="button"
							>
								Cancel
							</button>
							<button
								className="bg-[#636362] px-4 py-2 text-sm font-light text-white"
								onClick={handleCopyLink}
								type="button"
							>
								Copy Link
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
