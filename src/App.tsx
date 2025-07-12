import { Layout } from "Layout";
import { LoadingOrError } from "@components/shared";
import { Toaster } from "@components/ui/sonner";
import { About } from "@pages/about";
import { OurExecutives } from "@pages/about/executives";
import { Membership } from "@pages/about/membership";
import { Contact } from "@pages/contact";
import { Dues } from "@pages/dues";
import { Events } from "@pages/events";
import { EventDetails } from "@pages/events/slug";
import { RsvpForm } from "@pages/events/slug/rsvp-form";
import { Home } from "@pages/home";
import { ErrorPage } from "@pages/not-found";
import { Publications } from "@pages/publications";
import { OpenedPublication } from "@pages/publications/slug";
import { Suspense } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { Route, Routes } from "react-router";

function renderError({ error }: FallbackProps) {
	return <LoadingOrError error={error} />;
}

export function App() {
	return (
		<>
			<ErrorBoundary fallbackRender={renderError}>
				<Suspense fallback={<LoadingOrError />}>
					<Layout>
						<Routes>
							<Route element={<Home />} index={true} />

							<Route path="about">
								<Route element={<About />} index={true} />
								<Route element={<OurExecutives />} path="executives" />
								<Route element={<Membership />} path="membership" />
							</Route>

							<Route path="publications">
								<Route element={<Publications />} index={true} />
								<Route element={<OpenedPublication />} path=":slug" />
							</Route>

							<Route path="events">
								<Route element={<Events />} index={true} />
								<Route element={<EventDetails />} path=":slug" />
								<Route element={<RsvpForm />} path=":slug/form" />
							</Route>

							<Route element={<Contact />} path="contact" />
							<Route element={<Dues />} path="dues" />
							<Route element={<ErrorPage />} path="*" />
						</Routes>
					</Layout>
				</Suspense>
			</ErrorBoundary>
			<Toaster />
		</>
	);
}
