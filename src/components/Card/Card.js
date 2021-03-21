import './styles/card.scss';
import PropTypes from 'prop-types';

const Card = ({
  guitar,
  openPopupAddBasket
}) => {
  return (
    <li className="card">
      <picture className="card__picture">
        <source className="card__image-webp" type="image/webp" srcSet={`./img/${guitar.img}.webp`} />

        <img className="card__image" src={`./img/${guitar.img}.png`} alt="гитара" width="68" height="190" />
      </picture>
      <div className="card__rating-wrapper">
        <svg className="card__star" width="10" height="10"><use xlinkHref="#icon-star"></use></svg>
        <svg className="card__star" width="10" height="10"><use xlinkHref="#icon-star"></use></svg>
        <svg className="card__star" width="10" height="10"><use xlinkHref="#icon-star"></use></svg>
        <svg className="card__star" width="10" height="10"><use xlinkHref="#icon-star"></use></svg>
        <svg className="card__star" width="10" height="10"><use xlinkHref="#icon-star"></use></svg>
        <p className="card__rating">{guitar.popularity}</p>
      </div>
      <div className="card__title-wrapper">
        <h3 className="card__title">{guitar.name}</h3>
        <p className="card__price"><span className="card__price-content">{guitar.price}</span> ₽</p>
      </div>
      <div className="card__buttons">
        <button className="card__button card__button_type_more" type="button">Подробнее</button>
        <button onClick={() => { openPopupAddBasket(guitar); } } className="card__button card__button_type_buy" type="button">Купить</button>
      </div>
    </li>
  );
};

Card.propTypes = {
  guitar: PropTypes.shape({
    img: PropTypes.string,
    popularity: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number
  }),
  openPopupAddBasket: PropTypes.func
};

export default Card;
