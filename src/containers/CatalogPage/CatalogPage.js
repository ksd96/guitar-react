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

import './styles/main/main.scss';
import './styles/cards/cards.scss';
import './styles/pages/pages.scss';

const CatalogPage = () => {
  const filters = useSelector((state) => state.catalog);
  const catalogCards = useSelector((state) => getFilteredCards(state.catalog, state.catalog.cards));
  const pageCards = catalogCards.slice((9 * filters.pageNumber) - 9, 9 * filters.pageNumber);
  const dispatch = useDispatch();

  // модальные окна ----------------------------------------------------------------------------------------------------

  const [modals, setModals] = useState({
    active: false,
    type: null,
    data: null
  });

  const openPopupAddBasket = useCallback((card) => {
    setModals({
      active: true,
      type: `addInBasket`,
      data: card
    })
  }, [modals.data]);

  const closePopup = useCallback(() => {
    setModals({
      active: false,
      type: null,
      data: modals.data
    })
  }, [modals.data]);

  // добавление гитары в корзину
  const basket = useSelector((state) => state.basket);
  const addCardBasket = useCallback(() => {
    setModals({
      active: true,
      type: `goBasket`,
      data: modals.data
    });
    dispatch(actionsBasket.changeCards(addGuitar(basket, modals.data.article)))
  }, [modals.data]);

  return (
    <div className="content">
          <main className="main">
            <BreadCrumbs title={`Каталог гитар`} items={[{name: `Главная`, link: `#`}]} active={`Каталог`} />
            <div className="main__wrapper">
              <FiltersContainer />
              <div className="main__wrapper-right">
                <SortingContainer />
                <CardsList
                  guitars={pageCards}
                  openPopupAddBasket={openPopupAddBasket}
                />
              </div>
            </div>
            <PaginationContainer />
          </main>

      <ModalsContainer
        status={modals.active}
        data={modals.data}
        type={modals.type}
        closePopup={closePopup}
        addCardInBasket={addCardBasket}
      />

    </div>
  )
};

export default CatalogPage;
