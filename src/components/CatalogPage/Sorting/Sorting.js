import './styles/sort.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const Sortinng = ({
  sortActive,
  sortType,
  filters
}) => {

  const addClassActive = (value) => {
    const classButton = classNames({
      "sort__button-type": true,
      "sort__button-type_type_price": `price` === `${value}`,
      "sort__button-type_type_popularity": `popularity` === `${value}`,
      "sort__button-type_active": filters.sortActive === `${value}` && filters.sortState === true
    });
    return classButton;
  }

  const addClassType = (value) => {
    const classButton = classNames({
      "sort__button": true,
      "sort__button_type_min": `min` === `${value}`,
      "sort__button_type_max": `max` === `${value}`,
      "sort__button_active": filters.sortType === `${value}` && filters.sortState === true
    });
    return classButton;
  }

  return (
    <section className="sort">
      <h2 className="sort__title">Сортировать:</h2>
      <div className="sort__wrapper-type">
        <button onClick={() => {sortActive(`price`)}} className={addClassActive(`price`)} type="button" aria-label="Сортировка по цене">по цене</button>
        <button onClick={() => {sortActive(`popularity`)}} className={addClassActive(`popularity`)} type="button" aria-label="Сортировка по популярности">по популярности</button>
      </div>
      <div className="sort__wrapper-buttons">
        <button onClick={() => {sortType(`min`)}} className={addClassType(`min`)} type="button" aria-label="Сортировка от меньшего к большему">
          <svg className="sort__button-icon" width="13" height="13"><use xlinkHref="#icon-min"></use></svg>
        </button>
        <button onClick={() => {sortType(`max`)}} className={addClassType(`max`)}  type="button" aria-label="Сортировка от большего к меньшему">
          <svg className="sort__button-icon" width="13" height="13"><use xlinkHref="#icon-max"></use></svg>
        </button>
      </div>
    </section>
  )
}

Sortinng.propTypes = {
  sortActive: PropTypes.func,
  sortType: PropTypes.func,
  filters: PropTypes.object
}

export default Sortinng;
