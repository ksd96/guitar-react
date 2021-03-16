import './styles/sort.scss';
import PropTypes from 'prop-types';

const Sortinng = ({
  sortActive,
  sortType,
  addClassType,
  addClassActive
}) => {

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
  addClassType: PropTypes.func,
  addClassActive: PropTypes.func
}

export default Sortinng;
