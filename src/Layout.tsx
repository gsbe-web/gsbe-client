import { Footer, Header } from "@components/layout";
import type React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<div className="mt-22">{children}</div>
			<Header />
			<Footer />
		</div>
	);
}
