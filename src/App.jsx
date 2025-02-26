import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([]);

  function fetchProducts() {
    fetch("http://localhost:2000/posts")
      .then((res) => res.json())
      .then(setProducts)
      .catch(err => console.error(err))

  }

  useEffect(fetchProducts, [])

  return (
    <>

    </>
  )
}

export default App
