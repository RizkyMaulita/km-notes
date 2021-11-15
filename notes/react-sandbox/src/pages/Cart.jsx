import React, { useEffect, useState } from "react";

export default function CartPage (props) {
  const [ data, setData ] = useState([])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      const arrCart = JSON.parse(cart)
      setData(arrCart)
    }
  }, [])

  return (
    <div className="container">
      <h1 className="my-5 text-center">Cart Page</h1>
      <ul>
        { data?.map((product, index) => <li key={index}>{product?.name}</li>)}
      </ul>
    </div>
  )
}