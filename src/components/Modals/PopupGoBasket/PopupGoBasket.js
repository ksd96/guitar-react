import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const PopupGoBasket = ({
  closePopup
}) => {

  useEffect(() => {
    const page = document.querySelector(`.page`);
    const closeEsc = (event) => {
      if (event.key === `Escape`) {
        closePopup();
      }
    };
    window.addEventListener(`keydown`, closeEsc);
    page.classList.add(`page_no-scrole`);
    return () => {
      page.classList.remove(`page_no-scrole`);
      window.removeEventListener(`keydown`, closeEsc);
    };
  });

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
  );
};

PopupGoBasket.propTypes = {
  closePopup: PropTypes.func
};

export default PopupGoBasket;
