type Props = {
  car: {
    id: number;
    name: string;
    released: number;
    seats: number;
    fuel: string;
    transmission: string;
    mileage: number;
    rentPerMonth: number;
    imageURL: string;
  };
};

export default function CarCard({ car }: Props) {
  return (
    <div className="">
      <img
        className="h-[240px] w-[350px] rounded-2xl object-cover"
        src={car.imageURL}
        alt={"image of " + car.name}
      />
      <h3>{car.name}</h3>
    </div>
  );
}
