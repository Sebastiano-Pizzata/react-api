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
      <div className='container'>
        <table className="table table-striped">
          <thead>
            <tr>
              {
                products.map((product) => {
                  return (
                    <th key={product.id} scope='col'>{product.titolo}</th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                products.map((product) => {
                  return (
                    <td key={product.id}>{product.contenuto}</td>
                  )
                })
              }
            </tr>
            <tr>
              {
                products.map((product) => {
                  return (
                    <td key={product.id}>{product.image}</td>
                  )
                })
              }
            </tr>
            <tr >
              {
                products.map((product) => {
                  return (
                    <td key={product.id}>#{product.tags}</td>
                  )
                })
              }

            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
