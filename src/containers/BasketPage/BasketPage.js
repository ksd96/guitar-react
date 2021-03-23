import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import OrderingContainer from '../OrderingContainer/OrderingContainer.js';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.js';
import BasketCard from '../../components/BasketCard/BasketCard.js';
import PopupDeleteCard from '../../components/Modals/PopupDeleteCard/PopupDeleteCard.js';
import ModalsBox from '../../components/ModalsBox/ModalsBox.js';

import { actionsBasket } from '../../store/actions/actionsBasket.js';
import { addGuitar, deleteGuitar } from '../../store/dataUtils/utilsBasket.js';
import { popupTypes, pageTitles, activePage, pageLinks } from '../../consts/consts.js';

import './styles/basket/basket.scss';

const BasketPage = () => {
  const stateBasket = useSelector((state) => state.basket);
  const stateCatalog = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  // модальное окно -----------------------------------------------------------------------------------------------
  const [modals, setModals] = useState({
    type: null,
    data: null
  });

  const closePopupHandler = useCallback(() => {
    setModals({
      type: null,
      data: modals.data
    });
  }, [modals.data]);

  const openPopupDeleteHandler = useCallback((card) => {
    setModals({
      type: popupTypes.DELETE_CARD,
      data: card
    });
  }, []);

  const openPopupCodeHandler = useCallback((text) => {
    setModals({
      type: popupTypes.PROMO,
      data: text
    });
  }, []);

  const getCardsBasket = useCallback(() => {
    const cards = [];
    Object.values(stateBasket.cards).map((item) => {
      if (stateCatalog.cards[item.article]) {
        stateCatalog.cards[item.article].count = item.count;
      }
      return cards.push(stateCatalog.cards[item.article]);
    });
    return cards;
  }, [stateBasket, stateCatalog.cards]);

  const addCardHandler = useCallback((newCard) => {
    dispatch(actionsBasket.changeCards(addGuitar(stateBasket, newCard.article)));
  }, [dispatch, stateBasket]);

  const deleteCardHandler = useCallback((card, type) => {
    if (type === false && card.count === 1) {
      openPopupDeleteHandler(card);
    } else {
      dispatch(actionsBasket.changeCards(deleteGuitar(card.article, type, stateBasket)));
    }
  }, [dispatch, openPopupDeleteHandler, stateBasket]);

  let modalsContainer;
  if (modals.type === popupTypes.DELETE_CARD) {
    modalsContainer = <ModalsBox title={`Удалить этот товар?`} status={modals.type} onClosePopup={closePopupHandler}><PopupDeleteCard data={modals.data} closePopup={closePopupHandler} deleteCard={deleteCardHandler} /></ModalsBox>
  } else if (modals.type === popupTypes.PROMO) {
    modalsContainer = <ModalsBox title={modals.data.text} status={modals.type} onClosePopup={closePopupHandler}></ModalsBox>
  } else {
    modalsContainer = null;
  };

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
              stateBasket.cards && getCardsBasket().map((card) => {
                return (
                  <BasketCard
                    onOpenPopupDelete={() => openPopupDeleteHandler(card)}
                    onAddCard={addCardHandler}
                    onDeleteCard={deleteCardHandler}
                    key={card.article}
                    card={card}
                  />
                );
              })
            }
          </ul>
          <OrderingContainer
            cards={getCardsBasket()}
            onOpenPopupCode={openPopupCodeHandler}
          />
        </section>
      </div>
      {modalsContainer}
    </main>
  );
};

export default BasketPage;
