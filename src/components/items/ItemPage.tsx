import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ItemCard } from './ItemCard';
import { Context } from '../Context';
import { Menubar } from '../Menubar';

// In the items ItemsGrid, when you click on one card (which will be a link to the actual item)
// You will get sent to the individual page of this ItemCard.
// There will be the functionality to add it to the cart.

export const ItemPage = () => {
  const { item } = React.useContext(Context);
  const location = useLocation();
  const urlItemId = location.pathname.split('/')[1]; // returns the id of the item
  // @ts-expect-error
  const itemId = urlItemId - 1;

  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  let cart;
  if (count === 0) {
    cart = 'add items';
  } else {
    cart = `you have ${count} items in your cart`;
  }

  console.log(
    '0',
    itemId,
    '1',
    item[itemId].type
    // '2',
    // Object.keys(item)
    // '3',
    // item[0]['id'],
    // '4',
    // itemId
  );

  return (
    <div>
      <Menubar

      // filterItem={filterItem}
      // menuItems={menuItems}
      // setItem={setItem}
      />
      <h1>Individual Item Page</h1>
      <p>test</p>
      <div
        style={{
          border: '1px solid black',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <img
          className="items-image"
          src={item[itemId].url}
          alt="placeholder"
          style={{
            borderRadius: '5%',
            height: '300px',
            width: '300px',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <p key={item[itemId].id}> Item number {item[itemId].id} </p>
          <p key={item[itemId].id}> {item[itemId].type} </p>
          <p key={item[itemId].id}> {item[itemId].title} </p>
          <button
            className="btn-card"
            key={item[itemId].id}
            onClick={decrementCount}
          >
            Remove
          </button>
          <button
            className="btn-card"
            key={item[itemId].id}
            onClick={incrementCount}
          >
            Add
          </button>
          <p>{count}</p>
        </div>
      </div>
      <Link to="/">home</Link>
      {/* create a card
      picture to the left
      title on the right
      price below
      description
      count and add to cart
      payment option */}
      {/* below that, more detailed description
      below that, a list of similar items
      below that, reviews */}
    </div>
  );
};
