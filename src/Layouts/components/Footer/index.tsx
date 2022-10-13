import React from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import "./Footer.scss"
import * as yup from "yup"
import Form from "src/components/Form"
import { newsletterSubscriptionFormData } from "src/features/Launchpad/components/NewsletterSubscriptionCard/NewsletterSubscriptionCard.d"
import { useNewsletterSubscription } from "src/features/Launchpad/hooks/useNewsletterSubscription"
import Grid from "@mui/material/Grid"
import Checkbox from "src/components/Form/Checkbox"
import TextField from "src/components/Form/TextField"
import Link from "@mui/material/Link"
import InputAdornment from "@mui/material/InputAdornment"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import NavLinkAdapter from "src/components/NavLinkAdapter"
import CircularProgress from "@mui/material/CircularProgress"
import Alert from "@mui/material/Alert"
import LockIcon from "@mui/icons-material/Lock"
import AlertTitle from "@mui/material/AlertTitle"

const newsletterSubscriptionFormSchema = yup.object({
  email: yup.string().required("Email Invalid").email("Email Invalid"),
  termsAndConditions: yup
    .bool()
    .oneOf([true], "Please read and accept our Terms of Service"),
})

const NewsletterSubscriptionCard = () => {
  const {
    isNewsletterSubscriptionLoading,
    isNewsletterSubscriptionError,
    isNewsletterSubscriptionSuccess,
    subscribeNewsletter,
  } = useNewsletterSubscription()
  return (
    <Paper
      className="Footer"
      sx={{
        border: 0,
        padding: { md: "68px 0", xs: "50px 16px" },
      }}
    >
      <Container>
        {/* Footer links column */}
        <Grid container spacing={4} className="footer-links">
          {/* Get latest updates Form Column */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Get the latest Luart updates</Typography>
            <Form
              onSubmit={async (
                input: newsletterSubscriptionFormData & {
                  termsAndConditions: boolean
                }
              ) => {
                const { email } = input
                await subscribeNewsletter({ email })
              }}
              schema={newsletterSubscriptionFormSchema}
            >
              <Box
                sx={{ display: "flex", gap: "6px", flexDirection: "column" }}
              >
                <TextField
                  name="email"
                  placeholder="you@example.com"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Button variant="text" type="submit">
                          {isNewsletterSubscriptionLoading ? (
                            <CircularProgress size={25} />
                          ) : (
                            "Sign up"
                          )}
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
                <Checkbox
                  defaultChecked={false}
                  name="termsAndConditions"
                  labelProps={{
                    label: (
                      <>
                        <Typography variant="body2">
                          I agree to the processing of personal data by Luart
                          for marketing purposes and accept{" "}
                          <Link
                            className="underline-link"
                            href="#"
                            target="_blank"
                          >
                            Terms of Service
                          </Link>
                        </Typography>
                      </>
                    ),
                  }}
                />
              </Box>
              {isNewsletterSubscriptionError && (
                <Typography variant="body2" color="error">
                  There is an error in the email address you entered. Please try
                  again.
                </Typography>
              )}
              {isNewsletterSubscriptionSuccess && (
                <Alert
                  icon={<LockIcon sx={{ color: "success.dark" }} />}
                  severity="success"
                  variant="filled"
                  sx={{ mt: "8px" }}
                >
                  <AlertTitle>Subscription Success.</AlertTitle>
                  You have been successfully subscribed.
                </Alert>
              )}
            </Form>
          </Grid>
          {/* Apply to Launch NFTs Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5">Apply to Launch NFTs</Typography>
            <Typography variant="body2" sx={{ paddingLeft: "6px" }}>
              <Link
                className="underline-link"
                href="#"
                target="_blank"
                sx={{ fontWeight: 500 }}
              >
                Apply today
              </Link>
              {` to launch or list your NFT project on Luart's launchpad and/or
              marketplace. We're taking a curated approach to project listings
              on our launchpad.`}
            </Typography>
          </Grid>
          {/* Plateform Luart.io Column */}
          <Grid item xs={12} md={2}>
            <Typography variant="h5">Platform Luart.io</Typography>
            <Box
              sx={{
                paddingLeft: "6px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Link component={NavLinkAdapter} className="footer-link" to="/">
                NFT Launchpad
              </Link>
              <Link
                component={NavLinkAdapter}
                className="footer-link"
                to="/marketplace"
              >
                NFT Marketplace
              </Link>
              <Link
                component={NavLinkAdapter}
                className="footer-link"
                to="/$luart"
              >
                App $LUART
              </Link>
              <Link component={NavLinkAdapter} className="footer-link" to="/">
                Website
              </Link>
            </Box>
          </Grid>
          {/* Social Media Column */}
          <Grid item xs={12} md={2}>
            <Typography variant="h5">Social Media</Typography>
            <Box
              sx={{
                paddingLeft: "6px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Link className="footer-link" href="https://www.telegram.com">
                Telegram
              </Link>
              <Link className="footer-link" href="https://www.twitter.com">
                Twitter
              </Link>
              <Link className="footer-link" href="https://www.medium.com">
                Medium
              </Link>
              <Link className="footer-link" href="https://www.discord.com">
                Discord
              </Link>
            </Box>
          </Grid>
        </Grid>
        {/* Copyright */}
        <Grid container spacing={4} className="footer-copyright">
          {/* Logo */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                gap: { xs: "16px", md: "8px" },

                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
              }}
            >
              <img src="/assets/images/logo.svg" width={32} />
              <Typography variant="body2" sx={{ fontSize: 14 }}>
                Copyright Luart 2022. All Rights Reserved.
              </Typography>
            </Box>
          </Grid>
          {/* Links */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "16px", md: "32px" },
            }}
          >
            <Link href="#" target="_blank">
              Terms
            </Link>
            <Link href="#" target="_blank">
              Privacy Policy
            </Link>
            <Link href="#" target="_blank">
              Pricing & Fees
            </Link>
            <Link href="#" target="_blank">
              Download Branding
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default NewsletterSubscriptionCard
