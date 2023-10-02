import data from "../data/cars.json";
import { useParams } from "react-router-dom";
import CarCard from "./CarCard";
import useSearchContext from "../hooks/useSearchContext";
import useCurrentPageContext from "../hooks/useCurrentPageContext";
import { useEffect } from "react";

export default function PaginatedCarList() {
  const { page } = useParams();
  const { searchValue } = useSearchContext();
  const { setCurrentPage } = useCurrentPageContext();
  useEffect(() => {
    if (page) setCurrentPage(parseInt(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const currentPage = page ? parseInt(page, 10) : 1;
  const carsPerPage = 6;
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;

  const currentCars = data.cars.slice(startIndex, endIndex);

  return (
    <section className="grid grid-cols-3 justify-items-center gap-8">
      {searchValue
        ? data.cars
            .filter((car) =>
              // Convert both search value and car name to lowercase and filter them
              car.name.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((car) => (
              // Then map the filtered cars
              <CarCard key={car.id} car={car} />
            ))
        : // If the search value is empty, render all cars
          currentCars.map((car) => <CarCard key={car.id} car={car} />)}
    </section>
  );
}
