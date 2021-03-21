const actionsCatalogTypes = {
  CHANGE_ACTIVE_SORT: `CHANGE_ACTIVE_SORT`,
  CHANGE_TYPE_SORT: `CHANGE_TYPE_SORT`,
  CHANGE_PAGE: `CHANGE_PAGE`,
  CHANGE_FILTERS_TYPE: `CHANGE_FILTERS_TYPE`,
  CHANGE_FILTERS_STRINGS: `CHANGE_FILTERS_STRINGS`,
  CHANGE_FILTERS_PRICE: `CHANGE_FILTERS_PRICE`,
  CHANGE_CARDS: `CHANGE_CARDS`,
  GET_INITIAL_FILTERS: `GET_INITIAL_FILTERS`
};

const actionsCatalog = {
  changeActiveSort: (payload) => ({type: actionsCatalogTypes.CHANGE_ACTIVE_SORT, payload}),
  changeTypeSort: (payload) => ({type: actionsCatalogTypes.CHANGE_TYPE_SORT, payload}),
  changePage: (payload) => ({type: actionsCatalogTypes.CHANGE_PAGE, payload}),
  changeFiltersType: (payload) => ({type: actionsCatalogTypes.CHANGE_FILTERS_TYPE, payload}),
  changeFiltersStrings: (payload) => ({type: actionsCatalogTypes.CHANGE_FILTERS_STRINGS, payload}),
  changeFiltersPrice: (payload) => ({type: actionsCatalogTypes.CHANGE_FILTERS_PRICE, payload}),
  changeCards: (payload) => ({type: actionsCatalogTypes.CHANGE_CARDS, payload}),
  getInitialFilters: (payload) => ({type: actionsCatalogTypes.GET_INITIAL_FILTERS, payload})
};

export { actionsCatalogTypes, actionsCatalog };
