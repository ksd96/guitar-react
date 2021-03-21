import { api } from './api.js';
import {actionsCatalog} from '../actions/actionsCatalog.js';

import { getInitialFilters } from '../dataUtils/utilsCatalog.js';

const getGuitars = () => {
  return dispatch => {
    api.getCards().then((cards) => {
      const initialFilters = getInitialFilters(cards);
      dispatch(actionsCatalog.changeCards(cards));
      dispatch(actionsCatalog.getInitialFilters(initialFilters));
    });
  };
};

export default getGuitars;
