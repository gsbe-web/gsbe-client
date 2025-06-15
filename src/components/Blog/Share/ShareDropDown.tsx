import { ShareDialog } from "@components/Blog/Share/ShareDialog";
import type { ShareDialogProps } from "@components/Blog/Share/types";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { EllipsisVertical, Forward } from "lucide-react";
import type React from "react";
import { useState } from "react";

export const ShareDropDown: React.FC<ShareDialogProps> = (props) => {
	const { slug, name } = props;
	const [openDialog, setOpenDialog] = useState(false);
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild={true}>
					<EllipsisVertical color="#254152" role="button" cursor="pointer" />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-fit text-sm" align="start">
					<DropdownMenuItem
						onClick={() => setOpenDialog(true)}
						className="flex w-full items-center gap-2 p-2 text-[#254152]"
					>
						<Forward />
						Share Post
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<ShareDialog
				openDialog={openDialog}
				onOpenDialog={setOpenDialog}
				slug={slug}
				name={name}
			/>
		</>
	);
};
