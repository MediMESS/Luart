import { useCallback, useState } from "react"
import { IMint } from "src/features/NFTs/NFTs.d"
import axios from "src/lib/axios"

/**
 * Mint Endpoint.
 */
const MINT_ENDPOINT = "/mints"
export const useNFTs = () => {
  const [mintList, setMintList] = useState<IMint[] | null>(null)
  const [isMintListLoading, setIsMintListLoading] = useState(false)

  const loadMints = useCallback(async () => {
    setIsMintListLoading(true)
    try {
      const { data } = await axios.get<IMint[]>(MINT_ENDPOINT)
      setMintList(data)
    } catch (err) {
      alert("error")
    }
    setIsMintListLoading(false)
  }, [])

  return {
    mintList,
    loadMints,
    isMintListLoading,
  }
}
