import React, { useState, useEffect } from 'react';

const MarkdownInput = ( {setTitle, setNote} ) => {

	const getTitle = (e) => {
		setTitle(e.target.value);
	};

	const getNote = (e) => {
		setNote(e.target.value);
	};

	return (
	<div className='markdownInput'>
		<input onChange={getTitle} className='title' type="text" placeholder="Title" />
		<textarea onChange={getNote} className='note' rows="4" cols="50" placeholder="Note"/>
	</div>
	);
};

export default MarkdownInput;