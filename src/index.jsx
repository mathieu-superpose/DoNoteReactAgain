import './App.scss';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Display from 'components/Display';
import MarkdownInput from 'components/MarkdownInput';

const App = () => {
	const [title, setTitle] = useState('');
	const [note, setNote] = useState('');

	return (
	    <div className='app'>
			<header className='header'>
				<h1>Do Note React Again</h1>
			</header>
			<Display title={title} note={note} />
			<MarkdownInput setTitle={setTitle} setNote={setNote} />
	    </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));