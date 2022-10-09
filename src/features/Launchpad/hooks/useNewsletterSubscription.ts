import axios from "src/lib/axios"
import { newsletterSubscriptionFormData } from "src/features/Launchpad/components/NewsletterSubscriptionCard/NewsletterSubscriptionCard.d"
import { useState } from "react"

/**
 * NEWSLETTER_SUBSCRIPTION_API.
 */
export const NEWSLETTER_SUBSCRIPTION_API =
  process.env.PUBLIC_URL + "/newsLetterSubscription"
/**
 * Hook useNewsletterSubscription.
 *
 * @returns Hook useNewsletterSubscription.
 */
export const useNewsletterSubscription = () => {
  const [isNewsletterSubscriptionLoading, setIsNewsletterSubscriptionLoading] =
    useState(false)
  const [isNewsletterSubscriptionError, setNewsletterSubscriptionError] =
    useState(false)
  const [isNewsletterSubscriptionSuccess, setNewsletterSubscriptionSuccess] =
    useState(false)

  const subscribeNewsletter = async (body: newsletterSubscriptionFormData) => {
    setNewsletterSubscriptionError(false)
    setNewsletterSubscriptionSuccess(false)
    setIsNewsletterSubscriptionLoading(true)
    try {
      await axios.post(NEWSLETTER_SUBSCRIPTION_API, body)
      setNewsletterSubscriptionSuccess(true)
    } catch (error) {
      setNewsletterSubscriptionError(true)
    }
    setIsNewsletterSubscriptionLoading(false)
  }

  return {
    isNewsletterSubscriptionLoading,
    isNewsletterSubscriptionError,
    isNewsletterSubscriptionSuccess,
    subscribeNewsletter,
  }
}
