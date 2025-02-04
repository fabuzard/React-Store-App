import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./components/store";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";


function App() {

  return (
    <div>
      <Provider store={store}>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductPage/>}/>
          <Route path="checkout" element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
