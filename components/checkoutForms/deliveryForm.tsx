import React, { FC, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { DeliveryFormData, DeliveryFormProps, deliverySchema } from './forms.types';
import { Box, Typography } from '@mui/material';
import ControlledInputField from './controlled-inputfield';
import StepperNavigation from './stepperNavigation';



const DeliveryForm: FC<DeliveryFormProps> = ({ activeStep, handleNext ,  setActiveStep }: DeliveryFormProps) => {

    const methods = useForm<DeliveryFormData>({
        resolver: yupResolver(deliverySchema),
        defaultValues: {
            address: "Calle falsa 123",
            city: "Esquel",
            province: "Chubut",
            postalcode: "9200",
        },
    })

    const { setFocus, handleSubmit } = methods;

    const onSubmit = (data: DeliveryFormData) => {
        handleNext(data);
        console.log(data)
    };

    useEffect(() => {
        setFocus("address");
    }, [setFocus]);

    return (
        <Box sx={{ m: 3 }} >
            <Typography variant="h4" component="h4" sx={{ mb: 4 }} >
            Delivery address

            </Typography>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ControlledInputField name={"address"} label={"Address"} />
                    <ControlledInputField name={"department"} label={"Department"} />
                    <ControlledInputField name={"city"} label={"City"} />
                    <ControlledInputField name={"province"} label={"Province/State"} />
                    <ControlledInputField name={"postalcode"} label={"Postal Code"} />
                </form>
            </FormProvider>

            <StepperNavigation
                activeStep={activeStep}
                onPrevClick={() => setActiveStep(0)}
                onNextClick={handleSubmit(onSubmit)}
            />
        </Box>
    )
}

export default DeliveryForm 