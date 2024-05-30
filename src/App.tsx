import * as React from 'react';
// import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';

// import './App.css';
import { Container } from './Container'; // Becomes the home page

import { LoginForm } from './components/LoginForm';
import { RegistrationForm } from './components/RegistrationForm';
import { Logout } from './components/Logout';

// addcontext here if you need to have it also for login and registration form

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign-up" element={<RegistrationForm />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/about" element={<About />} /> Add About component */}
        </Routes>
      </Router>
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
