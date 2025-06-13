import type { News } from "@api/news";

export interface BlogDetailProps {
	blogPost: News;
}

export interface BlogBodyProps {
	blogPost: News;
	setShowSharePopup: (show: boolean) => void;
}
