import PropTypes from 'prop-types';

const FilterTypeItem = ({
  onClick,
  name,
  typeName
}) => {

  return (
    <li className="filter__item">
      <label className="filter__label">
        <input onClick={onClick} type="checkbox" className="filter__input visually-hidden" name={name} value={typeName} />
        <span className="filter__name">{typeName}</span>
      </label>
    </li>
  );
};

FilterTypeItem.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  typeName: PropTypes.string
};

export default FilterTypeItem;
