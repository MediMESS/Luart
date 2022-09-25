import React, { useEffect, useState } from "react"
import CircularProgress from "@mui/material/CircularProgress"
import { useNFTs } from "src/features/NFTs/NFTsHook"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MintCard from "src/features/Launchpad/components/MintCard"
import "./PreviousMints.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useTheme } from "@mui/material/styles"
import { Navigation } from "swiper"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import useMediaQuery from "@mui/material/useMediaQuery"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const PreviousMints = () => {
  const { loadMints, mintList, isMintListLoading } = useNFTs()
  const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] = useState(true)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"))

  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false)
  useEffect(() => {
    // Load Mints after component mount
    loadMints()
  }, [loadMints])

  return (
    <div className="PreviousMints">
      {isMintListLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ color: "text.primary" }} size={30} />
        </div>
      ) : (
        <>
          <div className="PreviousMintsTitle">
            <Typography
              variant="h2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <img
                width={40}
                height={40}
                src="/assets/images/launchpad/clinking-glasses.png"
                alt="clinking-glasses"
              />
              Previous Mints
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                disabled={isPreviousButtonDisabled}
                sx={{ color: "text.primary", mr: "8px" }}
                className="swiper-button swiper-button-previous"
              >
                <ArrowBackIcon />
              </IconButton>
              <IconButton
                disabled={isNextButtonDisabled}
                sx={{ color: "text.primary" }}
                className="swiper-button swiper-button-next"
              >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>
          <Swiper
            spaceBetween={32}
            slidesPerView={isMobile ? 1 : 3}
            modules={[Navigation]}
            onSlideChange={(swiper) => {
              setIsPreviousButtonDisabled(swiper.isBeginning)
              setIsNextButtonDisabled(swiper.isEnd)
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-previous",
            }}
          >
            {mintList?.map((prevNft) => (
              <SwiperSlide key={prevNft.guid}>
                <MintCard nft={prevNft} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  )
}

export default PreviousMints
