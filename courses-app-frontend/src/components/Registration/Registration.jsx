import React from 'react';
import { Link } from 'react-router-dom';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

import './registration.css';

const Registration = () => {
	function submitHandler(e) {
		e.preventDefault();
		console.log(e);
	}
	return (
		<div className='auth-wrapper'>
			<form onSubmit={submitHandler}>
				<fieldset>
					<legend className='text-center'>Registration</legend>
					<Input type='text' labelText='Name' />
					<Input type='email' labelText='Email' />
					<Input type='password' labelText='Password' />
					<Button type='submit' buttonText='Registration' centered={true} />
				</fieldset>
			</form>
			<p>
				If you have an account you can <Link to='/login'>Login</Link>
			</p>
		</div>
	);
};

export default Registration;
