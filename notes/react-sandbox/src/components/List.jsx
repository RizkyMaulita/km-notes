import React from 'react' 
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

export default function List (props) {
  const { data } = props
  const history = useHistory()

  const handleAddCart = (data) => {
    const checkLogin = localStorage.getItem('dataLogin')
    if (checkLogin) {
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
    } else {
      // dia harus ke path login terlebih dahulu
      history.push('/login')
    }
  }

  const goDetail = (data) => {
    console.log(data)
    const { id } = data
    history.push('/detail/' + id, { data })
  }
  return (
    <div className="mt-5 container">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>See Details</th>
            <th>Add Cart</th>
          </tr>
        </thead>
        <tbody>
        {
          data?.map((catalog, index) => (
            <tr key={index} className="my-3">
              <td className="text-start">{catalog?.name}</td>
              <td className="text-start">Rp{Number(catalog?.price).toLocaleString('id-ID') || 0}</td>
              <td>{catalog?.inStock ? 'Ready' : 'Sold Out'}</td>
              <td>
                <div className="button btn mx-2 btn-primary" onClick={() => goDetail(catalog)}>See Details</div>
              </td>
              <td>
                <div className="button btn mx-3 btn-success" onClick={() => handleAddCart(catalog)}>Add To Cart</div>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

List.propTypes = {
  data: PropTypes.array
}