import { SentIcon } from "@components/ui";
import { useMutation } from "@tanstack/react-query";
import type { ContactData } from "@typings/contact";
import { toast } from "sonner";
import { makeContact } from "./contact.repository";

export const useContact = () =>
	useMutation({
		mutationKey: ["contact"],
		mutationFn: (payload: ContactData) => makeContact(payload),
		onSuccess: () => {
			toast.success("Message sent successfully", {
				position: "top-right",
				closeButton: true,
				icon: SentIcon(),
			});
		},
	});
