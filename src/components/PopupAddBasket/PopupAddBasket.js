import './styles/popup.scss';

const PopupAddBasket = ({
  data,
  closePopup,
  addCardInBasket
}) => {

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
  )
};

export default PopupAddBasket;
