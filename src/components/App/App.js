import CatalogPage from '../../container/CatalogPage.js';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import './fonts/fonts.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CatalogPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
