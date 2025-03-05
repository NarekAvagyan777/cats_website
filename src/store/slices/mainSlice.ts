import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCategories } from "../services/getCategories/getCategories";
import { CategoryType, CatType } from "../../types";
import { getCats } from "../services/getCats/getCats";

type InitialStateType = {
  loading: boolean;
  categories: Array<CategoryType>;
  cats: Array<CatType>;
  limit: number;
  page: number;
  category_ids?: number;
  error: string | null;
};

const initialState: InitialStateType = {
  loading: false,
  categories: [],
  cats: [],
  limit: 10,
  page: 1,
  category_ids: undefined,
  error: null,
};

const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setLimit: (state) => {
      state.limit += 10;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    addCase(getCategories.rejected, (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload;
    });
    addCase(
      getCategories.fulfilled,
      (state, { payload }: PayloadAction<Array<CategoryType>>) => {
        state.categories = payload;
        state.loading = false;
      }
    );
    addCase(getCats.pending, (state) => {
      state.loading = true;
    });
    addCase(getCats.rejected, (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state.error = payload;
    });
    addCase(getCats.fulfilled, (state, { payload }) => {
      state.loading = false;

      if (state.cats.length > 0) {
        const spliced = payload.splice(-10);
        state.cats.push(...spliced);
      } else {
        state.cats = payload;
      }
    });
  },
});

export const { reducer: mainReducer } = mainSlice;

export const { setPage, setLimit } = mainSlice.actions;
