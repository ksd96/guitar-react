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

  const getFilteredGuitars = () => {
    let filteredCards = state;
    filteredCards = filteringByType(filteredCards, filters.type);
    filteredCards = filteringByStrings(filteredCards, filters.strings);
    filteredCards = filteringByPrice(filteredCards, filters.price.min, filters.price.max);
    if(filters.sortActive === `price`) {
      filteredCards = getSortPrice(filteredCards);
    } else if(filters.sortActive === `popularity`) {
      filteredCards =  getSortPopularity(filteredCards);
    }
    return filteredCards;
  }

  return getFilteredGuitars();
}

export default getFilteredCards;
