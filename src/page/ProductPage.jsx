import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
  let [query, setQuery] = useSearchParams()
  return (
    <div>
      <h1>Show All Products!!! {query.get('q')}</h1>
      <button onClick={() =>setQuery({'q' : 22}) }>q바꾸기</button>
    </div>
  )
}

export default ProductPage