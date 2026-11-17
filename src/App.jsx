import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ProductProvider } from "./context/provider.jsx"

function App() {

  return (
    <BrowserRouter>
     <ProductProvider>
      <Routes>
        
      </Routes>
     </ProductProvider>
    </BrowserRouter>
  )
}

export default App
