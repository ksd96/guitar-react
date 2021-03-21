import classNames from 'classnames/bind';
import { useSelector, useDispatch } from "react-redux";
import React, { useCallback } from 'react';

import Sorting from '../../components/Sorting/Sorting.js';

import { actionsCatalog } from '../../store/actions/actionsCatalog.js';

const SortingContainer = () => {
  const filters = useSelector((state) => state.catalog);
  const dispatch = useDispatch();
  // сортировка от меньшего к большему или наоборот
  const sortTypeHandler = useCallback((type) => {
    dispatch(actionsCatalog.changeTypeSort(`${type}`));
  }, [dispatch]);

  // сортировака по цене или популярности
  const sortActiveHandler = useCallback((type) => {
    dispatch(actionsCatalog.changeActiveSort(`${type}`));
  }, [dispatch]);

  // получить классы для элементов сортировки
  const addClassActive = useCallback((value) => {
    const classButton = classNames({
      "sort__button-type": true,
      "sort__button-type_type_price": `${value}` === `price`,
      "sort__button-type_type_popularity": `${value}` === `popularity`,
      "sort__button-type_active": filters.sortActive === `${value}` && filters.sortState === true
    });
    return classButton;
  }, [filters]);

  const addClassType = useCallback((value) => {
    const classButton = classNames({
      "sort__button": true,
      "sort__button_type_min": `${value}` === `min`,
      "sort__button_type_max": `${value}` === `max`,
      "sort__button_active": filters.sortType === `${value}` && filters.sortState === true
    });
    return classButton;
  }, [filters]);

  return (
    <Sorting
      onSortActive={sortActiveHandler}
      onSortType={sortTypeHandler}
      filters={filters}
      addClassActive={addClassActive}
      addClassType={addClassType}
    />
  );
};

export default SortingContainer;
