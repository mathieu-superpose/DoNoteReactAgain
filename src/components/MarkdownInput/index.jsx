import React, { useState, useEffect } from 'react';

const MarkdownInput = ( {setTitle, setNote} ) => {

	const getTitle = (e) => {
		setTitle(e.target.value);
	};

	const getNote = (e) => {
		setNote(e.target.value);
	};

	return (
	<div>
		<input onChange={getTitle} type="text" />
		<textarea onChange={getNote} id="w3review" name="w3review" rows="4" cols="50" />
	</div>
	);
};

export default MarkdownInput;