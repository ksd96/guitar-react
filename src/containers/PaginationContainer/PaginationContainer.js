import { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Pages from '../../components/Pages/Pages.js';

import { actionsCatalog } from '../../store/actions/actionsCatalog.js';
import { getAllPages, getFilteredCards } from '../../store/selectors/selectorsCatalog.js';

const PaginationContainer = () => {
  const filters = useSelector((state) => state.catalog);
  const allPages = useSelector((state) => getAllPages(getFilteredCards(state.catalog, state.catalog.cards)));
  const catalogCards = useSelector((state) => getFilteredCards(state.catalog, state.catalog.cards));
  const dispatch = useDispatch();

  // получить следующую страницу
  const getNextPage = useCallback(() => {
    if(filters.pageNumber < (catalogCards.length / 9)) {
      dispatch(actionsCatalog.changePage(filters.pageNumber + 1));
    };
  }, [filters.pageNumber]);

  // получить определенную страницу
  const getPage = useCallback((pageNumber) => {
    dispatch(actionsCatalog.changePage(pageNumber));
  }, [filters.pageNumber]);

  let pageButtons;
  if (allPages.length > 1) {
    pageButtons = <Pages
      getNextPage={getNextPage}
      pages={allPages}
      activePage={filters.pageNumber}
      getPage={getPage}
    />
  } else {
    pageButtons = null;
  }

  return (
    pageButtons
  )
};

export default PaginationContainer;
