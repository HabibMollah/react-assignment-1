import { AiOutlineHeart } from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";
import { LiaGasPumpSolid } from "react-icons/lia";
import { BiTachometer } from "react-icons/bi";
import { RiSteering2Line } from "react-icons/ri";

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
    <div className="rounded-2xl p-3 shadow-[2px_4px_9px_1px_#00000024]">
      {/* Image */}
      <span className="block h-[240px] w-[350px] overflow-hidden rounded-2xl">
        <img
          className="w-full scale-125"
          src={car.imageURL}
          alt={"image of " + car.name}
        />
      </span>

      {/* Details */}
      <div className="px-2 pt-4">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h3 className="font-saira text-2xl">{car.name}</h3>
          <p className="rounded-xl border-[2px] border-dashed border-primary/50 px-[10px] py-[1px]">
            {car.released}
          </p>
        </div>
        {/* Specifications */}
        <div className="grid grid-cols-2 gap-2 pt-4 font-saira">
          <p className="flex items-center gap-1">
            <LuUsers2 className="h-5 w-5 !text-primary" />
            {car.seats} People
          </p>
          <p className="flex items-center gap-1">
            <LiaGasPumpSolid className="h-5 w-5 !text-primary" /> {car.fuel}
          </p>
          <p className="flex items-center gap-1">
            <BiTachometer className="h-5 w-5 !text-primary" />
            {car.mileage}
          </p>
          <p className="flex items-center gap-1">
            <RiSteering2Line className="h-5 w-5 !text-primary" />
            {car.transmission}
          </p>
        </div>
        {/* Rent */}
        <div className="mt-4 flex items-center justify-between border-t-2 pt-4">
          <div className="font-saira text-2xl">
            ${car.rentPerMonth} <span className="text-base">/ month</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <button className="flex items-center">
              <AiOutlineHeart className="block h-9 w-9 rounded-lg bg-[#dbecfb] p-[6px] !text-primary/60  " />
            </button>
            <button className="text-white rounded-xl bg-primary px-4 py-2 text-sm tracking-tight">
              Rent now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
