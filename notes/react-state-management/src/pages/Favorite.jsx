import React from "react"
import Navbar from "../components/Navbar"
export default function Favorite (props) {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center my-5">
          Favorite List
        </h1>
      </div>
    </div>
  )
}