import { createBoard } from '@wixc3/react-board';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { useState } from 'react';
import cover from '../../covers/stepper-light.png';

export default createBoard({
    name: 'MUIStepper',
    Board: () => {
        const steps = ['Step 1', 'Step 2', 'Step 3'];
        const [activeStep, setActiveStep] = useState(0);

        const handleNext = () => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };

        const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };

        return (
            <>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                </Button>
                <Button disabled={activeStep === steps.length - 1} onClick={handleNext}>
                    Next
                </Button>
            </>
        );
    },
    isSnippet: true,
    tags: ['Navigation', 'MUI'],
    cover: cover,
});
