import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import CardsList from '../../components/CardsList/CardsList.js';
import SortingContainer from '../SortingContainer/SortingContainer.js';
import FiltersContainer from '../FiltersContainer/FiltersContainer.js';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.js';
import ModalsContainer from '../ModalsContainer/ModalsContainer.js';
import PaginationContainer from '../PaginationContainer/PaginationContainer.js';

import { actionsBasket } from '../../store/actions/actionsBasket.js';
import { addGuitar } from '../../store/selectors/selectorsBasket.js';
import { getFilteredCards } from '../../store/selectors/selectorsCatalog.js';
import { popupTypes, pageTitles, activePage, pageLinks } from '../../consts/consts.js';

import './styles/main/main.scss';
import './styles/cards/cards.scss';
import './styles/pages/pages.scss';

const CatalogPage = () => {
  const filters = useSelector((state) => state.catalog);
  const catalogCards = useSelector((state) => getFilteredCards(state.catalog, state.catalog.cards));
  const pageCards = catalogCards.slice((9 * filters.pageNumber) - 9, 9 * filters.pageNumber);
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  // модальные окна ----------------------------------------------------------------------------------------------------

  const [modals, setModals] = useState({
    active: false,
    type: null,
    data: null
  });

  const openPopupAddBasketHandler = useCallback((card) => {
    setModals({
      active: true,
      type: popupTypes.ADD_IN_BASKET,
      data: card
    })
  }, [modals.data]);

  const closePopupHandler = useCallback(() => {
    setModals({
      active: false,
      type: null,
      data: modals.data
    })
  }, [modals.data]);

  // добавление гитары в корзину
  const addCardBasketHandler = useCallback(() => {
    setModals({
      active: true,
      type: popupTypes.GO_BASKET,
      data: modals.data
    });
    dispatch(actionsBasket.changeCards(addGuitar(basket, modals.data.article)))
  }, [modals.data]);

  return (
    <div className="content">
          <main className="main">
            <BreadCrumbs
              title={pageTitles.CATALOG}
              items={[pageLinks.HOME]}
              active={activePage.CATALOG}
            />
            <div className="main__wrapper">
              <FiltersContainer />
              <div className="main__wrapper-right">
                <SortingContainer />
                <CardsList
                  guitars={pageCards}
                  onOpenPopupAddBasket={openPopupAddBasketHandler}
                />
              </div>
            </div>
            <PaginationContainer />
          </main>

      <ModalsContainer
        status={modals.active}
        data={modals.data}
        type={modals.type}
        onClosePopup={closePopupHandler}
        onAddCardInBasket={addCardBasketHandler}
      />

    </div>
  )
};

export default CatalogPage;
