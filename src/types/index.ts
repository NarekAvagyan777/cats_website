export type CategoryType = {
  id: number;
  name: string;
};

export type CatType = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type getCatsBodyType = {
  limit?: number;
  page?: number;
  category_ids: string | null;
};