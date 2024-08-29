'use client'
import { IShow } from "@/types/tvMazeTypes"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import ShowCard from "../ShowCard"
import { ShowContext } from "@/context/showContext"

export default function Main() {
  const { showList, setShowList } = useContext(ShowContext)
  const { buscador } = useContext(ShowContext)
  useEffect(() => {
    getShows()
  }, [])

  async function getShows() {
    try {
      const response = await axios.get<IShow[]>("https://api.tvmaze.com/shows")
      setShowList(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="text-gray-200 flex justify-center gap-4 flex-wrap w-full">
      {showList
      ?.filter(show => {
        const buscadorMinusculo = buscador.toLowerCase()
        return show.name.toLowerCase().includes(buscadorMinusculo)
      })
      .map((show, index) => (
        <div className="w-fit">
          <ShowCard key={index} titulo={show.name} img={show.image} />
        </div>
      ))}
    </main>
  )
}