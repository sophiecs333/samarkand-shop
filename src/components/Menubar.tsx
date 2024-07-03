import * as React from 'react';

import './Menubar.css';
import { StyledButton } from './styled-components/Button';
import { Items } from './items/Items';
import { Context } from './Context';

export const Menubar = () => {
  // use React Context here
  const { menuItems, filterItem, setItem } = React.useContext(Context);

  return (
    <div className="Menubar">
      {menuItems.map((Val: any, id: number) => {
        return (
          <StyledButton key={id} onClick={() => filterItem(Val)}>
            {Val.toUpperCase()}
          </StyledButton>
        );
      })}
      <StyledButton onClick={() => setItem(Items)}>ALL</StyledButton>
    </div>
  );
};

{
  /* <button key={id} onClick={() => filterItem(Val)}>
{Val.toUpperCase()}
</button> */
}
