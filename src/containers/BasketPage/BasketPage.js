import Ordering from '../../components/Ordering/Ordering.js';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.js';
import BasketCard from '../../components/BasketCard/BasketCard.js';
import ModalsContainer from '../../components/ModalsContainer/ModalsContainer.js';

import React, { useReducer, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { addGuitar, getCardsBasket, deleteGuitar, setCardsBasket, getAllPrice } from '../../data/utils/utils-basket.js';
import { initStateBasket, reducerBasket } from '../../reducers/reducesBasket.js';

import './styles/basket/basket.scss';

if (localStorage.getItem(`guitarsBasket`) === null) {
  localStorage.setItem(`guitarsBasket`, JSON.stringify({data: {}}));
}

const BasketPage = ({setCountGuitars}) => {
  const [state, dispatch] = useReducer(reducerBasket, initStateBasket);

  useEffect(() => {
      const action = {
        type: `CHANGE_CARDS`,
        payload: {
          cards: getCardsBasket(),
          price: getAllPrice(getCardsBasket())
        }
      };
      dispatch(action);
  }, []);

  const addCard = useCallback((newCard) => {
    const newCards = addGuitar(state.cards, newCard);
    const action = {
      type: `CHANGE_CARDS`,
      payload: {
        cards: newCards,
        price: getAllPrice(newCards)
      }
    };
    setCountGuitars(state.cards);
    dispatch(action);
    setCardsBasket(newCards);
  }, [state.cards]);

  const deleteCard = useCallback((card, type) => {
    if (type === false && card.count === 1) {
      openPopupDelete(card);
    } else {
      const newCards = deleteGuitar(card.article, type, state.cards);
      const action = {
        type: `CHANGE_CARDS`,
        payload: {
          cards: newCards,
          price: getAllPrice(newCards)
        }
      };
      setCountGuitars(state.cards);
      dispatch(action);
      setCardsBasket(newCards);
    }
  }, [state.cards]);

  // модальное окно -----------------------------------------------------------------------------------------------

  const [modals, setModals] = useState({
    active: false,
    type: null,
    data: null
  });

  const closePopup = useCallback(() => {
    setModals({
      active: false,
      type: null,
      data: modals.data
    })
  }, [modals.data]);

  const openPopupDelete = useCallback((card) => {
    setModals({
      active: true,
      type: `deleteCard`,
      data: card
    })
  }, [modals.data]);

  const openPopupCode = useCallback((text) => {
    setModals({
      active: true,
      type: `promo`,
      data: `${text}`
    })
  }, [modals.data]);

  return (
    <main className="main main_basket">
      <BreadCrumbs title={`Корзина`} items={[{name: `Главная`, link: `#`}, {name: `Каталог`, link: `/`}]} active={`Оформляем`} />
      <div className="main__wrapper">
        <section className="basket">
          <ul className="basket__list">
            {
              state.cards && Object.values(state.cards).map((card) => {
                return (
                  <BasketCard openPopupDelete={() => openPopupDelete(card)} addCard={addCard} deleteCard={deleteCard} key={card.article} card={card} />
                )
              })
            }
          </ul>
          <Ordering openPopupCode={openPopupCode} allPrice={state.allPrice} />
        </section>
      </div>
      <ModalsContainer
        status={modals.active}
        data={modals.data}
        type={modals.type}
        closePopup={closePopup}
        deleteCard={deleteCard}
      />
    </main>
  )
};

BasketPage.propTypes = {
  setCountGuitars: PropTypes.func
}

export default BasketPage;
