import React from "react";
import { Products } from "../components/Products";
import { Banner } from "../components/Banner";
import { News } from "../components/News";
import { Footer } from "../components/Footer";
import NewHero from "../components/NewHero";
import { items } from "../components/Alldata";
import Caresoul from "../components/Caresoul";

export const Home = () => {
  const products = items.filter((items) => items.id <= 8);
  return (
    <div className="home">
      <NewHero />
      <div className="proud container-1">
        <div className="proud__title">Products we are proud of</div>
        <Products products={products} />
      </div>

      <Banner />
      <Caresoul />
      <News />
      <Footer />
    </div>
  );
};
