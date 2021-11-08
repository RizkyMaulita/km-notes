import React, { useEffect, useState } from "react";
import { BASEURL } from "../config/api";

export default function CatalogPage (props) {
  const [ catalogs, setCatalogs ] = useState([])
  
  useEffect(() => {
    fetch(`${BASEURL}/products`)
    .then(res => res.json())
    .then(data => setCatalogs(data))
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="text-center">
      Page for Catalog
      <div className="mt-5">
        {
          catalogs?.map((catalog, index) => <div key={index}>{JSON.stringify(catalog)}</div>)
        }
      </div>
    </div>
  )
}