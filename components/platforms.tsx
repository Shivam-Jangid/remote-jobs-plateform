import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";

interface platformItemProps {
  name: string;
  jobs: string;
  upvotes: number;
  comments: number;
  downvotes: number;
  href: string;
  description: string;
}

export function Platforms({
  name,
  jobs,
  upvotes,
  comments,
  downvotes,
  description,
  href,
}: platformItemProps) {
  return (
    <div className="border bg-background  hover:ring hover:shadow-md hover:ring-purple-500 transition-all rounded-xl p-5 h-full">
      <div className="flex flex-col justify-between h-full gap-4">
        {/* Top */}
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-3">
            <a
              href={href}
              className="text-xl font-medium hover:text-purple-600 transition-colors"
            >
              {name}
            </a>

            <p className="text-muted-foreground text-sm whitespace-nowrap">
              ({jobs} users)
            </p>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-3 gap-2">
          <Button
            className="rounded-md flex items-center gap-2 font-light hover:text-green-600 hover:border-green-600"
            variant="itemsWorking"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>{upvotes}</span>
          </Button>

          <Button
            className="rounded-md flex items-center gap-2 font-light hover:text-red-600 hover:border-red-600"
            variant="itemsWorking"
          >
            <ThumbsDown className="w-4 h-4" />
            <span>{downvotes}</span>
          </Button>

          <Button
            className="rounded-md flex items-center gap-2 font-light hover:text-blue-600 hover:border-blue-600"
            variant="itemsWorking"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{comments}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}