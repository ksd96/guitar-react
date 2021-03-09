const FilterTypeItem = (props) => {
  return (
    <li className="filter__item">
      <label className="filter__label">
        <input onClick={props.onClick} type="checkbox" className="filter__input visually-hidden" name={props.name} value={props.typeName} />
        <span className="filter__name">{props.typeName}</span>
      </label>
    </li>
  )
}

export default FilterTypeItem;
