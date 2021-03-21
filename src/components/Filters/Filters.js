import './styles/filter.scss';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import FilterTypeItem from '../FilterTypeItem/FilterTypeItem.js';
import {getStringsGuitarArray, getFilteredGuitarsStrings, getFilteredGuitarsTypes, getTypesGuitarArray} from '../../store/dataUtils/utilsCatalog.js';

const Filters = ({
  onSetTypesGuitars,
  onSetStringsGuitars,
  onSetPriceGuitars,
  allFilters,
  cards
}) => {
  const priceMin = document.querySelector(`.filter__price-input_type_min`);
  const priceMax = document.querySelector(`.filter__price-input_type_max`);
  const filtersTypes = document.querySelectorAll(`[name="types"]`);
  const filtersStrings = document.querySelectorAll(`[name="strings"]`);

  // валидация фильтра по типу гитар
  const clickFilterItemTypes = useCallback((filters) => {
    const typeGuitars = getTypesGuitarArray(getFilteredGuitarsStrings(cards, filters));

    filtersTypes.forEach((item) => {
      item.disabled = true;
    });
    typeGuitars.forEach((item) => {
      filtersTypes.forEach((item2) => {
        if (item === item2.value) {
          item2.disabled = false;
        }
      });
    });
  }, [filtersTypes, cards]);

  // валидация фильтра по количеству струн
  const clickFilterItemStrings = useCallback((filters) => {
    const typeGuitars = getStringsGuitarArray(getFilteredGuitarsTypes(cards, filters));
    filtersStrings.forEach((item) => {
      item.disabled = true;
    });
    typeGuitars.forEach((item) => {
      filtersStrings.forEach((item2) => {
        if (item === +item2.value) {
          item2.disabled = false;
        }
      });
    });
  }, [filtersStrings, cards]);

  // получение активных фильтров
  const getFilteredGuitars = useCallback(() => {
    const filterData = {
      "type": null,
      "strings": null,
      "price": {
        "min": null,
        "max": null
      }
    };

    filterData.type = [];
    filterData.strings = [];
    filterData.price.min = priceMin.value;
    filterData.price.max = priceMax.value;
    filtersTypes.forEach((item) => {
      if (item.checked) {
        filterData.type.push(item.value);
      }
    });
    filtersStrings.forEach((item) => {
      if (item.checked) {
        filterData.strings.push(+item.value);
      }
    });
    return filterData;
  }, [priceMin, priceMax, filtersTypes, filtersStrings]);

  // смена минимальной цены
  const onChangePriceMin = useCallback(() => {
    if (+priceMin.value < +allFilters.price.min) {
      priceMin.value = allFilters.price.min;
    } else if (+priceMin.value >= +priceMax.value) {
      priceMin.value = priceMax.value;
    }
    onSetPriceGuitars(getFilteredGuitars().price);
    clickFilterItemTypes(getFilteredGuitars());
    clickFilterItemStrings(getFilteredGuitars());
  }, [priceMin, priceMax, allFilters.price.min, onSetPriceGuitars, clickFilterItemTypes, clickFilterItemStrings, getFilteredGuitars]);

  // смена максимальной цены
  const onChangePriceMax = useCallback(() => {
    if (+priceMax.value <= +priceMin.value) {
      priceMax.value = priceMin.value;
    }
    onSetPriceGuitars(getFilteredGuitars().price);
    clickFilterItemTypes(getFilteredGuitars());
    clickFilterItemStrings(getFilteredGuitars());
  }, [priceMin, priceMax, onSetPriceGuitars, clickFilterItemTypes, clickFilterItemStrings, getFilteredGuitars]);

  return (
    <section className="filters">
      <form className="main__wrapper-filter filter">
        <h2 className="filter__title">Фильтр</h2>
        <div className="filter__price">
          <h3 className="filter__title-item">Цена, ₽</h3>
          <div className="filter__price-wrapper">
            <label className="visually-hidden" htmlFor="price-min">Минимальная цена</label>
            <input onBlur={onChangePriceMin} id="price-min" type="number" defaultValue={allFilters.price.min} className="filter__price-input filter__price-input_type_min" />
            <span className="filter__price-span"></span>
            <label className="visually-hidden" htmlFor="price-max">Максимальная цена</label>
            <input onBlur={onChangePriceMax} id="price-max" type="number" defaultValue={allFilters.price.max} className="filter__price-input filter__price-input_type_max" />
          </div>
        </div>
        <div className="filter__type">
          <h3 className="filter__title-item">Тип гитар</h3>
          <ul className="filter__list filter__list_type">
            {
              Array.from(allFilters.type).map((type) => {
                return (
                  <FilterTypeItem
                    onClick={() => {
                      onSetTypesGuitars(getFilteredGuitars().type);
                      clickFilterItemStrings(getFilteredGuitars());
                    }}
                    name={`types`}
                    key={type}
                    typeName={type}

                  />
                );
              })
            }
          </ul>
        </div>
        <div className="filter__type">
          <h3 className="filter__title-item">Колличество струн</h3>
          <ul className="filter__list filter__list_numbers">
            {
              Array.from(allFilters.strings).map((type) => {
                return (
                  <FilterTypeItem
                    onClick={() => {
                      onSetStringsGuitars(getFilteredGuitars().strings);
                      clickFilterItemTypes(getFilteredGuitars());
                    }}
                    name={`strings`}
                    key={type}
                    typeName={`${type}`}
                  />
                );
              })
            }
          </ul>
        </div>
      </form>
    </section>
  );
};

Filters.propTypes = {
  onSetTypesGuitars: PropTypes.func,
  onSetStringsGuitars: PropTypes.func,
  onSetPriceGuitars: PropTypes.func,
  allFilters: PropTypes.shape({
    allPages: PropTypes.arrayOf(PropTypes.number),
    cards: PropTypes.shape({
      article: PropTypes.string,
      img: PropTypes.string,
      name: PropTypes.string,
      popularitu: PropTypes.number,
      price: PropTypes.number,
      strings: PropTypes.number,
      type: PropTypes.string
    }),
    pageNumber: PropTypes.number,
    price: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number
    }),
    sortActive: PropTypes.string,
    sortState: PropTypes.bool,
    strings: PropTypes.objectOf(PropTypes.number),
    type: PropTypes.objectOf(PropTypes.string)
  }),
  cards: PropTypes.objectOf(PropTypes.shape({
    article: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    popularitu: PropTypes.number,
    price: PropTypes.number,
    strings: PropTypes.number,
    type: PropTypes.string
  }))
};

export default Filters;
