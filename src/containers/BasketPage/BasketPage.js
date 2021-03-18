import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";

import OrderingContainer from '../OrderingContainer/OrderingContainer.js';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.js';
import BasketCard from '../../components/BasketCard/BasketCard.js';
import ModalsContainer from '../ModalsContainer/ModalsContainer.js';

import { actionsBasket } from '../../store/actions/actionsBasket.js';
import { addGuitar, deleteGuitar } from '../../store/selectors/selectorsBasket.js';
import { popupTypes, pageTitles, activePage, pageLinks } from '../../consts/consts.js';

import './styles/basket/basket.scss';

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

  const addCardHandler = useCallback((newCard) => {
    dispatch(actionsBasket.changeCards(addGuitar(state, newCard.article)));
  }, [state.cards]);

  const deleteCardHandler = useCallback((card, type) => {
    if (type === false && card.count === 1) {
      openPopupDeleteHandler(card);
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

  const closePopupHandler = useCallback(() => {
    setModals({
      active: false,
      type: null,
      data: modals.data
    })
  }, [modals.data]);

  const openPopupDeleteHandler = useCallback((card) => {
    setModals({
      active: true,
      type: popupTypes.DELETE_CARD,
      data: card
    })
  }, [modals.data]);

  const openPopupCodeHandler = useCallback((text) => {
    setModals({
      active: true,
      type: popupTypes.PROMO,
      data: text
    })
  }, [modals.data]);

  return (
    <main className="main main_basket">
      <BreadCrumbs
        title={pageTitles.BASKET}
        items={[pageLinks.HOME, pageLinks.CATALOG]}
        active={activePage.BASKET}
      />
      <div className="main__wrapper">
        <section className="basket">
          <ul className="basket__list">
            {
              state.cards && getCardsBasket().map((card) => {
                return (
                  <BasketCard
                    onOpenPopupDelete={() => openPopupDeleteHandler(card)}
                    onAddCard={addCardHandler}
                    onDeleteCard={deleteCardHandler}
                    key={card.article}
                    card={card}
                  />
                )
              })
            }
          </ul>
          <OrderingContainer
            cards={getCardsBasket()}
            onOpenPopupCode={openPopupCodeHandler}
          />
        </section>
      </div>
      <ModalsContainer
        status={modals.active}
        data={modals.data}
        type={modals.type}
        onClosePopup={closePopupHandler}
        onDeleteCard={deleteCardHandler}
      />
    </main>
  )
};

export default BasketPage;
