import { combineReducers } from 'redux';
import reducerCatalog from './reducerCatalog.js';
import reducerBasket from './reducerBasket.js';

const reducers = combineReducers({
  catalog: reducerCatalog,
  basket: reducerBasket
});

export default reducers;
