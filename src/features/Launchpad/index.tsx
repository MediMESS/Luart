import React from "react"
import Layout from "src/Layouts"
import Container from "@mui/material/Container"
import NewsletterSubscriptionCard from "src/features/Launchpad/components/NewsletterSubscriptionCard"
import Hero from "src/features/Launchpad/components/Hero"
import PreviousMints from "src/features/Launchpad/components/PreviousMints"

const Launchpad = () => {
  return (
    <Layout showBackground>
      <Container maxWidth="lg">
        <Hero />
        <PreviousMints />
        <NewsletterSubscriptionCard />
      </Container>
    </Layout>
  )
}

export default Launchpad
