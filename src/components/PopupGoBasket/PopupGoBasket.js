import { Link } from 'react-router-dom';

const PopupGoBasket = ({
  closePopup
}) => {
  return (
    <div className="popup popup_added">
      <h2 className="popup__title">Товар успешно добавлен в корзину</h2>
      <div className="popup__wrapper popup__wrapper_added">
        <Link to="/basket" onClick={closePopup} className="popup__button popup__button_type_go-basket" type="button">Перейти в корзину</Link>
        <button onClick={closePopup} className="popup__button popup__button_type_go-shoping" type="button">Продолжить покупки</button>
      </div>
      <button onClick={closePopup} className="popup__close" type="button">
        <svg className="popup__icon" width="11.5" height="11.5"><use xlinkHref="#icon-close"></use></svg>
      </button>
    </div>
  )
};

export default PopupGoBasket;
