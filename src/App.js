import BigCard from "./components/BigCard";
import Hero from "./components/Hero";
import Misson from "./components/Misson";
import Servies from "./components/Servies";
import FirstSection from "./components/about/FirstSection";
import SecondSection from "./components/about/SecondSection";
import ThirdSection from "./components/about/ThirdSection";
import ProductHero from "./components/product/ProductHero";
import ProductsRow from "./components/product/ProductsRow";


export default function App() {
  return (
   <div className="bg-white">
    <Hero />
    <BigCard />
    <Servies />
    <Misson />
    {/* <FirstSection />
    <SecondSection />
    <ThirdSection /> */}
    {/* <ProductHero />
    <ProductsRow /> */}
   </div>
  )
}
