import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './RegistrationForm.css';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      })
    );
    // @ts-expect-error
    console.log(JSON.parse(localStorage.getItem(data.email)));
  };

  return (
    <>
      <p className="title">Registration Form</p>

      <form className="RegistrationForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">first name</label>
          <input type="text" {...register('firstName')} />
        </div>
        <div>
          <label htmlFor="lastName">last name</label>
          <input type="text" {...register('lastName')} />
        </div>
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
