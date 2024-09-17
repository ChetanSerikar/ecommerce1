import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const useProuct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

// export const ProductContextProvider = ({ children }) => {
//   return <ProductContext.Provider>{children}</ProductContext.Provider>;
// };
