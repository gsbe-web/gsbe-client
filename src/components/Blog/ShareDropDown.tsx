import { faEllipsisVertical, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { useEffect } from "react";

type DropDownProps = {
	open: boolean;
	setOpen: (value: boolean) => void;
	openModal: () => void;
	sharePostRef: React.RefObject<HTMLDivElement | null>;
	children: React.ReactNode;
};
export const ShareDropDown: React.FC<DropDownProps> = (props) => {
	const { open, setOpen, openModal, children, sharePostRef } = props;
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				sharePostRef.current &&
				!(sharePostRef.current as HTMLDivElement).contains(event.target as Node)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [setOpen, sharePostRef.current]);
	return (
		<div className="group relative p-4 text-[#254152]" ref={sharePostRef}>
			<FontAwesomeIcon
				className="cursor-pointer text-[#254152]"
				icon={faEllipsisVertical}
				onClick={() => setOpen(!open)}
				role="button"
			/>
			<button
				className={`absolute ${!open && "hidden"} right-1 h-fit w-fit cursor-pointer items-center gap-2 bg-white p-2 whitespace-nowrap shadow group-hover:flex`}
				onClick={openModal}
				type="button"
			>
				<FontAwesomeIcon icon={faShare} />
				Share Post
			</button>

			{children}
		</div>
	);
};
