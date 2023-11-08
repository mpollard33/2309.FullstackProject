import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "students",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => {
    getStudents: builder.query({
      query: () => "/students",
    });
  },
});

export const { useGetStudentsQuery } = studentsApi;
