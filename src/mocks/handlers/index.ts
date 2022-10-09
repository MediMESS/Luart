import { CustomEndpoints } from "./Custom"
import { NftsEndpoints } from "./Nfts"

export const handlers = [
  // NFT Endpoints
  ...NftsEndpoints,

  // Custom Endpoints
  ...CustomEndpoints,
]
