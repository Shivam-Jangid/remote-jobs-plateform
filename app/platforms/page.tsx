"use client"

import { Link, MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";
import { Instrument_Serif } from "next/font/google";

const smallerFont = Instrument_Serif({ weight: ["400"], style: ["italic"] });

export default function page() {
  return (
    <div className="min-h-screen bg-amber-50/70 py-20">
      <div className="text-center">
        <div className="text-center flex items-center justify-center w-full h-full text-5xl">
          <span>Find the</span>
          <span className={`${smallerFont.className} mx-4`}>plateform</span>
          <span>for your niche</span>
        </div>
        <div className="max-w-5xl mx-auto mt-10 text-lg">
          Find top-tier remote AI roles tailored to your expertise, curated from
          high-quality platforms worldwide. Discover opportunities beyond the
          usual marketplaces, focused on impactful and cutting-edge work.
          Available exclusively on Recmo.
        </div>
      </div>
      <div className="px-42 mt-10">
        <input type="text" placeholder="Search platforms"  className="bg-foreground w-full p-4 border border-amber-400 rounded focus:outline-none focus:shadow-[0_0_2px_1px_#e9c11e]"/>
      </div>
      <div className="px-42 mt-4">
        <h1>categories</h1>
      </div>
      <div className="px-42 gap-10 grid grid-cols-3 mt-20">
        <div className="col-span-1 border bg-foreground rounded-xl transition-all hover:shadow-xl p-6">
          <div className="flex gap-2 items-center">
          <span className="text-2xl font-semibold">
            FlexJobs
          </span>
          <a className="text-sm hover:underline " href="https://www.flexjobs.com/">
            <Link className="size-4"/>
          </a>
          </div>
          <p className="mt-3">Premium remote jobs with thoroughly vetted opportunities.</p>
          <div className="h-0.5 border border-amber-800/30 mt-5 mb-3 "></div>
          <div className="grid grid-cols-3 gap-2">
            <div className=" text-center">
              <h1 className="font-semibold text-xl">4500</h1>
              <div className="text-sm ">Jobs Available</div>
            </div>
            <div className=" text-center">
              <span className="font-semibold text-xl">2</span>
              <div className="text-sm">Comments</div>
            </div>
            <div className=" text-center">
            <span className="font-semibold text-xl">128</span>
            <div className="text-sm">Upvotes</div>
          </div>
          </div>
          <div className="h-0.5 border border-amber-800/30 my-5 "></div>
          <div className="grid grid-cols-3 gap-3">
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <ThumbsUp className="size-4"/>
              <span>126</span>
            </div>
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <ThumbsDown className="size-4" />
              <span>2</span>
            </div>
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <MessageCircle className="size-4" />
              <span>46</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 border bg-foreground rounded-xl p-6">
          <div className="flex gap-2 items-center">
          <span className="text-2xl font-semibold">
            FlexJobs
          </span>
          <a className="text-sm hover:underline " href="https://www.flexjobs.com/">
            <Link className="size-4"/>
          </a>
          </div>
          <p className="mt-3">Premium remote jobs with thoroughly vetted opportunities.</p>
          <div className="h-0.5 border border-amber-800/30 mt-5 mb-3 "></div>
          <div className="grid grid-cols-3 gap-2">
            <div className=" text-center">
              <h1 className="font-semibold text-xl">4500</h1>
              <div className="text-sm ">Jobs Available</div>
            </div>
            <div className=" text-center">
              <span className="font-semibold text-xl">2</span>
              <div className="text-sm">Comments</div>
            </div>
            <div className=" text-center">
            <span className="font-semibold text-xl">128</span>
            <div className="text-sm">Upvotes</div>
          </div>
          </div>
          <div className="h-0.5 border border-amber-800/30 my-5 "></div>
          <div className="grid grid-cols-3 gap-3">
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <ThumbsUp className="size-4"/>
              <span>126</span>
            </div>
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <ThumbsDown className="size-4" />
              <span>2</span>
            </div>
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <MessageCircle className="size-4" />
              <span>46</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 border bg-foreground rounded-xl p-6">
          <div className="flex gap-2 items-center">
          <span className="text-2xl font-semibold">
            FlexJobs
          </span>
          <a className="text-sm hover:underline " href="https://www.flexjobs.com/">
            <Link className="size-4"/>
          </a>
          </div>
          <p className="mt-3">Premium remote jobs with thoroughly vetted opportunities.</p>
          <div className="h-0.5 border border-amber-800/30 mt-5 mb-3 "></div>
          <div className="grid grid-cols-3 gap-2">
            <div className=" text-center">
              <h1 className="font-semibold text-xl">4500</h1>
              <div className="text-sm ">Jobs Available</div>
            </div>
            <div className=" text-center">
              <span className="font-semibold text-xl">2</span>
              <div className="text-sm">Comments</div>
            </div>
            <div className=" text-center">
            <span className="font-semibold text-xl">128</span>
            <div className="text-sm">Upvotes</div>
          </div>
          </div>
          <div className="h-0.5 border border-amber-800/30 my-5 "></div>
          <div className="grid grid-cols-3 gap-3">
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <ThumbsUp className="size-4"/>
              <span>126</span>
            </div>
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <ThumbsDown className="size-4" />
              <span>2</span>
            </div>
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <MessageCircle className="size-4" />
              <span>46</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 border bg-foreground rounded-xl p-6">
          <div className="flex gap-2 items-center">
          <span className="text-2xl font-semibold">
            FlexJobs
          </span>
          <a className="text-sm hover:underline " href="https://www.flexjobs.com/">
            <Link className="size-4"/>
          </a>
          </div>
          <p className="mt-3">Premium remote jobs with thoroughly vetted opportunities.</p>
          <div className="h-0.5 border border-amber-800/30 mt-5 mb-3 "></div>
          <div className="grid grid-cols-3 gap-2">
            <div className=" text-center">
              <h1 className="font-semibold text-xl">4500</h1>
              <div className="text-sm ">Jobs Available</div>
            </div>
            <div className=" text-center">
              <span className="font-semibold text-xl">2</span>
              <div className="text-sm">Comments</div>
            </div>
            <div className=" text-center">
            <span className="font-semibold text-xl">128</span>
            <div className="text-sm">Upvotes</div>
          </div>
          </div>
          <div className="h-0.5 border border-amber-800/30 my-5 "></div>
          <div className="grid grid-cols-3 gap-3">
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <ThumbsUp className="size-4"/>
              <span>126</span>
            </div>
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <ThumbsDown className="size-4" />
              <span>2</span>
            </div>
            <div className="border gap-1 flex items-center justify-center py-1 rounded-xl">
              <MessageCircle className="size-4" />
              <span>46</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}



