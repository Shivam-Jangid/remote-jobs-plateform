
import { MessageCircle, ThumbsDownIcon, ThumbsUp } from "lucide-react";
import Link from "next/link";



export default function PlatformNames() {
  return (
     <div className="col-span-1 bg-purple-50/20">
          <div className="border border-[#a59a9a] hover:ring-2 transition-all hover:ring-offset-1 rounded-xl p-5">
            <a href = "https://www.turing.com/" className="font-medium text-2xl my-3 hover:underline hover:underline-offset-6 cursor-pointer transition-all delay-500 duration-1000  inline">Turing</a>
            <p className="text-sm mt-4">Turing is a AI-powered tech services company that helps businesses worldwide source, vet, match, and manage remote software engineers</p>
            <div className = "flex items-center justify-around mt-4">
              <button className="border border-black/50 rounded-2xl flex items-center py-2 gap-2 px-4 group hover:bg-linear-to-r hover:border-none hover:from-blue-600 transition-all hover:text-white hover:to-pink-400 hover:-translate-y-1 delay-75">
                <ThumbsUp className=" size-5" />
                <span className="group-hover:font-medium">124</span>
              </button>
              <button className="border border-black/50 rounded-2xl flex items-center py-2 gap-2 px-4 group hover:shadow-xl hover:border-none hover:bg-red-600 transition-all hover:text-white  hover:translate-y-0.5 delay-75">
                <ThumbsDownIcon className="size-5" />
                <span className="group-hover:font-medium">10</span>
              </button>
              <Link href={'/platforms/turing'} className="border border-black/50 rounded-2xl flex items-center py-2 gap-2 px-4 group  hover:border-black transition-all delay-75">
                <MessageCircle className=" size-5" />
                <span className="group-hover:font-medium">20</span>
              </Link>
            </div>
          </div>
        </div>
  )
}
