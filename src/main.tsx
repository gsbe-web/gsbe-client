import "./global.css";
import { logger } from "@loggers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./App";

const queryClient = new QueryClient();

async function enableMocking() {
	if (import.meta.env.VITE_NODE_ENV !== "development") {
		return;
	}
	const { worker } = await import("./mocks/browser");
	return worker.start();
}

const container = document.querySelector("#root");
enableMocking()
	.then(() => {
		if (container) {
			const root = createRoot(container);
			root.render(
				<StrictMode>
					<QueryClientProvider client={queryClient}>
						<ReactQueryDevtools initialIsOpen={false} />
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</QueryClientProvider>
				</StrictMode>,
			);
		}
	})
	.catch((error) => {
		logger.warn(`Failed to enable mocking: ${error}`);
	});
