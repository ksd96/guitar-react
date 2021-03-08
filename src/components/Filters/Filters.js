import './styles/filter.scss';

import FilterTypeItem from '../FilterTypeItem/FilterTypeItem.js';

const Filters = (props) => {
  return (
    <section className="filters">
      <form className="main__wrapper-filter filter">
        <h2 className="filter__title">Фильтр</h2>
        <div className="filter__price">
          <h3 className="filter__title-item">Цена, ₽</h3>
          <div className="filter__price-wrapper">
            <label className="visually-hidden" htmlFor="price-min">Минимальная цена</label>
            <input id="price-min" type="text" className="filter__price-input filter__price-input_type_min" />
            <span className="filter__price-span"></span>
            <label className="visually-hidden" htmlFor="price-max">Максимальная цена</label>
            <input id="price-max" type="text" className="filter__price-input filter__price-input_type_max" />
          </div>
        </div>
        <div className="filter__type">
          <h3 className="filter__title-item">Тип гитар</h3>
          <ul className="filter__list filter__list_type">
            {
              Array.from(props.filters.type).map((type) => {
                return (
                  <FilterTypeItem key={type} typeName={type}/>
                )
              })
            }
          </ul>
        </div>
        <div className="filter__type">
          <h3 className="filter__title-item">Колличество струн</h3>
          <ul className="filter__list filter__list_numbers">
            {
              Array.from(props.filters.strings).map((type) => {
                return (
                  <FilterTypeItem key={type} typeName={type}/>
                )
              })
            }
          </ul>
        </div>
        <button className="filter__submit">Показать</button>
      </form>
    </section>
  )
}

export default Filters;
