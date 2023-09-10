import type { FC } from 'react';
import Food from "./components/Food";
import PageHead from './components/pageHead';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
      <div className="grid min-h-screen max-w-full grid-rows-myColTemp2 md:grid-rows-myColTemp bg-white">
      <PageHead />
      <main className="bg-white p-4 flex flex-col gap-4">
        <Food />
        <Food />
      </main>
    </div>
    );
}
export default page;