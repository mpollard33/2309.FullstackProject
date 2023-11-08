import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../store/studentSlice";

const store = configureStore({
  reducer: {
    task: taskReducer,
    /* reducer here for frontend */
  },
});

export default store;
