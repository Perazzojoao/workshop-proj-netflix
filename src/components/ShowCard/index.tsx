import { Image } from "@/types/tvMazeTypes";

interface ShowCardProps {
  titulo: string;
  img: Image;
}

export default function ShowCard({ titulo, img }: ShowCardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 rounded-md bg-zinc-800 shadow-xl shadow-black p-4 max-w-[224px] hover:bg-zinc-300 transition-all hover:text-black cursor-pointer">
      <div>
        <img src={img.medium} alt={titulo} className="rounded-md w-48" />
      </div>
      <div>
        <h2 className="font-semibold text-xl line-clamp-1">{titulo}</h2>
      </div>
    </div>
  );
}