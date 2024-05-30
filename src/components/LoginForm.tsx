import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    // @ts-expect-error
    const userData = JSON.parse(localStorage.getItem('userInformation'));
    if (userData) {
      // getItem can return actual value or null
      if (userData.password === data.password) {
        setIsAuthenticated(true);
        // @ts-expect-error
        localStorage.setItem('userLogged', true);
        console.log(
          userData.name + ' You Are Successfully Logged In',
          isAuthenticated
        );
        alert(userData.name + ' You Are Successfully Logged In');
      } else {
        console.log('Email or Password is not matching with our record');
      }
    } else {
      console.log('Email or Password is not matching with our record');
    }
  };
  return (
    <>
      <p className="title">Login</p>

      <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.email && (
            <span style={{ color: 'red' }}>*Email* is mandatory </span>
          )}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" {...register('password')} />
        </div>
        <div>
          <label htmlFor="email">submit</label>
          <input type={'submit'} style={{ backgroundColor: '#a1eafb' }} />
        </div>
      </form>
      <Link to="/">home</Link>
    </>
  );
};
