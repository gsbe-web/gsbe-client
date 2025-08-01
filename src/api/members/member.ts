import type { ApiSuccessResponse, PaginationResponse } from "@api/shared/types";

export interface Member {
	id: string;
	slug: string;
	type: "EXECUTIVE" | "GENERAL";
	name: string;
	gender: "Male" | "Female";
	imageId: string | null;
	imageUrl: string | null;
	role?: string;
	description?: string;
	email?: string;
	linkedinUrl?: string;
	twitterUrl?: string;
	instagramUrl?: string;
	createdAt: Date;
	updatedAt: Date;
}

export type PaginatedMembersResponse = PaginationResponse<Member>;

export type MemberResponse = ApiSuccessResponse<Member>;
