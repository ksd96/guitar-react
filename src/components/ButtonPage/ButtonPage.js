const ButtonPage = (props) => {
  return (
    <li className="pages__item">
      <button onClick={props.onClick} className="pages__button" type="button">{props.page}</button>
     </li>
  )
}

export default ButtonPage;
