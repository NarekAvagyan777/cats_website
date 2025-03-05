import { RootState } from "../store";

export const selectLoading = (state: RootState) => state.main.loading;
