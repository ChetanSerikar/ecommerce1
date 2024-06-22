import React, { useRef } from "react";
import { useState } from "react";
import { items } from "../components/Alldata";
import Product from "./Product";

const Caresoul = ({ numberOfCards = 4 }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const ref = useRef();

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
    if (currentCard >= items.length - numberOfCards) {
      return;
    }
    setCurrentCard((prev) => prev + 1);
    ref.current.scrollLeft = ref.current.scrollLeft + slideWidth;
  };
  const con = true;
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
          gridAutoColumns: `calc((100% / ${numberOfCards}) - 16px)`,
        }}
        ref={ref}
      >
        {items.map((item, i) => (
          <Product product={item} />
        ))}
      </div>
    </div>
  );
};

export default Caresoul;
