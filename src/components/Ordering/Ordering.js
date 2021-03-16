import PropTypes from 'prop-types';
import promoCodes from '../../promo/promo-codes.js';
import { useState, useEffect, useCallback } from 'react';

const Ordering = ({
  allPrice,
  openPopupCode
}) => {
  const [state, setState] = useState(0);
  const [stateCode, setStateCode] = useState(``);
  useEffect(() => {
    setState(allPrice)
  }, [allPrice]);

  const changeCode = (evt) => {
    setStateCode(`${String(evt.target.value).toUpperCase()}`);
  }

  const codeCheck = useCallback((evt) => {
    evt.preventDefault();
    if (Object.keys(promoCodes).includes(stateCode)) {
      setState(promoCodes[stateCode](state));
      console.log(stateCode);
      console.log()
      evt.target.disabled = true;
    } else if (stateCode === ``) {
      openPopupCode(`Введите промокод`);
    } else if (stateCode === null) {
      return;
    } else {
      openPopupCode(`Промокод недействителен`);
    }
  }, [openPopupCode]);

  return (
    <div className="basket__ordering">
      <div className="basket__promo-wrapper">
        <h2 className="basket__title">Промокод на скидку</h2>
        <p className="basket__subtitle">Введите свой промокод, если он у вас есть.</p>
        <form className="basket__code-wrapper" name="form-code">
          <label htmlFor="code" className="visually-hidden"></label>
          <input onChange={changeCode} id="code" type="text" className="basket__code" name="code" />
          <button onClick={codeCheck} className="basket__code-submit" type="submit">Применить купон</button>
        </form>
      </div>
      <div className="basket__checkout-wrapper">
        <p className="basket__price">Всего: <span className="basket__all-price">{state}</span> ₽</p>
        <a href="#" className="basket__checkout">Оформить заказ</a>
      </div>
    </div>
  )
};

Ordering.propTypes = {
  allPrice: PropTypes.number,
  openPopupCode: PropTypes.func
}

export default Ordering;
