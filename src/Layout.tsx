import { Footer, Header, SocialsBar } from "@components/layout";
import type React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-white">
			<SocialsBar />
			<div className="mt-14">{children}</div>
			<Header />
			<Footer />
		</div>
	);
}
