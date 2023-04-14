import React, { FC } from 'react'
import { LastStepProps} from './forms.types';
import { Box, Typography } from '@mui/material';
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