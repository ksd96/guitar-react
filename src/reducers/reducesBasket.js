const initStateBasket = {
  cards: {},
  allPrice: null
};

const reducerBasket = (state, action) => {
  switch (action.type) {
    case 'CHANGE_CARDS':
      return {
        ...state,
        cards: action.payload.cards,
        allPrice: action.payload.price
      };
    default:
      return state;
    }
};

export { initStateBasket, reducerBasket };
