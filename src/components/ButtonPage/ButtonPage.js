const ButtonPage = (props) => {
  const getPage = () => {
    props.dispatch({type: `CHANGE_PAGE`, payload: props.page})
  }

  const getClass = () => {
    if (props.activePage === props.page) {
      return `pages__button pages__button_active`
    } else {
      return `pages__button`
    }
  }

  return (
    <li className="pages__item">
      <button onClick={getPage} className={getClass()} type="button">{props.page}</button>
     </li>
  )
}

export default ButtonPage;
