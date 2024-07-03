import React, { useState } from 'react';
import './ItemsGrid.css';
import { ItemCard } from './ItemCard';
import { ItemPage } from './ItemPage';
import { Link } from 'react-router-dom';

// @ts-expect-error
export const ItemsGrid = ({ item }) => {
  return (
    <>
      {/* <div>{cart}</div> */}
      <div className="card-grid">
        {/* @ts-expect-error */}
        {item.map((Val) => (
          <Link to={`/${Val.id}`}>
            <ItemCard key={Val.id} item={Val} />
          </Link>
        ))}
      </div>
    </>
  );
};
