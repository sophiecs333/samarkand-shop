import React from 'react';
import './ItemsCard.css';
import { Items } from './Items';

export const ItemsCard = () => {
  return (
    <div className={'card-grid'}>
      {Items.map((item) => (
        <div className="items-card" key={item.id}>
          <img src={item.url} alt="placeholder" />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
