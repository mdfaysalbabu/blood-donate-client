// import { Donor } from "@/types";
// import { IMeta } from "@/types/common";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

export const donorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // createDoctor: build.mutation({
    //   query: (data) => ({
    //     url: "/user/create-doctor",
    //     method: "POST",
    //     contentType: "multipart/form-data",
    //     data,
    //   }),
    //   invalidatesTags: [tagTypes.doctor],
    // }),

    getAllDonors: build.query({
      query: () => ({
        url: "/donor-list",
        method: "GET",
      }),
      providesTags: [tagTypes.donors],
    }),

    // getAllDonors: build.query({
    //   query: (arg: Record<string, any>) => ({
    //     url: "/donor-list",
    //     method: "GET",
    //     params: arg,
    //   }),
    //   transformResponse: (response: Donor[], meta: IMeta) => {
    //     return {
    //       donors: response,
    //       meta,
    //     };
    //   },
    //   providesTags: [tagTypes.donors],
  }),

  // deleteDoctor: build.mutation({
  //   query: (id) => ({
  //     url: `/doctor/soft/${id}`,
  //     method: "DELETE",
  //   }),
  //   invalidatesTags: [tagTypes.doctor],
  // }),
  //get single doctor
  // getDoctor: build.query({
  //   query: (id: string | string[] | undefined) => ({
  //     url: `/doctor/${id}`,
  //     method: "GET",
  //   }),
  //   providesTags: [tagTypes.doctor],
  // }),
  // update a doctor
  // updateDoctor: build.mutation({
  //   query: (data) => {
  //     // console.log(data);
  //     return {
  //       url: `/doctor/${data.id}`,
  //       method: "PATCH",
  //       data: data.body,
  //     };
  //   },
  //   invalidatesTags: [tagTypes.doctor, tagTypes.user],
  // }),
});

export const { useGetAllDonorsQuery } = donorsApi;
