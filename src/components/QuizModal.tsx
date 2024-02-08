import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useGetAllQuizByModuleIdQuery } from "../redux/features/quiz/quizApi";
import { setCurrentQuestionIndex } from "../redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export function QuizModal({ moduleId }: string) {
  const dispatch = useAppDispatch();
  const { currentQuestionIndex } = useAppSelector((state) => state.quiz);
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
          {quizes?.data.map(
            (quiz: any, index: number) =>
              currentQuestionIndex === index && (
                <div className="">
                  <Typography placeholder={""} variant="h5">
                    {quiz.question}
                  </Typography>
                </div>
              )
          )}

          <div className="grid grid-cols-2 gap-4 mt-4">
            {quizes?.data[currentQuestionIndex]?.options.map((option: any) => (
              <Button
                placeholder={""}
                size="sm"
                variant={
                  (quizes?.data[currentQuestionIndex]?.currentOption ===
                    option &&
                    "filled") ||
                  "outlined"
                }
                color={
                  (quizes?.data[currentQuestionIndex]?.correctOption ===
                    option &&
                    "green") ||
                  "gray"
                }
              >
                {option}
              </Button>
            ))}
          </div>
        </DialogBody>
        <DialogFooter placeholder={""}>
          <div className="flex justify-end space-x-4">
            {currentQuestionIndex > 0 && (
              <Button
                onClick={() => {
                  dispatch(setCurrentQuestionIndex(currentQuestionIndex - 1));
                }}
                size={"sm"}
                placeholder={""}
                variant="gradient"
              >
                Previous
              </Button>
            )}

            {(currentQuestionIndex < quizes.data.length - 1 && (
              <Button
                onClick={() => {
                  dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
                }}
                placeholder={""}
                size={"sm"}
                variant="gradient"
              >
                {" "}
                Next
              </Button>
            )) || (
              <Button placeholder={""} size={"sm"} variant="gradient">
                {" "}
                Submit
              </Button>
            )}
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
