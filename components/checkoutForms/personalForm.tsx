import React, { FC, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalFormData, PersonalFormProps, personalDataSchema } from './forms.types';
import { Box, Typography } from '@mui/material';
import ControlledInputField from './controlled-inputfield';
import StepperNavigation from './stepperNavigation';



const PersonalForm: FC<PersonalFormProps> = ({ activeStep, handleNext }: PersonalFormProps) => {

    const methods = useForm<PersonalFormData>({ //useForm = api de context utilizada x reactHookForm
        resolver: yupResolver(personalDataSchema),
        defaultValues: {
            firstname: "Test",
            lastname: "User",
            email: "test@user.com",
        },
    })

    const { setFocus, handleSubmit } = methods;

    const onSubmit = (data: PersonalFormData) => {
        handleNext(data);
        console.log(data)
    };

    useEffect(() => {
        setFocus("firstname");
    }, [setFocus]);

    return (
        <Box sx={{ m: 3 }} >
            <Typography variant="h4" component="h4" sx={{ mb: 4 }} >
                Personal Information
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...methods}>
                    <ControlledInputField name={"firstname"} label={"Name"} />
                    <ControlledInputField name={"lastname"} label={"Last Name"} />
                    <ControlledInputField name={"email"} label={"Email"} />
                </FormProvider>
            </form>

            <StepperNavigation
                activeStep={activeStep}
                onPrevClick={() => console.log("do nothing")}
                onNextClick={handleSubmit(onSubmit)}
            />
        </Box>
    )
}


export default PersonalForm 