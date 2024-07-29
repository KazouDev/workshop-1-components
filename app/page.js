import { Header } from "@/src/Header";
import Image from "next/image";
import { REACT_CARDS } from "@/src/react-cards";
import { Menu } from "@/src/Menu";
import { Card } from "@/src/Card";
export default function Home({ searchParams }) {
  const categorys = [...new Set(REACT_CARDS.map((card) => card.category))]
  
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="flex max-lg:flex-col gap-4">
        <Menu items={categorys} current={searchParams.category}/>
        <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REACT_CARDS.filter((card) => {
            if (!searchParams.category) return true;
            return searchParams.category === card.category;
          })
          .map((card) => {
            return <Card key={card.name} card={card} hideCategory={searchParams.category}/>
          })}
        </div>
      </div>
    </main>
  );
}
