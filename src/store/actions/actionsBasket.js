const actionsBasketTypes = {
  CHANGE_CARDS: `CHANGE_CARDS_BASKET`,
};

const actionsBasket = {
  changeCards: (payload) => ({type: actionsBasketTypes.CHANGE_CARDS, payload})
};

export { actionsBasketTypes, actionsBasket };
