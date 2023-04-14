import { Box, Button, Stack } from '@mui/material'
import React, {FC} from 'react'

type StepperNavigationProps = {
    activeStep: number,
    onPrevClick: () => void,
    onNextClick: () => void,
}
const StepperNavigation:FC<StepperNavigationProps> = ({activeStep, onPrevClick, onNextClick}: StepperNavigationProps) => {
  return (
    <Stack direction= "row" mt={2} >
        {activeStep !== 0 &&
        <Button onClick={onPrevClick} >
            Previous
        </Button>
        }
        <Box sx={{flex: '1 1 auto'}} />
        <Button onClick={ onNextClick }>
            {activeStep === 3 ? 'BUY YOUR COMIC' : 'Next' }
        </Button>
    </Stack>
  )
}

export default StepperNavigation