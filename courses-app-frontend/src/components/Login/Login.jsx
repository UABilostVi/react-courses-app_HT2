import React from 'react';
import { Link } from 'react-router-dom';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

import './login.css';

const Login = () => {
	return (
		<div className='auth-wrapper'>
			<form>
				<fieldset>
					<legend className='text-center'>Login</legend>
					<Input type='email' labelText='Email' />
					<Input type='password' labelText='Password' />
					<Button type='submit' buttonText='Login' centered={true} />
				</fieldset>
			</form>
			<p>
				If you have an account you can{' '}
				<Link to='/registration'>Registration</Link>
			</p>
		</div>
	);
};

export default Login;
