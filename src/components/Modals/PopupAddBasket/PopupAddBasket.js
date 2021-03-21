import './styles/popup.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const PopupAddBasket = ({
  data,
  closePopup,
  addCardInBasket
}) => {

  useEffect(() => {
    const page = document.querySelector(`.page`);
    const button = document.querySelector(`.popup__button`);
    const closeEsc = (event) => {
      if (event.key === `Escape`) {
        closePopup();
      }
    };
    window.addEventListener(`keydown`, closeEsc);
    page.classList.add(`page_no-scrole`);
    button.focus();
    return () => {
      page.classList.remove(`page_no-scrole`);
      window.removeEventListener(`keydown`, closeEsc);
    };
  });

  return (
    <div className="popup">
      <h2 className="popup__title">Добавить товар в корзину</h2>
      <div className="popup__wrapper">
        <picture className="popup__picture">
          <source className="popup__img-webp" type="image/webp" srcSet={`./img/${data.img}.webp`} />

          <img src={`./img/${data.img}.png`} alt="Фото гитары" className="popup__img" width="56" height="128" />
        </picture>
        <div className="popup__info">
          <h3 className="popup__guitar-title">ГИТАРА <span className="popup__guitar-name">{data.name}</span></h3>
          <p className="popup__article">Артикул: <span className="popup__guitar-article">{data.article}</span></p>
          <p className="popup__type"><span className="popup__guitar-type">{data.type}</span>, <span className="popup__guitar-strings">{data.strings}</span></p>
          <p className="popup__price">Цена: <span className="popup__guitar-price">{data.price}</span>  ₽</p>
        </div>
        <button onClick={addCardInBasket} className="popup__button" type="button">Добавить в корзину</button>
        <button onClick={closePopup} className="popup__close" type="button">
          <svg className="popup__icon" width="11.5" height="11.5"><use xlinkHref="#icon-close"></use></svg>
        </button>
      </div>
    </div>
  );
};

PopupAddBasket.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    strings: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    article: PropTypes.string,
    type: PropTypes.string,
  }),
  closePopup: PropTypes.func,
  addCardInBasket: PropTypes.func
};

export default PopupAddBasket;
