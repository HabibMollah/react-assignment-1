import { CiSearch } from "react-icons/ci";
import useSearchContext from "../hooks/useSearchContext";

export default function NavBar() {
  const { searchValue, setSearchValue } = useSearchContext();
  return (
    <header className="mx-auto mt-2 flex h-[90px] max-w-[1200px] items-center rounded-3xl bg-accent pl-6 font-saira shadow-[2px_3px_10px_0.5px_#00000024]">
      <nav className="flex gap-6">
        <span className="relative">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="h-12 w-[400px] rounded-2xl py-2 pl-4 pr-12"
            type="text"
            placeholder="Search..."
          />
          <CiSearch className="absolute right-5 top-2 h-7 w-7 bg-white !text-gray-500" />
        </span>
        <select className="h-12 bg-transparent font-medium tracking-tight text-gray-500">
          <option value="">Relevance</option>
        </select>
        <select className="h-12 bg-transparent font-medium tracking-tight text-gray-500">
          <option value="">All brands</option>
        </select>
      </nav>
    </header>
  );
}
