import housings from '../data/logements.json';
import { Link } from 'react-router-dom';

const HousingCard = () => {
  return (
    <section className="housing">
       {housings.map((housing) => (
        <article key={housing.id} className="housing-card" style={{
                backgroundImage:`url(${housing.cover})`,
              }}>
          <Link className="card-link" to={`/housing/${housing.id}`} key={housing.id}> 
            <h2>{housing.title}</h2>
          </Link>
        </article>
      ))}
    </section>
  )
}

export default HousingCard;