export type IMint = {
  /**
   * NFT Guid.
   */
  guid: string
  /**
   * NFT Label.
   */
  label: string
  /**
   * Cover Picture link.
   */
  cover: string
  /**
   * Supply Number.
   */
  supply: number
  /**
   * End Date NFT Minting.
   */
  endDate: string
  /**
   * Price Mint.
   */
  price: string
  /**
   * End Time NFT Minting.
   */
  endTime
  /**
   * Social media project links.
   */
  links: {
    discord: string
    website: string
    twitter: string
  }
}
