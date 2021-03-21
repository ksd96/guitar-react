import './styles/sort.scss';
import PropTypes from 'prop-types';

const Sortinng = ({
  onSortActive,
  onSortType,
  addClassType,
  addClassActive
}) => {

  return (
    <section className="sort">
      <h2 className="sort__title">Сортировать:</h2>
      <div className="sort__wrapper-type">
        <button onClick={() => { onSortActive(`price`); }} className={addClassActive(`price`)} type="button" aria-label="Сортировка по цене">по цене</button>
        <button onClick={() => { onSortActive(`popularity`); }} className={addClassActive(`popularity`)} type="button" aria-label="Сортировка по популярности">по популярности</button>
      </div>
      <div className="sort__wrapper-buttons">
        <button onClick={() => { onSortType(`min`); }} className={addClassType(`min`)} type="button" aria-label="Сортировка от меньшего к большему">
          <svg className="sort__button-icon" width="13" height="13"><use xlinkHref="#icon-min"></use></svg>
        </button>
        <button onClick={() => { onSortType(`max`); }} className={addClassType(`max`)} type="button" aria-label="Сортировка от большего к меньшему">
          <svg className="sort__button-icon" width="13" height="13"><use xlinkHref="#icon-max"></use></svg>
        </button>
      </div>
    </section>
  );
};

Sortinng.propTypes = {
  onSortActive: PropTypes.func,
  onSortType: PropTypes.func,
  addClassType: PropTypes.func,
  addClassActive: PropTypes.func
};

export default Sortinng;
