import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";
import { AddQuizForm } from "./AddQuizForm";
import { QuizCard } from "./QuizCard";
import { SelectModule } from "./SelectModule";
import { DefaultStepper } from "./Stepper";

export function TabsWithIcon() {
  const steps = [
    {
      value: 0,
      name: "Select Module",
      component: <SelectModule />,
    },
    {
      value: 1,
      name: "Add Quiz",
      component: <AddQuizForm />,
    },
  ];

  const data = [
    {
      label: "Quiz List",
      value: "quiz-list",
      icon: Square3Stack3DIcon,
      desc: <QuizCard>Hello world</QuizCard>,
    },
    {
      label: "Add Quiz",
      value: "add-quiz",
      icon: UserCircleIcon,
      desc: (
        <QuizCard>
          <DefaultStepper steps={steps} />
        </QuizCard>
      ),
    },
  ];
  return (
    <Tabs value="quiz-list">
      <TabsHeader placeholder={""}>
        {data.map(({ label, value, icon }) => (
          <Tab placeholder={""} key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={""}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}