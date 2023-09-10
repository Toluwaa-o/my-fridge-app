import Link from "next/link";
import type { FC } from "react";

interface NewFoodLinkProps {}

const NewFoodLink: FC<NewFoodLinkProps> = ({}) => {
  return (
    <Link
      href="/newfood"
      className="absolute bg-white p-2 fill-[#EF4867] border-[#EF4867] border-4 rounded-full overflow-hidden top-3 right-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
      >
        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
      </svg>
    </Link>
  );
};
export default NewFoodLink;
