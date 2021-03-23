const popupTypes = {
  DELETE_CARD: `deleteCard`,
  PROMO: `promo`,
  ADD_IN_BASKET: `addInBasket`,
  GO_BASKET: `goBasket`
};

const pageTitles = {
  BASKET: `Корзина`,
  CATALOG: `Каталог гитар`
};

const activePage = {
  BASKET: `Оформляем`,
  CATALOG: `Каталог`
};

const pageLinks = {
  HOME: {name: `Главная`, link: `#`},
  CATALOG: {name: `Каталог`, link: `/`}
};

const promoErrorMessage = {
  ENTER: `Введите промокод`,
  INVALID: `Промокод недействителен`
};

export { popupTypes, pageTitles, activePage, pageLinks, promoErrorMessage };
