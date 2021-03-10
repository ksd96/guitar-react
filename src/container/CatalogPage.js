import React, { useState, useReducer, useEffect, useMemo, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom'
import {getAllPages, getFilteredCards, getInitialFilters} from '../data/utils/utils.js';

import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import CardsList from '../components/CardsList/CardsList.js';
import Pages from '../components/Pages/Pages.js';
import Sorting from '../components/Sorting/Sorting.js';
import Filters from '../components/Filters/Filters.js';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.js';
import Ordering from '../components/Ordering/Ordering.js';
import BasketCard from '../components/BasketCard/BasketCard.js';
import ModalsContainer from '../components/ModalsContainer/ModalsContainer.js';
import reducer from '../reducer/reducer.js';

import './styles/main/main.scss';
import './styles/cards/cards.scss';
import './styles/pages/pages.scss';
import './styles/basket/basket.scss';

const data = require('../data/data.json');

const CatalogPage = () => {
  const allFilters = getInitialFilters(data.guitars);
  const [filters, dispatch] = useReducer(reducer, allFilters);

  const cardsToRender = useMemo(() => {
    return getFilteredCards(filters, filters.cards);
  }, [filters, filters.cards]);

  // изменения карточек гитар
  const setCards = useCallback((cards) => {
    const action = {
      type: `CHANGE_CARDS`,
      payload: cards
    };
    dispatch(action);
  }, [data.guitars]);

  // получить следующую страницу
  const getNextPage = useCallback(() => {
    const action = {
      type: `CHANGE_PAGE`,
      payload: filters.pageNumber + 1
    };
    if(filters.pageNumber < (cardsToRender.length / 9)) {
      dispatch(action);
    };
  }, [filters.pageNumber]);

  // получить определенную страницу
  const getPage = useCallback((pageNumber) => {
    const action = {
      type: `CHANGE_PAGE`,
      payload: pageNumber
    };
    dispatch(action);
  }, [filters.pageNumber]);

 // сортировака по цене или популярности
  const sortActive = useCallback((type) => {
    const action = {
      type: `CHANGE_ACTIVE_SORT`,
      payload: `${type}`
    };
    dispatch(action);
  }, [filters.sortActive]);

  // сортировка от меньшего к большему или наоборот
  const sortType = useCallback((type) => {
    const action = {
      type: `CHANGE_TYPE_SORT`,
      payload: `${type}`
    };
    dispatch(action);
  }, [filters.sortType]);

  // изменение фильтов по типу гитары
  const setTypesGuitars = useCallback((newFilters) => {
    const action = {
      type: `CHANGE_FILTERS_TYPE`,
      payload: newFilters
    };
    dispatch(action);
  }, [filters.type]);

  // изменение фильтов по колличеству струн
  const setStringsGuitars = useCallback((newFilters) => {
    const action = {
      type: `CHANGE_FILTERS_STRINGS`,
      payload: newFilters
    };
    dispatch(action);
  }, [filters.strings]);

  // изменение фильтов по цене
  const setPriceGuitars = useCallback((newFilters) => {
    const action = {
      type: `CHANGE_FILTERS_PRICE`,
      payload: newFilters
    };
    dispatch(action);
  }, [filters.price]);


  const pageCards = cardsToRender.slice((9 * filters.pageNumber) - 9, 9 * filters.pageNumber);

  let pageButtons;
  if (getAllPages(cardsToRender).length > 1) {
    pageButtons = <Pages
      getNextPage={getNextPage}
      pages={getAllPages(cardsToRender)}
      activePage={filters.pageNumber}
      getPage={getPage}
    />
  } else {
    pageButtons = null;
  }

  // модальные окна ----------------------------------------------------------------------------------------------------

  const [modals, setModals] = useState({
    active: false,
    type: null,
    data: null
  });

  const [cardsBasket, setCardsBasket] = useState({cards: []});

  const openPopupAddBasket = (card) => {
    setModals({
      active: true,
      type: `addInBasket`,
      data: card
    })
  };

  const closePopupAddBasket = () => {
    setModals({
      active: false,
      type: null,
      data: modals.data
    })
  };

  const addCardInBasket = () => {
    setModals({
      active: true,
      type: `goBasket`,
      data: modals.data
    });
    const newCardsBasket = cardsBasket.cards;
    newCardsBasket.push(modals.data);
    setCardsBasket({
      cards: newCardsBasket
    });
  };

  return (
    <div className="content">
      <Header />
      <Switch>
        <Route exact path='/'>
          <main className="main">
            <BreadCrumbs title={`Каталог гитар`} />
            <div className="main__wrapper">
              <Filters
                // setFilteredGuitars={setFilteredGuitars}
                setTypesGuitars={setTypesGuitars}
                setStringsGuitars={setStringsGuitars}
                setPriceGuitars={setPriceGuitars}
                allFilters={allFilters}
                filters={filters}
                cards={filters.cards}
              />
              <div className="main__wrapper-right">
                <Sorting
                  sortActive={sortActive}
                  sortType={sortType}
                  filters={filters}
                />
                <CardsList
                  guitars={pageCards}
                  openPopupAddBasket={openPopupAddBasket}
                />
              </div>
            </div>
            {pageButtons}
          </main>
        </Route>
        <Route path='/basket'>
          <main className="main main_basket">
            <BreadCrumbs title={`Корзина`} />
            <div className="main__wrapper">
              <section className="basket">
                <ul className="basket__list">
                  {
                    cardsBasket.cards.map((card) => {
                      return (
                        <BasketCard key={card.article} card={card} />
                      )
                    })
                  }
                </ul>
                <Ordering />
              </section>
            </div>
          </main>
        </Route>
      </Switch>
      <Footer />

      <ModalsContainer
        status={modals.active}
        data={modals.data}
        type={modals.type}
        closePopup={closePopupAddBasket}
        addCardInBasket={addCardInBasket}
      />

    </div>
  )
};

export default CatalogPage;
