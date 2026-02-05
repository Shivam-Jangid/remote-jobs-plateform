
import { MessageCircle, ThumbsDownIcon, ThumbsUp } from "lucide-react";
import Link from "next/link";

interface PlatformProps {
  name: string;
  description?: string;
  likes?: number;
  dislikes?: number;
  comments?: number;
  href?: string;
}

export default function PlatformNames({
  name,
  description = "",
  likes = 0,
  dislikes = 0,
  comments = 0,
  href = "#",
}: PlatformProps) {
  return (
    <div className="col-span-1">
      <div className="border border-slate-300 hover:ring-2 transition-all hover:ring-offset-1 rounded-xl p-5 bg-white">
        <Link href={href} className="font-medium text-2xl my-3 hover:underline hover:underline-offset-6 cursor-pointer transition-all inline-block">
          {name}
        </Link>
        <p className="text-sm mt-4 text-slate-700">{description}</p>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-3">
            <button className="border border-slate-200 rounded-2xl flex items-center py-2 gap-2 px-4 group hover:bg-green-400 hover:border-none transition-all">
              <ThumbsUp />
              <span className="group-hover:font-medium">{likes}</span>
            </button>
            <button className="border border-slate-200 rounded-2xl flex items-center py-2 gap-2 px-4 group hover:bg-red-500/80 hover:border-none transition-all">
              <ThumbsDownIcon />
              <span className="group-hover:font-medium">{dislikes}</span>
            </button>
          </div>

          <Link href={href} className="border border-slate-200 rounded-2xl flex items-center py-2 gap-2 px-4 group hover:bg-slate-100 transition-all">
            <MessageCircle />
            <span className="group-hover:font-medium">{comments}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
