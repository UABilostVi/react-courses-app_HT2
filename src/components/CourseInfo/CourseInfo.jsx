import React from 'react';

import { pipeDuration } from '../../helpers/pipeDuration';
import { transformDate } from '../../helpers/dateGenerator';

import './courseInfo.css';

const CourseInfo = () => {
	return (
		<div className='course-card'>
			<h2 className='course-card__title'></h2>
			<div className='course-card__info'>
				<p className='course-card__desc'></p>
			</div>
			<div className='course-card__details'>
				<div>
					<strong>ID: </strong>
				</div>
				<div>
					<strong>Duration: </strong>
					{} hours
				</div>
				<div>
					<strong>Created: </strong>
					{}
				</div>
				<div className='course-card__authors'>
					<strong>Authors: </strong>
					<div className='course-card__authors-wrapper'>{}</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
