import PropTypes from 'prop-types';
import Crumb from '../Crumb/Crumb.js';

const BreadCrumbs = ({
  title,
  items,
  active
}) => {
  return (
    <div className="main__title-wrapper">
      <h1 className="main__title">{title}</h1>
      <ul className="main__links-list">
        {
          items.map((item) => {
            return (
              <Crumb key={item.name} name={item.name} link={item.link} />
            )
          })
        }
        <li className="main__links-item">
          <a className="main__link">{active}</a>
        </li>
      </ul>
    </div>
  )
};

BreadCrumbs.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  activer: PropTypes.string
}

export default BreadCrumbs;
