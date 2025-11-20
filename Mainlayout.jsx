

import React, { useState } from "react";
import { AppRouter } from "../routes/AppRouter";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export const Mainlayout = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
   
      <Header />
      <div style={{ paddingTop: "80px" }}>
        <AppRouter
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
      <Footer />
    </>
  );
};
