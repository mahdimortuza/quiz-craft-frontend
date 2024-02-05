import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import stepperReducer from "./features//stepper/stepperSlice";
import moduleSlice from "./features/module/moduleSlice";
import quizReducer from "./features/quiz/quizSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    quiz: quizReducer,
    stepper: stepperReducer,
    module: moduleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
