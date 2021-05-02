import React from 'react';

// TODO: put bootstrap to make a better header
const Header = (props) => {
	return (
		<div className='col'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default Header;