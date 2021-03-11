const reducerCatalog = (state, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_SORT':
      return {
        ...state,
        sortActive: action.payload,
        sortState: true,
        pageNumber: 1
      };
    case 'CHANGE_TYPE_SORT':
      return {
        ...state,
        sortType: action.payload,
        sortState: true,
        pageNumber: 1
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        pageNumber: action.payload
      };
    case 'CHANGE_FILTERS_TYPE':
      return {
        ...state,
        type: action.payload,
        pageNumber: 1
      };
    case 'CHANGE_FILTERS_STRINGS':
      return {
        ...state,
        strings: action.payload,
        pageNumber: 1
      };
    case 'CHANGE_FILTERS_PRICE':
      return {
        ...state,
        price: {
          min: action.payload.min,
          max: action.payload.max
        },
        pageNumber: 1
      };
    case 'CHANGE_CARDS':
      return {
        ...state,
        cards: action.payload
      }
    default:
      throw new Error();
  }
}

export default reducerCatalog;
