import React from "react"
import { NavLinkProps } from "react-router-dom"
import { NavLink } from "react-router-dom"

const NavLinkAdapter = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    return (
      <NavLink ref={ref} {...props}>
        {props.children}
      </NavLink>
    )
  }
)

export default NavLinkAdapter
