import { Instrument_Serif } from "next/font/google";
import BounceCards from "./BounceCards";
import { items } from "@/lib/items";
import Link from "next/link";

const smallerFont = Instrument_Serif({ weight: ["400"], style: ["italic"] });

export default function AboutSection() {
  return (
    <section className="bg-foreground selection:bg-background/70 selection:text-foreground py-30 text-background w-full min-h-screen">
      <div className="space-y-2 max-w-6xl mx-auto text-lg">
        <div>
          We are a community-driven platform built to connect professionals with
          the best remote job opportunities worldwide by making it easy to
          discover, compare, and review remote work platforms in one place.
          While everyone knows platforms like
          <span className="font-semibold mx-2 hover:underline transition-all">
            Upwork
          </span>
          and
          <span className="font-semibold mx-2 hover:underline transition-all">
            Fiverr
          </span>
          , they represent only a small part of the remote work ecosystem. Our
          focus is on surfacing high-quality, lesser-known, and niche remote
          platforms across different roles and industries. Through community
          reviews and upvotes, we ensure the most valuable and trustworthy
          platforms stand out. Whether you are new to remote work or an
          experienced professional, we help you find the right platform for your
          next opportunity.
        </div>
        <div>
          Our community members actively review and rate platforms, share
          insights, and help others make informed decisions about where to find
          their next remote job.
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-lg mt-30">
        <div className="text-5xl flex items-center justify-center font-normal">
          Top
          <span className={`${smallerFont.className} mx-3`}>rated</span>
          platforms
        </div>
        <div className="flex items-center  justify-between mt-12">
          <div className="flex justify-center  flex-1 items-center">
            <BounceCards enableHover items={items} />
          </div>
          <Link
            href="/platforms"
            className="group relative px-6 bg-background text-foreground rounded-xl font-semibold overflow-y-hidden shadow-lg"
          >
            <div className="relative w-full py-2 z-10 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:blur-xl">
              <span>View More</span>
            </div>
            <div className="absolute py-2 inset-0 flex items-center justify-center transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
              <span>View more</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
``;
