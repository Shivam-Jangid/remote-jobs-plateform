"use client";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import Stack from "@/components/Stack";
import { ReactNode } from "react";
import { addressImage, addressImage2 } from "@/lib/imageaddress";
import AboutSection from "@/components/aboutSection";

const cards:ReactNode[] = [];

const Card1 = function(){
  return <div 
    style={{
        backgroundImage: `url(${addressImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
   className="bg-foreground relative h-full text-background flex gap-2 py-3 px-4 flex-col">
    <h1 className="font-semibold text-xl">
      Narendra modi
    </h1>
    <h2><span className="uppercase">politics</span></h2>
  </div>
}
const Card2 = function(){
  return <div 
    style={{
        backgroundImage: `url(${addressImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
   className="bg-foreground gap-2 h-full text-background py-3 px-4 ">
    <span className="font-semibold text-xl backdrop-blur-md rounded-xl my-2 py-3 px-2"> Alyx Star</span>
    <span className="uppercase flex  w-fit rounded-xl backdrop-blur-sm text-lg py-2 px-2 ">Acting</span>
  </div>
}

cards.push(<Card1 />);
cards.push(<Card2 />);
cards.push(<Card2 />);



const smallerFont = Instrument_Serif({ weight: ["400"], style: ["italic"] });

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <section className="relative min-h-screen selection:bg-amber-100 selection:text-amber-950 bg-background text-foreground flex items-center px-10 overflow-hidden">
          <div className="relative z-10 grid grid-cols-12 w-full max-w-7xl mx-auto gap-10">
            <div className="col-span-8 flex flex-col justify-center">
              <div className="flex gap-4 mb-10">
                {[
                  { value: "100+", label: "Platforms listed" },
                  { value: "400+", label: "Jobs listed" },
                  { value: "600+", label: "Users listed" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-foreground/20 rounded-xl px-5 py-3 text-center backdrop-blur-sm"
                  >
                    <div className="text-2xl font-semibold">{item.value}</div>
                    <div className="text-sm opacity-70">{item.label}</div>
                  </div>
                ))}
              </div>

              <h1 className="text-6xl leading-tight max-w-4xl">
                Discover
                <span className={`mx-5 ${smallerFont.className}`}>remote</span>
                job opportunities
              </h1>

              <p className="mt-8 max-w-3xl text-lg opacity-80">
                The best platforms for genuine remote job opportunities across
                all industries worldwide. Read trusted reviews from real users
                to identify which platforms consistently deliver results. Access
                the world’s largest curated collection of remote job platforms
                across every niche and region.
              </p>

              <div className="flex gap-6 mt-12">
                <Link
                  href="/apply"
                  className="group relative px-7 border bg-foreground text-background border-foreground/40 rounded-xl font-semibold overflow-hidden"
                >
                  <span className="relative z-10 py-3 transition-all duration-300 ease-in-out group-hover:blur-xl group-hover:-translate-y-full block">
                    Browse Platforms
                  </span>
                  <span className="absolute inset-0 py-3 flex items-center justify-center translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
                    Browse Platforms
                  </span>
                </Link>

                <Link
                  href="/apply"
                  className="group relative px-7  border border-foreground/40 rounded-xl font-semibold overflow-hidden"
                >
                  <span className="relative z-10 py-3 transition-all duration-300 ease-in-out group-hover:blur-xl group-hover:-translate-y-full block">
                    Apply as a platform
                  </span>
                  <span className="absolute inset-0 py-3 flex items-center justify-center translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
                    Apply as a platform
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-span-4 flex items-center flex-col justify-end">
              <h1 className="text-3xl">Our testimonials</h1>
              <div className="h-full w-full">
                  <Stack
                    cards={cards}
                    randomRotation={true}
                    autoplay={true}
                    pauseOnHover={true}
                  />
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
      </div>
    </>
  );
}
