// получить содержимое корзины
const getCardsBasket = () => {
  const cardsBasket = JSON.parse(localStorage.getItem('guitarsBasket'));
  return cardsBasket.data;
};

// обновить содержимое корзины
const setCardsBasket = (guitars) => {
  const dataBasket = JSON.parse(localStorage.getItem(`guitarsBasket`));
  dataBasket.data = guitars;
  localStorage.setItem(`guitarsBasket`, JSON.stringify(dataBasket));
};

// получить количество гитар
const getNumberGuitars = (guitars) => {
  let quantity = null;
  Object.values(guitars).forEach((item) => {
    quantity = quantity + item.count;
  });
  return quantity;
}

// получить полную стоимость
const getAllPrice = (cards) => {
  let allPrice = 0;
  Object.values(cards).forEach((card) => {
    allPrice = allPrice + (card.price * card.count);
  });
  return allPrice;
}

// добавить гитару в корзину
const addGuitar = (guitars, guitar) => {
  const cards = guitars;
  if (cards[guitar.article]) {
    cards[guitar.article].count++;
  } else {
    guitar.count = 1;
    cards[guitar.article] = guitar;
  }
  return cards;
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

export { addGuitar, getCardsBasket, deleteGuitar, setCardsBasket, getNumberGuitars, getAllPrice };
