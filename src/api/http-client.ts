import { ErrorIcon } from "@components/ui";
import axios from "axios";
import { toast } from "sonner";

export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

apiClient.interceptors.response.use(
	(response) => {
		// toast.success(response.data.message);
		return response;
	},
	(error) => {
		const { response } = error;
		toast.error(response.data.message, {
			position: "top-right",
			closeButton: true,
			className: "bg-red",
			icon: ErrorIcon(),
		});
		return Promise.reject(error);
	},
);
