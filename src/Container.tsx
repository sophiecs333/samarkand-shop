import * as React from 'react';

import './Container.css';
import logo from './logo.svg';

import { Context } from './components/Context';
// import { Navbar } from './components/Navbar';
import { Menubar } from './components/Menubar';
import { ItemsGrid } from './components/items/ItemsGrid';
import { Footer } from './components/Footer';

// becomes the home page
export const Container = () => {
  // not sure if this should be here
  // const [item, setItem] = React.useState(Items);
  // const menuItems = [...new Set(Items.map((Val) => Val.type))];

  // const filterItem = (currentType: string) => {
  //   const newItem = Items.filter((newVal) => {
  //     return newVal.type === currentType;
  //   });
  //   setItem(newItem);
  // };

  // use React Context here
  const { item, menuItems, filterItem, setItem } = React.useContext(Context);

  return (
    <div className="Container">
      {/* <Navbar /> */}
      <Menubar
        // @ts-expect-error
        filterItem={filterItem}
        menuItems={menuItems}
        setItem={setItem}
      />
      <h2>Samarkand Shop</h2>
      <p>To do:</p>
      <ul>
        <li>create routes - DONE</li>
        <li>add login / register (save in localStorage) - DONE</li>
        <li>add username in navbar when they are logged in - DONE</li>
        <li>add logout - DONE</li>
        <li>save users somewhere? </li>

        <li>add individual page for each item</li>
        <li>add to cart function</li>
        <li>keep items added to cart from logged out to logged in</li>

        <li>figure out styling</li>
        <li>add payment option</li>
        <li>add context</li>
      </ul>
      <ItemsGrid item={item} />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Footer />
    </div>
  );
};
