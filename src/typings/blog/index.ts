import type { News } from "@api/types";

export interface BlogDetailProps {
  blogPost: News;
}

export interface BlogBodyProps {
  blogPost: News;
  setShowSharePopup: (show: boolean) => void;
}
