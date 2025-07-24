import type { ApiSuccessResponse, PaginationResponse } from "@api/shared/types";

export type Currency = "GHS" | "NGN" | "USD" | "KES" | "ZAR";

export interface Due {
	id: string;
	firstName: string;
	lastName: string;
	membershipId: string;
	email: string;
	reference: string;
	currency: Currency;
	amount: number;
	status: string;
	paidAt: Date;
	accessCode: string;
	channel: string;
	paymentMethod: string;
	sourceNumber: string;
	bankName: string;
	provider: string;
}

export interface IntializePayment {
	authorizationUrl: string;
	accessCode: string;
	reference: string;
}

export type IntializePaymentResponse = ApiSuccessResponse<IntializePayment>;

export type PaginatedDuesResponse = PaginationResponse<Due>;

export type DueResponse = ApiSuccessResponse<Due>;
