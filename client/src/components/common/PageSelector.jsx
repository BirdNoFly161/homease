import { useState } from "react";

const PageSelector = ({ totalPages = 5, initialPage = 1 }) => {
	const [currentPage, setCurrentPage] = useState(initialPage);

	const handlePageClick = (page) => {
		setCurrentPage(page);
	};

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="flex items-center justify-center p-4">
			{/* Prev button */}
			<button
				onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
				className="flex size-10 items-center justify-center disabled:opacity-50"
				disabled={currentPage === 1}
			>
				<div className="text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18px"
						height="18px"
						fill="currentColor"
						viewBox="0 0 256 256"
					>
						<path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
					</svg>
				</div>
			</button>

			{/* Page numbers */}
			{pages.map((page) => (
				<button
					key={page}
					onClick={() => handlePageClick(page)}
					className={`text-sm leading-normal flex size-10 items-center justify-center rounded-full ${page === currentPage
						? "font-bold text-white bg-[#29382f]"
						: "font-normal text-white"
						}`}
				>
					{page}
				</button>
			))}

			{/* Next button */}
			<button
				onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
				className="flex size-10 items-center justify-center disabled:opacity-50"
				disabled={currentPage === totalPages}
			>
				<div className="text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18px"
						height="18px"
						fill="currentColor"
						viewBox="0 0 256 256"
					>
						<path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
					</svg>
				</div>
			</button>
		</div>
	);
};

export default PageSelector;
