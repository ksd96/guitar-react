import ButtonPage from '../ButtonPage/ButtonPage.js';
import PropTypes from 'prop-types';

const Pages = ({
  getNextPage,
  pages,
  activePage,
  getPage
}) => {

  return (
    <section className="pages">
      <ul className="pages__list">
        {
          pages.map((page) => {
            return (<ButtonPage getPage={getPage} key={page} page={page} activePage={activePage} />)
          })
        }
      </ul>
      <button onClick={getNextPage} className="pages__button-next" type="button">Далее</button>
    </section>
  )
}

Pages.propTypes = {
  getNextPage: PropTypes.func,
  pages: PropTypes.array,
  activePage: PropTypes.number,
  getPage: PropTypes.func
}

export default Pages;
