import './styles/sort.scss';

const Sortinng = (props) => {
  return (
    <section className="sort">
      <h2 className="sort__title">Сортировать:</h2>
      <div className="sort__wrapper-type">
        <button onClick={props.onSortPrice} className="sort__button-type sort__button-type_type_price" type="button" aria-label="Сортировка по цене">по цене</button>
        <button onClick={props.onSortPopularity} className="sort__button-type sort__button-type_type_popularity" type="button" aria-label="Сортировка по популярности">по популярности</button>
      </div>
      <div className="sort__wrapper-buttons">
        <button className="sort__button sort__button_type_min" type="button" aria-label="Сортировка от меньшего к большему">
          <svg className="sort__button-icon" width="13" height="13"><use xlinkHref="#icon-min"></use></svg>
        </button>
        <button className="sort__button sort__button_type_max" type="button" aria-label="Сортировка от большего к меньшему">
          <svg className="sort__button-icon" width="13" height="13"><use xlinkHref="#icon-max"></use></svg>
        </button>
      </div>
    </section>
  )
}

export default Sortinng;
