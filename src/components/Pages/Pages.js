import ButtonPage from '../ButtonPage/ButtonPage.js';

const Pages = (props) => {
  const nextPage = () => {
    if(props.filters.pageNumber < (props.getCardsToRender.length / 9)) {
      props.dispatch({type: `CHANGE_PAGE`, payload: props.filters.pageNumber + 1});
    };
  };

  return (
    <section className="pages">
      <ul className="pages__list">
        {
          props.pages.map((page) => {
            return (<ButtonPage dispatch={props.dispatch} key={page} page={page} activePage={props.filters.pageNumber} />)
          })
        }
      </ul>
      <button onClick={nextPage} className="pages__button-next" type="button">Далее</button>
    </section>
  )
}

export default Pages;
