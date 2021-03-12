import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';

import './styles/App.scss';

import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import BasketPage from '../BasketPage/BasketPage.js';
import CatalogPage from '../CatalogPage/CatalogPage.js';
import { getCardsBasket, getNumberGuitars } from '../../data/utils/utils-basket.js';

const App = () => {
  const [count, setCount] = useState(getNumberGuitars(getCardsBasket()));

  const setCountGuitars = (guitars) => {
    setCount(getNumberGuitars(guitars));
  };

  return (
    <div className="App">
      <Header count={count} />
      <Switch>
        <Route exact path="/">
          <CatalogPage setCountGuitars={setCountGuitars} />
        </Route>
        <Route  path="/basket">
          <BasketPage setCountGuitars={setCountGuitars} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
