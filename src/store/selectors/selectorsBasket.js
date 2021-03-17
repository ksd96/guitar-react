// добавить гитару в корзину
const addGuitar = (guitars, article) => {
  const newBasket = {
    cards: guitars.cards,
    count: guitars.count,
  };
  const newCard = {};
  if (newBasket.cards[article]) {
    newBasket.cards[article].count++;
  } else {
    newCard.count = 1;
    newCard.article = article;
    newBasket.cards[article] = newCard;
  }
  newBasket.count = getNumberGuitars(newBasket.cards);
  return newBasket;
}

// удалить гитару из корзины
const deleteGuitar = (article, all, guitars) => {
  const newBasket = {
    cards: guitars.cards,
    count: guitars.count,
  };
  if (all === true) {
    delete newBasket.cards[article];
  } else if (all === false && newBasket.cards[article].count >= 2) {
    newBasket.cards[article].count--;
  } else {
    delete newBasket.cards[article];
  }
  newBasket.count = getNumberGuitars(newBasket.cards);
  return newBasket;
}

// получить количество гитар
const getNumberGuitars = (guitars) => {
  let quantity = null;
  Object.values(guitars).forEach((item) => {
    quantity = quantity + item.count;
  });
  return quantity;
}

export { addGuitar, deleteGuitar };
