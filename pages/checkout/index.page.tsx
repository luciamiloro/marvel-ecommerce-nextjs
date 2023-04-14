import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import { Alert, Snackbar, Stack } from "@mui/material";
import { useRouter } from "next/router";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import Head from "next/head";
import {
  DeliveryFormData,
  PaymentFormData,
  PersonalFormData,
} from "dh-marvel/components/checkoutForms/forms.types";
import PersonalForm from "dh-marvel/components/checkoutForms/personalForm";
import DeliveryForm from "dh-marvel/components/checkoutForms/deliveryForm";
import PaymentForm from "dh-marvel/components/checkoutForms/paymentForm";

import { Card, CardContent } from "@mui/material";
import Image from 'next/image';
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import LastStep from "dh-marvel/components/checkoutForms/lastStep";

const CheckoutStepper: NextPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [order, setOrder] = React.useState<any>({});

  const [alertMessage, setAlertMessage] = React.useState<string>("");
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);

  const router = useRouter();
  const { comic }: any = router?.query;

  console.log("Desde afuera del useEffect**************")
  console.log(order)
  React.useEffect(() => {
    if (comic) {
      const comicData = JSON.parse(comic);
      setOrder({
        ...order,
        order: {
          name: comicData.title,
          image: `${comicData?.thumbnail?.path}.${comicData?.thumbnail?.extension}`,
          price: comicData.price,
        },
      });
      console.log("Desde adentro del useEffect**************")
      console.log(order)
      //console.log(order.order.image);
    } else {
      router.push("/");
    }
  }, []);

  const handleSubmitPersonalForm = (data: PersonalFormData) => {
    setOrder({
      ...order,
      ...data,
    });
    setActiveStep((prevState) => prevState + 1);
  };

  const handleSubmitDeliveryForm = (data: DeliveryFormData) => {
    setOrder({
      ...order,
      ...data,
    });

    setActiveStep((prevState) => prevState + 1);
  };

  const handleSubmitPaymentForm = (data: PaymentFormData) => {
    setOrder({
      ...order,
      ...data,
    });
    setActiveStep((prevState) => prevState + 1);
  };

  //pasar data a la api******************************************************
  //  const methods = useForm<CheckoutInput>({
  //   },
  // )
  // const { setFocus, handleSubmit, getValues } = methods;

  const handleApiSubmit = async () => {
    //const order = getValues(); // get form data

    console.log(order);
    console.log(order.order.name);
    console.log(order.city);
    const checkoutData: CheckoutInput = {
      customer: {
        name: order.firstname,
        lastname: order.lastname,
        email: order.email,
        address: {
          address1: order.address,
          address2: null,
          city: order.city,
          state: order.province,
          zipCode: order.postalcode,
        },
      },
      card: {
        number: order.cardnumber,
        cvc: order.securitycode,
        expDate: order.expdate,
        nameOnCard: order.cardname,
      },
      order: {
        name: order.order.name,
        image: order.order.image,
        price: order.order.price,
      },
    };

    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(checkoutData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();

    console.log(res);

    if (!res.error) {
      router.push({
        pathname: "/confirmacion-compra",
        query: { detail: JSON.stringify(res) },
      });
    } else {
      setOpenAlert(true);
      setAlertMessage(res.message);
      console.log("errrrrrror");
    }

    // setActiveStep(2)

  };
  /*
  React.useEffect(() => {
    if (activeStep > 2) {
      setActiveStep(2);
       handleApiSubmit();
    }
  }, []); cuando
  */

  return (
    <>
      <Head>
        <title> Checkout </title>
        <meta name="checkout" content="Form to buy your new comic" />
      </Head>

      <BodySingle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "60%", m: 6, justifyContent: "center" }}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                mb: 4,
                fontSize: 30,
                fontWeight: 800,
                color: "primary.main",
              }}
            >
              {order.order?.name}
            </Typography>
            <Stepper activeStep={activeStep}>
              <Step>
                <StepLabel>Personal Information</StepLabel>
              </Step>
              <Step>
                <StepLabel>Delivery Adress</StepLabel>
              </Step>
              <Step>
                <StepLabel>Payment Information</StepLabel>
              </Step>
            </Stepper>

            {activeStep === 0 && (
              <Stack>
                <PersonalForm
                  activeStep={activeStep}
                  handleNext={handleSubmitPersonalForm}
                />
              </Stack>
            )}

            {activeStep === 1 && (
              <Stack>
                <DeliveryForm
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  handleNext={handleSubmitDeliveryForm}
                />
              </Stack>
            )}

            {activeStep === 2 && (
              <Stack>
                <PaymentForm
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  handleNext={handleSubmitPaymentForm}
                  handleApiSubmit={handleApiSubmit}
                />
              </Stack>
            )}
            {activeStep === 3 && (
              <Stack>
                <LastStep
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  handleApiSubmit={handleApiSubmit}
                />

              </Stack>
            )}
          </Box>

          <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={() => setOpenAlert(false)}
          >
            <Alert
              onClose={() => setOpenAlert(false)}
              severity="error"
              sx={{ width: "100%" }}
            >
              Error message: {alertMessage}
            </Alert>
          </Snackbar>

          <Card sx={{ width: "15%", height: "30%" }}>
            <CardContent>
              <Image
                src={order.order?.image ?? "/placeholder.png"}
                width="184px"
                height="350px"
                objectFit="contain"
                alt={order.order?.name}
              />
              <Typography variant="body2" component="div">
                {order.order?.name}
              </Typography>
              <Typography variant="h6">${order.order?.price}</Typography>
            </CardContent>
          </Card>
        </Box>
      </BodySingle>
    </>
  );
};

(CheckoutStepper as any).Layout = LayoutCheckout;

export default CheckoutStepper;
