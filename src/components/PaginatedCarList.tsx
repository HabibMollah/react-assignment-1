import data from "../data/cars.json";
import { useParams } from "react-router-dom";
import CarCard from "./CarCard";

export default function PaginatedCarList() {
  const { page } = useParams();
  const currentPage = page ? parseInt(page, 10) : 1;

  const carsPerPage = 6;
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;

  const currentCars = data.cars.slice(startIndex, endIndex);

  return (
    <main className="mx-auto mt-8 max-w-[1200px]">
      <section className="grid grid-cols-3 justify-items-center gap-8">
        {currentCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </section>
    </main>
  );
}
