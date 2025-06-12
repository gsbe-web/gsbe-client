import { Layout } from "Layout";
import { LoadingOrError } from "@components/shared";
import { About } from "@pages/about/page";
import { Blog } from "@pages/blog/page";
import { OpenedBlog } from "@pages/blog/slug/page";
import { Contact } from "@pages/contact/page";
import { Events } from "@pages/events/page";
import { EventDetails } from "@pages/events/slug/page";
import { RsvpForm } from "@pages/events/slug/rsvp-form/page";
import { OurExecutives } from "@pages/executives/page";
import { Home } from "@pages/home/page";
import { ErrorPage } from "@pages/not-found/page";
import { Publications } from "@pages/publications/page";
import { Support } from "@pages/support/page";
import { Suspense } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { Route, Routes } from "react-router";

function renderError({ error }: FallbackProps) {
  return <LoadingOrError error={error} />;
}

export function App() {
  return (
    <ErrorBoundary fallbackRender={renderError}>
      <Suspense fallback={<LoadingOrError />}>
        <Layout>
          <Routes>
            <Route element={<Home />} index={true} />

            <Route path="about">
              <Route element={<About />} index={true} />
            </Route>

            <Route path="blog">
              <Route element={<Blog />} index={true} />
              <Route element={<OpenedBlog />} path=":slug" />
            </Route>

            <Route path="events">
              <Route element={<Events />} index={true} />
              <Route element={<EventDetails />} path=":slug" />
              <Route element={<RsvpForm />} path=":slug/form" />
            </Route>

            <Route element={<Contact />} path="/contact" />
            <Route element={<Publications />} path="/publications" />
            <Route element={<Support />} path="/support" />
            <Route element={<OurExecutives />} path="/executives" />
            <Route element={<ErrorPage />} path="*" />
          </Routes>
        </Layout>
      </Suspense>
    </ErrorBoundary>
  );
}
