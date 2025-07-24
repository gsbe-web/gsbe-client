import { createDue } from "@api/dues/dues.repository";
import { ClockFadingIcon } from "@components/ui";
import { useMutation } from "@tanstack/react-query";
import type { DuesData } from "@typings/dues";
import { toast } from "sonner";

export const useDue = () =>
	useMutation({
		mutationKey: ["dues"],
		mutationFn: (payload: DuesData) => createDue(payload),
		onSuccess: (data) => {
			toast.success("Payment Initialized successfully. Redirecting..", {
				position: "top-right",
				closeButton: true,
				icon: ClockFadingIcon(),
			});

			window.location.href = data.authorizationUrl;
		},
	});
