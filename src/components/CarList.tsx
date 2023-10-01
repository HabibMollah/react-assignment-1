import data from "../data/cars.json";
import CarCard from "./CarCard";

export default function CarList() {
  const cars = data.cars;

  return (
    <main className="mx-auto max-w-[1200px]">
      <section className="grid grid-cols-3 justify-items-center">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </section>
    </main>
  );
}
