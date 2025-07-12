import { SharePostModal } from "@components/Publications/Share/SharePostModal";
import type { ShareDialogProps } from "@components/Publications/Share/types";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@components/ui";
import type React from "react";

type ShareProps = ShareDialogProps & {
	openDialog: boolean;
	onOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ShareDialog: React.FC<ShareProps> = (props) => {
	const { slug, name, onOpenDialog, openDialog } = props;
	return (
		<Dialog open={openDialog} onOpenChange={onOpenDialog}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-[#254152]">Share Post</DialogTitle>
					<DialogDescription>{name}</DialogDescription>
				</DialogHeader>
				<SharePostModal slug={slug} />
			</DialogContent>
		</Dialog>
	);
};
