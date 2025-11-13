import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Products } from "../pages/product";
import { Cart } from "../pages/Cart";
import { UserForm } from "../pages/Userform";

export const AppRouter = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route
        path="/products"
        element={<Products addToCart={addToCart} />}
      />
      {/* <Route
        path="/cart"
        element={
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />
        }
      /> */}
      {/* <Route path="/dashboard" element={<UserForm />} /> */}
    </Routes>
  );
};

