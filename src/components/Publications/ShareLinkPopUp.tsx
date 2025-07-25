import {
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	Input,
} from "@components/ui";
import { ClipboardCheck, Link } from "lucide-react";
import { toast } from "sonner";

type ShareLinkProps = {
	openDialog: boolean;
	onOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ShareLinkPopUp: React.FC<ShareLinkProps> = (props) => {
	const { onOpenDialog, openDialog } = props;
	const handleCopyLink = () => {
		navigator.clipboard.writeText(window.location.href);
		toast.info("Link copied to clipboard!", {
			position: "top-center",
			closeButton: true,
			icon: <ClipboardCheck />,
		});
	};

	return (
		<Dialog open={openDialog} onOpenChange={onOpenDialog}>
			<DialogContent className="text-[#254152]">
				<DialogHeader>
					<DialogTitle className="flex gap-2">
						<Link />
						Share Link
					</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col">
					<Input
						className="mb-3 w-full border p-2 selection:bg-[#254152]"
						readOnly={true}
						type="text"
						value={window.location.href}
					/>
				</div>
				<DialogFooter>
					<DialogClose asChild={true}>
						<Button variant="outline" className="text-[#254152]">
							Cancel
						</Button>
					</DialogClose>
					<Button
						variant="default"
						type="submit"
						className="bg-[#254152] hover:bg-[#1e3544]"
						onClick={handleCopyLink}
					>
						Copy Link
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
