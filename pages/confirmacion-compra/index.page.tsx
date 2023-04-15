import Head from "next/head";
import React, { useEffect } from "react";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import { useRouter } from "next/router";
import Image from "next/image";

const PurchaseConfirmation = () => {
  
  const [orderDetail, setOrderDetail] = React.useState<CheckoutInput>();
  const router = useRouter();
  const { detail }: any = router?.query;

  useEffect(() => {
    if (detail) {
      const {data} = JSON.parse(detail);
      setOrderDetail(data);
    } else {
      router.push("/");
    }
  },[]);

  return (
    <>
      <Head>
        <title> Successful purchase</title>
        <meta name="description" content="purchase confirmation" />
      </Head>
      <BodySingle>
        <Box sx={{ bgcolor: "green" }}>
          <Typography
            variant="h1"
            align="center"
            sx={{ mt: 5, mb: 4, fontSize: 30, fontWeight: 800, color: "white" }}
          >
            Enjoy your purchase {orderDetail?.customer.name} ! 👽
          </Typography>
        </Box>

        <Card sx={{ width: "100%", height: "30%" }}>
          <CardContent
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {orderDetail?.order?.image ? (
              <Image
                src={orderDetail.order.image}
                width="184px"
                height="350px"
                objectFit="contain"
                alt={orderDetail.order.name}
              />
            ) : null}
            <Typography
              variant="h4"
              component="div"
              sx={{ width: "30%", m: 5 }}
            >
              {orderDetail?.order?.name}
            </Typography>
            <Typography variant="h5">${orderDetail?.order?.price} </Typography>
          </CardContent>
        </Card>

        <Stack
          direction="row"
          sx={{ height: "100%", display: "flex", flexdirection: "row", mb: 8 }}
        >
          <Card variant="outlined" sx={{ width: "50%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Personal Data
              </Typography>
              <Typography sx={{ mt: 1.5 }} color="text.secondary">
                Name: {orderDetail?.customer.name}{" "}
                {orderDetail?.customer.lastname}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Contact: {orderDetail?.customer.email}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ width: "50%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Delivery Address
              </Typography>
              <Typography sx={{ mt: 1.5 }} color="text.secondary">
                Direction: {orderDetail?.customer.address.address1}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Location: {orderDetail?.customer.address.city} -{" "}
                {orderDetail?.customer.address.state},{" "}
                {orderDetail?.customer.address.zipCode}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </BodySingle>
    </>
  );
};
(PurchaseConfirmation as any).Layout = LayoutCheckout;

export default PurchaseConfirmation;
