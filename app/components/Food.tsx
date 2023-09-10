import type { FC } from "react";
import Ingredient from "./Ingredient";

interface FoodProps {}

const Food: FC<FoodProps> = ({}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-center items-start bg-[#f78da060] p-3 gap-2 rounded-md md:gap-4">
      <img
        className="rounded-full md:w-[6vw]"
        src="https://fakeimg.pl/60x60"
        alt="food"
      />
      <p className="text-[#EF4867] font-bold border-b-2 border-pink-300 w-full pb-2 md:border-none md:pb-0 md:w-fit md:text-lg">
        Jollof Rice
      </p>
      <span className="flex flex-wrap gap-2 md:ml-auto text-sm tracking-wide pt-2 md:pt-o">
        <Ingredient />
      </span>
    </div>
  );
};
export default Food;
