import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import Ordering from '../../components/Ordering/Ordering.js';

import promoCodes from '../../promo/promo-codes.js';
import { promoErrorMessage } from '../../consts/consts.js';

const OrderingContainer = ({cards, onOpenPopupCode}) => {
  const [state, setState] = useState(0);
  const [stateCode, setStateCode] = useState(``);

  // получить полную стоимость
  const getAllPrice = useCallback((items) => {
    let allPrice = 0;
    items.forEach((card) => {
      allPrice = allPrice + (card.price * card.count);
    });
    return allPrice;
  }, []);

  const allPrice = getAllPrice(cards);

  useEffect(() => {
    if (stateCode && Object.keys(promoCodes).includes(stateCode)) {
      setState(promoCodes[stateCode](allPrice));
    } else {
      setState(allPrice);
    }
  }, [allPrice, stateCode]);

  const changeCodeHandler = useCallback((evt) => {
    setStateCode(`${String(evt.target.value).toUpperCase()}`);
  }, []);

  const codeCheckHandler = useCallback((evt) => {
    evt.preventDefault();
    if (Object.keys(promoCodes).includes(stateCode)) {
      setState(promoCodes[stateCode](state));
      evt.target.disabled = true;
    } else if (stateCode === ``) {
      onOpenPopupCode({text: promoErrorMessage.ENTER});
    } else if (stateCode === null) {
      return;
    } else {
      onOpenPopupCode({text: promoErrorMessage.INVALID});
    }
  }, [stateCode, onOpenPopupCode, state]);

  return (
    <Ordering onCodeCheck={codeCheckHandler} onChangeCode={changeCodeHandler} allPrice={state} />
  );
};

Ordering.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    strings: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    article: PropTypes.string,
    type: PropTypes.string,
    count: PropTypes.number
  })),
  onOpenPopupCode: PropTypes.func
};

export default OrderingContainer;
