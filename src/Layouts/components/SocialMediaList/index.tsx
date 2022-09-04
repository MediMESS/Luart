import React from "react"
import SvgIcon from "@mui/material/SvgIcon"
import Link from "@mui/material/Link"
import { ReactComponent as DiscordIcon } from "src/features/Launchpad/assets/Discord.svg"
import { ReactComponent as MediumIcon } from "src/features/Launchpad/assets/Medium.svg"
import { ReactComponent as TelegramIcon } from "src/features/Launchpad/assets/Telegram.svg"
import TwitterIcon from "@mui/icons-material/Twitter"

export const luartSocialMediaList = [
  {
    href: "https://t.me/luart_io",
    component: TelegramIcon,
    sx: { width: "30px", height: "30px" },
  },
  {
    href: "https://twitter.com/luart_io",
    component: TwitterIcon,
    sx: { width: "27px", height: "27px" },
  },
  {
    href: "https://luart-io.medium.com/",
    component: MediumIcon,
    sx: { width: "22px", height: "22px" },
  },
  {
    href: "https://discord.com/invite/luart",
    component: DiscordIcon,
    sx: { width: "24px", height: "24px" },
  },
]
const index = () => {
  return (
    <>
      {luartSocialMediaList.map(({ component, href, sx }, index) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <SvgIcon
            sx={[
              { ...sx },
              index !== 0 && {
                margin: "0px 0px 0px 32px",
              },
            ]}
            component={component}
          />
        </Link>
      ))}
    </>
  )
}

export default index
