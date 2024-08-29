"use client";

import { IShow } from "@/types/tvMazeTypes";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ShowProviderProps {
  children: ReactNode;
}

interface IShowContext {
  buscador: string;
  setBuscador: Dispatch<SetStateAction<string>>;
  showList: IShow[] | undefined;
  setShowList: Dispatch<SetStateAction<IShow[] | undefined>>;
}

export const ShowContext = createContext({} as IShowContext);

export default function ShowProvider({ children }: ShowProviderProps) {
  const [buscador, setBuscador] = useState("");
  const [showList, setShowList] = useState<IShow[]>();
  return (
    <ShowContext.Provider value={{ buscador, setBuscador, showList, setShowList }}>
      {children}
    </ShowContext.Provider>
  )
}