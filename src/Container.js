import './Container.css';
import logo from './logo.svg';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ItemsCard } from './components/items/ItemsCard';

export const Container = () => {
  return (
    <div className="Container">
      <Navbar />
      <h2>Samarkand Shop</h2>
      <p>commit test</p>
      <ItemsCard />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Footer />
    </div>
  );
};
