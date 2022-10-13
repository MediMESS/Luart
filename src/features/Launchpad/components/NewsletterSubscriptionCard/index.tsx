import React from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import "./NewsletterSubscriptionCard.scss"
import NewsletterSubscriptionForm from "src/features/Launchpad/components/NewsletterSubscriptionForm"
import * as yup from "yup"
import Form from "src/components/Form"
import { newsletterSubscriptionFormData } from "src/features/Launchpad/components/NewsletterSubscriptionCard/NewsletterSubscriptionCard.d"
import { useNewsletterSubscription } from "src/features/Launchpad/hooks/useNewsletterSubscription"
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
    <div style={{ margin: "128px 0" }}>
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
        <Paper
          className="NewsletterSubscriptionCard"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: { xs: "50px 16px", md: "40px 0px 40px 64px" },
          }}
        >
          <Box>
            <Typography
              variant="h2"
              className="NewsletterSubscriptionCardTitle"
            >
              {"Don't Miss Out on What's Next"}
            </Typography>
            <Typography variant="body2">
              Sign up for our newsletter and keepup to date with the latest news
              from Luart. Be first to hear about NFT launches and exclusive
              events.
            </Typography>
            <NewsletterSubscriptionForm
              isNewsletterSubscriptionLoading={isNewsletterSubscriptionLoading}
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img src="/assets/images/launchpad/mailbox.png" alt="mailbox" />
          </Box>
        </Paper>
        {isNewsletterSubscriptionError && (
          <Alert
            icon={<LockIcon sx={{ color: "warning.dark" }} />}
            severity="warning"
            variant="filled"
            sx={{ mt: "32px" }}
          >
            <AlertTitle>Error! Email not found.</AlertTitle>
            There is an error in the email address you entered. Please try
            again.
          </Alert>
        )}
        {isNewsletterSubscriptionSuccess && (
          <Alert
            icon={<LockIcon sx={{ color: "success.dark" }} />}
            severity="success"
            variant="filled"
            sx={{ mt: "32px" }}
          >
            <AlertTitle>Subscription Success.</AlertTitle>
            You have been successfully subscribed.
          </Alert>
        )}
      </Form>
    </div>
  )
}

export default NewsletterSubscriptionCard
