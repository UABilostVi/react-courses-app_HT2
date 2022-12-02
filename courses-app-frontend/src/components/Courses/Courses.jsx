import React, { useState } from 'react';

import { CoursesList } from './components/CoursesList';
import { SearchBar } from './components/SearchBar';
import { Button } from '../../common/Button';
import {
	mockedCoursesList as coursesList,
	mockedAuthorsList as authorsList,
	BUTTON_ADD_COURSE_TEXT,
} from '../../constants';

import './courses.css';

const Courses = (props) => {
	let [searchText, setSearchText] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		setSearchText(e.target.elements.search.value.toLowerCase());
	}

	function handleChange(e) {
		if (e.target.value === '') {
			setSearchText(e.target.value);
		}
	}

	let filteredList = coursesList.filter((course) => {
		return (
			course.title.toLocaleLowerCase().includes(searchText) ||
			course.id.toLocaleLowerCase().includes(searchText)
		);
	});

	return (
		<div className='container'>
			<div className='courses-nav'>
				<SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
				<Button
					buttonText={BUTTON_ADD_COURSE_TEXT}
					onClick={props.handleAddCourse}
				/>
			</div>
			<CoursesList coursesList={filteredList} authorsList={authorsList} />
		</div>
	);
};

export default Courses;
