import CatalogPage from '../../container/CatalogPage.js';
import './App.scss';
import './fonts/fonts.scss';

function App(props) {
  return (
    <div className="App">
      <CatalogPage store={props.store} />
    </div>
  );
}

export default App;
