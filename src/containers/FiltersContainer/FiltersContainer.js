import { useSelector, useDispatch } from "react-redux";
import React, { useCallback } from 'react';

import Filters from '../../components/Filters/Filters.js';

import { actionsCatalog } from '../../store/actions/actionsCatalog.js';
import initialState from '../../store/initialStates/initialState.js';

const FiltersContainer = () => {
  const allFilters = initialState.catalog;
  const filters = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  // изменение фильтов по типу гитары
  const setTypesGuitarsHandler = useCallback((newFilters) => {
    dispatch(actionsCatalog.changeFiltersType(newFilters));
  }, [filters.type]);

  // изменение фильтов по колличеству струн
  const setStringsGuitarsHandler = useCallback((newFilters) => {
    dispatch(actionsCatalog.changeFiltersStrings(newFilters));
  }, [filters.strings]);

  // изменение фильтов по цене
  const setPriceGuitarsHandler = useCallback((newFilters) => {
    dispatch(actionsCatalog.changeFiltersPrice(newFilters));
  }, [filters.price]);

  return (
    <Filters
      onSetTypesGuitars={setTypesGuitarsHandler}
      onSetStringsGuitars={setStringsGuitarsHandler}
      onSetPriceGuitars={setPriceGuitarsHandler}
      allFilters={allFilters}
      cards={filters.cards}
  />
  )
};

export default FiltersContainer;
