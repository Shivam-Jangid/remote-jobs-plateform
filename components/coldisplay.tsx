import { mercorImageAddress } from "@/lib/imageaddress";
import { Star } from "lucide-react";
import Link from "next/link";

export default function ColDisplay() {
  return (
    <div className="pb-3 col-span-1 shadow-md bg-foreground rounded-xl transition-all py-1">
      <div className="font-bold text-center">#1</div>
      <img
        className="h-40 w-40 mx-auto object-cover"
        src={mercorImageAddress}
        alt=""
      />
      <div className="px-2 space-y-2">
        <div className="flex gap-2 justify-center items-center">
          <Star className="fill-amber-300 size-5 stroke-amber-300" />
          <span className="text-background/60">9.2</span>
          <span className="text-background/60">(100k)</span>
          <Link
            className="flex items-center text-green-600 group  gap-1"
            href="/name"
          >
            <Star className="fill-foreground size-5 group-hover:fill-green-600 transition-all" />
            <span className="font-semibold hover:underline">Rate</span>
          </Link>
        </div>
        <div className="text-center">
          <Link
            className="hover:underline text-center font-medium transition-all"
            href="/mercore"
          >
            Mercor
          </Link>
        </div>
      </div>
    </div>
  );
}
