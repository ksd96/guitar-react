import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const ButtonPage = ({
  getPage,
  page,
  activePage
}) => {

  const classButton = classNames({
    "pages__button": true,
    "pages__button_active": activePage === page
  });

  return (
    <li className="pages__item">
      <button onClick={ () => { getPage(page); } } className={classButton} type="button">{page}</button>
     </li>
  );
};

ButtonPage.propTypes = {
  getPage: PropTypes.func,
  page: PropTypes.number,
  activePage: PropTypes.number
};

export default ButtonPage;
