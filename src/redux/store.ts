import { configureStore } from "@reduxjs/toolkit";
import stepperReducer from "./features//stepper/stepperSlice";
import quizReducer from "./features/quiz/quizSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    stepper: stepperReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
