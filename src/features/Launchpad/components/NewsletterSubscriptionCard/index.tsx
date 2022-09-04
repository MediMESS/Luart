import React from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const NewsletterSubscriptionCard = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        padding: { xs: "50px 16px", md: "40px 0px 40px 64px" },
        my: "128px",
      }}
    >
      <Box>
        <Typography variant="h1">{"Don't Miss Out on What's Next"}</Typography>
        <Typography>
          Sign up for our newsletter and keepup to date with the latest news
          from Luart. Be first to hear about NFT launches and exclusive events.
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <img src="assets/images/launchpad/mailbox.png" alt="mailbox" />
      </Box>
    </Paper>
  )
}

export default NewsletterSubscriptionCard
