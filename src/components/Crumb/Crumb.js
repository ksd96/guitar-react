import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Crumb = ({name, link}) => {
  return (
    <li className="main__links-item">
      <Link to={link} className="main__link">{name}</Link>
    </li>
  );
};

Crumb.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string
};

export default Crumb;
