import type { FC } from "react";
import Input from "./Input";
import NewFoodLink from "./NewFoodLink";

interface pageHeadProps {}

const PageHead: FC<pageHeadProps> = ({}) => {
  return (
    <header className="bg-[url(https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80)] bg-no-repeat bg-cover md:grid p-3 md:gap-3">
      <h1 className="text-center text-[#EF4867] text-2xl md:text-4xl font-bold mb-9 md:mb-0">
        My Fridge
      </h1>
      <span className="bg-white w-[85vw] h-[6.5vh] m-auto rounded-md grid grid-cols-barTemp items-center overflow-hidden md:w-[50vw] mb-4 md:mb-0">
        <input
          type="text"
          name="ingredient"
          placeholder="Add ingredient......"
          className="placeholder:text-sm md:placeholder:text-base placeholder:text-[#f78da090] placeholder:tracking-wide outline-none px-2 text-black h-[100%]"
        />
        <p className="bg-[#EF4867] ml-auto uppercase text-xs font-bold tracking-wider p-2 h-[100%] md:text-base w-[100%] grid place-content-center">
          Add
        </p>
      </span>

      <span className="flex gap-3 bg-white text-gray-500 h-fit p-3 rounded-lg flex-wrap md:w-[60vw] md:m-auto">
        <Input />
      </span>

      <NewFoodLink />
    </header>
  );
};
export default PageHead;
