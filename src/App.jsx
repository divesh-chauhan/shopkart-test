import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ProductProvider } from "./context/provider.jsx"
import Products from "./pages/products.jsx"
import ProductDetails from "./pages/productDetails.jsx"
import Cart from "./pages/cart.jsx"
import Checkout from "./pages/checkout.jsx"
import Order from "./pages/order.jsx"

function App() {

  return (
    <BrowserRouter>
     <ProductProvider>
      <Routes>
        <Route path='/' element={<Products />}/>
        <Route path='/products/:id/details' element={<ProductDetails />}/>
        <Route path='/products/cart' element={<Cart />} />
        <Route path='/products/checkout' element={<Checkout />}/>
        <Route path='/products/order' element={<Order />}/>
      </Routes>
     </ProductProvider>
    </BrowserRouter> 
  )
}

export default App
