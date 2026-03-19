import { useState, useEffect } from "react"
import ProductCard from "./ProductCard";


const PAGE_SIZE = 10;


const Pagination = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products?limit=200")
        const json = await data.json();
        setProducts(json.products)

    }
    const handlePagination = (n) => {
        setCurrentPage(n)

    }
    const handlePrevious = () => {
        setCurrentPage((prev) => prev - 1)
    }
    const handleForward = () => {
        setCurrentPage((prev) => prev + 1)
    }
    const totalProducts = products.length;
    const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
    const start = currentPage * PAGE_SIZE
    const end = start + PAGE_SIZE
    useEffect(() => {
        fetchData()

    }, [])

    return !products.length ? <h2>No products found</h2> : (
        <div >
            <h1>Pagination</h1>
            <div className="pagination-container">
                <button id="previous" disabled={currentPage === 0} onClick={() => handlePrevious()}>⬅️</button>
                {[...Array(noOfPages).keys()].map((n) => (
                    <button key={n} className={"page-number " + (currentPage === n ? "active" : "")} onClick={() => handlePagination(n)} >{n + 1}</button>
                ))
                }
                <button id="next"
                    disabled={currentPage === noOfPages - 1}
                    onClick={() => handleForward()}>➡️</button>
            </div>

            <div className="product-container">
                {products.slice(start, end).map((p) => <ProductCard image={p.thumbnail} title={p.title} />)}



            </div>

        </div>
    )
};
export default Pagination;
