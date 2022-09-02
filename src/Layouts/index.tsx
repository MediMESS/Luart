import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Paper, ThemeProvider } from "@mui/material"
import { theme } from "./utils/theme"
const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>MAIN</main>
      <Paper sx={{ padding: "24px", margin: "24px" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          consectetur officia ratione libero omnis, voluptates quidem error
          exercitationem suscipit alias nisi inventore autem saepe quasi quod
          harum doloribus labore! Repudiandae nihil accusamus sapiente
          dignissimos necessitatibus aliquam veritatis numquam quasi, autem,
          iusto quod eum alias magni eius harum, architecto voluptates a
          molestiae. Minima accusamus sapiente corporis alias iste cumque saepe
          fugiat blanditiis, ad laboriosam molestiae esse veniam quasi
          laudantium aut nesciunt dolorum reprehenderit similique voluptatum
          provident veritatis perferendis at harum deserunt. Nisi laudantium
          iusto veniam impedit odio sint ducimus, quo quasi delectus, placeat
          provident obcaecati ipsam soluta, error iure consequatur harum.
        </p>
      </Paper>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
