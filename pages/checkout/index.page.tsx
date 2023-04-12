import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import Head from "next/head";
import { DeliveryFormData, PaymentFormData, PersonalFormData} from 'dh-marvel/components/checkoutForms/forms.types';
import PersonalForm from 'dh-marvel/components/checkoutForms/personalForm';
import DeliveryForm from 'dh-marvel/components/checkoutForms/deliveryForm';
import PaymentForm from 'dh-marvel/components/checkoutForms/paymentForm';


const CheckoutStepper: NextPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [order, setOrder] = React.useState<any>({});

  const router = useRouter();
  const { comic }: any = router?.query;
  const comicData = JSON.parse(comic);
  //console.log(comicData)

  React.useEffect(() => { 
    if (comic) {
      comicData
      setOrder({
        ...order,
        order: {
          name: comicData.title,
          image: comicData.images[0]
            ? `${comicData.images[0]?.path}.${comicData?.images[0]?.extension}`
            : `${comicData?.thumbnail?.path}.${comicData?.thumbnail?.extension}`,
          price: comicData.price,
        },
      });
      //console.log(order)   
    } else {
      router.push("/");
    }
  }, []);


  const handleSubmitPersonalForm = (data: PersonalFormData) => {
    setOrder({
      ...order,
      ...data
    })
    setActiveStep((prevState) => prevState + 1)
  }

  const handleSubmitDeliveryForm = (data: DeliveryFormData) => {
    setOrder({
      ...order,
      ...data,
    });

    setActiveStep((prevState) => prevState + 1);
  }

  const handleSubmitPaymentForm = (data: PaymentFormData) => {
    setOrder({
      ...order,
      ...data
    })
    setActiveStep((prevState) => prevState + 1)
  }


  return (
    <>
      <Head>
        <title>MARVEL | Checkout</title>
        <meta name="checkout form" content="Form to make the buyout" />
      </Head>
   
    <BodySingle>
    <Box sx={{ width: '70%', mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }} >
     nombre del comic {order.order.name}
      </Typography>
      <Stepper activeStep={activeStep}>
                    <Step>
                      <StepLabel>Datos Personales</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>Dirección de entrega</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>Datos del pago</StepLabel>
                    </Step>
                  </Stepper>

      {activeStep === 0 &&
        <Stack>
          <PersonalForm
            activeStep={activeStep}
            handleNext={ handleSubmitPersonalForm } />
        </Stack>
      }

      {activeStep === 1 &&
        <Stack>
          <DeliveryForm
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            handleNext={ handleSubmitDeliveryForm } />
        </Stack>
      }

      {activeStep === 2 &&
        <Stack>
          <PaymentForm
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            handleNext={handleSubmitPaymentForm} />
        </Stack>
      }

    </Box>
    </BodySingle>
    </>
  );
}
(CheckoutStepper as any).Layout = LayoutCheckout;


export default CheckoutStepper

