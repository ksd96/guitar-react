import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import CardsList from '../../components/CardsList/CardsList.js';
import SortingContainer from '../SortingContainer/SortingContainer.js';
import FiltersContainer from '../FiltersContainer/FiltersContainer.js';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.js';
import PaginationContainer from '../PaginationContainer/PaginationContainer.js';

import { actionsBasket } from '../../store/actions/actionsBasket.js';
import { addGuitar } from '../../store/dataUtils/utilsBasket.js';
import { getFilteredCards } from '../../store/dataUtils/utilsCatalog.js';
import { popupTypes, pageTitles, activePage, pageLinks } from '../../consts/consts.js';

import PopupAddBasket from '../../components/Modals/PopupAddBasket/PopupAddBasket.js';
import PopupGoBasket from '../../components/Modals/PopupGoBasket/PopupGoBasket.js';
import ModalsBox from '../../components/ModalsBox/ModalsBox.js';

import getGuitars from '../../store/api/getGuitars.js';

import './styles/main/main.scss';
import './styles/cards/cards.scss';
import './styles/pages/pages.scss';

const CatalogPage = () => {
  const filters = useSelector((state) => state.catalog);
  const catalogCards = useSelector((state) => getFilteredCards(state.catalog, state.catalog.cards));
  const pageCards = catalogCards.slice((9 * filters.pageNumber) - 9, 9 * filters.pageNumber);
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuitars());
  }, [filters.status, dispatch]);

  // модальные окна ----------------------------------------------------------------------------------------------------

  const [modals, setModals] = useState({
    type: null,
    data: null
  });

  const openPopupAddBasketHandler = useCallback((card) => {
    setModals({
      type: popupTypes.ADD_IN_BASKET,
      data: card
    });
  }, []);

  const closePopupHandler = useCallback(() => {
    setModals({
      type: null,
      data: modals.data
    });
  }, [modals.data]);

  // добавление гитары в корзину
  const addCardBasketHandler = useCallback(() => {
    setModals({
      type: popupTypes.GO_BASKET,
      data: modals.data
    });
    dispatch(actionsBasket.changeCards(addGuitar(basket, modals.data.article)));
  }, [modals.data, dispatch, basket]);

  let filtersContainer;
  if (Object.values(filters.allCards).length !== 0) {
    filtersContainer = <FiltersContainer />;
  } else {
    filtersContainer = null;
  };

  let modalsContainer;
  if (modals.type === popupTypes.ADD_IN_BASKET) {
    modalsContainer = <ModalsBox title={`Добавить товар в корзину`} status={modals.type} onClosePopup={closePopupHandler}><PopupAddBasket data={modals.data} addCardInBasket={addCardBasketHandler} /></ModalsBox>
  } else if (modals.type === popupTypes.GO_BASKET) {
    modalsContainer = <ModalsBox title={`Товар успешно добавлен в корзину`} status={modals.type} onClosePopup={closePopupHandler}><PopupGoBasket closePopup={closePopupHandler} /></ModalsBox>
  } else {
    modalsContainer = null;
  };

  return (
    <div className="content">
      <main className="main">
        <BreadCrumbs
          title={pageTitles.CATALOG}
          items={[pageLinks.HOME]}
          active={activePage.CATALOG}
        />
        <div className="main__wrapper">
          { filtersContainer }
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
      {modalsContainer}
    </div>
  );
};

export default CatalogPage;
