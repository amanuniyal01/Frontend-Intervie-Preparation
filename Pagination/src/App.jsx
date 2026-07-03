import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./components/Pagination.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagination />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )

}
