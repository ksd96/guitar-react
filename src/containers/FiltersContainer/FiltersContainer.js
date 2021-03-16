import { useSelector, useDispatch } from "react-redux";
import { actionsCatalog } from '../../store/actions/actionsCatalog.js';
import React, { useCallback } from 'react';
import initialState from '../../store/initialStates/initialState.js';
import Filters from '../../components/Filters/Filters.js';

const FiltersContainer = () => {
  const allFilters = initialState.catalog;
  const filters = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  // изменение фильтов по типу гитары
  const setTypesGuitars = useCallback((newFilters) => {
    dispatch(actionsCatalog.changeFiltersType(newFilters));
  }, [filters.type]);

  // изменение фильтов по колличеству струн
  const setStringsGuitars = useCallback((newFilters) => {
    dispatch(actionsCatalog.changeFiltersStrings(newFilters));
  }, [filters.strings]);

  // изменение фильтов по цене
  const setPriceGuitars = useCallback((newFilters) => {
    dispatch(actionsCatalog.changeFiltersPrice(newFilters));
  }, [filters.price]);

  return (
    <Filters
      setTypesGuitars={setTypesGuitars}
      setStringsGuitars={setStringsGuitars}
      setPriceGuitars={setPriceGuitars}
      allFilters={allFilters}
      filters={filters}
      cards={filters.cards}
  />
  )
};

export default FiltersContainer;
