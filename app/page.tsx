export default function Home() {
  return (
    <div className="grid min-h-screen max-w-full grid-rows-myColTemp">
      <header className="bg-[url(https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80)] bg-no-repeat bg-cover grid">
        <span className="bg-white w-[85vw] h-[6.5vh] m-auto rounded-md grid grid-cols-barTemp items-center overflow-hidden">
          <input type="text" name="ingredient" placeholder="Add ingredient......" className="placeholder:text-sm placeholder:text-[#f78da0] placeholder:tracking-wide outline-none px-2 text-black h-[100%]" />
          <p className="bg-[#EF4867] ml-auto uppercase text-xs font-bold tracking-wider p-2 h-[100%] w-[100%] grid place-content-center">Add</p>
        </span>

        <span>
          <span>
            <p>Rice</p>
          </span>
        </span>
      </header>
      <main className="bg-white">
        <h1>estingwebfwufEWIO</h1>
      </main>
    </div>
  );
}
