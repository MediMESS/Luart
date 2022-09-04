import * as React from "react"
import { pages } from "src/Layouts/utils/variables"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import MuiLink from "@mui/material/Link"
import Drawer from "@mui/material/Drawer"
import NavLinkAdapter from "src/components/NavLinkAdapter"
import { MobileNavbarDrawerProps } from "./Navbar"
import Toolbar from "@mui/material/Toolbar"
import Box from "@mui/material/Box"
import SocialMediaList from "src/Layouts/components/SocialMediaList"

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
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Toolbar sx={{ height: "70px" }} />
      <Box
        sx={{
          padding: "36px",
          paddingTop: "26px",
          display: "flex",
          flexGrow: "1",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <List>
          {pages.map(({ href, label }) => (
            <ListItem
              component={NavLinkAdapter}
              to={href}
              key={href}
              sx={{ mb: "32px", p: 0 }}
            >
              <MuiLink
                to={href}
                component={NavLinkAdapter}
                sx={{ fontSize: "22px" }}
              >
                {label}
              </MuiLink>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "64px",
          }}
        >
          <SocialMediaList />
        </Box>
      </Box>
    </Drawer>
  )
}
export default MobileNavbarDrawer
