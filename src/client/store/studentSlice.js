import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "students",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/students",
      providesTags: ["Students"],
    }),
    createStudent: builder.mutation({
      query: (newStudent) => ({
        url: `/students`,
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["Students"],
    }),
    updateStudent: builder.mutation({
      query: ({ studentId, updatedData }) => ({
        url: `/students/${studentId}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Students"],
    }),
    deleteStudent: builder.mutation({
      query: (studentId) => ({
        url: `/students/${studentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentsApi;

export const useAddStudentMutation = studentsApi.useCreateStudentMutation;
