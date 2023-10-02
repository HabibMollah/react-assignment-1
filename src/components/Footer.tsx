import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import useCurrentPageContext from "../hooks/useCurrentPageContext";

export default function Footer() {
  const { currentPage, setCurrentPage } = useCurrentPageContext();

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <footer className="mx-auto mb-4 mt-12 flex h-[70px] max-w-[1200px] items-center justify-end gap-3 rounded-3xl pr-6 shadow-[2px_3px_10px_0.5px_#00000024]">
      {/* Previous button */}
      <Link
        onClick={() =>
          setCurrentPage(currentPage <= 1 ? currentPage : currentPage - 1)
        }
        to={currentPage <= 1 ? "#" : `/${currentPage - 1}`}
      >
        <BiLeftArrowAlt
          className={`h-8 w-8 rounded-lg bg-accent p-2 !text-primary shadow-md ${
            currentPage <= 1 && "cursor-not-allowed opacity-50"
          }`}
        />
      </Link>
      {/* Page numbers */}
      {pageNumbers.map((pageNumber) => (
        <Link
          className={`flex h-8 w-8 items-center justify-center rounded-lg bg-accent shadow-md duration-500 ${
            pageNumber === currentPage
              ? "scale-125 font-bold text-primary"
              : "font-medium text-gray-400"
          }`}
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          to={`/${pageNumber}`}
        >
          {pageNumber}
        </Link>
      ))}
      {/* Next button */}
      <Link
        onClick={() =>
          setCurrentPage(currentPage >= 10 ? currentPage : currentPage + 1)
        }
        to={currentPage >= 10 ? "#" : `/${currentPage + 1}`}
      >
        <BiRightArrowAlt
          className={`h-8 w-8 rounded-lg bg-accent p-2 !text-primary shadow-md ${
            currentPage >= 10 && "cursor-not-allowed opacity-50"
          }`}
        />
      </Link>
    </footer>
  );
}
