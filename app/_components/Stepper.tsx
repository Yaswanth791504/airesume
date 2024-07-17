import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { MdDone } from "react-icons/md";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

const CustomStepIcon = (props: any) => {
  const { active, completed, current, color } = props;

  let iconStyles = {
    backgroundColor: "white",
    color: "red",
    width: 32,
    height: 32,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
  };

  if (completed) {
    iconStyles.backgroundColor = color;
    iconStyles.color = "white";
  }

  return (
    <div style={iconStyles}>{current >= active ? props.icon : <MdDone />}</div>
  );
};

export default function VerticalStepper() {
  const activeStep =
    2 || useSelector((state: any) => state.resumeStepper.currentIndex);
  const color = useSelector((state: any) => state.resume.themeColor);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper orientation="vertical" activeStep={activeStep}>
        {Array.from({ length: 7 }, (x: number) => x + 1).map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={() => (
                <CustomStepIcon
                  active={activeStep}
                  current={index}
                  icon={index + 1}
                  completed={index < activeStep}
                  color={color}
                />
              )}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
