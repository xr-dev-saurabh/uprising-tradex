import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BigCard from "./Components/BigCard";
import { Hero } from "./Components/Hero";
import Misson from "./Components/Misson";
import Servies from "./Components/Servies";
import Navbar from "./Components/Navbar";
import CardIct from "./Components/CardIct";
import WhyUs from "./Components/WhyUs";
import Footer from "./Components/Footer";
import FirstSection from "./Components/about/FirstSection";
import SecondSection from "./Components/about/SecondSection";
import ThirdSection from "./Components/about/ThirdSection";
import ProductHero from "./Components/product/ProductHero";
import ProductsRow from "./Components/product/ProductsRow";
import NavOrder from "./Components/NavOrder";

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Navbar />
                <CardIct />
                <BigCard />
                <Servies />
                <Misson />
                <WhyUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <FirstSection />
                <Navbar />
                <SecondSection />
                <ThirdSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/order"
            element={
              <>
                <ProductHero />
                <NavOrder />
                <ProductsRow />
                <Footer />
              </>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
