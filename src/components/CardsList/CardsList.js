import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const CardsList = ({
  guitars,
  openPopupAddBasket
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
              openPopupAddBasket={() => {openPopupAddBasket(guitar)}}
            />
          )
        })
      }
    </ul>
  </section>
  )
};

CardsList.propTypes = {
  guitars: PropTypes.array,
  openPopupAddBasket: PropTypes.func
};

export default CardsList;
