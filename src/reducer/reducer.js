const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_SORT':
      return {
        ...state,
        sortActive: action.payload,
        pageNumber: 1
      };
    case 'CHANGE_TYPE_SORT':
      return {
        ...state,
        sortType: action.payload,
        sortActive: state.sortActive ? `${state.sortActive}` : `price`,
        pageNumber: 1
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        pageNumber: action.payload
      };
    case 'CHANGE_FILTERS':
      return {
        ...state,
        type: action.payload.type,
        strings: action.payload.strings,
        price: {
          min: action.payload.priceMin,
          max: action.payload.priceMax
        },
        pageNumber: 1
      };
    default:
      throw new Error();
  }
}

export default reducer;
