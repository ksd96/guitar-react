import ButtonPage from '../ButtonPage/ButtonPage.js';
import PropTypes from 'prop-types';

const Pages = ({
  onGetNextPage,
  pages,
  activePage,
  onGetPage
}) => {

  return (
    <section className="pages">
      <ul className="pages__list">
        {
          pages.map((page) => {
            return (<ButtonPage getPage={onGetPage} key={page} page={page} activePage={activePage} />);
          })
        }
      </ul>
      <button onClick={onGetNextPage} className="pages__button-next" type="button">Далее</button>
    </section>
  );
};

Pages.propTypes = {
  onGetNextPage: PropTypes.func,
  pages: PropTypes.arrayOf(PropTypes.number),
  activePage: PropTypes.number,
  onGetPage: PropTypes.func
};

export default Pages;
