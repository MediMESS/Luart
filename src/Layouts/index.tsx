import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeProvider } from "@mui/material"
import Box from "@mui/material/Box"
import { theme } from "./utils/theme"
import { LayoutProps } from "src/Layouts/Layout.d"

const Layout: React.FC<LayoutProps> = ({ children, showBackground }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={[
          !!showBackground && {
            minHeight: "100%",
            background: {
              md: "url(/assets/images/bg1.jpg) top left / cover no-repeat",
            },
          },
        ]}
      >
        <Navbar isBlur={showBackground} />
        <main>{children}</main>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default Layout
