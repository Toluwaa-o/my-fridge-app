import type { FC } from "react";

interface IngredientProps {}

const Ingredient: FC<IngredientProps> = ({}) => {
  return (
    <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">
      Rice
    </p>
  );
};
export default Ingredient;
