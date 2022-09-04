import React from "react"
import Layout from "src/Layouts"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import NavLinkAdapter from "src/components/NavLinkAdapter"
import NewsletterSubscriptionCard from "src/features/Launchpad/components/NewsletterSubscriptionCard"
import SocialMediaList from "src/Layouts/components/SocialMediaList"
const Launchpad = () => {
  return (
    <Layout showBackground>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ pt: "48px" }}>
          <Grid
            item
            xs={12}
            md={8}
            padding="0"
            display="flex"
            color="text.primary"
            alignItems={{ xs: "center", md: "flex-start" }}
            justifyContent="center"
            flexDirection="column"
          >
            <p>EXPLORE NFTS ON TERRA</p>
            <h1>The Luart Launchpad: Your NFT Journey Starts Here</h1>
            <p>
              Luart brings the first gamified NFT Launchpad to The Terra
              Ecosystem. Delivering a seamless user experience for Explorers,
              you will be able to mint from your favorite collections while
              earning LUA Power.
            </p>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Button color="primary" variant="contained">
                Visit Upcoming Projects
              </Button>
              <Button
                color="tertiary"
                variant="contained"
                component={NavLinkAdapter}
                to="/marketplace"
                sx={{
                  margin: { xs: "8px 0px 0px 0px", md: "0px 0px 0px 32px" },
                }}
              >
                Visit Marketplace
              </Button>
            </Box>
          </Grid>
          <Grid item xs={0} md={4}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                height: { md: "500px", lg: "550px" },
              }}
            >
              <img
                src="/assets/images/rocket.png"
                alt="hero-img"
                height="100%"
              />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            display: { xs: "none", md: "flex" },
          }}
        >
          <SocialMediaList />
        </Box>
        <NewsletterSubscriptionCard />
      </Container>
    </Layout>
  )
}

export default Launchpad
