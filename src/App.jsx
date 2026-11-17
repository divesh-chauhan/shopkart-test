import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ProductProvider } from "./context/provider.jsx"
import Products from "./pages/products.jsx"

function App() {

  return (
    <BrowserRouter>
     <ProductProvider>
      <Routes>
        <Route path="/" element={<Products/>} />
      </Routes>
     </ProductProvider>
    </BrowserRouter> 
  )
}

export default App
