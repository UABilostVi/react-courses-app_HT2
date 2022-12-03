import React from 'react';

import { Button } from '../../common/Button';
import { Logo } from './components/Logo';
import { BUTTON_LOGOUT_TEXT } from '../../constants';

import './header.css';

const Header = (props) => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header-warpper'>
					<Logo className='logo' />
					<div>
						{props.isLogedIn && (
							<>
								<div className='user-name'>Vit</div>
								<Button buttonText={BUTTON_LOGOUT_TEXT} />
							</>
						)}
						{!props.isLogedIn && (
							<>
								<Button buttonText='LogIn' />
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
