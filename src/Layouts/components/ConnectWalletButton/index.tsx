import React from "react"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"

const ConnectWalletButton = () => {
  return (
    <Button
      variant="contained"
      color="light"
      sx={{
        padding: { xs: "8px 12px", md: "10px 20px" },
      }}
    >
      <AccountBalanceWalletIcon
        sx={{
          width: 20,
          height: 20,
        }}
      />
      <Typography
        sx={{ marginLeft: "8px", fontSize: { xs: "12px", md: "14px" } }}
      >
        Connect Wallet
      </Typography>
    </Button>
  )
}

export default ConnectWalletButton
