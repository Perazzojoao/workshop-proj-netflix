import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center p-5 bg-[#141414] gap-10 justify-between shadow-lg fixed shadow-black w-screen">
      <div className="flex items-center gap-10">
        <Image alt="Logo Netflix" src="/NetflixLogoSvg.png" width={200} height={100} />
        <nav className="text-gray-200 flex gap-3">
          <span>Início</span>
          <span>Séries</span>
          <span>Filmes</span>
          <span>Bombando</span>
          <span>Minha lista</span>
          <span>Navegar por idiomas</span>
        </nav>
      </div>
      <div className="grow max-w-80">
        <input type="text" className="p-1 rounded-md w-full bg-gray-300 text-lg font-semibold" />
      </div>
    </header>
  );
}