/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import './index.scss';


const getSteps = () => {
    return [
        <p className="container-left-body">Step 1</p>,
        <p className="container-left-body">Step 2</p>
    ]
}

const getStepContent = (step) => {
    switch (step) {
        case 0:
            return (
                <form className="container-form">
                    <div className="container-form__group">
                        <label className="container-form__label">first name</label>
                        <input className="container-form__input" type="text" />
                    </div>

                    <div className="container-form__group">
                        <label className="container-form__label">last name</label>
                        <input className="container-form__input" type="text"/>
                    </div>

                    <div className="container-form__group">
                        <label className="container-form__label">email</label>
                        <input className="container-form__input" type="email"/>
                    </div>
                </form>
            )
        case 1:
            return (
                <form className="container-form">
                    <div className="container-form__group">
                        <label className="container-form__label">password</label>
                        <input className="container-form__input" type="password"/>
                    </div>

                    <div className="container-form__group">
                        <label className="container-form__label">secret question</label>
                        <input className="container-form__input" type="text" />
                    </div>

                    <div className="container-form__group">
                        <label className="container-form__label">Answer</label>
                        <input className="container-form__input" type="email" />
                    </div>

                </form>
            )
        default:
            return 'Unknown step'
    }
}

const signup = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevactiveStep) => prevactiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevactiveStep) => prevactiveStep - 1)
    }


    return (
        <div>
            <div className="container">
                <div className="container-left">
                    <div className="container-left-row">
                        <p className="container-left-header">Sign up</p>
                        <p className="container-left-body">welcome back</p>

                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={index}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <div>{getStepContent(index)}</div>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                onClick={handleNext}
                                            >
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                </div>
                <div className="container-right">

                </div>
            </div>
        </div>
    )
}

export default signup;