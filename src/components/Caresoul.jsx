import React, { useRef } from "react";
import { useState } from "react";
import { items } from "./Alldata";
import Product from "./Product";
import { useEffect } from "react";

const Caresoul = ({ numberOfCards = 4 }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const ref = useRef();
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


  const containerSize = 1200;
  const perSlide = numberOfCards;
  const gapSize = 16;
  const numberOfGap = perSlide - 1;
  const totalGapSize = gapSize * numberOfGap;

  const slideWidth = containerSize / perSlide - totalGapSize / perSlide;
  const handleLeft = () => {
    if (currentCard <= 0) {
      return;
    }
    setCurrentCard((prev) => prev - 1);
    ref.current.scrollLeft = ref.current.scrollLeft - slideWidth;
  };
  const handleRight = () => {
    if (currentCard >= products.length - numberOfCards) {
      return;
    }
    setCurrentCard((prev) => prev + 1);
    ref.current.scrollLeft = ref.current.scrollLeft + slideWidth;
  };

  if (loading) {
    return <>Loading..</>
  }
  return (
    <div className="caresoul container-1">
      <div className="caresoul__header">
        <div className="caresoul__header__title">Trending</div>
        <div className="caresoul__buttons">
          <button
            className="caresoul__buttons__left border-2 border-radius-8 bg-neutral-000"
            onClick={() => handleLeft()}
          >
            &larr;
          </button>
          <button
            className="caresoul__buttons__rigth  border-2 border-radius-8 bg-neutral-000"
            onClick={() => handleRight()}
          >
            &rarr;
          </button>
        </div>
      </div>
      <div
        className="caresoul__grid_wrapper"
        style={{
          columnGap: `${gapSize}px`,
          // gridAutoColumns: `calc((100% / ${numberOfCards}) - 16px)`,
        }}
        ref={ref}
      >
        {products.map((item, i) => (
          <Product
            key={i}
            product={item}
            id={item.id}
            image={<Product.Image />}
            info={
              <Product.Info>
                <Product.Title />
                <Product.Price />
              </Product.Info>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Caresoul;
