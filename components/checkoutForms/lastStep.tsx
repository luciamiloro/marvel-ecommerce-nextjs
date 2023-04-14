import React, { FC, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { LastStepProps, PaymentFormData, PaymentFormProps, paySchema } from './forms.types';
import { Box, Typography } from '@mui/material';
import ControlledInputField from './controlled-inputfield';
import StepperNavigation from './stepperNavigation';



const LastStep: FC<LastStepProps> = ({ activeStep, setActiveStep , handleApiSubmit}: LastStepProps) => {

    return (
        <Box sx={{ m: 3 }} >
            <Typography variant="h6" component="h6" sx={{ mb: 4 }} >
            Data correctly loaded, confirm your purchase
            </Typography>
            
            <StepperNavigation
                activeStep={activeStep}
                onPrevClick={() => setActiveStep(2)}
                onNextClick={handleApiSubmit}
                 // pasar por la api
            />    
        </Box >
    )
}

export default LastStep