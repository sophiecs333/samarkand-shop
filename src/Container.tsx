import * as React from 'react';
import createBrowserRouter from 'react-router-dom';

import './Container.css';
import logo from './logo.svg';

import { Navbar } from './components/Navbar';
import { Menubar } from './components/Menubar';
import { Footer } from './components/Footer';
import { ItemsCard } from './components/items/ItemsCard';
import { Items } from './components/items/Items';

export const Container = () => {
  // not sure if this should be here
  const [item, setItem] = React.useState(Items);
  const menuItems = [...new Set(Items.map((Val) => Val.type))];

  const filterItem = (currentType: string) => {
    const newItem = Items.filter((newVal) => {
      return newVal.type === currentType;
    });
    setItem(newItem);
  };

  return (
    <div className="Container">
      <Navbar />
      <Menubar
        filterItem={filterItem}
        menuItems={menuItems}
        setItem={setItem}
      />
      <h2>Samarkand Shop</h2>
      <p>To do:</p>
      <ul>
        <li>add login</li>
        <li>add to cart function</li>
        <li>add individual page for each item</li>
        <li>figure out styling</li>
      </ul>
      <ItemsCard item={item} />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Footer />
    </div>
  );
};
