import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Review from "./Review";
import PaymentForm from "./PaymentForm";
import AddressForm from "./AddressForm";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const steps = ["Select Address", "Order summary", "Payment method"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper elevation={3} sx={{ p: 8 }}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <Stack justifyContent="center" direction="row" sx={{ my: 4 }}>
            <Typography sx={{ m: 4 }}>
              All steps completed - you&apos;re Order Placed.
            </Typography>
            <Box>
              <Link to="/">
                <Button>Go To Homepage</Button>
              </Link>
            </Box>
          </Stack>
        ) : (
          <React.Fragment>
            <Box sx={{ maxWidth: 1000, py: 8, m: "auto" }}>
              {activeStep === 0 && <AddressForm />}
              {activeStep === 1 && <Review />}
              {activeStep === 2 && <PaymentForm />}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                maxWidth: 800,
                m: "auto",
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleNext} variant="contained">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Paper>
  );
}
