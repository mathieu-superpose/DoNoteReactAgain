import React, { useState, useEffect } from 'react';
import showdown from 'showdown';

const Display = ( {title, note} ) => {

	const converter = new showdown.Converter();

	return (
	<div className='display'>
		<h2 className='displayTitle'>{title}</h2>
		<div className='displayNote' dangerouslySetInnerHTML={{ __html: converter.makeHtml(note) }}></div>
	</div>
	);
};

export default Display;
