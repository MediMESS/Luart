import React from "react"
import { NavLink } from "react-router-dom"
import { Link } from "@mui/material"

const index = () => {
  return (
    <Link to="/" component={NavLink} className="logo">
      <img src="assets/images/full-logo.svg" alt="logo" width={"100%"} />
    </Link>
  )
}

export default index
