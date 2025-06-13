export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: {
	currentPage: number;
	totalPages: number;
	onPageChange: (data: number) => void;
}) {
	const handleNextPage = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	return (
		<div className="mt-8 flex justify-center">
			<button
				className={`mx-2 px-4 py-2 ${currentPage === 1 ? "cursor-not-allowed text-gray-500" : ""}`}
				disabled={currentPage === 1}
				onClick={handlePreviousPage}
				type="button"
			>
				Previous
			</button>

			<span className="px-4 py-2">
				Page {currentPage} of {totalPages}
			</span>

			<button
				className={`mx-2 px-4 py-2 ${currentPage === totalPages ? "cursor-not-allowed text-gray-500" : ""}`}
				disabled={currentPage === totalPages}
				onClick={handleNextPage}
				type="button"
			>
				Next
			</button>
		</div>
	);
}
