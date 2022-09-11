import React from "react"
import Button from "@mui/material/Button"
import { ReactComponent as WalletIcon } from "src/assets/images/launchpad/wallet.svg"
import SvgIcon from "@mui/material/SvgIcon"

const ConnectWalletButton = () => {
  return (
    <Button
      variant="contained"
      color="light"
      className="btn-m ConnectWalletButton"
      sx={{
        padding: { xs: "8px 12px", md: "10px 20px" },
        fontSize: { xs: "12px", md: "14px" },
        height: { xs: "32px", md: "40px" },
      }}
    >
      <SvgIcon>
        <WalletIcon />
      </SvgIcon>
      <span>Connect Wallet</span>
    </Button>
  )
}

export default ConnectWalletButton
