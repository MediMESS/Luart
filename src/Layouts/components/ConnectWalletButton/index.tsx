import React from "react"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"

const ConnectWalletButton = () => {
  return (
    <Button variant="contained" color="primary">
      <AccountBalanceWalletIcon />
      <Typography>Connect Wallet</Typography>
    </Button>
  )
}

export default ConnectWalletButton
