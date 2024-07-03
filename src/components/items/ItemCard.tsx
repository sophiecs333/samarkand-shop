import './ItemCard.css';
import { Link } from 'react-router-dom';
import { ItemPage } from './ItemPage';

// @ts-expect-error
export const ItemCard = ({ item }) => {
  return (
    <div>
      <div className="items-card" key={item.id}>
        <img className="items-image" src={item.url} alt="placeholder" />
        {/* <Link to={`/${item.id}`}>
          <ItemPage item={item} />
        </Link> */}
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
