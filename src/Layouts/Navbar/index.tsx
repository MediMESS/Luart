import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import { pages } from "src/Layouts/utils/variables"
import ConnectWalletButton from "src/Layouts/components/ConnectWalletButton"
import Logo from "src/Layouts/components/Logo"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Box from "@mui/material/Box"
import MuiLink from "@mui/material/Link"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import MobileNavbarDrawer from "./MobileNavbarDrawer"
import NavLinkAdapter from "src/components/NavLinkAdapter"

const Navbar = () => {
  const [isNavbarDrawerOpen, setIsNavbarDrawerOpen] =
    React.useState<boolean>(false)

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "rgb(38, 44, 74)",
          color: "text.primary",
          display: "flex",
          minHeight: "70px",
        }}
      >
        <Container maxWidth="lg" sx={{ px: "16px" }}>
          <Toolbar
            disableGutters
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Logo />
            <div style={{ display: "flex", alignItems: "center" }}>
              <List
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexGrow: 1,
                }}
              >
                {pages.map(({ href, label }) => (
                  <ListItem
                    key={href}
                    sx={{ mr: { md: "16px", lg: "24px" }, p: 0 }}
                  >
                    <MuiLink to={href} component={NavLinkAdapter}>
                      {label}
                    </MuiLink>
                  </ListItem>
                ))}
              </List>
              <Box>
                <ConnectWalletButton />
              </Box>
              <IconButton
                size="large"
                onClick={() => setIsNavbarDrawerOpen((prevState) => !prevState)}
                sx={{
                  padding: 0,
                  marginLeft: "16px",
                  color: "text.primary",
                  display: { xs: "flex", md: "none" },
                }}
              >
                {isNavbarDrawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <MobileNavbarDrawer
        open={isNavbarDrawerOpen}
        onClose={() => setIsNavbarDrawerOpen(false)}
      />
    </Box>
  )
}
export default Navbar
