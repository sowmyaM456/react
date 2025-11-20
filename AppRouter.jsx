
//  import { Home}  from "../components/Home";
// import { Routes, Route } from "react-router-dom";  
// import { Cart } from "../pages/Cart";
// import { UserList } from "../pages/UserList";
// import { UserForm } from "../pages/UserForm";
// import { ProductDetails } from "../features/products/productsdetails";

//  import { Carousel } from "../components/Carousel";


// export const AppRouter = ({ cartItems, addToCart, removeFromCart }) => {
//   return (
//     <Routes>

//       {/* HOME → Home component only */}
//       <Route path="/" element={<Home />} />

//       {/* USERFORM → Login/Signup */}
//       <Route path="/userform" element={<UserForm />} />

//       {/* PRODUCTS */}
//       <Route 
//         path="/products" 
//         element={<ProductDetails addToCart={addToCart} />} 
//       />

//       {/* CART */}
//       <Route
//         path="/cart"
//         element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
//       />

//       {/* DASHBOARD */}
//       <Route path="/userdashboard" element={<UserList />} />
     
//     </Routes>
//   );
// };
import Home from "../Components/Home";
import { Routes, Route } from "react-router-dom";  
import { Cart } from "../pages/Cart";
import { UserList } from "../pages/UserList";
import { UserForm } from "../pages/UserForm";
import Dataproduct from "../features/products/ProductsDetails";
// import { ProductDetails } from "../features/products/productsdetails";

export const AppRouter = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      {/* User login/signup */}
      <Route path="/userform" element={<UserForm />} />

      {/* Products */}
      <Route path="/product" element={<Dataproduct addToCart={addToCart} />} />

      {/* Cart */}
      <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />

      {/* Dashboard */}
      <Route path="/userdashboard" element={<UserList />} />
    </Routes>
  );
};

