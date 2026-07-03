import { useState, useEffect } from "react"
import ProductCard from "./ProductCard";
import Debugging from "./Debugging";
import { useNavigate } from "react-router-dom";

const PAGE_SIZE = 10;
const Pagination = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const fetchData = async (search) => {
        const url = search
            ? `https://dummyjson.com/products/search?q=${search}`
            : `https://dummyjson.com/products?limit=200`;

        const data = await fetch(url);
        const json = await data.json();
        setProducts(json.products);
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
    const handleSearch = (value) => {
        setSearch(value)
        setCurrentPage(0)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData(search)
        }, 500)
        return () => clearTimeout(timer)

    }, [search])

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
            <div className="input-container">
                <input placeholder="Enter the product you want to search..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)} />
            </div>

            <div className="product-container">
                {products.slice(start, end).map((p) => <div onClick={() => navigate(`/product/${p.id}`)}>
                    <ProductCard
                        key={p.id}
                        image={p.thumbnail}
                        title={p.title}
                    />
                </div>)}
            </div>
        </div>
    )
};
export default Pagination;
