import React from "react"
import Layout from "src/Layouts"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import NavLinkAdapter from "src/components/NavLinkAdapter"
import { ReactComponent as DiscordIcon } from "src/features/Launchpad/assets/Discord.svg"
import { ReactComponent as MediumIcon } from "src/features/Launchpad/assets/Medium.svg"
import { ReactComponent as TelegramIcon } from "src/features/Launchpad/assets/Telegram.svg"
import TwitterIcon from "@mui/icons-material/Twitter"
import SvgIcon from "@mui/material/SvgIcon"
import NewsletterSubscriptionCard from "src/features/Launchpad/components/NewsletterSubscriptionCard"
import Link from "@mui/material/Link"

const luartSocialMediaList = [
  {
    href: "https://t.me/luart_io",
    component: TelegramIcon,
  },
  {
    href: "https://twitter.com/luart_io",
    component: TwitterIcon,
  },
  {
    href: "https://luart-io.medium.com/",
    component: MediumIcon,
  },
  {
    href: "https://discord.com/invite/luart",
    component: DiscordIcon,
  },
]

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
          {luartSocialMediaList.map(({ component, href }) => (
            <Link key={href} href={href} target="_blank">
              <SvgIcon
                width={27}
                height={27}
                sx={{
                  margin: { xs: "8px 0px 0px 0px", md: "0px 32px 0px 0px" },
                }}
                component={component}
              />
            </Link>
          ))}
        </Box>
        <NewsletterSubscriptionCard />
      </Container>
    </Layout>
  )
}

export default Launchpad
