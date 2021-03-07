import Card from '../Card/Card.js';

const CardsList = (props) => {
  return (
    <section className="cards">
    <ul className="cards__list">
      {
        props.guitars.map((guitar) => {
          return (
            <Card
              img={guitar.img}
              popularity={guitar.popularity}
              name={guitar.name}
              price={guitar.price}
              key={guitar.article}
            />
          )
        })
      }
    </ul>
  </section>
  )
}

export default CardsList;
