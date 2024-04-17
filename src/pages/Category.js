import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Product from '../components/Product';
import Loading from '../components/Loading';

function Category() {
  const location = useLocation(); // Get current location
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Determine the category based on the current pathname
    let category;
    if (location.pathname === '/mens-clothing') {
      category = "men's clothing"
      setTitle("Men's Clothing")

    } else if (location.pathname === '/womens-clothing') {
      category = "women's clothing"
      setTitle("Women's Clothing")
    }

    // Fetch products based on the category
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json()
          .then((data) => {
            setProducts(data)
            setIsLoading(false)
          }),
        );
    }
  }, [location]);

  return (
    <div className='wrapper'>
      <div className='topic'>{title}</div>
      {isLoading ? <Loading /> : (
        <div className='product-container'>
          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Category