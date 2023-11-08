import { configureStore } from "@reduxjs/toolkit";
import { studentsApi } from "./studentSlice";

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentsApi.middleware),
});

export default store;
