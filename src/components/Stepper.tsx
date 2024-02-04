import { Step, Stepper } from "@material-tailwind/react";
import React from "react";
import { setActiveStepper } from "../redux/features/stepper/stepperSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

type TStepperProps = {
  steps: {
    value: number;
    name: string;
    component: React.ReactNode;
  }[];
};

export function DefaultStepper({ steps }: TStepperProps) {
  const { activeStep } = useAppSelector((state) => state.stepper);
  const dispatch = useAppDispatch();

  const mySteps = [
    {
      value: 0,
      name: "Quiz List",
      component: <div>Quiz List</div>,
    },
    {
      value: 1,
      name: "Add Quiz",
      component: <div>Add Quiz</div>,
    },
  ];
  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""} activeStep={activeStep}>
        {steps.map((step) => (
          <Step
            placeholder={""}
            onClick={() => dispatch(setActiveStepper(1))}
            className="px-8 w-fit"
          >
            {step.name}
          </Step>
        ))}
      </Stepper>
      <div>{steps[activeStep].component}</div>
    </div>
  );
}
