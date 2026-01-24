"use client";
import {
  Grid2X2,
  List
} from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import { useState } from "react";
import ColDisplay from "@/components/coldisplay";
import ListDisplay from "@/components/listDisplay";

const smallerFont = Instrument_Serif({ weight: ["400"], style: ["italic"] });
type displayType = "list" | "grid";

export default function page() {
  const [dis, setDisplay] = useState<displayType>("list");
  return (
    <div className="min-h-screen bg-amber-50/70 py-20 selection:text-amber-50 selection:bg-amber-900">
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
          className="bg-foreground w-full p-4 border border-amber-400 rounded focus:outline-none focus:shadow-[0_0_2px_1px_#e9c11e]"
        />
      </div>
      <div className="px-42 mt-4">
        <h1>categories</h1>
      </div>
      <div className="flex justify-end items-center px-42 gap-5">
        <button
          onClick={() => setDisplay("list")}
          className={`transition-all rounded-full py-2 px-2 text-amber-950/80 ${
            dis === "list" ? "border" : ""
          }`}
        >
          <List />
        </button>
        <button
          onClick={() => setDisplay("grid")}
          className={` transition-all rounded-full py-2 px-2 text-amber-950/80 ${
            dis === "grid" ? "border" : ""
          }`}
        >
          <Grid2X2 />
        </button>
      </div>
      <div className="px-42 mt-20">
        <div
          className={`bg-foreground ${
            dis === "grid" ? "gap-10 grid grid-cols-5" : "flex flex-col gap-10"
          } py-10 px-10 rounded-xl`}
        >
          {dis == "grid"? <ColDisplay />: <ListDisplay /> }
          {dis == "grid"? <ColDisplay />: <ListDisplay /> }
          {dis == "grid"? <ColDisplay />: <ListDisplay /> }
          {dis == "grid"? <ColDisplay />: <ListDisplay /> }
          {dis == "grid"? <ColDisplay />: <ListDisplay /> }
          {dis == "grid"? <ColDisplay />: <ListDisplay /> }
          </div>
        </div>
    </div>
  );
}


// gap-10 grid grid-cols-3
