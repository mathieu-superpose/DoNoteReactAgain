import './App.scss';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Column from 'components/Column';
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
			<div className='components'>
				<Column />
				<div className='bigdisplay'>
					<Display title={title} note={note} />
					<MarkdownInput setTitle={setTitle} setNote={setNote} />
				</div>
			</div>
	    </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));