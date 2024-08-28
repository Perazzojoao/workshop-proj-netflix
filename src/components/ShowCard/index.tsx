import { Image } from "@/types/tvMazeTypes";

interface ShowCardProps {
  titulo: string;
  img: Image;
}

export default function ShowCard({ titulo, img }: ShowCardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 rounded-md bg-zinc-800 shadow-lg shadow-black p-4 max-w-60">
      <div>
        <img src={img.medium} alt={titulo} className="rounded-md" />
      </div>
      <div>
        <h2 className="font-semibold text-xl">{titulo}</h2>
      </div>
    </div>
  );
}