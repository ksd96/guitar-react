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
              openPopupAddBasket={() => {onOpenPopupAddBasket(guitar)}}
            />
          )
        })
      }
    </ul>
  </section>
  )
};

CardsList.propTypes = {
  guitars: PropTypes.arrayOf(PropTypes.object),
  onOpenPopupAddBasket: PropTypes.func
};

export default CardsList;
