import initialState from '../initialStates/initialState.js';
import { actionsBasketTypes } from '../actions/actionsBasket.js';

const reducerBasket = (state = initialState.basket, action) => {
  switch (action.type) {
    case actionsBasketTypes.CHANGE_CARDS:
      return {
        ...state,
        cards: action.payload.cards,
        count: action.payload.count
      };
    default:
      return state;
  }
};

export default reducerBasket;
