import { Button } from "@components/ui";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
} from "@components/ui/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSearchParams } from "react-router";

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (data: number) => void;
};

const MAX_VISIBLE_PAGES = 5;

export function Paginated(props: PaginationProps) {
	const { currentPage, totalPages, onPageChange } = props;
	const [_params, setSearchParams] = useSearchParams();

	const setPage = (page: number) => {
		onPageChange(page);
		setSearchParams({ page: `${page}` });
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setPage(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setPage(currentPage - 1);
		}
	};

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<Button
						disabled={currentPage - 1 === 0}
						variant="outline"
						onClick={handlePreviousPage}
						className="cursor-pointer"
					>
						<ArrowLeft />
					</Button>
				</PaginationItem>
				{Array.from(
					{
						length:
							totalPages > MAX_VISIBLE_PAGES ? MAX_VISIBLE_PAGES : totalPages,
					},
					(_, i) => 1 + i,
				).map((n) => (
					<PaginationItem key={n}>
						<PaginationLink href={`?page=${n}`} isActive={currentPage === n}>
							{n}
						</PaginationLink>
					</PaginationItem>
				))}
				{totalPages > MAX_VISIBLE_PAGES && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}
				<PaginationItem>
					<Button
						variant="outline"
						onClick={handleNextPage}
						disabled={currentPage + 1 > totalPages}
						className="cursor-pointer"
					>
						<ArrowRight />
					</Button>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
