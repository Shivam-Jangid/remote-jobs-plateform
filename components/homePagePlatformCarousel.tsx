import { platformsHomePage } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Platforms } from "./platforms";

function createColumns<T>(array: T[], itemsPerColumn: number) {
  const columns = [];

  for (let i = 0; i < array.length; i += itemsPerColumn) {
    columns.push(array.slice(i, i + itemsPerColumn));
  }

  return columns;
}

export function PlaformCarouselHome(){
    const columns = createColumns(platformsHomePage, 2);
    return <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {columns.map((column, index) => (
              <CarouselItem
                key={index}
                className="
                  pl-5

                  basis-full
                  md:basis-1/2
                  xl:basis-1/4
                "
              >
                {/* 2 rows */}
                <div className="flex py-2 px-1 flex-col gap-5 h-full">
                  {column.map((platform) => (
                    <Platforms
                      key={platform.name}
                      name={platform.name}
                      jobs={platform.jobs}
                      upvotes={platform.upvotes}
                      downvotes={platform.downvotes}
                      comments={platform.comments}
                      href={platform.href}
                      description={platform.description}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
}