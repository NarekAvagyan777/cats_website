import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../store/services/getCategories/getCategories";
import { useAppDispatch, useAppSelector } from "../../store/store";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.main.categories);


  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className={styles.Sidebar}>
      <ul className={styles.items_wrapper}>
        {categories.map((el) => {
          const url = `/?limit=${10}&page=${1}&category_ids=${el.id}`;
          return (
            <li className={styles.item} key={el.id}>
              <Link to={url}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
