import { RootState } from "../store";

export const selectCats = (state: RootState) => state.main.cats;
