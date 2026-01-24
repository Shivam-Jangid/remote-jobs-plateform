import Link from "next/link";
import { mercorImageAddress } from "@/lib/imageaddress";


export default function ListDisplay() {
  return (
    <div className="pb-3 shadow-lg bg-foreground max-w-4xl rounded-br-xl transition-all py-1">
        <div className="flex gap-2">
        <div className="px-2">
            <img src={mercorImageAddress} className="w-40 object-fit" alt="" />
        </div>
        <div className="flex flex-col">
            <div className="bg-blue-600 flex w-fit pl-2 pr-3 rounded-br-3xl text-foreground">
                #1
            </div>
            <div className="flex">
            <Link href="/mercor" className="font-medium hover:underline transition-all">Mercor</Link>
            <div className="flex items-center ml-2 gap-2">
                <div>9.0</div>
                <div>(100k)</div>
                <Link href="/login" className="hover:underline font-medium hover:font-semibold">Rate</Link>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia ipsa ullam molestias aspernatur amet vitae dolores ab ipsum quia.</p>
        </div>
        </div>
    </div>
  )
}
