import React, { useState, useEffect } from 'react'
import Product from '../components/Product';
import { useNavigate } from "react-router-dom";
import Loading from '../components/Loading';

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Categories with their names, types, and paths
  const categories = [{ name: "Men's Clothings", type: "men", path: "/mens-clothing" }, { name: "Women's Clothings", type: "women", path: "/womens-clothing" }]

  // Fetch products when component mounts
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Filter products by category
        const filteredProducts = data.filter(
          (product) =>
            ["men's clothing", "women's clothing"].includes(product.category)
        );
        // Shuffle the filtered products
        const shuffledProducts = shuffleArray(filteredProducts);

        setProducts(shuffledProducts);
        setIsLoading(false);
      });
  }, []);

  // Fisher-Yates shuffle algorithm to shuffle an array
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  return (
    <div className='wrapper'>
      <div className='flash-sale'>
        <div className='topic'>Flash Sale</div>
        {isLoading ? <Loading /> : (
          <div className='content'>
            {products.map((product, index) => (
              <Product product={product} key={index} />
            ))}
          </div>
        )}
      </div>
      <div className='category'>
        <div className='topic'>Categories</div>
        <div className='content'>
          {categories.map((category, index) => (
            <div className={category.type} onClick={() => navigate(category.path)} key={index}>
              <span >{category.name} </ span >
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Home