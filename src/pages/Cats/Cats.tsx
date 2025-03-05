import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getCats } from "../../store/services/getCats/getCats";
import { setLimit } from "../../store/slices/mainSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import styles from "./Cats.module.scss";

export const Cats = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cats = useAppSelector((state) => state.main.cats);
  const loading = useAppSelector((state) => state.main.loading);
  const error = useAppSelector((state) => state.main.error);
  const page = useAppSelector((state) => state.main.page);

  const [pathname] = useSearchParams();

  const limit = Number(pathname.get("limit") ?? 10);
  const pageQuery = Number(pathname.get("page") ?? 1);
  const category_ids = pathname.get("category_ids");

  const handleLoadMore = () => {
    const newLimit = limit + 10;

    let url = `?limit=${newLimit}&page=${pageQuery}`;

    if (category_ids) {
      url += `&category_ids=${category_ids}`;
    }

    dispatch(setLimit());
    navigate(url);
  };

  useEffect(() => {
    dispatch(getCats({ limit, category_ids, page: pageQuery }));
  }, [limit, page, category_ids]);

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.images_wrapper}>
        {cats.map((el, index) => {
          return (
            <div key={index} className={styles.images_wrapper__item}>
              <img
                src={el.url}
                width={el.width}
                height={el.height}
                className={styles.images_wrapper__image}
              />
            </div>
          );
        })}
      </div>
      {loading ? <h1>Loading...</h1> : null}
      {error ? <h1>{error}</h1> : null}

      {cats.length ? (
        <div className={styles.btnWrapper}>
          <button className={styles.loadMore} onClick={handleLoadMore}>
            Load more images
          </button>
        </div>
      ) : null}
    </div>
  );
};
