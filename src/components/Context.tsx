import * as React from 'react';
import { Items } from './items/Items';

export const Context = React.createContext({
  // isDarkMode: false,
  item: Items,
  menuItems: [],
  filterItem: (currentType: string) => {},
  setItem: (newItem: any) => {},
});

// @ts-expect-error
export function ContextProvider({ children }) {
  // example of a state that can be shared across the app
  // const [isDarkMode, setIsDarkMode] = React.useState(false);

  // add items here that you want to share across the app
  // const [cart, setCart] = React.useState([]);

  const [item, setItem] = React.useState(Items);
  const menuItems = [...new Set(Items.map((Val) => Val.type))];

  const filterItem = (currentType: string) => {
    const newItem = Items.filter((newVal) => {
      return newVal.type === currentType;
    });
    setItem(newItem);
  };

  return (
    <Context.Provider
      // @ts-expect-error
      // add below: isDarkMode,
      value={{ item, menuItems, filterItem, setItem }}
    >
      {children}
    </Context.Provider>
  );
}
