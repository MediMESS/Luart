import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import { pages } from "src/Layouts/utils/variables"
import ConnectWalletButton from "src/Layouts/components/ConnectWalletButton"
import Logo from "src/Layouts/components/Logo"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import { capitalize } from "@mui/material"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import MobileNavbarDrawer from "./MobileNavbarDrawer"
import NavLinkAdapter from "src/components/NavLinkAdapter"
import Typography from "@mui/material/Typography"

const Navbar = () => {
  const [isNavbarDrawerOpen, setIsNavbarDrawerOpen] =
    React.useState<boolean>(false)

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
        sx={{ px: "16px", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                width: "100%",
                display: {
                  xs: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              }}
            >
              <Logo />
              <div style={{ display: "flex" }}>
                <List sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map(({ href, label }) => (
                    <ListItem
                      component={NavLinkAdapter}
                      to={href}
                      key={href}
                      sx={{
                        "&.active": {
                          color: "white",
                        },
                      }}
                    >
                      <Typography textAlign="center">
                        {capitalize(label)}
                      </Typography>
                    </ListItem>
                  ))}
                </List>

                <ConnectWalletButton />
                <IconButton
                  size="large"
                  onClick={() =>
                    setIsNavbarDrawerOpen((prevState) => !prevState)
                  }
                  sx={{ padding: 0, display: { xs: "flex", md: "none" } }}
                >
                  {isNavbarDrawerOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </div>
            </Box>
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
