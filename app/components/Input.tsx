import type { FC } from "react";

interface InputProps {}

const Input: FC<InputProps> = ({}) => {
  return (
    <span className="flex h-[1.5em] items-center text-center fill-white rounded overflow-hidden">
      <p className="bg-[#f78da060] text-[#EF4867] uppercase text-sm font-bold h-[100%] flex items-center px-1 md:p-2 md:px-2">
        Rice
      </p>
      <svg
        className="h-[1.5em] w-[1.5em] bg-[#EF4867]"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
      </svg>
    </span>
  );
};
export default Input;
