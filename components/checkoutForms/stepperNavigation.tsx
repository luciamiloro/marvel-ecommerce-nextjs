import { Box, Button, Stack } from '@mui/material'
import React, {FC} from 'react'

type StepperNavigationProps = {
    activeStep: number,
    onPrevClick: () => void,
    onNextClick: () => void
}
const StepperNavigation:FC<StepperNavigationProps> = ({activeStep, onPrevClick, onNextClick}: StepperNavigationProps) => {
  return (
    <Stack direction= "row" mt={2} >
        {activeStep !== 0 &&
        <Button onClick={onPrevClick} >
            Anterior
        </Button>
        }
        <Box sx={{flex: '1 1 auto'}} />
        <Button onClick={onNextClick}>
            {activeStep === 2 ? 'COMPRAR' : 'Siguiente' }
        </Button>
    </Stack>
  )
}

export default StepperNavigation