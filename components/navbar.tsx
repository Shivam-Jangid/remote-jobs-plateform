export default function navbar() {
  return (
      <div className="fixed right-12 top-7 z-100 ">
        <button className="group relative px-6 text-background bg-foreground rounded-xl font-semibold overflow-y-hidden shadow-lg">
        
        <div className="relative w-full py-2 z-10 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:blur-xl">
            <span>Log in</span>
        </div>

        <div className="absolute py-2 inset-0 flex items-center justify-center transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
            <span>Log in</span>
        </div>

    </button>
      </div>
  );
}




// hover:bg-background hover:text-foreground hover:shadow-[0_0_3px_1px_white] white  rounded-lg bg-foreground/90 text-background