import React from "react";
import { Products } from "../components/Products";
import { Banner } from "../components/Banner";
import { News } from "../components/News";
import { Footer } from "../components/Footer";
import NewHero from "../components/NewHero";
import { items } from "../components/Alldata";
import Caresoul from "../components/Caresoul";
import { useEffect } from "react";
import { useState } from "react";

export const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);
  async function fetchProducts() {
    setLoading(true);
    try {

      const res = await fetch("https://dummyjson.com/products?limit=8");
      const json = await res.json();
      console.log(json)
      setProducts(json.products);
      setLoading(false);
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  if (loading) {
    return <>Loading..</>
  }

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
