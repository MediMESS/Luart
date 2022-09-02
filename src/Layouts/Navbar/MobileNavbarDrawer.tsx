import * as React from "react"
import { pages } from "src/Layouts/utils/variables"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import Drawer from "@mui/material/Drawer"
import NavLinkAdapter from "src/components/NavLinkAdapter"
import { MobileNavbarDrawerProps } from "./Navbar"
import Toolbar from "@mui/material/Toolbar"

const MobileNavbarDrawer = (props: MobileNavbarDrawerProps) => {
  return (
    <Drawer
      {...props}
      hideBackdrop
      anchor="bottom"
      PaperProps={{
        sx: {
          height: "100vh",
          backgroundColor: "background.default",
        },
      }}
    >
      <Toolbar />
      <List>
        {pages.map(({ href, label }) => (
          <ListItem component={NavLinkAdapter} to={href} key={href}>
            <Typography
              textAlign="center"
              sx={{
                color: "text.primary",
              }}
            >
              {label}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
export default MobileNavbarDrawer
