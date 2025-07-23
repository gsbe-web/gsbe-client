/// <reference types="vite/client" />
/** biome-ignore-all lint/correctness/noUnusedVariables: config stuff */

import type DetachedWindowApi from "happy-dom/lib/window/DetachedWindowAPI.js";

interface ViteTypeOptions {
	strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
	readonly VITE_NODE_ENV: string;
	readonly VITE_API_BASE_URL: string;
	readonly VITE_GOOGLE_MAPS_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare global {
	interface Window {
		happyDOM?: DetachedWindowApi;
	}
}
