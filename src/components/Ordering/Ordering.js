import PropTypes from 'prop-types';

const Ordering = ({
  allPrice,
  changeCode,
  codeCheck
}) => {
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
        <p className="basket__price">Всего: <span className="basket__all-price">{allPrice}</span> ₽</p>
        <a href="#" className="basket__checkout">Оформить заказ</a>
      </div>
    </div>
  );
};

Ordering.propTypes = {
  allPrice: PropTypes.number,
  changeCode: PropTypes.func,
  codeCheck: PropTypes.func
}

export default Ordering;
