import React, { useEffect, useState } from "react";
import List from "../components/List";
import { BASEURL } from "../config/api";

const categories = ['All', 'Furniture', 'Electronics', 'Fashion']
const condition = ['all', 'moderate', 'good', 'very good', 'excellent']

export default function CatalogPage (props) {
  const [ data, setData ] = useState([]) 
  const [ catalogs, setCatalogs ] = useState([])
  const [ totalProduct, setTotalProduct ] = useState(0)
  const [ activeTab, setActiveTab ] = useState(0)
  const [ activeCondition, setActiveCondition ] = useState(0)

  useEffect(() => {
    const getTotalProduct = localStorage.getItem('totalProduct')
    if (getTotalProduct) {
      setTotalProduct(Number(getTotalProduct))
    }
    fetch(`${BASEURL}/products`)
    .then(res => res.json())
    .then(data => {
      setData(data)
      setCatalogs(data)
    })
    .catch(err => console.log(err))
  }, [])

  const handleChangeTab = (index) => {
    setActiveTab(index)
    if (index === 0) {
      setCatalogs(data)
    } else {
      const category = categories[index].toLowerCase()
      const filterData = data?.filter(product => product.categories === category)
      setCatalogs(filterData)
    }
  }

  const handleChangeCondition = (condition, index) => {
    setActiveCondition(index)
    let currentProducts = []
    if (activeTab === 0) {
      currentProducts = data
    } else {
      const category = categories[activeTab].toLowerCase()
      const filterData = data?.filter(product => product.categories === category)
      currentProducts = filterData
    }
    if (condition === 'all') {
      setCatalogs(currentProducts)
    } else {
      const filterData = currentProducts?.filter(product => product.condition === condition)
      setCatalogs(filterData)
    }
  }
  
  return (
    <div className="text-center">
      Page for Catalog
      <div className="mt-3">
        Total Product: {totalProduct}
      </div>
      <ul className="nav nav-tabs">
        {
          categories?.map((category, index) => {
            return (
              <li className="nav-item" key={index}>
                <div className={`nav-link ${activeTab === index ? "active" : ""}`} onClick={() => handleChangeTab(index)}>{category}</div>
              </li>
            )
          })
        }
      </ul>
      <div className="flex justify-content-center mt-3">
        {
          condition?.map((cd, index) => <button className={`btn ${activeCondition === index ? "btn-primary" : "btn-secondary" } mx-3`} key={index} onClick={() => handleChangeCondition(cd, index)} >{cd}</button>)
        }
      </div>
      <List data={catalogs} />
    </div>
  )
}