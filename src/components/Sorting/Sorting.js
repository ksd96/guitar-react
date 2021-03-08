import './styles/sort.scss';

const Sortinng = (props) => {
  const sortActive = (type) => {
    props.dispatch({type: `CHANGE_ACTIVE_SORT`, payload: `${type}`});
  };

  const sortType = (type) => {
    props.dispatch({type: `CHANGE_TYPE_SORT`, payload: `${type}`})
  };

  const addClassActive = (value) => {
    if(props.filters.sortActive === `${value}`) {
      return `sort__button-type sort__button-type_active sort__button-type_type_${value}`;
    } else {
      return `sort__button-type sort__button-type_type_${value}`;
    }
  }

  const addClassType = (value) => {
    if(props.filters.sortType === `${value}` && props.filters.sortActive) {
      return `sort__button sort__button_active sort__button_type_${value}`;
    } else {
      return `sort__button sort__button-type_type_${value}`;
    }
  }

  return (
    <section className="sort">
      <h2 className="sort__title">Сортировать:</h2>
      <div className="sort__wrapper-type">
        <button onClick={(evt) => {sortActive(`price`)}} className={addClassActive(`price`)} type="button" aria-label="Сортировка по цене">по цене</button>
        <button onClick={(evt) => {sortActive(`popularity`)}} className={addClassActive(`popularity`)} type="button" aria-label="Сортировка по популярности">по популярности</button>
      </div>
      <div className="sort__wrapper-buttons">
        <button onClick={(evt) => {sortType(`min`)}} className={addClassType(`min`)} type="button" aria-label="Сортировка от меньшего к большему">
          <svg className="sort__button-icon" width="13" height="13"><use xlinkHref="#icon-min"></use></svg>
        </button>
        <button onClick={(evt) => {sortType(`max`)}} className={addClassType(`max`)}  type="button" aria-label="Сортировка от большего к меньшему">
          <svg className="sort__button-icon" width="13" height="13"><use xlinkHref="#icon-max"></use></svg>
        </button>
      </div>
    </section>
  )
}

export default Sortinng;
