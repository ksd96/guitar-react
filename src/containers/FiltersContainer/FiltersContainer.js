import { useSelector, useDispatch } from "react-redux";
import React, { useCallback } from 'react';

import Filters from '../../components/Filters/Filters.js';

import { actionsCatalog } from '../../store/actions/actionsCatalog.js';
import { getInitialFilters } from '../../store/dataUtils/utilsCatalog.js';

const FiltersContainer = () => {
  const filters = useSelector((state) => state.catalog);
  const allFilters = getInitialFilters(filters.allCards);
  const dispatch = useDispatch();

  // изменение фильтов по типу гитары
  const setTypesGuitarsHandler = useCallback((newFilters) => {
    dispatch(actionsCatalog.changeFiltersType(newFilters));
  }, [dispatch]);

  // изменение фильтов по колличеству струн
  const setStringsGuitarsHandler = useCallback((newFilters) => {
    dispatch(actionsCatalog.changeFiltersStrings(newFilters));
  }, [dispatch]);

  // изменение фильтов по цене
  const setPriceGuitarsHandler = useCallback((newFilters) => {
    dispatch(actionsCatalog.changeFiltersPrice(newFilters));
  }, [dispatch]);

  return (
    <Filters
      onSetTypesGuitars={setTypesGuitarsHandler}
      onSetStringsGuitars={setStringsGuitarsHandler}
      onSetPriceGuitars={setPriceGuitarsHandler}
      allFilters={allFilters}
      cards={filters.cards}
    />
  );
};

export default FiltersContainer;
