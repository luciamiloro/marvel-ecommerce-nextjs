import Head from "next/head";
import React from 'react'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { Typography } from "@mui/material";

const PurchaseConfirmation = () => {
  return (
    <>
      <Head>
        <title>MARVEL | Successful purchase</title>
        <meta
          name="successful purchase"
          content="Successful purchase confirmation"
        />
      </Head>
      <BodySingle>
        <Typography variant="h1" align="center" sx={{ mt:5, mb:4, fontSize:30, fontWeight:800, color:'green' }}>
          FELICITACIONES
        </Typography>
      </BodySingle>
    </>
  )
}

export default PurchaseConfirmation