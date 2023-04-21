import React, { FC, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { PaymentFormData, PaymentFormProps, paySchema } from './forms.types';
import { Box, Typography } from '@mui/material';
import ControlledInputField from './controlled-inputfield';
import StepperNavigation from './stepperNavigation';


const PaymentForm: FC<PaymentFormProps> = ({ activeStep, handleNext, setActiveStep, handleApiSubmit }: PaymentFormProps) => {
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
    };

    useEffect(() => {
        setFocus("cardnumber");
    }, [setFocus]);

    return (
        <Box sx={{ m: 3 }} >
            <Typography variant="h4" component="h4" sx={{ mb: 4 }} >
                Payment Information
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...methods}>
                    <ControlledInputField name={"cardnumber"} label={"Card Number"} type="number"/>
                    <ControlledInputField name={"cardname"} label={"Name on Card"} />
                    <ControlledInputField name={"expdate"} label={"Expiration Date"} />
                    <ControlledInputField name={"securitycode"} label={"CVV"}  />
                </FormProvider>
            </form>
            <StepperNavigation
                activeStep={activeStep}
                onPrevClick={() => setActiveStep(1)}
                onNextClick={handleSubmit(onSubmit)}
            //handleApiSubmit={ handleApiSubmit } // pasar por la api
            />
        </Box >
    )
}

export default PaymentForm 