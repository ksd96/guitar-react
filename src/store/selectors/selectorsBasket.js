// добавить гитару в корзину
const addGuitar = (guitars, article) => {
  const newBasket = {
    cards: guitars.cards,
    count: guitars.count + 1,
  };
  const newCard = {};
  if (newBasket.cards[article]) {
    newBasket.cards[article].count++;
  } else {
    newCard.count = 1;
    newBasket.cards[article] = newCard;
  }
  return newBasket;
}

// удалить гитару из корзины
const deleteGuitar = (article, all, guitars) => {
  const cards = guitars;
  if (all === true) {
    delete cards[article];
  } else if (all === false && cards[article].count >= 2) {
    cards[article].count--;
  } else {
    delete cards[article];
  }
  return cards;
}

export { addGuitar, deleteGuitar };
