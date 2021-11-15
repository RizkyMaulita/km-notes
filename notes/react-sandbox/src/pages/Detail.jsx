import React, { useEffect, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router";
import { BASEURL } from "../config/api";

export default function DetailPage (props) {
  const [ product, setProduct ] = useState({
    name : 'Product Name', 
    image: '',
    price: 0,
    description: '',
    condition: ''
  })
  const { id  } = useParams()
  const location = useLocation()
  const [ error, setError ] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const dataState = location?.state?.data
    if (dataState) {
      setProduct({
        ...dataState
      })
    } else {
      fetch(`${BASEURL}/products/${id}`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          setError('Data Not Found')
          return new Error('Data Not Found')
        }
      })
      .then(data => {
        setProduct({
          ...data
        })
      })
      .catch(err => console.log(err))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddCart = () => {
    const checkLogin = localStorage.getItem('dataLogin')
    if (checkLogin) {
      const cart = localStorage.getItem('cart')
      if (!cart) {
        localStorage.setItem('cart', JSON.stringify([product]))
      } else {
        const arrCart = JSON.parse(cart)
        const findData = arrCart.find(productCart => productCart.id === id)
        if (!findData) {
          localStorage.setItem('cart', JSON.stringify([...arrCart, product]))
        }
      }
    } else {
      history?.push('/login')
    }
  }

  return (
    <div className="container">
      <h1 className="my-5 text-center">Detail Page</h1>
      { error
        ? <div>{error}</div>
        : <div>
            <div className="row">
              <div className="col-sm-2">Name</div>
              <div className="col-sm-10">: {product?.name}</div>
            </div>
            <div className="row">
              <div className="col-sm-2">Image</div>
              <div className="col-sm-10">: {product?.image}</div>
            </div>
            <div className="row">
              <div className="col-sm-2">Price</div>
              <div className="col-sm-10">: {Number(product?.price).toLocaleString('id-ID') || 0}</div>
            </div>
            <div className="row">
              <div className="col-sm-2">Description</div>
              <div className="col-sm-10">: {product?.description}</div>
            </div>
            <div className="row">
              <div className="col-sm-2">Condition</div>
              <div className="col-sm-10">: {product?.condition}</div>
            </div>
            <div className="my-5 d-flex justify-content-end">
              <button className="btn btn-primary" onClick={() => handleAddCart()}>Add To Cart</button>
            </div>
          </div>
      }
    </div>
  )
}