import PropTypes from 'prop-types';
import { useEffect } from 'react';

const PopupDeleteCard = ({
  data,
  closePopup,
  deleteCard
}) => {

  useEffect(() => {
    const page = document.querySelector(`.page`);
    const button = document.querySelector(`.popup__button_type_delete`);
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
    <div className="popup popup_basket">
      <h2 className="popup__title">Удалить этот товар?</h2>
      <div className="popup__wrapper">
        <picture className="popup__picture">
          <source className="popup__img-webp" type="image/webp" srcSet={`./img/${data.img}.webp`} />

          <img src={`./img/${data.img}.png`} alt="Фото гитары" className="popup__img" width="56" height="128"/ >
        </picture>
        <div className="popup__info">
          <h3 className="popup__guitar-title">ГИТАРА <span className="popup__guitar-name">{data.name}</span></h3>
          <p className="popup__article">Артикул: <span className="popup__guitar-article">{data.article}</span></p>
          <p className="popup__type"><span className="popup__guitar-type">{data.type}</span>, <span className="popup__guitar-strings"></span></p>
          <p className="popup__price">Цена: <span className="popup__guitar-price">{data.price}</span>  ₽</p>
        </div>
        <div className="popup__wrapper-buttons">
          <button onClick={() => { deleteCard(data, true); closePopup(); }} className="popup__button popup__button_type_delete" type="button">Удалить товар</button>
          <button onClick={closePopup} className="popup__button popup__button_type_go-shoping" type="button">Продолжить покупки</button>
        </div>
        <button onClick={closePopup} className="popup__close" type="button">
          <svg className="popup__icon" width="11.5" height="11.5"><use xlinkHref="#icon-close"></use></svg>
        </button>
      </div>
    </div>
  );
};

PopupDeleteCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    article: PropTypes.string,
    type: PropTypes.string
  }),
  closePopup: PropTypes.func,
  deleteCard: PropTypes.func
};

export default PopupDeleteCard;
