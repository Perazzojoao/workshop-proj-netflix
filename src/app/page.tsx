import Header from "@/components/Header";
import Main from "@/components/Main";
import Popular from "@/components/Popular";
import ShowProvider from "@/context/showContext";

export default function Home() {
  return (
    <ShowProvider>
      <Header />
      <div className="w-full h-[180px]"></div>
      <Popular />
      <Main />
    </ShowProvider>
  );
}
