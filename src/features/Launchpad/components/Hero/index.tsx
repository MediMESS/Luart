import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import NavLinkAdapter from "src/components/NavLinkAdapter"
import SocialMediaList from "src/Layouts/components/SocialMediaList"
import "./Hero.scss"
import Typography from "@mui/material/Typography"

const Hero = () => {
  return (
    <>
      <Grid className="Hero" container spacing={0}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            alignItems: { xs: "center", md: "flex-start" },
            flexDirection: "column",
          }}
          className="head"
        >
          <p className="head-p">EXPLORE NFTS ON TERRA</p>
          <Typography variant="h1" className="head-h1">
            The Luart Launchpad: Your NFT Journey Starts Here
          </Typography>
          <Typography
            variant="h3"
            className="head-h3"
            sx={{ margin: "24px 0px 48px" }}
          >
            Luart brings the first gamified NFT Launchpad to The Terra
            Ecosystem. Delivering a seamless user experience for Explorers, you
            will be able to mint from your favorite collections while earning
            LUA Power.
          </Typography>
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
              height: { md: "500px", lg: "550px" },
              justifyContent: "center",
            }}
          >
            <img src="/assets/images/rocket.png" alt="hero-img" height="100%" />
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
    </>
  )
}

export default Hero
