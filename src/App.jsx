import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ProductProvider } from "./context/provider.jsx"
import Products from "./pages/products.jsx"
import ProductDetails from "./pages/productDetails.jsx"

function App() {

  return (
    <BrowserRouter>
     <ProductProvider>
      <Routes>
        <Route path='/' element={<Products />}/>
        <Route path='/products/:id/details' element={<ProductDetails />}/>
      </Routes>
     </ProductProvider>
    </BrowserRouter> 
  )
}

export default App
