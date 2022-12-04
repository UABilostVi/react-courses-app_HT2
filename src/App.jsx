import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import { Courses } from './components/Courses';
import { CreateCourse } from './components/CreateCourse';
import { Header } from './components/Header';
import { Registration } from './components/Registration';
import { Login } from './components/Login';
import { CourseInfo } from './components/CourseInfo';

import './App.css';

function App() {
	let [isLogedIn, setIsLogedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		let token = localStorage.getItem('userToken');
		if (!!token) {
			setIsLogedIn(true);
		}
	}, []);

	function logInHandler(res) {
		localStorage.setItem('userToken', res.data.result);
		setIsLogedIn(true);
		navigate('/courses');
	}

	function logOutHandler() {
		localStorage.removeItem('userToken');
		setIsLogedIn(false);
		navigate('/login');
	}

	return (
		<>
			<Header isLogedIn={isLogedIn} logOut={logOutHandler} />
			<main className='main'>
				<Routes>
					<Route path='*' element={<h1>Page not found</h1>} />
					<Route path='/' element={<Navigate to='/login' />} />
					<Route path='login' element={<Login login={logInHandler} />} />
					<Route path='registration' element={<Registration />} />
					<Route path='courses'>
						<Route index element={<Courses />} />
						<Route path='add' element={<CreateCourse />} />
						<Route path=':courseId' element={<CourseInfo />} />
					</Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
