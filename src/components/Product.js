import React from 'react'

const Product = ({ product }) => {
  // Determine the class based on the product category
  let productType;
  if (product.category === "men's clothing") {
    productType = 'men'
  } else if (product.category === "women's clothing") {
    productType = 'women'
  }
  return (
    <div className='product'>
      <div className='product-title'>{product.title}</div>
      <img className='product-img' src={product.image} alt='product' />
      <div className={productType}>
        <div className='product-price'>Rs {product.price}</div>
        <div className='product-des'>{product.description?.substring(0, 100)}...</div>
      </div>
    </div>
  )
}

export default Product