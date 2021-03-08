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
    console.log(pages)
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
      sortActive: false,
      sortType: `min`,
      pageNumber: 1,
      allPages: getAllPages()
    };

    return filters;
  }

  return getFiltersValue();
}

export default getInitialFilters;
