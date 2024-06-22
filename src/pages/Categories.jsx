import React from "react";
import { useState } from "react";
import { items } from "../components/Alldata";

// import "../style.css";
import { News } from "../components/News";
import { Footer } from "../components/Footer";
import { Products } from "../components/Products";

export const Categories = () => {
  const [currCat, setCurrCat] = useState("");
  const set = new Set(items.map((item) => item.category));
  const categories = Array.from(["all", ...set]);
  console.log(categories);

  const products = items.filter(
    (item) => item.category === currCat || currCat === ""
  );
  const handleClick = (item) => {
    if (item == "all") {
      setCurrCat("");
      return;
    }
    setCurrCat(item);
  };

  return (
    <>
      <div className="container-1">
        <div className="category">
          <div className="category__head">
            <button className="category__head__home">HOME</button>
            <div className="category__head__title">
              {currCat !== "" ? currCat.toUpperCase() : "all".toUpperCase()}
            </div>
          </div>
          <div className="category__filters">
            {categories.map((item) => (
              <div
                className={`category__filters__option ${
                  currCat === item ? "active" : null
                }`}
                onClick={() => handleClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="category__products">
            <Products products={products} />
          </div>
        </div>
      </div>

      <News />
      <Footer />
    </>
  );
};
