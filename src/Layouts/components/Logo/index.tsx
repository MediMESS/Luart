import React from "react"
import { NavLink } from "react-router-dom"
import { Link } from "@mui/material"

const index = () => {
  return (
    <Link
      to="/"
      component={NavLink}
      sx={{
        display: "flex",
        width: {
          xs: "82px",
          md: "109px",
        },
      }}
    >
      <img src="assets/images/full-logo.svg" alt="logo" width={"100%"} />
    </Link>
  )
}

export default index
