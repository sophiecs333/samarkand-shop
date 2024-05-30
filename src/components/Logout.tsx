import { Link } from 'react-router-dom';

export const Logout = () => {
  return (
    <>
      <p>You are logged out</p>
      <Link to="/">home</Link>
    </>
  );
};
