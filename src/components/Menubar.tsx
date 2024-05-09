import './Menubar.css';
import { Items } from './items/Items';

// @ts-expect-error
export const Menubar = ({ filterItem, menuItems, setItem }) => {
  return (
    <div className="Menubar">
      {menuItems.map((Val: any, id: number) => {
        return (
          <button key={id} onClick={() => filterItem(Val)}>
            {Val.toUpperCase()}
          </button>
        );
      })}
      <button onClick={() => setItem(Items)}>ALL</button>
    </div>
  );
};
