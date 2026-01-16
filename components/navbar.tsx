export default function navbar() {
  return (
      <div className="absolute right-10 top-3">
        <button className="group relative px-6  rounded-lg bg-blue-600 text-white font-semibold overflow-y-hidden shadow-lg">
        
        <div className="relative py-3 z-10 transition-all duration-300 ease-in-out group-hover:-translate-y-full">
            <span>Log in</span>
        </div>

        <div className="absolute py-3 inset-0 flex items-center justify-center transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
            <span>Log in</span>
        </div>

    </button>
      </div>
  );
}
