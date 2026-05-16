// import Link from "next/link";
// import { Button } from "./ui/button";

// export function Navbar() {
//   return (
//     <div className="flex w-full items-center justify-between">
//       <Link className="cursor-default " href={'/'}>Logo</Link>
//       <div className="flex items-center gap-3 text-sm">
//         <Link className="cursor-default transition-all hover:bg-secondary/40 px-2.5 py-1.5 rounded-sm" href={'/about'}>About</Link>
//         <Link className="transition-all cursor-default hover:bg-secondary/40 px-2.5 py-1.5 rounded-sm" href={'/about'}>Platforms</Link>
//         <Link className="transition-all cursor-default hover:bg-secondary/40 px-2.5 py-1.5 rounded-sm" href={'/addplatform'}>
//         Add Platform
//         </Link>
//       </div>
//       <div>
//         <Button variant="secondary" size="lg" className="text-sm rounded-sm p-4 font-medium">
//             Log in
//         </Button>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="">
      <div className=" flex items-center justify-between px-6 py-4">
        <Link
          className=" hover:opacity-80 transition-all"
          href={"/"}
        >
          RH
        </Link>

        <div className="flex items-center gap-2  font-medium">
          <Link
            className="transition-all hover:bg-secondary/60 px-4 py-2 rounded-md"
            href={"/about"}
          >
            About
          </Link>

          <Link
            className="transition-all hover:bg-secondary/60 px-4 py-2 rounded-md"
            href={"/platforms"}
          >
            Platforms
          </Link>

          <Link
            className="transition-all hover:bg-secondary/60 px-4 py-2 rounded-md"
            href={"/community"}
          >
            Community
          </Link>

          <Link
            className="transition-all hover:bg-purple-500/10 hover:text-purple-600 px-4 py-2 rounded-md"
            href={"/addplatform"}
          >
            Add Platform
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="lg"
            className="text-sm rounded-md font-medium"
          >
            Log in
          </Button>

          <Button
            size="lg"
            className="text-sm rounded-md px-5 transition-all hover:scale-105 bg-linear-to-r from-red-500 to-pink-400"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
