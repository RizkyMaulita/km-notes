import React, { useEffect, useState } from "react";
import { BASEURL } from "../config/api";

export default function CheckoutPage (props) {
  const [ data, setData ] = useState([])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      const arrCart = JSON.parse(cart)
      setData(arrCart)
    }
  }, [])

  const handleCheckout = async () => {
    const id = data?.map(product => product?.id)
    console.log(id)
    // fetch(`${BASEURL}/products/1`, {
    //   method: 'PUT', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ inStock: false }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success: ', data)
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    try {
      const arrPromises = id?.map(productId => {
        return fetch(`${BASEURL}/products/${productId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inStock: false }),
        })
      })
      const checkout = await Promise.all(arrPromises)
      const failedProduct = []
      const successProduct = []
      checkout.forEach((result, index) => {
        const { status } = result
        if (status === 200) {
          successProduct.push(data[index])
        } else {
          failedProduct.push(data[index])
        }
      })
      console.log('Success Data : ', successProduct)
      console.log('Failed Data : ', failedProduct)

      const payloadTransactions = {
        "userId": "1",
        "address": "address",
        "phoneNumber": "123123123",
        "totalPrice": 15e6,
        "courierId": 1,
        "totalProduct": successProduct.length,
        "createdAt": new Date(),
        "statusPayment": "Success",
        "transactionDetails": successProduct
      }
      fetch(`https://618947bdd0821900178d78e5.mockapi.io/transactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payloadTransactions),
      })
      .then(res => {
        if (res.status !== 201) {
          return new Error('Failed created transactions')
        } else {
          return res.json()
        }
      })
      .then(data => {
        console.log('Success : ', data)
      })
      .catch(err => {
        console.log('Error : ', err)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="text-center">
      Page Checkout      
      <div className="my-5">
        {
          data?.map(product => <div key={product?.id}>id : {product?.id} - {product.name}</div>)
        }
      </div>
      <button className="btn btn-primary" onClick={() => handleCheckout()}>Checkout</button>
    </div>
  )
}