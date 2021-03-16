import { getInitialFilters } from '../selectors/selectorsCatalog.js';

const data = require('../../data/data.json');

const initialStateCatalog = getInitialFilters(data.guitars);

export default initialStateCatalog;
