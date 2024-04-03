import BigCard from "./components/BigCard";
import Hero from "./components/Hero";
import Servies from "./components/Servies";
import FirstSection from "./components/about/FirstSection";
import SecondSection from "./components/about/SecondSection";
import ThirdSection from "./components/about/ThirdSection";
import ProductHero from "./components/product/ProductHero";
import ProductsRow from "./components/product/ProductsRow";


export default function App() {
  return (
   <>
    <Hero />
    <BigCard />
    <Servies />
    {/* <FirstSection />
    <SecondSection />
    <ThirdSection /> */}
    {/* <ProductHero />
    <ProductsRow /> */}
   </>
  )
}
