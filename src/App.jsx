import React, { useState } from 'react';
import { Routes, Route, Router } from 'react-router-dom';

import { Courses } from './components/Courses';
import { CreateCourse } from './components/CreateCourse';
import { Header } from './components/Header';
import { Registration } from './components/Registration';
import { Login } from './components/Login';

import './App.css';

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route path='courses'>
						<Route index element={<Courses />} />
						<Route path='add' element={<CreateCourse />} />
					</Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
