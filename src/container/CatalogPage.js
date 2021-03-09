import React, { useState, useReducer, useEffect, useMemo } from 'react';
import {getAllPages, getFilteredCards, getInitialFilters} from '../data/utils/utils.js';

import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import CardsList from '../components/CardsList/CardsList.js';
import Pages from '../components/Pages/Pages.js';
import Sorting from '../components/Sorting/Sorting.js';
import Filters from '../components/Filters/Filters.js';
import reducer from '../reducer/reducer.js';

import './styles/main/main.scss';
import './styles/cards/cards.scss';
import './styles/pages/pages.scss';

const CatalogPage = (props) => {
  const [cards, setCards] = useState(props.store);
  const allFilters = getInitialFilters(cards);
  const [filters, dispatch] = useReducer(reducer, allFilters);

  const getCardsToRender = useMemo(() => {
    return getFilteredCards(filters, cards);
  }, [filters, cards]);

  const getPageCards = getCardsToRender.slice((9 * filters.pageNumber) - 9, 9 * filters.pageNumber);

  let pageButtons;
  if (getAllPages(getCardsToRender).length > 1) {
    pageButtons = <Pages filters={filters} getCardsToRender={getCardsToRender} dispatch={dispatch} pages={getAllPages(getCardsToRender)} />
  } else {
    pageButtons = null;
  }

  return (
    <div className="content">
      <Header />
      <main className="main">
        <div className="main__title-wrapper">
          <h1 className="main__title">Каталог гитар</h1>
          <ul className="main__links-list">
            <li className="main__links-item">
              <a href="#" className="main__link">Главная</a>
            </li>
            <li className="main__links-item">
              <a className="main__link">Каталог</a>
            </li>
          </ul>
        </div>
        <div className="main__wrapper">
          <Filters dispatch={dispatch} allFilters={allFilters} filters={filters} cards={cards} />
          <div className="main__wrapper-right">
            <Sorting dispatch={dispatch} filters={filters} />
            <CardsList guitars={getPageCards} />
          </div>
        </div>
        {pageButtons}
      </main>
      <Footer />
    </div>
  )
}

export default CatalogPage;
