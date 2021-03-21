import PropTypes from 'prop-types';
import './styles/guitar.scss';
import { useCallback } from 'react';

const BasketCard = ({
  card,
  onAddCard,
  onDeleteCard,
  onOpenPopupDelete
}) => {

  const deleteGuitar = useCallback(() => {
    if (card.count === 1) {
      onOpenPopupDelete();
    } else {
      onDeleteCard(card, false);
    }
  }, [card, onOpenPopupDelete, onDeleteCard]);

  return (
    <li className="basket__item guitar">
      <button onClick={onOpenPopupDelete} className="guitar__delete" type="button" aria-label="кнопка удаления гитары">
        <svg className="guitar__icon" width="11.5" height="11.5"><use xlinkHref="#icon-close"></use></svg>
      </button>
      <picture className="guitar__picture">
        <source className="guitar__img-webp" type="image/webp" srcSet={`./img/${card.img}.webp`} />

        <img src={`./img/${card.img}.png`} alt="фото гитары" className="guitar__img" width="48" height="124" />
      </picture>
      <div className="guitar__wrapper">
        <h2 className="guitar__title">ГИТАРА <span className="guitar__name">{card.name}</span></h2>
        <p className="guitar__article">Артикул: <span className="guitar__article-content">{card.article}</span></p>
        <p className="guitar__type"><span className="guitar__type-content">{card.type}</span>, <span className="guitar__strings">{card.strings}</span> струнная</p>
      </div>
      <p className="guitar__price"><span className="guitar__price-content">{card.price}</span> ₽</p>
      <div className="guitar__buttons">
        <button onClick={ () => { deleteGuitar(); } } className="guitar__button guitar__button_type_less" type="button">-</button>
        <p className="guitar__quantity">{card.count}</p>
        <button onClick={ () => { onAddCard(card); } } className="guitar__button guitar__button_type_more" type="button">+</button>
      </div>
      <p className="guitar__full-price"><span className="guitar__full-price-content">{card.count * card.price}</span> ₽</p>
    </li>
  );
};

BasketCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string,
    strings: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    article: PropTypes.string,
    type: PropTypes.string,
    count: PropTypes.number
  }),
  onAddCard: PropTypes.func,
  onDeleteCard: PropTypes.func,
  openPopupDelete: PropTypes.func
};

export default BasketCard;
