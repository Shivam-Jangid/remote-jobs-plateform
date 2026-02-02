"use client";
import { Instrument_Serif } from "next/font/google";

const smallerFont = Instrument_Serif({ weight: ["400"], style: ["italic"] });

export default function page() {
  return (
    <div className="min-h-screen  py-20 selection:text-amber-50 selection:bg-amber-950">
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
        <input
          type="text"
          placeholder="Search platforms"
          className="bg-foreground w-full p-4 border  rounded-xl focus:outline-none focus:shadow-[0_0_1px_1px_black]"
        />
      </div>
      <div className="px-42 mt-4">
        <h1>categories</h1>
      </div>
      <div className="flex justify-end items-center px-42 gap-5">
      </div>
    </div>
  );
}

// gap-10 grid grid-cols-3
