import React, { useState, useReducer, useMemo, useCallback } from 'react';
import {getAllPages, getFilteredCards, getInitialFilters} from '../../data/utils/utils.js';
import CardsList from '../../components/CardsList/CardsList.js';
import SortingContainer from '../SortingContainer/SortingContainer.js';
import FiltersContainer from '../FiltersContainer/FiltersContainer.js';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.js';
import ModalsContainer from '../../components/ModalsContainer/ModalsContainer.js';
import { addGuitar, getCardsBasket, setCardsBasket } from '../../data/utils/utils-basket.js'
// import { addGuitar } from '../../store/selectors/selectorsBasket.js';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import PaginationContainer from '../PaginationContainer/PaginationContainer.js';
import { actionsBasket } from '../../store/actions/actionsBasket.js';

import './styles/main/main.scss';
import './styles/cards/cards.scss';
import './styles/pages/pages.scss';

const CatalogPage = ({setCountGuitars}) => {
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
  // const basket = useSelector((state) => state.basket);
  // console.log(basket);
  // const addCardBasket = useCallback(() => {
  //   setModals({
  //     active: true,
  //     type: `goBasket`,
  //     data: modals.data
  //   });
  //   // const guitars = getCardsBasket();
  //   dispatch(actionsBasket.changeCards(addGuitar(basket, modals.data.article)))
  //   // const newGuitars = addGuitar(guitars, modals.data);
  //   // setCountGuitars(newGuitars);
  //   // setCardsBasket(newGuitars);
  //   console.log(basket);
  // }, [modals.data]);

  const addCardBasket = useCallback(() => {
    setModals({
      active: true,
      type: `goBasket`,
      data: modals.data
    });
    const guitars = getCardsBasket();
    const newGuitars = addGuitar(guitars, modals.data);
    setCountGuitars(newGuitars);
    setCardsBasket(newGuitars);
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

CatalogPage.propTypes = {
  setCountGuitars: PropTypes.func
}

export default CatalogPage;
