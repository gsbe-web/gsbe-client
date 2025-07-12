import type {
	ApiSuccessResponse,
	PaginationResponse,
} from "@api/shared/types/responses";

export interface Publication {
	id: string;
	slug: string;
	dateTimePosted: Date;
	title: string;
	content: string;
	username: string;
	profileImageUrl: string;
	postImageId: string;
	postImageUrl: string;
	views: number;
	comments: number;
	likes: number;
}

export type PaginatedPublicationResponse = PaginationResponse<Publication>;

export type PublicationResponse = ApiSuccessResponse<Publication>;
