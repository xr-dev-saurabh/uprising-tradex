import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BigCard from "./components/BigCard";
import {Hero} from "./components/Hero";
import Misson from "./components/Misson";
import Servies from "./components/Servies";
import Navbar from "./components/Navbar";
import CardIct from "./components/CardIct";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
// import FirstSection from "./components/about/FirstSection";
// import SecondSection from "./components/about/SecondSection";
// import ThirdSection from "./components/about/ThirdSection";
// import ProductHero from "./components/product/ProductHero";
// import Card from "./components/product/Card";
// import ProductsRow from "./components/product/ProductsRow";


export default function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <>
             
              <Hero />
              <Navbar />
              </>
            }
          />
        </Routes>
      </Suspense>
      </>
  )
}
