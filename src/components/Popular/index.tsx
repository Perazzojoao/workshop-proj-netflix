'use client'

import { ShowContext } from "@/context/showContext"
import { IShow } from "@/types/tvMazeTypes"
import { useContext, useEffect, useState } from "react"
import ShowCard from "../ShowCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Popular() {
  const { showList } = useContext(ShowContext)
  const [topShows, setTopShows] = useState<IShow[]>([])

  useEffect(() => {
    getTopShows()
  }, [showList])

  function getTopShows() {
    const shows = showList?.filter(show => show.rating.average && show.rating.average > 8.5)
      .sort((a, b) => b.rating.average - a.rating.average)
      .slice(0, 10) || []
    setTopShows(shows)
  }
  return (
    <section className="text-gray-200 flex justify-center items-center mb-20">
      <Carousel className="w-3/4" opts={{loop: true, slidesToScroll: 3 }}>
        <CarouselContent>
          {topShows.map((show, index) => (
            <CarouselItem className="basis-1/5">
              <ShowCard key={index} titulo={show.name} img={show.image} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black size-10" />
        <CarouselNext className="text-black size-10" />
      </Carousel>
    </section>
  )
}