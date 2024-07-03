import * as React from 'react';
// import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  BrowserRouter,
} from 'react-router-dom';
import { ContextProvider } from './components/Context';

// import './App.css';
import { Container } from './Container'; // Becomes the home page
import { Navbar } from './components/Navbar';
import { LoginForm } from './components/LoginForm';
import { RegistrationForm } from './components/RegistrationForm';
import { Logout } from './components/Logout';
import { ItemsGrid } from './components/items/ItemsGrid';
import { ItemPage } from './components/items/ItemPage';

// add context here if you need to have it also for login and registration form

// @ts-expect-error
const App: React.FC = ({ props }) => {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {' '}
                  <Navbar />
                  <Container />{' '}
                </>
              }
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/sign-up" element={<RegistrationForm />} />
            <Route path="/logout" element={<Logout />} />

            <Route
              path="/:id"
              element={
                <>
                  <Navbar />
                  <ItemPage />{' '}
                </>
              }
            />
            {/* <Route path="/about" element={<About />} /> Add About component */}
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
};

export default App;

// content test file which has been deleted
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
