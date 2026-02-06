
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
      <Link href={href} className="border border-slate-300 block cursor-pointer hover:ring-2 hover:ring-yellow-400 hover:bg-yellow-100/10 transition-all hover:ring-offset-1 rounded-xl p-5 bg-white">
        <p  className="font-medium text-2xl my-3 hover:underline hover:underline-offset-6 cursor-pointer transition-all inline-block">
          {name}
        </p>
        <p className="text-sm mt-4">{description}</p>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-3">
            <button className="border border-slate-400 hover:border-green-600 rounded-2xl flex items-center py-2 gap-2 px-4 group transition-all">
              <ThumbsUp className="group-hover:text-green-600"/>
              <span className="group-hover:text-green-600 font-medium">{likes}</span>
            </button>
            <button className="border border-slate-400 hover:border-red-600 rounded-2xl flex items-center py-2 gap-2 px-4 group transition-all">
              <ThumbsDownIcon className="group-hover:text-red-600" />
              <span className="group-hover:text-red-600 font-medium">{dislikes}</span>
            </button>
          </div>

          <Link href={href} className="border border-slate-200 rounded-2xl flex items-center py-2 gap-2 px-4 group hover:bg-slate-100 transition-all">
            <MessageCircle />
            <span className="group-hover:font-medium">{comments}</span>
          </Link>
        </div>
      </Link>
    </div>
  );
}