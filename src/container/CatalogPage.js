import React, { useState, useReducer, useEffect } from 'react';

import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import CardsList from '../components/CardsList/CardsList.js';
import ButtonPage from '../components/ButtonPage/ButtonPage.js';
import Sorting from '../components/Sorting/Sorting.js';

import './styles/main/main.scss';
import './styles/cards/cards.scss';
import './styles/pages/pages.scss';
import Store from '../store/store.js';

let initialState = {
  filters: {
    type: null,
    strings: null,
    price: {
      min: null,
      max: null
    }
  },
  sort: {
    price: `min`,
    popularity: `min`
  },
  cards: [],
  pageCards: [],
  page: 1
}

const reducer = (state, action) => {
  // сортирует по цене
  const getSortPrice = () => {
    const guitars = state.cards;
    if (state.sort.price === `min`) {
      guitars.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (state.sort.price === `max`) {
      guitars.sort((a, b) => {
        return b.price - a.price;
      });
    }
    return guitars;
  }

  // сортирует по популярности
  const getSortPopularity = () => {
    const guitars = state.cards;
    if (state.sort.popularity === `min`) {
      guitars.sort((a, b) => {
        return a.popularity - b.popularity;
      });
    } else if (state.sort.popularity === `max`) {
      guitars.sort((a, b) => {
        return b.popularity - a.popularity;
      });
    }
    return guitars;
  }

  switch (action.type) {
    case 'init':
      return {
        ...state,
        filters: action.filters,
        cards: action.cards,
        pageCards: action.cards.slice(((9 * state.page) - 9), (9 * state.page))
      }
    case 'setPageCards':
      return {
        ...state,
        page: action.pageNumber,
        pageCards: state.cards.slice(((9 * action.pageNumber) - 9), (9 * action.pageNumber))
      }
    case 'nextPage':
      const nextPage = state.page + 1;
      if (nextPage <= ((state.cards.length)/9)) {
        return {
          ...state,
          page: nextPage,
          pageCards: state.cards.slice(((9 * nextPage) - 9), (9 * nextPage))
        }
      } else {
        return state
      }
    case 'sortPrice':
      let sortedCardsByPrice = getSortPrice();
      return {
        ...state,
        cards: sortedCardsByPrice,
        pageCards: sortedCardsByPrice.slice(0, 9),
        page: 1
      }
    case 'sortPopularity':
      let sortedCardsByPopularity = getSortPopularity();
      return {
        ...state,
        cards: sortedCardsByPopularity,
        pageCards: sortedCardsByPopularity.slice(0, 9),
        page: 1
      }
    default:
      throw new Error();
  }
}

const data = require('../data/data.json');
const api = new Store(data.guitars);

const CatalogPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: `init`, cards: api.getGuitars(), filters: api.getFiltersValue()});
  }, []);

  const pageNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= ((state.cards.length)/9); i++) {
      numbers.push(i);
    };
    return numbers;
  }

console.log(state);

  return (
    <div className="content">
      <Header />
      <main className="main">
        <div className="main__wrapper">
          <div className="main__wrapper-right">
            <Sorting
              onSortPrice={() => {dispatch({type: `sortPrice`})}}
              onSortPopularity={() => {dispatch({type: `sortPopularity`})}}
            />
            <CardsList guitars={state.pageCards} />
          </div>
        </div>
        <section className="pages">
          <ul className="pages__list">
            {
              pageNumbers().map((number) => {
                return (
                  <ButtonPage key={number} onClick={() => dispatch({type: `setPageCards`, pageNumber: number})} page={number} />
                )
              })
            }
          </ul>
          <button onClick={() => dispatch({type: `nextPage`})} className="pages__button-next" type="button">Далее</button>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CatalogPage;
