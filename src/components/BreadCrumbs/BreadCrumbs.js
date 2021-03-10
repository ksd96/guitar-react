import PropTypes from 'prop-types';

const BreadCrumbs = ({
  title
}) => {
  return (
    <div className="main__title-wrapper">
      <h1 className="main__title">{title}</h1>
      <ul className="main__links-list">
        <li className="main__links-item">
          <a href="#" className="main__link">Главная</a>
        </li>
        <li className="main__links-item">
          <a className="main__link">Каталог</a>
        </li>
      </ul>
    </div>
  )
};

BreadCrumbs.propTypes = {
  title: PropTypes.string
}

export default BreadCrumbs;
