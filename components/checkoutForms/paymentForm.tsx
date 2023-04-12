import React, { FC, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { PaymentFormData, PaymentFormProps, paySchema } from './forms.types';
import { Box, Typography } from '@mui/material';
import ControlledInputField from './controlled-inputfield';
import StepperNavigation from './stepperNavigation';
import router from 'next/router';
import { CheckoutInput } from 'dh-marvel/features/checkout/checkout.types';


const PaymentForm: FC<PaymentFormProps> = ({ activeStep, handleNext, setActiveStep }: PaymentFormProps) => {
    // ROUTER??

    const methods = useForm<PaymentFormData>({

        resolver: yupResolver(paySchema),
        defaultValues: {
            cardnumber: "4242424242424242",
            cardname: "TEST USER",
            expdate: "02/28",
            securitycode: "123"
        },
    })

    const { setFocus, handleSubmit, getValues } = methods;

    const onSubmit = (data: PaymentFormData) => {
        handleNext(data);
        console.log(data)
    };

    useEffect(() => {
        setFocus("cardnumber");
    }, [setFocus]);

  

   
    return (
        <Box sx={{ m: 3 }} >
            <Typography variant="h4" component="h4" sx={{ mb: 4 }} >
                Datos de pago
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...methods}>
                    <ControlledInputField name={"cardnumber"} label={"Número de tarjeta"} />
                    <ControlledInputField name={"cardname"} label={"Nombre como aparece en la tarjeta"} />
                    <ControlledInputField name={"expdate"} label={"expirationdate"} />
                    <ControlledInputField name={"securitycode"} label={"CVV"} type="password" />
                </FormProvider>
            </form>
            <StepperNavigation
                activeStep={activeStep}
                onPrevClick={() => setActiveStep(1)}
                onNextClick={handleSubmit(onSubmit)} // pasar por la api
            />    
        </Box >
    )
}

export default PaymentForm 