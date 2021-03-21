import { actionsCatalogTypes } from '../actions/actionsCatalog.js';
import initialState from '../initialStates/initialState.js';

const reducerCatalog = (state = initialState.catalog, action) => {
  switch (action.type) {
    case actionsCatalogTypes.CHANGE_ACTIVE_SORT:
      return {
        ...state,
        sortActive: action.payload,
        sortState: true,
        pageNumber: 1
      };
    case actionsCatalogTypes.CHANGE_TYPE_SORT:
      return {
        ...state,
        sortType: action.payload,
        sortState: true,
        pageNumber: 1
      };
    case actionsCatalogTypes.CHANGE_PAGE:
      return {
        ...state,
        pageNumber: action.payload
      };
    case actionsCatalogTypes.CHANGE_FILTERS_TYPE:
      return {
        ...state,
        type: action.payload,
        pageNumber: 1
      };
    case actionsCatalogTypes.CHANGE_FILTERS_STRINGS:
      return {
        ...state,
        strings: action.payload,
        pageNumber: 1
      };
    case actionsCatalogTypes.CHANGE_FILTERS_PRICE:
      return {
        ...state,
        price: {
          min: action.payload.min,
          max: action.payload.max
        },
        pageNumber: 1
      };
    case actionsCatalogTypes.CHANGE_CARDS:
      return {
        ...state,
        cards: action.payload,
        allCards: action.payload
      };
    case actionsCatalogTypes.GET_INITIAL_FILTERS:
      return {
        ...state,
        status: true,
        type: action.payload.type,
        strings: action.payload.strings,
        price: action.payload.price,
        allPages: action.payload.allPages
      };
    default:
      return state;
  }
};

export default reducerCatalog;
