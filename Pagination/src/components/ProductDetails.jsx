import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const result = await response.json()
        setProduct(result)
    }

    useEffect(() => {
        fetchData()
    }, [id])

    if (!product) return <h2>Loading...</h2>

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <h3>₹ {product.price}</h3>
        </div>
    )
}

export default ProductDetails