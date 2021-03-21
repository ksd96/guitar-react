import { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Pages from '../../components/Pages/Pages.js';

import { actionsCatalog } from '../../store/actions/actionsCatalog.js';
import { getAllPages, getFilteredCards } from '../../store/dataUtils/utilsCatalog.js';

const PaginationContainer = () => {
  const filters = useSelector((state) => state.catalog);
  const allPages = useSelector((state) => getAllPages(getFilteredCards(state.catalog, state.catalog.cards)));
  const catalogCards = useSelector((state) => getFilteredCards(state.catalog, state.catalog.cards));
  const dispatch = useDispatch();

  // получить следующую страницу
  const getNextPageHandler = useCallback(() => {
    if (filters.pageNumber < (catalogCards.length / 9)) {
      dispatch(actionsCatalog.changePage(filters.pageNumber + 1));
    }
  }, [filters.pageNumber, catalogCards.length, dispatch]);

  // получить определенную страницу
  const getPageHandler = useCallback((pageNumber) => {
    dispatch(actionsCatalog.changePage(pageNumber));
  }, [dispatch]);

  let pageButtons;
  if (allPages.length > 1) {
    pageButtons = <Pages
      onGetNextPage={getNextPageHandler}
      pages={allPages}
      activePage={filters.pageNumber}
      onGetPage={getPageHandler}
    />;
  } else {
    pageButtons = null;
  }

  return (
    pageButtons
  );
};

export default PaginationContainer;
