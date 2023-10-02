import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import useCurrentPageContext from "../hooks/useCurrentPageContext";

export default function Footer() {
  const { currentPage, setCurrentPage } = useCurrentPageContext();
  return (
    <footer className="mx-auto flex max-w-[1200px] items-center gap-3">
      <Link
        onClick={() =>
          setCurrentPage(currentPage <= 1 ? currentPage : currentPage - 1)
        }
        to={currentPage <= 1 ? "#" : `/${currentPage - 1}`}
      >
        <BiLeftArrowAlt
          className={`h-10 w-10 rounded-lg bg-accent p-2 !text-primary shadow-md ${
            currentPage <= 1 && "cursor-not-allowed opacity-50"
          }`}
        />
      </Link>
      <Link
        onClick={() =>
          setCurrentPage(currentPage >= 10 ? currentPage : currentPage + 1)
        }
        to={currentPage >= 10 ? "#" : `/${currentPage + 1}`}
      >
        <BiRightArrowAlt
          className={`h-10 w-10 rounded-lg bg-accent p-2 !text-primary shadow-md ${
            currentPage >= 10 && "cursor-not-allowed opacity-50"
          }`}
        />
      </Link>
    </footer>
  );
}
