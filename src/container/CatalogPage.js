import React, { useState, useReducer, useEffect, useMemo } from 'react';
import getFilteredCards from '../data/utils/getFilteredCards.js';
import getInitialFilters from '../data/utils/getInitialFilters.js';

import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import CardsList from '../components/CardsList/CardsList.js';
import ButtonPage from '../components/ButtonPage/ButtonPage.js';
import Sorting from '../components/Sorting/Sorting.js';
import Filters from '../components/Filters/Filters.js';

import './styles/main/main.scss';
import './styles/cards/cards.scss';
import './styles/pages/pages.scss';

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
      }
    default:
      throw new Error();
  }
}

const CatalogPage = (props) => {
  const [cards, setCards] = useState(props.store);
  const allFilters = getInitialFilters(cards);
  const [filters, dispatch] = useReducer(reducer, allFilters);

  const getCardsToRender = useMemo(() => {
    return getFilteredCards(filters, cards);
  }, [filters, cards]);

  const getPageCards = getCardsToRender.slice((9 * filters.pageNumber) - 9, 9 * filters.pageNumber);

  const nextPage = () => {
    if(filters.pageNumber < (getCardsToRender.length / 9)) {
      dispatch({type: `CHANGE_PAGE`, payload: filters.pageNumber + 1});
    };
  };

  console.log(filters);

  return (
    <div className="content">
      <Header />
      <main className="main">
        <div className="main__wrapper">
          <Filters filters={allFilters} />
          <div className="main__wrapper-right">
            <Sorting dispatch={dispatch} filters={filters} />
            <CardsList guitars={getPageCards} />
          </div>
        </div>
        <section className="pages">
          <ul className="pages__list">
            {
              allFilters.allPages.map((page) => {
                return (<ButtonPage dispatch={dispatch} key={page} page={page} activePage={filters.pageNumber} />)
              })
            }
          </ul>
          <button onClick={nextPage} className="pages__button-next" type="button">Далее</button>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CatalogPage;
