import { baseApi } from "../../api/baseApi";

const moduleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllModule: builder.query({
      query: () => ({
        url: "/module",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllModuleQuery } = moduleApi;
