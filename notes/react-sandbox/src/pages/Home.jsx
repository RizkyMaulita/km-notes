import React, { useState, useEffect } from "react";

export default function HomePage (props) {
  const [ totalProduct, setTotalProduct ] = useState(0)

  useEffect(() => {
    const getTotalProduct = localStorage.getItem('totalProduct')
    if (getTotalProduct) {
      setTotalProduct(Number(getTotalProduct))
    }
  }, [])

  const handleClick = () => {
    let counter = totalProduct + 1
    setTotalProduct(counter)
    localStorage.setItem('totalProduct', totalProduct)
  }

  return (
    <div className="text-center">
      Page for Home
      <div className="mt-3">
        Total Product : {totalProduct}
      </div>
      <div className="mt-5">
        <button className="btn btn-primary" onClick={() => handleClick()}>Add to Cart</button>
      </div>
    </div>
  )
}