import React from "react"
import { NavLink } from "react-router-dom"
import { Link } from "@mui/material"

const index = () => {
  return (
    <Link
      to="/"
      component={NavLink}
      sx={{
        width: {
          xs: "82px",
          md: "109px",
        },
      }}
    >
      <img src="assets/images/logo.svg" alt="logo" style={{ width: "100%" }} />
    </Link>
  )
}

export default index
