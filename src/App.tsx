import { Layout } from "Layout";
import { LoadingOrError } from "@components/shared";
import { Toaster } from "@components/ui/sonner";
import { About } from "@pages/about";
import { OurExecutives } from "@pages/about/executives";
import { Membership } from "@pages/about/membership";
import { Blog } from "@pages/blog";
import { OpenedBlog } from "@pages/blog/slug";
import { Contact } from "@pages/contact";
import { Events } from "@pages/events";
import { EventDetails } from "@pages/events/slug";
import { RsvpForm } from "@pages/events/slug/rsvp-form";
import { Home } from "@pages/home";
import { ErrorPage } from "@pages/not-found";
import { Support } from "@pages/support";
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
								<Route element={<Blog />} index={true} />
								<Route element={<OpenedBlog />} path=":slug" />
							</Route>

							<Route path="events">
								<Route element={<Events />} index={true} />
								<Route element={<EventDetails />} path=":slug" />
								<Route element={<RsvpForm />} path=":slug/form" />
							</Route>

							<Route element={<Contact />} path="contact" />
							<Route element={<Support />} path="/support" />
							<Route element={<ErrorPage />} path="*" />
						</Routes>
					</Layout>
				</Suspense>
			</ErrorBoundary>
			<Toaster />
		</>
	);
}
