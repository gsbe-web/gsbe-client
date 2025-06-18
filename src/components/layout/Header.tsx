/** biome-ignore-all lint/nursery/noNestedComponentDefinitions: cool */
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, useLocation } from "react-router";

export const Header = () => {
	const location = useLocation();
	const selectedLink = location.pathname;
	const [menuOpen, setMenuOpen] = useState(false);

	const Logo = () => {
		return (
			<NavLink className="hover:text-[#C25144]" to="/">
				<div className="Logo ml-4 flex h-14 w-14 items-center justify-start">
					<img alt="logo" src="/images/logo.webp" title="GSBE" />
				</div>
			</NavLink>
		);
	};

	const SiteName = () => {
		return (
			<NavLink className="hover:text-[#C25144]" to="/">
				<div className="SiteName ml-2 flex items-center">
					<h1 className="text-xl font-extrabold">GSBE</h1>
				</div>
			</NavLink>
		);
	};

	const Navigation = (props: { isOverlay: boolean }) => {
		const { isOverlay } = props;
		return (
			<nav
				className={`flex flex-col items-center space-y-4 ${isOverlay ? "fixed inset-0 flex h-screen flex-col items-center border-t-white bg-[#254152] pt-44 text-white md:inset-96 md:top-[4.5rem] md:right-0 md:h-fit md:w-1/2 md:border-t md:py-14" : "text-base lg:flex-row lg:space-y-0 lg:space-x-8"}`}
			>
				{isOverlay && (
					<button
						className="fixed top-6 right-6 block text-2xl text-[#fff] md:hidden"
						onClick={() => setMenuOpen(false)}
						type="button"
					>
						<FontAwesomeIcon icon={faTimes} size="lg" />
					</button>
				)}
				{[
					"/",
					"/about",
					"/events",
					"/blogs",
					"/contact",
					"/support",
					"/executives",
				].map((path) => (
					<div className="relative" key={path}>
						<NavLink
							className={`text-base tracking-wide hover:text-[#C25144] ${selectedLink === path ? "text-[#C25144]" : ""} py-2`}
							onClick={() => setMenuOpen(false)}
							to={path}
						>
							{path === "/"
								? "Home"
								: path.split("/")[1]?.charAt(0).toUpperCase() +
									path.slice(2)}{" "}
							{/* Format link text */}
						</NavLink>
						{/* Horizontal line under the link only for overlay */}
						{/* {isOverlay && <div className='absolute left-1/2 transform -translate-x-1/2 w-[75vw] h-px bg-gray-300 mt-1' />} */}
					</div>
				))}
			</nav>
		);
	};

	return (
		<header className="fixed top-0 w-full grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] bg-[#254152] py-4  text-[#FFFFFF] z-1000">
			<div className="flex items-center lg:justify-end">
				<Logo />
				<SiteName />
			</div>
			{/* Center the navigation on larger screens */}
			<div className="hidden flex-grow lg:flex lg:justify-center">
				<Navigation isOverlay={false} />
			</div>
			{/* Hamburger menu button for smaller screens */}
			<button
				className="mr-4 ml-auto text-2xl lg:hidden"
				onClick={() => setMenuOpen(!menuOpen)}
				type="button"
			>
				<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
			</button>

			{/* Fullscreen green overlay with centered nav links when menu is open */}
			{menuOpen && (
				<div className="">
					{/* Close button */}
					<button
						className="fixed top-2 right-0 text-2xl text-[#254152]"
						onClick={() => setMenuOpen(false)}
						type="button"
					>
						<FontAwesomeIcon icon={faTimes} size="xl" />
					</button>
					<Navigation isOverlay={true} />
				</div>
			)}
		</header>
	);
};
