import './styles/filter.scss';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import FilterTypeItem from '../FilterTypeItem/FilterTypeItem.js';
import {getStringsGuitarArray, getFilteredGuitarsStrings, getFilteredGuitarsTypes, getTypesGuitarArray} from '../../store/selectors/selectorsCatalog.js';

const Filters = ({
  setTypesGuitars,
  setStringsGuitars,
  setPriceGuitars,
  allFilters,
  cards
}) => {
  // получение активных фильтров
  const getFilteredGuitars = useCallback(() => {
    const priceMin = document.querySelector(`.filter__price-input_type_min`);
    const priceMax = document.querySelector(`.filter__price-input_type_max`);
    const filtersTypes = document.querySelectorAll(`[name="types"]`);
    const filtersStrings = document.querySelectorAll(`[name="strings"]`);
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
  }, []);

  // смена минимальной цены
  const onChangePriceMin = useCallback(() => {
    const priceMin = document.querySelector(`.filter__price-input_type_min`);
    const priceMax = document.querySelector(`.filter__price-input_type_max`);
    if (+priceMin.value < +allFilters.price.min) {
      priceMin.value = allFilters.price.min;
    } else if (+priceMin.value >= +priceMax.value) {
      priceMin.value = priceMax.value;
    }
    setPriceGuitars(getFilteredGuitars().price);
    clickFilterItemTypes(getFilteredGuitars());
    clickFilterItemStrings(getFilteredGuitars());
  }, []);

  // смена максимальной цены
  const onChangePriceMax = useCallback(() => {
    const priceMin = document.querySelector(`.filter__price-input_type_min`);
    const priceMax = document.querySelector(`.filter__price-input_type_max`);
    if (+priceMax.value <= +priceMin.value) {
      priceMax.value = priceMin.value;
    }
    setPriceGuitars(getFilteredGuitars().price);
    clickFilterItemTypes(getFilteredGuitars());
    clickFilterItemStrings(getFilteredGuitars());
  }, []);

  // валидация фильтра по типу гитар
  const clickFilterItemTypes = useCallback((filters) => {
    const typeGuitars = getTypesGuitarArray(getFilteredGuitarsStrings(cards, filters));
    const typeGuitarsAll = document.querySelectorAll(`[name="types"]`);

    typeGuitarsAll.forEach((item) => {
      item.disabled = true;
    });
    typeGuitars.forEach((item) => {
      typeGuitarsAll.forEach((item2) => {
        if (item === item2.value) {
          item2.disabled = false;
        }
      });
    });
  }, []);

      // валидация фильтра по количеству струн
  const clickFilterItemStrings = useCallback((filters) => {
    const typeGuitars = getStringsGuitarArray(getFilteredGuitarsTypes(cards, filters));
    const typeGuitarsAll = document.querySelectorAll(`[name="strings"]`);
    typeGuitarsAll.forEach((item) => {
      item.disabled = true;
    });
    typeGuitars.forEach((item) => {
      typeGuitarsAll.forEach((item2) => {
        if (item === +item2.value) {
          item2.disabled = false;
        }
      });
    });
  }, []);

  return (
    <section className="filters">
      <form className="main__wrapper-filter filter">
        <h2 className="filter__title">Фильтр</h2>
        <div className="filter__price">
          <h3 className="filter__title-item">Цена, ₽</h3>
          <div className="filter__price-wrapper">
            <label className="visually-hidden" htmlFor="price-min">Минимальная цена</label>
            <input onBlur={onChangePriceMin} id="price-min" type="text" defaultValue={allFilters.price.min} className="filter__price-input filter__price-input_type_min" />
            <span className="filter__price-span"></span>
            <label className="visually-hidden" htmlFor="price-max">Максимальная цена</label>
            <input onBlur={onChangePriceMax} id="price-max" type="text" defaultValue={allFilters.price.max} className="filter__price-input filter__price-input_type_max" />
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
                      setTypesGuitars(getFilteredGuitars().type);
                      clickFilterItemStrings(getFilteredGuitars());
                    }}
                    name={`types`}
                    key={type}
                    typeName={type}

                  />
                )
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
                      setStringsGuitars(getFilteredGuitars().strings);
                      clickFilterItemTypes(getFilteredGuitars());
                    }}
                    name={`strings`}
                    key={type}
                    typeName={`${type}`}
                  />
                )
              })
            }
          </ul>
        </div>
      </form>
    </section>
  )
};

Filters.propTypes = {
  setTypesGuitars: PropTypes.func,
  setStringsGuitars: PropTypes.func,
  setPriceGuitars: PropTypes.func,
  allFilters: PropTypes.object,
  cards: PropTypes.object
};

export default Filters;
