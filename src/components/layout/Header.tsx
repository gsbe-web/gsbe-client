/** biome-ignore-all lint/nursery/noNestedComponentDefinitions: cool */
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, useLocation } from "react-router";

export const Header = () => {
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

		const loc = useLocation();

		const activeLink = "text-[#D55342]";
		const inactiveLink = "text-white";
		const isLinkActive = (path: string) =>
			loc.pathname === path || loc.pathname.startsWith(`${path}/`);

		const AboutLinks = () => (
			<div className="flex flex-col justify-center gap-2 rounded p-4 max-md:ml-2 lg:absolute lg:hidden lg:bg-[#636362] lg:group-hover:flex">
				<NavLink
					to="/about/executives"
					className={`relative text-base font-light tracking-wide hover:text-[#D55342] ${isLinkActive("/about/executives") ? activeLink : inactiveLink}`}
					onClick={() => setMenuOpen(false)}
				>
					Executives
				</NavLink>
				<NavLink
					to="/about/membership"
					className={`relative text-base font-light tracking-wide hover:text-[#D55342] ${isLinkActive("/about/membership") ? activeLink : inactiveLink}`}
					onClick={() => setMenuOpen(false)}
				>
					Membership
				</NavLink>
			</div>
		);

		return (
			<nav
				className={`flex flex-col items-center gap-4 ${isOverlay ? "fixed inset-0 flex h-screen flex-col items-center border-t-white bg-[#254152] pt-44 text-white md:inset-96 md:top-[4.5rem] md:right-0 md:h-fit md:w-1/2 md:border-t md:py-14" : "text-base lg:flex-row lg:space-y-0 lg:space-x-8"}`}
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
				<NavLink
					to="/"
					className={`text-base font-light tracking-wide hover:text-[#D55342] ${isLinkActive("/") ? activeLink : inactiveLink} py-2`}
					onClick={() => setMenuOpen(false)}
				>
					Home
				</NavLink>
				<div className="group relative ml-15 lg:ml-0">
					<NavLink
						to="/about"
						className={`text-base font-light tracking-wide hover:text-[#D55342] ${isLinkActive("/about") ? activeLink : inactiveLink} py-2`}
						onClick={() => setMenuOpen(false)}
					>
						About GSBE
					</NavLink>
					<AboutLinks />
				</div>
				<NavLink
					to="/support"
					className={`text-base font-light tracking-wide hover:text-[#D55342] ${isLinkActive("/support") ? activeLink : inactiveLink} py-2`}
					onClick={() => setMenuOpen(false)}
				>
					Dues
				</NavLink>
				<NavLink
					to="/events"
					className={`text-base font-light tracking-wide hover:text-[#D55342] ${isLinkActive("/events") ? activeLink : inactiveLink} py-2`}
					onClick={() => setMenuOpen(false)}
				>
					Events
				</NavLink>
				<NavLink
					to="/publications"
					className={`text-base font-light tracking-wide hover:text-[#D55342] ${isLinkActive("/publications") ? activeLink : inactiveLink} py-2`}
					onClick={() => setMenuOpen(false)}
				>
					Publications
				</NavLink>
				<NavLink
					to="/contact"
					className={`text-base font-light tracking-wide hover:text-[#D55342] ${isLinkActive("/contact") ? activeLink : inactiveLink} py-2`}
					onClick={() => setMenuOpen(false)}
				>
					Contact Us
				</NavLink>
			</nav>
		);
	};

	return (
		<header className="fixed top-0 z-1000 grid w-full grid-cols-2 bg-[#254152] py-4 text-[#FFFFFF] lg:grid-cols-[1fr_2fr_1fr]">
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
