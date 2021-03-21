import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const CardsList = ({
  guitars,
  onOpenPopupAddBasket
}) => {
  return (
    <section className="cards">
    <ul className="cards__list">
      {
        guitars.map((guitar) => {
          return (
            <Card
              guitar={guitar}
              key={guitar.article}
              openPopupAddBasket={onOpenPopupAddBasket}
            />
          );
        })
      }
    </ul>
  </section>
  );
};

CardsList.propTypes = {
  guitars: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    popularity: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number
  })),
  onOpenPopupAddBasket: PropTypes.func
};

export default CardsList;
