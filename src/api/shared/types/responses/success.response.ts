export interface ApiSuccessResponse<T> {
	data: T;
	statusCode: number;
	message: string;
}
