import React from 'react' 
import PropTypes from 'prop-types'


export default function List (props) {
  const { data } = props

  const handleAddCart = (data) => {
    const cart = localStorage.getItem('cart')
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([data]))
    } else {
      const arrCart = JSON.parse(cart)
      const findData = arrCart.find(product => product.id === data.id)
      if (!findData) {
        localStorage.setItem('cart', JSON.stringify([...arrCart, data]))
      }
    }
  }
  return (
    <div className="mt-5">
      <ul>
        {
          data?.map((catalog, index) => (
            <li key={index} className="my-3">
              <div className="d-flex justify-content-center">
                <h5>
                  {catalog?.name}               
                </h5>
                <div className="button btn mx-3 btn-success" onClick={() => handleAddCart(catalog)}>Add To Cart</div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

List.propTypes = {
  data: PropTypes.array
}