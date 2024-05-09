import React from 'react';
import './ItemsCard.css';

// @ts-expect-error
export const ItemsCard = ({ item }) => {
  return (
    <div className={'card-grid'}>
      {/* @ts-expect-error */}
      {item.map((Val) => (
        <div className="items-card" key={Val.id}>
          <img className="items-image" src={Val.url} alt="placeholder" />
          <h3>{Val.name}</h3>
          <p>{Val.description}</p>
        </div>
      ))}
    </div>
  );
};
