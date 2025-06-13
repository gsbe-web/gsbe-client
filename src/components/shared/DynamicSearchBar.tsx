import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export const DynamicSearchBar = () => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const wrapperRef = useRef<HTMLDivElement>(null);

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	const closeSearch = () => {
		setIsSearchOpen(false);
	};

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as Node)
			) {
				setIsSearchOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={wrapperRef}>
			{/* Search Icon */}
			{!isSearchOpen && (
				<FontAwesomeIcon
					className="cursor-pointer"
					icon={faMagnifyingGlass}
					onClick={toggleSearch}
					size="lg"
				/>
			)}

			{/* Input Field with Search and Close Icons */}
			{isSearchOpen && (
				<div className="flex items-center justify-around border-b-2 border-[#91A0A8] md:gap-2">
					<FontAwesomeIcon
						className="text-gray-600"
						icon={faMagnifyingGlass}
						onClick={toggleSearch}
					/>
					<input
						className="w-25 focus:outline-none md:w-80"
						placeholder="Search..."
						type="text"
					/>
					{/* Search Icon inside Input */}
					{/* Close Icon inside Input */}
					<button className="" onClick={closeSearch} type="button">
						<FontAwesomeIcon className="text-gray-600" icon={faTimes} />
					</button>
				</div>
			)}
		</div>
	);
};
