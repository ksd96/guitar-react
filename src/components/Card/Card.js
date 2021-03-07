import './styles/card.scss';

const Card = (props) => {
  return (
    <li className="card">
      <picture className="card__picture">
        <source className="card__image-webp" type="image/webp" srcSet={`./img/${props.img}.webp`}  />

        <img className="card__image" src={`./img/${props.img}.png`} alt="гитара" width="68" height="190" />
      </picture>
      <div className="card__rating-wrapper">
        <svg className="card__star" width="10" height="10"><use xlinkHref="#icon-star"></use></svg>
        <svg className="card__star" width="10" height="10"><use xlinkHref="#icon-star"></use></svg>
        <svg className="card__star" width="10" height="10"><use xlinkHref="#icon-star"></use></svg>
        <svg className="card__star" width="10" height="10"><use xlinkHref="#icon-star"></use></svg>
        <svg className="card__star" width="10" height="10"><use xlinkHref="#icon-star"></use></svg>
        <p className="card__rating">{props.popularity}</p>
      </div>
      <div className="card__title-wrapper">
        <h3 className="card__title">{props.name}</h3>
        <p className="card__price"><span className="card__price-content">{props.price}</span> ₽</p>
      </div>
      <div className="card__buttons">
        <button className="card__button card__button_type_more" type="button">Подробнее</button>
        <button className="card__button card__button_type_buy" type="button">Купить</button>
      </div>
    </li>
  );
};

export default Card;
