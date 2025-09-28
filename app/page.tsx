import Image from "next/image";
import Hero from "./components/Hero";
import Categories from "./components/category";
import Insta from "./components/Insta";

export default function Home() {
  return (
    <>
    <Hero />
    <Categories />
    <Insta />
    </>
  );
}
