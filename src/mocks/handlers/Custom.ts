import { rest } from "msw"
import { newsletterSubscriptionFormData } from "src/features/Launchpad/components/NewsletterSubscriptionCard/NewsletterSubscriptionCard"
import { NEWSLETTER_SUBSCRIPTION_API } from "src/features/Launchpad/hooks/useNewsletterSubscription"

/**
 * Fail email.
 */
const TEST_FAIL_EMAIL = "fail@gmail.com"

export const CustomEndpoints = [
  // Newsletter Subscription Endpoints.
  rest.post<newsletterSubscriptionFormData>(
    NEWSLETTER_SUBSCRIPTION_API,
    async (req, res, ctx) => {
      const { email } = await req.json<newsletterSubscriptionFormData>()
      if (email === TEST_FAIL_EMAIL)
        return res(ctx.delay(2000), ctx.status(404))
      return res(ctx.delay(2000), ctx.status(200))
    }
  ),
]
