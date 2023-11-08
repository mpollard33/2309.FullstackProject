import { createSlice } from "@reduxjs/toolkit";
import StudentList from "../client/components/studentList";

const studentSlice = createSlice({
  name: "student",
  initialState: mockData,
  reducers: {
    addStudent: (state, { payload }) => {
      return state.concat([{ student: payload }]);
    },
  },
});

export const { addStudent } = studentSlice.actions;

export default studentSlice.reducer;
