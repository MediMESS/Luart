import React from "react"
import { MintCardProps } from "./MintCard.d"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import "./MintCard.scss"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Button from "@mui/material/Button"
import SvgIcon from "@mui/material/SvgIcon"
import { ReactComponent as DiscordIcon } from "src/features/Launchpad/assets/Discord.svg"
import TwitterIcon from "@mui/icons-material/Twitter"
import LanguageIcon from "@mui/icons-material/Language"
import NavLinkAdapter from "src/components/NavLinkAdapter"

const index = ({ nft }: MintCardProps) => {
  return (
    <Paper className="MintCard">
      {/* Mint Picture */}
      <Box sx={{ display: "flex", mb: "30px", alignItems: "center" }}>
        <Paper className="MintCard-ProfilePicture">
          <img src={`/assets/images/nfts/cover/${nft.cover}.jpg`} />
        </Paper>
        <Box sx={{ ml: "32px" }}>
          <Typography variant="h3" className="MintCard-Label">
            {nft.label}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "600" }}>
            <span style={{ fontWeight: "500" }}>{nft.label}: </span>
            {nft.supply}
          </Typography>
        </Box>
      </Box>

      {/* Mint Price */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: "8px" }}>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Mint Price
        </Typography>
        <Typography variant="h6">{nft.price}</Typography>
      </Box>

      {/* End Date */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: "8px" }}>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          End Date
        </Typography>
        <Typography variant="h6">{nft.endDate}</Typography>
      </Box>

      {/* End Time */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: "8px" }}>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          End Time
        </Typography>
        <Typography variant="h6">{nft.endTime}</Typography>
      </Box>

      {/* Project Links */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: "8px" }}>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Project Links
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href={nft.links.discord} target="_blank">
            <SvgIcon component={DiscordIcon} />
          </Link>
          <Link href={nft.links.twitter} target="_blank">
            <SvgIcon sx={{ marginLeft: "16px" }} component={TwitterIcon} />
          </Link>
          <Link href={nft.links.website} target="_blank">
            <SvgIcon sx={{ marginLeft: "16px" }} component={LanguageIcon} />
          </Link>
        </Box>
      </Box>

      {/* CTA Visit Collection */}
      <Box sx={{ mt: "32px" }}>
        <Button
          color="tertiary"
          variant="contained"
          fullWidth
          component={NavLinkAdapter}
          to={"/marketplace"}
        >
          Visit Collection
        </Button>
      </Box>
    </Paper>
  )
}

export default index
