import { Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import './styles/App.scss';

import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import BasketPage from '../BasketPage/BasketPage.js';
import CatalogPage from '../CatalogPage/CatalogPage.js';

import store from '../../store/store.js';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <CatalogPage />
          </Route>
          <Route path="/basket">
            <BasketPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
