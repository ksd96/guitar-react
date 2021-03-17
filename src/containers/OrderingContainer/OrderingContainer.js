import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import Ordering from '../../components/Ordering/Ordering.js';

import promoCodes from '../../promo/promo-codes.js';

const OrderingContainer = ({cards, openPopupCode}) => {
  const [state, setState] = useState(0);
  const [stateCode, setStateCode] = useState(``);

  // получить полную стоимость
  const getAllPrice = useCallback((cards) => {
    let allPrice = 0;
    cards.forEach((card) => {
      allPrice = allPrice + (card.price * card.count);
    });
    return allPrice;
  }, []);

  const allPrice = getAllPrice(cards);

  useEffect(() => {
    if (stateCode) {
      setState(promoCodes[stateCode](allPrice));
    } else {
      setState(allPrice);
    }
  }, [allPrice]);

  const changeCode = useCallback((evt) => {
    setStateCode(`${String(evt.target.value).toUpperCase()}`);
  }, []);

  const codeCheck = useCallback((evt) => {
    evt.preventDefault();
    if (Object.keys(promoCodes).includes(stateCode)) {
      setState(promoCodes[stateCode](state));
      evt.target.disabled = true;
    } else if (stateCode === ``) {
      openPopupCode(`Введите промокод`);
    } else if (stateCode === null) {
      return;
    } else {
      openPopupCode(`Промокод недействителен`);
    }
  }, [stateCode]);

  return (
    <Ordering codeCheck={codeCheck} changeCode={changeCode} allPrice={state} />
  );
};

Ordering.propTypes = {
  cards: PropTypes.array,
  openPopupCode: PropTypes.func
}

export default OrderingContainer;
