// получить отфильтрованные карточки
const getFilteredCards = (filters, state) => {
  // фильтрует по типу
  const filteringByType = (cards, types) => {
    if (types.length === 0) {
      return Object.values(cards);
    } else {
      const guitars = [];
      types.forEach((type) => {
        Object.values(cards).forEach((guitar) => {
          if (guitar.type === type) {
            guitars.push(guitar);
          }
        });
      });
      return guitars;
    }
  }

  // фильтрует по колличеству струн
  const filteringByStrings = (cards, strings) => {
    if (strings.length === 0) {
      return Object.values(cards);
    } else {
      const guitars = [];
      strings.forEach((item) => {
        Object.values(cards).forEach((guitar) => {
          if (guitar.strings === item) {
            guitars.push(guitar);
          }
        });
      });
      return guitars;
    }
  }

  // фильтрует по цене
  const filteringByPrice = (cards, minPrice, maxPrice) => {
    const guitars = Object.values(cards).filter((guitar) => guitar.price >= minPrice && guitar.price <= maxPrice);
    return guitars;
  }

  // сортирует по цене
  const getSortPrice = (cards) => {
    const guitars = cards;
    if (filters.sortType === `min`) {
      guitars.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (filters.sortType === `max`) {
      guitars.sort((a, b) => {
        return b.price - a.price;
      });
    }
    return guitars;
  }

  // сортирует по популярности
  const getSortPopularity = (cards) => {
    const guitars = cards;
    if (filters.sortType === `min`) {
      guitars.sort((a, b) => {
        return a.popularity - b.popularity;
      });
    } else if (filters.sortType === `max`) {
      guitars.sort((a, b) => {
        return b.popularity - a.popularity;
      });
    }
    return guitars;
  }

  // возвращает отфильтрованные карточки
  const getFilteredGuitars = () => {
    let filteredCards = state;
    filteredCards = filteringByType(filteredCards, filters.type);
    filteredCards = filteringByStrings(filteredCards, filters.strings);
    filteredCards = filteringByPrice(filteredCards, filters.price.min, filters.price.max);
    if(filters.sortState === true && filters.sortActive === `price`) {
      filteredCards = getSortPrice(filteredCards);
    } else if(filters.sortState === true && filters.sortActive === `popularity`) {
      filteredCards =  getSortPopularity(filteredCards);
    }
    return filteredCards;
  }

  return getFilteredGuitars();
};

// получить типы карточек из определенного массива
const getTypesGuitarArray = (array) => {
  const types = array.map((guitar) => guitar.type);
  return new Set(types);
};

// получить типы карточек по колличеству струн из определенного массива
const getStringsGuitarArray = (array) => {
  const strings = array.map((guitar) => guitar.strings);
  return new Set(strings);
};

// фильтрует по типу
const filteringByType = (cards, types) => {
  if (types.length === 0) {
    return Object.values(cards);
  } else {
    const guitars = [];
    types.forEach((type) => {
      Object.values(cards).forEach((guitar) => {
        if (guitar.type === type) {
          guitars.push(guitar);
        }
      });
    });
    return guitars;
  }
};

// фильтрует по количеству струн
const filteringByStrings = (cards, strings) => {
  if (strings.length === 0) {
    return Object.values(cards);
  } else {
    const guitars = [];
    strings.forEach((item) => {
      Object.values(cards).forEach((guitar) => {
        if (guitar.strings === item) {
          guitars.push(guitar);
        }
      });
    });
    return guitars;
  }
};

// фильтрует по цене
const filteringByPrice = (cards, minPrice, maxPrice) => {
  const guitars = Object.values(cards).filter((guitar) => guitar.price >= minPrice && guitar.price <= maxPrice);
  return guitars;
};

// получить отфильтрованные карточки по типу
const getFilteredGuitarsTypes = (cards, filters) => {
  let filteredCards = cards;
  filteredCards = filteringByType(filteredCards, filters.type);
  filteredCards = filteringByPrice(filteredCards, filters.price.min, filters.price.max);
  return filteredCards;
};

// получить отфильтрованные карточки по количеству струн
const getFilteredGuitarsStrings = (cards, filters) => {
  let filteredCards = cards;
  filteredCards = filteringByStrings(filteredCards, filters.strings);
  filteredCards = filteringByPrice(filteredCards, filters.price.min, filters.price.max);
  return filteredCards;
};

// получение количетва страниц
const getAllPages = (cards) => {
  const pages = [];
  for (let i = 1; i <= (Math.ceil(Object.values(cards).length / 9)); i++) {
    pages.push(i);
  }
  return pages;
};

// получить начальное состояние стора
const getInitialFilters = (guitars) => {
  // отдает существующие типы гитар
  const getTypesGuitar = () => {
    const types = Object.values(guitars).map((guitar) => guitar.type);
    return new Set(types);
  }

  // отдает существующие типы гитар по количеству струн
  const getStringsGuitar = () => {
    const strings = Object.values(guitars).map((guitar) => guitar.strings);
    return new Set(strings);
  }

    // отдает максимальную стоимость гитар
  const getMaxGuitarsPrice = () => {
    const prices = Object.values(guitars).map((guitar) => guitar.price);
    return Math.max.apply(null, prices);
  }

  // отдает минимальную стоимость гитар
  const getMinGuitarsPrice = () => {
    const prices = Object.values(guitars).map((guitar) => guitar.price);
    return Math.min.apply(null, prices);
  }

  const getAllPages = () => {
    const pages = [];
    for (let i = 1; i <= (Object.values(guitars).length / 9); i++) {
      pages.push(i);
    }
    return pages;
  }

  const getFiltersValue = () => {
    const filters = {
      type: getTypesGuitar(),
      strings: getStringsGuitar(),
      price: {
        min: getMinGuitarsPrice(),
        max: getMaxGuitarsPrice()
      },
      sortActive: `price`,
      sortType: `min`,
      sortState: false,
      pageNumber: 1,
      allPages: getAllPages(),
      cards: {},
      status: false
    };

    return filters;
  }

  return getFiltersValue();
};

export {getInitialFilters, getFilteredCards, getStringsGuitarArray, getTypesGuitarArray, getFilteredGuitarsStrings, getFilteredGuitarsTypes, getAllPages};
