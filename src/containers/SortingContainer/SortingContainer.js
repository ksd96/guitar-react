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
  }, [filters.sortType]);

  // сортировака по цене или популярности
  const sortActiveHandler = useCallback((type) => {
    dispatch(actionsCatalog.changeActiveSort(`${type}`));
  }, [filters.sortActive]);

  // получить классы для элементов сортировки
  const addClassActive = useCallback((value) => {
    const classButton = classNames({
      "sort__button-type": true,
      "sort__button-type_type_price": `price` === `${value}`,
      "sort__button-type_type_popularity": `popularity` === `${value}`,
      "sort__button-type_active": filters.sortActive === `${value}` && filters.sortState === true
    });
    return classButton;
  }, [filters]);

  const addClassType = useCallback((value) => {
    const classButton = classNames({
      "sort__button": true,
      "sort__button_type_min": `min` === `${value}`,
      "sort__button_type_max": `max` === `${value}`,
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
  )
};

export default SortingContainer;
