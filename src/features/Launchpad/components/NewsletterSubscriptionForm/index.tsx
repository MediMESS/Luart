import React from "react"
import Button from "@mui/material/Button"
import Checkbox from "src/components/Form/Checkbox"
import TextField from "src/components/Form/TextField"
import "./NewsletterSubscriptionCardForm.scss"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { NewsletterSubscriptionFormProps } from "src/features/Launchpad/components/NewsletterSubscriptionForm/NewsletterSubscriptionCardForm.d"
import CircularProgress from "@mui/material/CircularProgress"

/**
 * NewsletterSubscriptionCardForm Fields Component.
 *
 * @param props N/A.
 * @param props.isNewsletterSubscriptionLoading Loading state when newsletter Subscription.
 * @returns NewsletterSubscriptionCardForm Component.
 */
const NewsletterSubscriptionCardForm = ({
  isNewsletterSubscriptionLoading,
}: NewsletterSubscriptionFormProps) => {
  return (
    <div className="newsletter-subscription-card-form">
      <div className="fields">
        <TextField name="email" placeholder="you@example.com" />
        <Button
          type="submit"
          variant="contained"
          disabled={isNewsletterSubscriptionLoading}
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          {isNewsletterSubscriptionLoading && <CircularProgress size={30} />}
          Subscribe Now
        </Button>
      </div>
      <div className="terms-and-conditions">
        <Checkbox
          defaultChecked={false}
          name="termsAndConditions"
          labelProps={{
            label: (
              <>
                <Typography variant="body2">
                  I agree to the processing of personal data by Luart for
                  marketing purposes and accept{" "}
                  <Link href="#" target="_blank" className="link">
                    Terms of Service
                  </Link>
                </Typography>
              </>
            ),
          }}
        />
      </div>
    </div>
  )
}

export default NewsletterSubscriptionCardForm
