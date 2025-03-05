import { $api } from "../../../axiosInstance/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CatType, getCatsBodyType } from "../../../types";

export const getCats = createAsyncThunk(
  "api/cats",
  async (
    { limit = 10, page = 1, category_ids }: getCatsBodyType,
    { rejectWithValue }
  ) => {
    let url = `/images/search?limit=${limit}&page=${page}`;

    if (category_ids) {
      url += `&category_ids=${category_ids}`;
    }

    try {
      const response = await $api.get<Array<CatType>>(url);

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
