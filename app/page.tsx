import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-screen max-w-full grid-rows-myColTemp2 md:grid-rows-myColTemp bg-white">
      <header className="bg-[url(https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80)] bg-no-repeat bg-cover md:grid p-3 md:gap-3">
        <h1 className="text-center text-[#EF4867] text-2xl md:text-4xl font-bold mb-9 md:mb-0">My Fridge</h1>
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
          <span className="flex h-[1.5em] items-center text-center fill-white rounded overflow-hidden">
            <p className="bg-[#f78da060] text-[#EF4867] uppercase text-sm font-bold h-[100%] flex items-center px-1 md:p-2 md:px-2">Rice</p>
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
          
          <span className="flex h-[1.5em] items-center text-center fill-white rounded overflow-hidden">
            <p className="bg-[#f78da060] text-[#EF4867] uppercase text-sm font-bold h-[100%] flex items-center px-1 md:p-2 md:px-2">Rice</p>
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

          <span className="flex h-[1.5em] items-center text-center fill-white rounded overflow-hidden">
            <p className="bg-[#f78da060] text-[#EF4867] uppercase text-sm font-bold h-[100%] flex items-center px-1 md:p-2 md:px-2">Rice</p>
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
        </span>

        <Link href='/newfood' className="absolute bg-white p-2 fill-[#EF4867] border-[#EF4867] border-4 rounded-full overflow-hidden top-3 right-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
        </Link>

      </header>
      <main className="bg-white p-4 grid gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-center items-start bg-[#f78da060] p-3 gap-2 rounded-md md:gap-4">
          <img className="rounded-full md:w-[6vw]" src="https://fakeimg.pl/60x60" alt='food' />
          <p className="text-[#EF4867] font-bold border-b-2 border-pink-300 w-full pb-2 md:border-none md:pb-0 md:w-fit md:text-lg">Jollof Rice</p>
          <span className="flex flex-wrap gap-2 md:ml-auto text-sm tracking-wide pt-2 md:pt-o">
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Rice</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Butter</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Onions</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Tomato</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Pepper</p>
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-center items-start bg-[#f78da060] p-3 gap-2 rounded-md md:gap-4">
          <img className="rounded-full md:w-[6vw]" src="https://fakeimg.pl/60x60" alt='food' />
          <p className="text-[#EF4867] font-bold border-b-2 border-pink-300 w-full pb-2 md:border-none md:pb-0 md:w-fit md:text-lg">Jollof Rice</p>
          <span className="flex flex-wrap gap-2 md:ml-auto text-sm tracking-wide pt-2 md:pt-o">
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Rice</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Butter</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Onions</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Tomato</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Pepper</p>
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-center items-start bg-[#f78da060] p-3 gap-2 rounded-md md:gap-4">
          <img className="rounded-full md:w-[6vw]" src="https://fakeimg.pl/60x60" alt='food' />
          <p className="text-[#EF4867] font-bold border-b-2 border-pink-300 w-full pb-2 md:border-none md:pb-0 md:w-fit md:text-lg">Jollof Rice</p>
          <span className="flex flex-wrap gap-2 md:ml-auto text-sm tracking-wide pt-2 md:pt-o">
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Rice</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Butter</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Onions</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Tomato</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Pepper</p>
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-center items-start bg-[#f78da060] p-3 gap-2 rounded-md md:gap-4">
          <img className="rounded-full md:w-[6vw]" src="https://fakeimg.pl/60x60" alt='food' />
          <p className="text-[#EF4867] font-bold border-b-2 border-pink-300 w-full pb-2 md:border-none md:pb-0 md:w-fit md:text-lg">Jollof Rice</p>
          <span className="flex flex-wrap gap-2 md:ml-auto text-sm tracking-wide pt-2 md:pt-o">
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Rice</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Butter</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Onions</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Tomato</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Pepper</p>
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-center items-start bg-[#f78da060] p-3 gap-2 rounded-md md:gap-4">
          <img className="rounded-full md:w-[6vw]" src="https://fakeimg.pl/60x60" alt='food' />
          <p className="text-[#EF4867] font-bold border-b-2 border-pink-300 w-full pb-2 md:border-none md:pb-0 md:w-fit md:text-lg">Jollof Rice</p>
          <span className="flex flex-wrap gap-2 md:ml-auto text-sm tracking-wide pt-2 md:pt-o">
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Rice</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Butter</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Onions</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Tomato</p>
            <p className="text-[#EF4867] bg-white p-1 hover:border-[#EF4867] rounded grid place-content-center md:text-base md:p-2">Pepper</p>
          </span>
        </div>
      </main>
    </div>
  );
}
