"use client";

import { testimonials } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  name: string;
  description: string;
  testimonial: string;
  avatarUrl?: string;
}

export function Testimonial({
  name,
  description,
  testimonial,
  avatarUrl,
}: TestimonialProps) {
  return (
    <div className="border bg-background hover:bg-muted/40 hover:shadow-md transition-all rounded-xl p-6 h-full flex flex-col gap-4 items-center text-center">
      <div className="">
        <div className="flex items-center">
          <Avatar className="h-16 w-16 mb-2">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={name} />
            ) : (
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            )}
          </Avatar>

          <div className="flex ml-4 items-center justify-between w-full">
            <h3 className="text-lg text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>

        <blockquote className="italic text-base text-slate-600 py-3 leading-relaxed">
          “{testimonial}”
        </blockquote>
      </div>
    </div>
  );
}

export function TestimonialList() {
  return (
    <section className="w-full">
      <div className="">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 py-2">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                {item.avatarUrl ? (
                  <Testimonial
                    name={item.name}
                    description={item.description}
                    testimonial={item.testimonial}
                    avatarUrl={item.avatarUrl}
                  />
                ) : (
                  <Testimonial
                    name={item.name}
                    description={item.description}
                    testimonial={item.testimonial}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center gap-4 mt-10">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
