import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";

import OrderingContainer from '../OrderingContainer/OrderingContainer.js';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.js';
import BasketCard from '../../components/BasketCard/BasketCard.js';
import ModalsContainer from '../ModalsContainer/ModalsContainer.js';

import { actionsBasket } from '../../store/actions/actionsBasket.js';
import { addGuitar, deleteGuitar } from '../../store/selectors/selectorsBasket.js';

import './styles/basket/basket.scss';

// if (localStorage.getItem(`guitarsBasket`) === null) {
//   localStorage.setItem(`guitarsBasket`, JSON.stringify({data: {}}));
// }

const BasketPage = () => {
  const state = useSelector((state) => state.basket);
  const stateCatalog = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const getCardsBasket = useCallback(() => {
    const cards = [];
    Object.values(state.cards).map((item) => {
      if (stateCatalog.cards[item.article]) {
        stateCatalog.cards[item.article].count = item.count;
        cards.push(stateCatalog.cards[item.article]);
      };
    });
    return cards;
  }, [state]);

  const addCard = useCallback((newCard) => {
    dispatch(actionsBasket.changeCards(addGuitar(state, newCard.article)));
  }, [state.cards]);

  const deleteCard = useCallback((card, type) => {
    if (type === false && card.count === 1) {
      openPopupDelete(card);
    } else {
      dispatch(actionsBasket.changeCards(deleteGuitar(card.article, type, state)));
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
      data: text
    })
  }, [modals.data]);

  return (
    <main className="main main_basket">
      <BreadCrumbs title={`Корзина`} items={[{name: `Главная`, link: `#`}, {name: `Каталог`, link: `/`}]} active={`Оформляем`} />
      <div className="main__wrapper">
        <section className="basket">
          <ul className="basket__list">
            {
              state.cards && getCardsBasket().map((card) => {
                return (
                  <BasketCard openPopupDelete={() => openPopupDelete(card)} addCard={addCard} deleteCard={deleteCard} key={card.article} card={card} />
                )
              })
            }
          </ul>
          <OrderingContainer cards={getCardsBasket()} openPopupCode={openPopupCode} />
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
};

export default BasketPage;
