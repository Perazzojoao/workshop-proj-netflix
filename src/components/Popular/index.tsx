'use client'

import { ShowContext } from "@/context/showContext"
import { IShow } from "@/types/tvMazeTypes"
import { useContext, useEffect, useState } from "react"
import ShowCard from "../ShowCard"

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
    <section className="text-gray-200 flex justify-center items-center flex-wrap gap-4 mb-20">
      {topShows.map((show, index) => (
        <ShowCard key={index} titulo={show.name} img={show.image} />
      ))}
    </section>
  )
}