import type {
	ApiSuccessResponse,
	PaginationResponse,
} from "@api/shared/types/responses";

export interface News {
	id: string;
	slug: string;
	dateTimePosted: Date;
	title: string;
	content: string;
	username: string;
	profileImageUrl: string;
	postImageId: string;
	views: number;
	comments: number;
	likes: number;
}

export type PaginatedNewsResponse = PaginationResponse<News>;

export type NewsResponse = ApiSuccessResponse<News>;
