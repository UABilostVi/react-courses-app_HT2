import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

import './login.css';

const Login = () => {
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');
	const navigate = useNavigate();
	const submitHandler = async (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:4000/login', {
				email: email,
				password: password,
			})
			.then((res) => {
				localStorage.setItem('userToken', res.data.result);
			})
			.catch((error) => {
				alert(error);
			});
		navigate('/courses');
	};
	function onChangeEmail(e) {
		setEmail(e.target.value);
	}
	function onChangePassword(e) {
		setPassword(e.target.value);
	}
	return (
		<div className='auth-wrapper'>
			<form onSubmit={submitHandler}>
				<fieldset>
					<legend className='text-center'>Login</legend>
					<Input type='email' labelText='Email' onChange={onChangeEmail} />
					<Input
						type='password'
						labelText='Password'
						onChange={onChangePassword}
					/>
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
