import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import React from "react";
import { useGetAllQuizByModuleIdQuery } from "../redux/features/quiz/quizApi";

export function QuizModal({ moduleId }: string) {
  const { data: quizes, isLoading } = useGetAllQuizByModuleIdQuery(moduleId);
  console.log(quizes, isLoading);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  if (isLoading) return <p>loading...</p>;

  return (
    <>
      <Button
        size={"sm"}
        placeholder={""}
        onClick={handleOpen}
        variant="gradient"
      >
        Start quiz
      </Button>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <DialogBody placeholder={""}>
          {quizes?.data.map((quiz: any) => (
            <div className="flex justify-between">
              <p>{quiz.question}</p>
              <p>{quiz.description}</p>
            </div>
          ))}
        </DialogBody>
      </Dialog>
    </>
  );
}
