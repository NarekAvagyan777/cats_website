import { $api } from "../../../axiosInstance/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryType } from "../../../types";

export const getCategories = createAsyncThunk(
  "api/categories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await $api.get<Array<CategoryType>>(`/categories`);
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
