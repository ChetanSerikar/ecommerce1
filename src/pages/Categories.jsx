import React from "react";
import { useState } from "react";
// import { items } from "../components/Alldata";
import { News } from "../components/News";
import { Footer } from "../components/Footer";
import { Products } from "../components/Products";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import Dropdown from "../components/Dropdown";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


export const Categories = () => {
  const [currCat, setCurrCat] = useState("");
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filterd, setFilterd] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search)
  const [found, setFound] = useState([]);
  const searchRef = useRef([])
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const navigate = useNavigate();

  async function fetchProducts() {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/products?limit=30");
      const json = await res.json();
      console.log(json)
      setProducts(json.products);
      setFilterd(json.products);
      const categorySet = new Set(json.products.map((item) => item.category));
      const categoriesArray = Array.from(categorySet);
      console.log("Extracted categories:", categoriesArray);
      setCategories(categoriesArray);
      setLoading(false);
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    const serachProducts = () => {
      if (debounce == "") return setFilterd(products)
      fetch(`https://dummyjson.com/products/search?q=${debounce}`)
        .then(res => res.json())
        .then(data => {
          setFound(data.products)
          console.log(data.products, "search")
        });

    }

    serachProducts();

  }, [debounce])


  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setFocusedIndex((prevIndex) =>
        prevIndex < found.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : found.length - 1
      );
    } else if (e.key === "Enter" && focusedIndex !== -1) {
      navigate(`/productpage/${found[focusedIndex].id}`)
    }
  };

  useEffect(() => {
    if (focusedIndex !== -1 && searchRef.current[focusedIndex]) {
      searchRef.current[focusedIndex].focus(); // Focus on the current result
      searchRef.current[focusedIndex].scrollIntoView({ behavior: "smooth", block: "nearest" }); // Scroll into view
    }
  }, [focusedIndex]);


  const handleClick = (item) => {
    if (currCat == item) {
      setFilterd(products);
      setCurrCat("")
      return
    }
    setCurrCat(item);
    const filteredProducts = products.filter(product => product.category === item);
    console.log("filterd", filteredProducts)
    setFilterd(filteredProducts)
  };






  if (loading) {
    return <>Loading..</>
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container-1">
        <div className="category">
          <div className="category__head">
            <Link to="/" className="category__head__home">
              HOME
            </Link>
            <div className="category__head__inputwrapper">
              <Dropdown triggerElement={<input placeholder="Enter the product " value={search} type="text" onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />}>
                {/* <input placeholder="Enter the product " value={search} type="text" onChange={(e) => setSearch(e.target.value)} /> */}
                <div className="search_results">{
                  found.map((pro, i) => (
                    <div key={i} ref={(el) => searchRef.current[i] = el}
                      // className="search_results__result" 
                      className={`search_results__result ${focusedIndex === i ? "focused" : ""}`}
                      style={{ backgroundColor: focusedIndex === i ? "#eee" : "transparent" }}
                    >
                      <div style={{ width: "40px", height: "40px" }}><img src={pro.thumbnail} alt="" /></div>
                      <div>{pro.title}</div>
                    </div>
                  ))
                }
                </div>
              </Dropdown>
            </div>
          </div>
          <div className="category__filters">
            {categories.map((item, i) => (
              <div
                key={i}
                className={`category__filters__option ${currCat === item ? "active" : null
                  }`}
                onClick={() => handleClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="category__products">
            <Products products={filterd} />
          </div>
        </div>
      </div>

      <News />
      <Footer />
    </>
  );
};
